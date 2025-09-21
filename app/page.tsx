'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowDown, FaCode, FaChartLine, FaBrain } from 'react-icons/fa'

export default function Home() {
  const [displayedText, setDisplayedText] = useState('')
  const [endDisplayedText, setEndDisplayedText] = useState('')
  const fullText = 'print("Hello World!\nI am Nil '
  const emojiText = '👋'
  const endText = '")'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(0)
  const [showEmoji, setShowEmoji] = useState(false)
  const [showEndText, setShowEndText] = useState(false)
  
  // Dynamic line numbering
  const descriptionRef = useRef<HTMLDivElement>(null)
  const [lineNumbers, setLineNumbers] = useState<number[]>([1, 2, 3, 4]) // Initialize with default line numbers
  
  const descriptionText = ">> Data Scientist passionate about using machine learning and advanced analytics to uncover insights that improve decision-making and create real-world impact"

  // Calculate line numbers dynamically
  useEffect(() => {
    const calculateLineNumbers = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight)
        const elementHeight = element.offsetHeight
        const numberOfLines = Math.round(elementHeight / lineHeight)
        setLineNumbers(Array.from({ length: numberOfLines }, (_, i) => i + 1))
      }
    }

    // Calculate immediately and also after a short delay to ensure DOM is ready
    calculateLineNumbers()
    const timeout = setTimeout(calculateLineNumbers, 10)
    
    window.addEventListener('resize', calculateLineNumbers)
    
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', calculateLineNumbers)
    }
  }, [])

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else if (currentIndex === fullText.length && !showEmoji) {
      // Show emoji after main text is complete
      const timeout = setTimeout(() => {
        setShowEmoji(true)
      }, 200)
      return () => clearTimeout(timeout)
    } else if (showEmoji && !showEndText) {
      // Show end text after emoji
      const timeout = setTimeout(() => {
        setShowEndText(true)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, showEmoji, showEndText])

  useEffect(() => {
    if (showEndText && endIndex < endText.length) {
      const timeout = setTimeout(() => {
        setEndDisplayedText(prev => prev + endText[endIndex])
        setEndIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [showEndText, endIndex, endText])

  // Featured projects data (first 3 projects)
  const featuredProjects = [
    {
      id: 1,
      title: 'Fl(AI)shcards - AI-Driven Learning Assistant',
      description: 'Pioneered an AI-driven flashcard assistant using GPT-4 to transform learning for LIGN167 students. Features automated flashcard creation, personalized study experience, and spaced repetition algorithm.',
      image: '/flash_cards.jpg',
      tags: ['AI/ML', 'Python', 'GPT-4', 'Streamlit'],
      github: null,
      date: '2024'
    },
    {
      id: 2,
      title: 'Advanced AI for Biodiversity: Plant Specimen Classification',
      description: 'Developed machine learning models for categorizing 7.8M+ plant specimens at NYBG. Implemented VGG and ResNet50 architectures, achieving 0.9676 accuracy and securing 22nd place out of 77 teams.',
      image: '/plant_specimen.jpg',
      tags: ['Computer Vision', 'Python', 'VGG', 'ResNet50'],
      github: null,
      date: '2024'
    },
    {
      id: 3,
      title: 'Telecommunications Disaster Impact Analysis',
      description: 'Collaborated with Accenture to analyze natural disaster impact on cellular towers across the US. Used unsupervised learning (K-Means, DBSCAN) and PCA to create predictive models for disaster preparedness.',
      image: '/accenture-disaster-map.jpg',
      tags: ['Machine Learning', 'Python', 'K-Means', 'DBSCAN'],
      github: 'https://github.com/NilBeserler/Telecommunications_Disaster_Inquiry_Accenture',
      date: '2023-2024'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center wave-gradient">
        <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-6" style={{ minHeight: '120px' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white whitespace-pre-line" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', minWidth: '600px' }}>
                  <span className="text-white">
                    {displayedText || 'print("Hello World!\nI am Nil '}
                    {showEmoji && (
                      <span 
                        className="inline-block text-3xl md:text-4xl lg:text-5xl emoji" 
                        style={{ 
                          animation: 'wave 0.8s ease-in-out 3',
                          transformOrigin: 'center'
                        }}
                        role="img"
                        aria-label="waving hand"
                      >
                        👋
                      </span>
                    )}
                    {endDisplayedText || '")'}
                    <span className="animate-pulse text-white">|</span>
                  </span>
                </h1>
              </div>
                <div className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed font-mono">
                  <div className="flex">
                    <div className="flex-shrink-0 pr-2">
                      {lineNumbers.map((lineNum) => (
                        <div key={lineNum} className="text-gray-300">
                          {lineNum}|
                        </div>
                      ))}
                    </div>
                    <div ref={descriptionRef} className="flex-1">
                      {descriptionText}
                    </div>
                  </div>
                </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                  View My Work
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/nil-working.jpg"
                  alt="Nil Beserler working"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#about" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors">
              <span className="mr-2">Learn more about me</span>
              <FaArrowDown className="animate-bounce" />
            </a>
          </div>
      </section>

      {/* About Preview */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I specialize in machine learning, statistical analysis, and data visualization 
              to solve complex business problems and drive data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Engineering</h3>
              <p className="text-gray-600">
                Building robust data pipelines and ETL processes for scalable analytics solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">
                Advanced statistical analysis and predictive modeling to uncover hidden patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Developing and deploying ML models for real-world applications and automation.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of my recent data science projects and machine learning applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card p-6">
                {/* Project Image */}
                <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-blue-600"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded ${
                        tag === 'AI/ML' ? 'bg-blue-100 text-blue-800' :
                        tag === 'Python' ? 'bg-green-100 text-green-800' :
                        tag === 'Computer Vision' ? 'bg-purple-100 text-purple-800' :
                        tag === 'Machine Learning' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/projects" className="text-primary-600 hover:text-primary-700 font-medium">
                  View Project →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how data science can help solve your business challenges.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
