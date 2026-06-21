'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const COLORS = ['#38e1d6', '#5b8cff', '#b07cff', '#ffc36b', '#5fe6da', '#8fb4ff', '#c79bff']
const SG = "'Space Grotesk', sans-serif"
const JB = "'JetBrains Mono', monospace"

export default function Home() {
  const rootRef       = useRef<HTMLDivElement>(null)
  const heroCanvasRef = useRef<HTMLCanvasElement>(null)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('nilbeserler@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  /* ---- canvas particle animation ---- */
  useEffect(() => {
    const canvas = heroCanvasRef.current
    if (!canvas) return

    const K = 7, N = 165, ALPHA = 0.42
    let W = 0, H = 0, dpr = 1
    let cen: { x:number; y:number; tx:number; ty:number; phase:number; spd:number }[] = []
    let pts: { x:number; y:number; k:number; jx:number; jy:number; r:number; glow:number }[] = []
    const mouse = { x: -9999, y: -9999, active: false }

    const retarget = (c: typeof cen[0]) => {
      c.tx = W * (0.08 + Math.random() * 0.84)
      c.ty = H * (0.1  + Math.random() * 0.80)
    }
    const resize = () => {
      const r = canvas.getBoundingClientRect()
      dpr = window.devicePixelRatio || 1
      canvas.width  = Math.max(1, r.width  * dpr)
      canvas.height = Math.max(1, r.height * dpr)
      W = r.width || 1; H = r.height || 1
    }
    const init = () => {
      cen = []
      for (let k = 0; k < K; k++) {
        const x = W * (0.1 + Math.random() * 0.85)
        const y = H * (0.1 + Math.random() * 0.82)
        cen.push({ x, y, tx: x, ty: y, phase: Math.random() * 6.28, spd: 0.6 + Math.random() * 0.5 })
      }
      cen.forEach(c => retarget(c))
      pts = []
      for (let i = 0; i < N; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, k: i % K,
          jx: (Math.random() - 0.5) * 130, jy: (Math.random() - 0.5) * 130,
          r: 1.4 + Math.random() * 2.4, glow: 0 })
      }
    }
    const kick = () => {
      cen.forEach(c => retarget(c))
      pts.forEach(p => { p.k = Math.floor(Math.random() * K); p.jx = (Math.random() - 0.5) * 140; p.jy = (Math.random() - 0.5) * 140 })
    }

    resize(); init()

    const host = canvas.parentElement!
    const onMove  = (e: MouseEvent) => { const r = host.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true }
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999 }
    const onResize = () => { resize(); init() }

    host.addEventListener('mousemove', onMove)
    host.addEventListener('mouseleave', onLeave)
    host.addEventListener('click', kick)
    window.addEventListener('resize', onResize)

    let raf: number
    const loop = (ms: number) => {
      const t = ms * 0.001
      const ctx = canvas.getContext('2d')!
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      for (const c of cen) {
        c.x += (c.tx - c.x) * 0.006 * c.spd + Math.sin(t * 0.4 + c.phase) * 0.22
        c.y += (c.ty - c.y) * 0.006 * c.spd + Math.cos(t * 0.34 + c.phase) * 0.2
        if ((c.tx - c.x) ** 2 + (c.ty - c.y) ** 2 < 2500) retarget(c)
      }

      const MR = 150, MR2 = MR * MR
      ctx.lineWidth = 1
      for (const p of pts) {
        const c = cen[p.k]
        p.x += (c.x + p.jx - p.x) * 0.034; p.y += (c.y + p.jy - p.y) * 0.034
        if (mouse.active) {
          const mdx = p.x - mouse.x, mdy = p.y - mouse.y, md2 = mdx * mdx + mdy * mdy
          if (md2 < MR2 && md2 > 0.01) {
            const md = Math.sqrt(md2), force = (MR - md) / MR
            p.x += (mdx / md) * force * 7; p.y += (mdy / md) * force * 7
            p.glow = Math.min(1, p.glow + force * 0.4)
          }
        }
        p.glow *= 0.92
        const dx = c.x - p.x, dy = c.y - p.y
        if (dx * dx + dy * dy < 21000) {
          ctx.strokeStyle = COLORS[p.k] + '14'
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(c.x, c.y); ctx.stroke()
        }
      }

      for (const p of pts) {
        const col = COLORS[p.k]
        const gr = (p.r + p.glow * 2.4) * 5
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gr)
        const a = Math.round((ALPHA + p.glow * 0.55) * 255).toString(16).padStart(2, '0')
        g.addColorStop(0, col + a); g.addColorStop(1, col + '00')
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, gr, 0, 6.28); ctx.fill()
        ctx.fillStyle = col; ctx.globalAlpha = 0.5 + p.glow * 0.5
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + p.glow * 1.2, 0, 6.28); ctx.fill()
        ctx.globalAlpha = 1
      }

      for (let k = 0; k < cen.length; k++) {
        ctx.strokeStyle = COLORS[k] + '55'; ctx.lineWidth = 1.4
        ctx.beginPath(); ctx.arc(cen[k].x, cen[k].y, 8, 0, 6.28); ctx.stroke()
      }

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      host.removeEventListener('mousemove', onMove)
      host.removeEventListener('mouseleave', onLeave)
      host.removeEventListener('click', kick)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  /* ---- scroll reveals ---- */
  useEffect(() => {
    const root = rootRef.current; if (!root) return
    const els = root.querySelectorAll('[data-reveal]')
    els.forEach(el => {
      const e = el as HTMLElement
      e.style.opacity = '0'; e.style.transform = 'translateY(26px)'
      e.style.transition = 'opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)'
      e.style.transitionDelay = (parseInt(e.dataset.reveal || '0')) + 'ms'
    })
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const el = en.target as HTMLElement
          el.style.opacity = '1'; el.style.transform = 'none'
          io.unobserve(el)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* ---- count-up ---- */
  useEffect(() => {
    const root = rootRef.current; if (!root) return
    const run = (el: Element) => {
      const e = el as HTMLElement
      const target = parseFloat(e.dataset.count || '0')
      const suf    = e.dataset.suffix || ''
      const dur = 1500, t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur)
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suf
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = target + suf
      }
      requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target) } })
    }, { threshold: 0.6 })
    root.querySelectorAll('[data-count]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* ---- card spotlight + arrow ---- */
  useEffect(() => {
    const root = rootRef.current; if (!root) return
    root.querySelectorAll('[data-spotlight]').forEach(card => {
      const glow  = card.querySelector('[data-glow]')  as HTMLElement | null
      const arrow = card.querySelector('[data-arrow]') as HTMLElement | null
      card.addEventListener('mousemove', e => {
        if (!glow) return
        const r    = (card as HTMLElement).getBoundingClientRect()
        const half = (glow.offsetWidth || 600) / 2
        glow.style.transform = `translate(${(e as MouseEvent).clientX - r.left - half}px,${(e as MouseEvent).clientY - r.top - half}px)`
      })
      card.addEventListener('mouseenter', () => { if (glow) glow.style.opacity = '1'; if (arrow) arrow.style.transform = 'translateX(6px)' })
      card.addEventListener('mouseleave', () => { if (glow) glow.style.opacity = '0'; if (arrow) arrow.style.transform = 'none' })
    })
  }, [])

  /* ---- magnetic button ---- */
  useEffect(() => {
    const root = rootRef.current; if (!root) return
    root.querySelectorAll('[data-magnetic]').forEach(el => {
      const e = el as HTMLElement
      e.style.transition = 'transform .25s cubic-bezier(.2,.7,.2,1)'
      e.addEventListener('mousemove', ev => {
        const r = e.getBoundingClientRect()
        e.style.transform = `translate(${(ev.clientX - r.left - r.width  / 2) * 0.3}px,${(ev.clientY - r.top  - r.height / 2) * 0.4}px)`
      })
      e.addEventListener('mouseleave', () => { e.style.transform = 'translate(0,0)' })
    })
  }, [])

  /* ---- active nav ---- */
  useEffect(() => {
    const root = rootRef.current; if (!root) return
    const navLinks = root.querySelectorAll('a[href^="#about"],a[href^="#experience"],a[href^="#work"],a[href^="#contact"]')
    const setActive = (id: string) => {
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === id
        const el = link as HTMLElement
        el.style.color = isActive ? '#eaf1ff' : '#aeb9cf'
        el.style.background = isActive ? 'rgba(255,255,255,.1)' : ''
      })
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) setActive('#' + en.target.id) })
    }, { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' })
    ;['about','experience','work','contact'].forEach(id => {
      const el = root.querySelector(`#${id}`); if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  /* ------------------------------------------------------------------ */

  return (
    <div ref={rootRef} style={{ background: '#0b0d14', color: '#eaf1ff', fontFamily: SG, overflowX: 'hidden' }}>

      {/* ============ NAV ============ */}
      <div className="nav-pill" style={{ position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 22, padding: '9px 14px 9px 11px', borderRadius: 999, background: 'rgba(16,20,30,.55)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,.12)', zIndex: 50 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(150deg,#38e1d6,#5b8cff)', color: '#06121f', fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>NB</div>
          <span style={{ fontWeight: 700, color: '#eaf1ff' }}>nil</span>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: 2, paddingRight: 4 }}>
          {['about', 'experience', 'work', 'contact'].map(l => (
            <a key={l} href={`#${l}`} className="nav-link" style={{ fontWeight: 500, color: '#aeb9cf', padding: '6px 11px', borderRadius: 999, transition: 'color .2s, background .2s' }}>{l}</a>
          ))}
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section id="top" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 780, overflow: 'hidden', background: 'radial-gradient(120% 95% at 76% 16%,#16223b 0%,#0b0d14 60%)', cursor: 'crosshair' }}>
        <canvas ref={heroCanvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
        <div className="hero-text" style={{ position: 'absolute', left: '8.5%', top: '50%', transform: 'translateY(-50%)', maxWidth: 900, zIndex: 2, pointerEvents: 'none' }}>
          <div className="hero-greeting" style={{ fontSize: 24, fontWeight: 500, color: '#7fe9df', marginBottom: 18 }}>hi, i&apos;m nil 👋</div>
          <div className="hero-heading" style={{ fontSize: 66, lineHeight: 1.06, fontWeight: 600, color: '#f3f7ff', letterSpacing: '-.025em' }}>
            i build, ship, and explain ML systems that turn data into <span style={{ color: '#7fb0ff' }}>decisions</span>
          </div>
          <div style={{ marginTop: 26 }}>
            <span className="hero-sub" style={{ fontSize: 19, color: '#c2cee2' }}>Associate Data Scientist <span style={{ color: '#5b6680' }}>@</span> ICW Group</span>
          </div>
        </div>
        <div style={{ position: 'absolute', left: '50%', bottom: 30, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 2, pointerEvents: 'none' }}>
          <span style={{ fontFamily: JB, fontSize: 11, letterSpacing: '.16em', color: 'rgba(220,232,255,.5)' }}>SCROLL</span>
          <span style={{ fontSize: 16, color: 'rgba(220,232,255,.6)', animation: 'scrollcue 1.8s ease-in-out infinite' }}>↓</span>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="section-about" style={{ position: 'relative', padding: '150px 0', borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="section-inner" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 48px' }}>
          <SectionLabel text="ABOUT" />
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 64, alignItems: 'center' }}>
            {/* portrait */}
            <div data-reveal="80" className="about-portrait" style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 22, overflow: 'hidden', border: '1.5px solid rgba(127,233,223,.28)', background: '#0b0d14' }}>
              <Image src="/images/profile-nobg.png" alt="Nil Beserler" fill sizes="(max-width: 1180px) 40vw, 480px" style={{ objectFit: 'cover', objectPosition: 'center 18%', filter: 'brightness(0.88) saturate(0.82)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 55%, rgba(11,13,20,.7) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(11,13,20,.18) 0%,transparent 30%,transparent 62%,rgba(11,13,20,.65) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: 16, bottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7fe9df', boxShadow: '0 0 8px #7fe9df', display: 'inline-block' }} />
                <span style={{ fontFamily: JB, fontSize: 12, color: '#eaf1ff' }}>Nil Beserler</span>
              </div>
            </div>
            {/* bio */}
            <div>
              <h2 data-reveal="60" className="about-h2" style={{ margin: 0, fontSize: 46, lineHeight: 1.12, fontWeight: 600, letterSpacing: '-.02em', color: '#f3f7ff' }}>the person behind the models</h2>
              <p data-reveal="120" className="about-p" style={{ margin: '26px 0 0', fontSize: 20, lineHeight: 1.6, color: '#aab6cc', maxWidth: 580 }}>
                I&apos;m a data scientist working at the intersection of machine learning, statistics, and analytics. Today I build loss-prediction systems and NLP pipelines at ICW Group. Before that I trained computer-vision models on plant specimens, clustered disaster impact on telecom networks with Accenture, and shipped analytics dashboards at Oracle.
              </p>
              <p data-reveal="160" style={{ margin: '18px 0 0', fontSize: 20, lineHeight: 1.6, color: '#aab6cc', maxWidth: 580 }}>
                I care about models that make it to production — and decisions people can actually act on.
              </p>
              <div data-reveal="200" style={{ display: 'flex', gap: 40, marginTop: 38, flexWrap: 'wrap' }}>
                {[
                  { label: 'BASED IN',  value: 'San Diego, CA' },
                  { label: 'FOCUS',     value: 'ML · Analytics · NLP' },
                  { label: 'EDUCATION', value: "UC San Diego '24" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontFamily: JB, fontSize: 11, letterSpacing: '.16em', color: '#6b7691', marginBottom: 6 }}>{label}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#e7eefc' }}>{value}</div>
                  </div>
                ))}
              </div>
              <div data-reveal="240" style={{ display: 'flex', gap: 9, marginTop: 34, flexWrap: 'wrap', maxWidth: 580 }}>
                {['Python','SQL','PyTorch','TensorFlow','scikit-learn','Hugging Face','LangChain','Pandas','AWS','SageMaker','Docker','PostgreSQL','Snowflake','SHAP'].map(tag => (
                  <span key={tag} className="skill-tag" style={{ fontFamily: JB, fontSize: 13, color: '#bcd0ee', padding: '7px 13px', borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', transition: 'all .2s' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,.07)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div className="stats-grid" style={{ maxWidth: 1180, margin: '0 auto', padding: '78px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
          {[
            { count: 2,   suffix: '+', label: 'years of experience' },
            { count: 260, suffix: '+', label: 'features engineered · WEFI' },
            { count: 95,  suffix: '%', label: 'NLP match coverage · from 62%' },
            { count: 8,   suffix: '',  label: 'shipped projects' },
          ].map(({ count, suffix, label }, i) => (
            <div key={label} data-reveal={i * 80}>
              <div className="stat-num" style={{ fontSize: 56, fontWeight: 600, letterSpacing: '-.02em', color: '#f3f7ff' }}>
                <span data-count={count} data-suffix={suffix}>{count}{suffix}</span>
              </div>
              <div style={{ fontFamily: JB, fontSize: 13, color: '#7e8aa3', marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="section-experience" style={{ position: 'relative', padding: '140px 0', background: 'radial-gradient(80% 60% at 50% 0%,rgba(40,60,100,.14),transparent)', borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="section-inner" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 48px' }}>
          <SectionLabel text="EXPERIENCE" />
          <h2 data-reveal="40" className="exp-h2" style={{ margin: '0 0 52px', fontSize: 46, fontWeight: 600, letterSpacing: '-.02em', color: '#f3f7ff' }}>where i&apos;ve worked</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {JOBS.map(({ badge, date, location, title, company, desc, delay }) => (
              <div key={company} data-reveal={delay} className="exp-card exp-card-grid" style={{ display: 'grid', gridTemplateColumns: '210px 1fr', gap: 28, padding: 28, borderRadius: 18, border: '1px solid rgba(255,255,255,.09)', background: 'rgba(255,255,255,.035)', transition: 'background .3s, border-color .3s' }}>
                <div>
                  {badge && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: JB, fontSize: 12, color: '#7fe9df', marginBottom: 8 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7fe9df', display: 'inline-block', animation: 'nowpulse 2s ease-in-out infinite' }} />
                      {badge}
                    </div>
                  )}
                  <div style={{ fontFamily: JB, fontSize: 12, color: '#7e8aa3', marginTop: badge ? 0 : 23 }}>{date}</div>
                  <div style={{ fontFamily: JB, fontSize: 12, color: '#5f6b80', marginTop: 3 }}>{location}</div>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, color: '#f3f7ff' }}>
                    {title} <span style={{ color: '#7fb0ff' }}>· {company}</span>
                  </h3>
                  <p style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.6, color: '#9aa6bd' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal="120" style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14, padding: '22px 28px', borderRadius: 18, border: '1px dashed rgba(255,255,255,.14)', background: 'rgba(255,255,255,.02)' }}>
            <span style={{ fontFamily: JB, fontSize: 12, letterSpacing: '.14em', color: '#5fe6da' }}>EDU</span>
            <span style={{ fontSize: 15, color: '#cdd7e8' }}>
              B.S. Cognitive Science — Machine Learning &amp; Neural Computation,{' '}
              <span style={{ color: '#8b96ad' }}>UC San Diego · GPA 3.6 · 2024</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work" className="section-work" style={{ position: 'relative', padding: '130px 0 140px', borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="section-inner" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 48px' }}>
          <SectionLabel text="SELECTED WORK" />
          <h2 data-reveal="40" className="work-h2" style={{ margin: '0 0 52px', fontSize: 46, fontWeight: 600, letterSpacing: '-.02em', color: '#f3f7ff' }}>things i&apos;ve built</h2>

          {/* featured */}
          <a href="https://github.com/NilBeserler/rag-playbook" target="_blank" rel="noopener noreferrer"
            data-spotlight data-reveal="80"
            className="project-card project-card-featured featured-card"
            style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 1fr', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.03)', marginBottom: 24, transition: 'transform .35s, border-color .35s' }}>
            <GlowOrb color="rgba(127,233,223,.16)" />
            <div className="featured-img" style={{ overflow: 'hidden', position: 'relative', zIndex: 2, minHeight: 360 }}>
              <Image src="/rag-hero.jpg" alt="RAG Optimization Playbook" fill style={{ objectFit: 'cover', objectPosition: 'center 20%', transform: 'scale(1.12)', transformOrigin: 'center 30%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.35)', pointerEvents: 'none' }} />
              <span style={{ position: 'absolute', top: 16, right: 16, fontFamily: JB, fontSize: 11, color: '#06121f', background: '#7fe9df', padding: '6px 13px', borderRadius: 999, fontWeight: 600, zIndex: 1 }}>NEW · 2026</span>
            </div>
            <div className="featured-body" style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
              <div style={{ fontFamily: JB, fontSize: 12, letterSpacing: '.14em', color: '#7fe9df', marginBottom: 16 }}>FEATURED · RAG · LLM · AI ENGINEERING</div>
              <h3 className="featured-h3" style={{ margin: '0 0 14px', fontSize: 32, fontWeight: 600, color: '#f3f7ff', letterSpacing: '-.02em' }}>RAG Optimization Playbook</h3>
              <p style={{ margin: '0 0 24px', fontSize: 17, lineHeight: 1.6, color: '#9aa6bd' }}>
                A practitioner&apos;s reference for diagnosing and fixing production RAG systems — retrieval quality, agentic reasoning, reliability, scale, and eval pipelines. Each entry maps symptom → fix with tradeoffs and eval signals.
              </p>
              <Tags tags={['RAG', 'LLM', 'System Design', 'Production ML']} />
              <div data-arrow style={{ fontSize: 15, fontWeight: 600, color: '#7fb0ff', transition: 'transform .3s' }}>view on github →</div>
            </div>
          </a>

          {/* grid */}
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {PROJECTS.map(({ href, img, alt, category, categoryColor, title, desc, tags, link, glowColor, cardClass, delay }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                data-spotlight data-reveal={delay}
                className={`project-card ${cardClass}`}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.03)', transition: 'transform .35s, border-color .35s' }}>
                <GlowOrb color={glowColor} />
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
                  <Image src={img} alt={alt} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '32px 30px', position: 'relative', zIndex: 2 }}>
                  <div style={{ fontFamily: JB, fontSize: 12, letterSpacing: '.14em', color: categoryColor, marginBottom: 14 }}>{category}</div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 600, color: '#f3f7ff', letterSpacing: '-.01em' }}>{title}</h3>
                  <p style={{ margin: '0 0 20px', fontSize: 15, lineHeight: 1.6, color: '#9aa6bd' }}>{desc}</p>
                  <Tags tags={tags} />
                  <div data-arrow style={{ fontSize: 15, fontWeight: 600, color: '#7fb0ff', transition: 'transform .3s' }}>{link}</div>
                </div>
              </a>
            ))}
          </div>

          <div data-reveal="120" style={{ marginTop: 34, textAlign: 'center' }}>
            <a href="https://github.com/NilBeserler" target="_blank" rel="noopener noreferrer"
              className="see-all-btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: JB, fontSize: 14, color: '#aeb9cf', padding: '13px 24px', borderRadius: 999, border: '1px solid rgba(255,255,255,.14)', transition: 'all .2s' }}>
              see all 9 projects on github →
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="section-contact" style={{ position: 'relative', padding: '170px 0', overflow: 'hidden', background: 'radial-gradient(100% 90% at 50% 100%,#16223b 0%,#0b0d14 62%)', borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="section-inner" style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <div data-reveal="0" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,transparent,#38e1d6)' }} />
            <span style={{ fontFamily: JB, fontSize: 13, letterSpacing: '.22em', color: '#5fe6da' }}>CONTACT</span>
            <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,#38e1d6,transparent)' }} />
          </div>
          <h2 data-reveal="60" className="contact-h2" style={{ margin: 0, fontSize: 60, lineHeight: 1.06, fontWeight: 600, letterSpacing: '-.025em', color: '#f3f7ff' }}>
            let&apos;s turn your data into <span style={{ color: '#7fb0ff' }}>decisions</span>
          </h2>
          <p data-reveal="120" className="contact-p" style={{ margin: '24px auto 44px', fontSize: 20, lineHeight: 1.6, color: '#aab6cc', maxWidth: 540 }}>
            Open to data science &amp; ML collaborations, and genuinely hard problems. Let&apos;s talk.
          </p>
          <div data-reveal="160" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
            <button data-magnetic onClick={copyEmail}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 30px', borderRadius: 999, background: 'linear-gradient(150deg,#38e1d6,#5b8cff)', color: '#06121f', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'opacity .2s' }}>
              {copied ? 'email copied ✓' : <>get in touch <span style={{ fontSize: 18 }}>→</span></>}
            </button>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://github.com/NilBeserler" target="_blank" rel="noopener noreferrer"
                className="social-link"
                style={{ display: 'inline-flex', padding: '14px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.14)', color: '#dfe7f5', fontWeight: 600, fontSize: 15, transition: 'all .2s' }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nilbeserler/" target="_blank" rel="noopener noreferrer"
                className="social-link"
                style={{ display: 'inline-flex', padding: '14px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.14)', color: '#dfe7f5', fontWeight: 600, fontSize: 15, transition: 'all .2s' }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="footer-inner" style={{ maxWidth: 1180, margin: '0 auto', padding: '36px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
          <div style={{ fontWeight: 700, color: '#e7eefc' }}>nil beserler <span style={{ color: '#6b7691', fontWeight: 500 }}>— data scientist</span></div>
          <div className="footer-links" style={{ display: 'flex', gap: 22 }}>
            {['about', 'experience', 'work', 'contact'].map(l => (
              <a key={l} href={`#${l}`} className="footer-link" style={{ fontSize: 14, color: '#8b96ad', transition: 'color .2s' }}>{l}</a>
            ))}
          </div>
          <div style={{ fontFamily: JB, fontSize: 12, color: '#5f6b80' }}>© 2026 Nil Beserler</div>
        </div>
      </footer>
    </div>
  )
}

/* ---- small helpers ---- */

function SectionLabel({ text }: { text: string }) {
  return (
    <div data-reveal="0" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
      <span style={{ width: 34, height: 1, background: 'linear-gradient(90deg,#38e1d6,transparent)' }} />
      <span style={{ fontFamily: JB, fontSize: 13, letterSpacing: '.22em', color: '#5fe6da' }}>{text}</span>
    </div>
  )
}

function GlowOrb({ color }: { color: string }) {
  return (
    <div data-glow style={{ position: 'absolute', top: 0, left: 0, width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(closest-side,${color},transparent)`, pointerEvents: 'none', opacity: 0, transition: 'opacity .3s', zIndex: 1 }} />
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
      {tags.map(tag => (
        <span key={tag} style={{ fontFamily: JB, fontSize: 12, color: '#bcd0ee', padding: '6px 11px', borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)' }}>{tag}</span>
      ))}
    </div>
  )
}

/* ---- data ---- */

const JOBS = [
  {
    badge: 'NOW', date: 'Nov 2024 — Present', location: 'San Diego',
    title: 'Associate Data Scientist', company: 'ICW Group',
    desc: "Built WEFI, a workers'-comp loss-prediction system with 260+ engineered features and batch/live API architecture. Designed a CatBoost + SHAP benchmarking framework against actuarial baselines, and lifted NLP class-code → NAICS match coverage from 62% to 95%.",
    delay: 80,
  },
  {
    badge: '', date: 'Jun — Oct 2024', location: 'Los Angeles',
    title: 'Data Science Intern', company: 'Oracle',
    desc: 'Built interactive Oracle Analytics Cloud dashboards for the Delete The Divide initiative, defined KPIs with executives, and compared classification & clustering models on SQL-based data pipelines.',
    delay: 120,
  },
  {
    badge: '', date: 'Aug 2023 — Apr 2024', location: 'Los Angeles',
    title: 'Break Through Tech AI Fellow', company: 'Accenture',
    desc: 'Engineered durability, density & disaster-frequency features, applied PCA, and compared K-Means vs. DBSCAN (Silhouette 0.47) to turn cluster outputs into tiered investment priorities for US cellular infrastructure.',
    delay: 160,
  },
  {
    badge: '', date: 'Dec 2021 — Dec 2022', location: 'San Diego',
    title: 'Research Assistant', company: 'UCSD Cognitive Tools Lab',
    desc: 'Compared CLIP, VGG19 & human perception metrics for image recognizability through dataset wrangling and visualization in R and Python; presented to 20+ grad students.',
    delay: 200,
  },
]

const PROJECTS = [
  {
    href: 'https://github.com/NilBeserler',
    img: '/flash_cards.jpg', alt: 'Fl(AI)shcards',
    category: 'AI / ML · 2024', categoryColor: '#7fe9df',
    title: 'Fl(AI)shcards — AI Learning Assistant',
    desc: "A GPT-4 flashcard assistant that reinvented studying for UCSD's LIGN167 — automated card generation, personalized study flow, and spaced repetition.",
    tags: ['GPT-4', 'Python', 'Streamlit'],
    link: 'view project →',
    glowColor: 'rgba(127,233,223,.16)', cardClass: 'project-card-teal', delay: 120,
  },
  {
    href: 'https://github.com/NilBeserler/Telecommunications_Disaster_Inquiry_Accenture',
    img: '/accenture-disaster-map.jpg', alt: 'Disaster Impact Analysis',
    category: 'UNSUPERVISED ML · ACCENTURE', categoryColor: '#c79bff',
    title: 'Disaster Impact Analysis',
    desc: 'PCA + K-Means vs. DBSCAN (Silhouette 0.47) modeling natural-disaster impact on US cell towers, translated into tiered investment priorities.',
    tags: ['DBSCAN', 'K-Means', 'PCA'],
    link: 'view on github →',
    glowColor: 'rgba(176,124,255,.16)', cardClass: 'project-card-purple', delay: 180,
  },
  {
    href: 'https://github.com/NilBeserler',
    img: '/plant_specimen.jpg', alt: 'Plant Specimen Classification',
    category: 'COMPUTER VISION · NYBG', categoryColor: '#8fb4ff',
    title: 'Plant Specimen Classification',
    desc: 'VGG + ResNet50 categorizing 7.8M+ specimens with custom preprocessing — 0.9676 accuracy, 22nd of 77 teams.',
    tags: ['ResNet50', 'VGG', 'Deep Learning'],
    link: 'view project →',
    glowColor: 'rgba(91,140,255,.16)', cardClass: 'project-card-blue', delay: 220,
  },
  {
    href: 'https://github.com/NilBeserler/Predicting-Discharge-Type-from-Hospital-for-Diabetes-Patients',
    img: '/discahrge_type.jpg', alt: 'Diabetes Discharge Prediction',
    category: 'HEALTHCARE ANALYTICS · 2023', categoryColor: '#ffc36b',
    title: 'Diabetes Discharge Prediction',
    desc: 'Gradient Boosting on 100K+ hospital admissions to predict discharge type — 82% accuracy aimed at reducing readmissions.',
    tags: ['Gradient Boosting', 'scikit-learn', 'Pandas'],
    link: 'view on github →',
    glowColor: 'rgba(255,195,107,.14)', cardClass: 'project-card-gold', delay: 260,
  },
]
