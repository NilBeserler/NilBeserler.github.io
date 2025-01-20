import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Briefcase, GraduationCap, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company: "UC San Diego",
      period: "June 2023 - Present",
      description: "Developed and implemented advanced machine learning algorithms for neural computation research. Collaborated with faculty on cutting-edge AI projects.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Data Analysis"]
    },
    {
      title: "Software Engineering Intern",
      company: "Tech Startup",
      period: "Summer 2022",
      description: "Built and maintained full-stack web applications. Implemented new features and improved existing codebase.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    }
  ];

  const projects = [
    {
      title: "Neural Network Visualization Tool",
      description: "Interactive web application for visualizing neural network architectures and training processes.",
      link: "https://github.com/nilbeserler/neural-viz",
      tags: ["React", "D3.js", "Python", "TensorFlow"]
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
      link: "https://github.com/nilbeserler/portfolio",
      tags: ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Machine Learning Research Project",
      description: "Implementation of novel neural computation algorithms for pattern recognition.",
      link: "https://github.com/nilbeserler/ml-research",
      tags: ["Python", "PyTorch", "Research", "AI"]
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-lightest to-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-primary-dark">NB</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-neutral-dark hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="text-neutral-dark hover:text-primary transition-colors"
              >
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-neutral-dark hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-neutral-dark"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-4 py-2 text-neutral-dark hover:bg-primary-lightest"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="block w-full text-left px-4 py-2 text-neutral-dark hover:bg-primary-lightest"
              >
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-neutral-dark hover:bg-primary-lightest"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(25, 118, 210, 0.9), rgba(123, 31, 162, 0.9)),
            url('/images/nil-working.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi! I'm Nil Beserler</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Recent graduate from UCSD, blending the art of machine learning with neural computation 
            to explore the frontier of AI research and application 🚀
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/nilbeserler" className="text-white/80 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/nil-beserler/" className="text-white/80 hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:nilbeserler@gmail.com" className="text-white/80 hover:text-white transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-white/80">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-primary-lightest">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-darkest">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code2 className="w-8 h-8 text-primary-dark" />}
              title="Languages"
              skills={['JavaScript', 'TypeScript', 'Python', 'Java']}
            />
            <SkillCard
              icon={<BookOpen className="w-8 h-8 text-primary-dark" />}
              title="Frameworks"
              skills={['React', 'Node.js', 'Express', 'Spring Boot']}
            />
            <SkillCard
              icon={<Briefcase className="w-8 h-8 text-primary-dark" />}
              title="Tools"
              skills={['Git', 'Docker', 'AWS', 'MongoDB']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-darkest">Featured Projects</h2>
          <div className="relative">
            <div className="flex justify-center items-center">
              <button 
                onClick={previousProject}
                className="absolute left-0 z-10 p-2 text-primary-dark hover:text-primary transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              
              <div className="w-full max-w-2xl mx-12">
                <ProjectCard {...projects[currentProjectIndex]} />
              </div>

              <button 
                onClick={nextProject}
                className="absolute right-0 z-10 p-2 text-primary-dark hover:text-primary transition-colors"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProjectIndex ? 'bg-primary-dark' : 'bg-primary-light'
                  }`}
                  onClick={() => setCurrentProjectIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 md:px-8 bg-primary-lightest">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-darkest">Resume</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-neutral-darkest">Education</h3>
              <EducationCard
                degree="Bachelor of Science in Computer Science"
                school="University of California San Diego"
                year="2020 - 2024"
                description="Relevant coursework in algorithms, data structures, and software engineering."
              />
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-darkest">Experience</h3>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="bg-primary-lightest rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300"
                    onClick={() => toggleExperience(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-semibold text-neutral-darkest">{experience.title}</h4>
                        <p className="text-neutral-dark">{experience.company}</p>
                        <p className="text-neutral-medium text-sm">{experience.period}</p>
                      </div>
                      <div className={`transform transition-transform duration-300 ${expandedExperience === index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {expandedExperience === index && (
                      <div className="mt-4 pt-4 border-t border-primary-light/30">
                        <p className="text-neutral-dark mb-3">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-primary-light/20 text-primary-dark text-sm px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-darkest">Contact Me</h2>
          <div className="bg-primary-lightest rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary-dark" />
                <a href="mailto:nilbeserler@gmail.com" className="text-neutral-dark hover:text-primary-dark transition-colors">
                  nilbeserler@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-primary-dark" />
                <a href="https://www.linkedin.com/in/nil-beserler/" className="text-neutral-dark hover:text-primary-dark transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-primary-dark" />
                <a href="https://github.com/nilbeserler" className="text-neutral-dark hover:text-primary-dark transition-colors">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-darkest text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Nil Beserler. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/nilbeserler" className="text-white/80 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nil-beserler/" className="text-white/80 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:nilbeserler@gmail.com" className="text-white/80 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-4 text-neutral-darkest">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-neutral-dark text-center">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, link, tags }) {
  return (
    <div className="bg-primary-lightest rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
      <h3 className="text-xl font-semibold mb-3 text-neutral-darkest">{title}</h3>
      <p className="text-neutral-dark mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-primary-light/20 text-primary-dark text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center text-primary-dark hover:text-primary transition-colors"
      >
        View Project <ExternalLink className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
}

function EducationCard({ degree, school, year, description }) {
  return (
    <div className="bg-primary-lightest rounded-lg p-6 shadow-lg">
      <div className="flex items-start">
        <GraduationCap className="w-6 h-6 text-primary-dark mt-1 mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-neutral-darkest">{degree}</h3>
          <p className="text-neutral-dark mb-2">{school}</p>
          <p className="text-neutral-medium text-sm mb-2">{year}</p>
          <p className="text-neutral-dark">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;