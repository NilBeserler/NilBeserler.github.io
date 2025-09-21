'use client'

import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'nilbeserler@gmail.com',
      href: 'mailto:nilbeserler@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'San Diego, CA',
      href: null
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nilbeserler/', icon: FaLinkedin },
    { name: 'GitHub', href: 'https://github.com/NilBeserler', icon: FaGithub },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to discuss your next data science project? I'd love to hear from you and explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.title} className="flex items-center justify-center">
                      <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="text-primary-600 text-xl" />
                      </div>
                      <div className="text-left min-w-[200px]">
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow me</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                        aria-label={`Visit ${link.name} profile`}
                      >
                        <Icon className="text-xl" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  please feel free to reach out via LinkedIn.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What types of projects do you work on?
              </h3>
              <p className="text-gray-600">
                I work on a wide range of data science projects including machine learning models, 
                data visualization dashboards, predictive analytics, NLP applications, and more. 
                I'm particularly interested in projects that have real-world impact.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What's your typical project timeline?
              </h3>
              <p className="text-gray-600">
                Project timelines vary depending on complexity and scope. Simple analytics 
                projects might take 1-2 weeks, while comprehensive ML solutions could take 
                2-3 months. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
