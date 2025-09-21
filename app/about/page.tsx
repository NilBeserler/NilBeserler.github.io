import { FaPython, FaRProject, FaDatabase, FaChartBar, FaBrain, FaCode, FaJs, FaReact } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiAmazonaws, SiStreamlit, SiOpenai, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGit, SiGithub, SiOracle } from 'react-icons/si'

export const metadata = {
  title: 'About | Data Scientist Portfolio',
  description: 'Learn about my background, skills, and experience in data science and machine learning',
}

export default function About() {
  const skills = [
    { name: 'Python', icon: FaPython, level: 95 },
    { name: 'R', icon: FaRProject, level: 85 },
    { name: 'SQL', icon: FaDatabase, level: 90 },
    { name: 'Statistics', icon: FaChartBar, level: 88 },
    { name: 'Machine Learning', icon: FaBrain, level: 92 },
    { name: 'Data Visualization', icon: FaCode, level: 87 },
  ]

  const technologies = [
    { name: 'Python', icon: FaPython },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Scikit-learn', icon: SiScikitlearn },
    { name: 'Streamlit', icon: SiStreamlit },
    { name: 'OpenAI', icon: SiOpenai },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Oracle Analytics', icon: SiOracle },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Jupyter', icon: SiJupyter },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'AWS', icon: SiAmazonaws },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate data scientist with over 2 years of experience transforming 
                complex data into actionable insights. My journey began with a fascination 
                for the human brain and information exchange, which has since evolved into 
                expertise in machine learning, statistical analysis, and data engineering.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I believe in the power of data to drive meaningful change and enjoy working 
                on projects that deliver real-world impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/resume" className="btn-primary">
                  Download Resume
                </a>
                <a href="/contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-blue-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">8+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">16+</div>
                    <div className="text-sm opacity-90">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Model Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My expertise spans across various domains of data science and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.name} className="card p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="text-primary-600 text-2xl mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{skill.level}% proficiency</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Familiar with a wide range of modern data science and ML technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <div key={tech.name} className="card p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="text-4xl text-gray-700 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-900">{tech.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My career path and key milestones in data science
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200"></div>

            <div className="space-y-8">
              {/* Experience 1 - ICW Group */}
              <div className="relative flex items-center">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Associate Data Scientist</h3>
                      <span className="text-sm text-gray-500">Nov 2024 - Present</span>
                    </div>
                    <h4 className="text-lg text-primary-600 mb-2">ICW Group</h4>
                    <p className="text-gray-600">
                      Built multi-model NLP systems with transformers and ensemble methods to automate industry classification. 
                      Optimized underwriting risk scoring models and increased model interpretability through comparison frameworks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 2 - Oracle */}
              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Data Science Intern</h3>
                      <span className="text-sm text-gray-500">Jun 2024 - Oct 2024</span>
                    </div>
                    <h4 className="text-lg text-primary-600 mb-2">Oracle</h4>
                    <p className="text-gray-600">
                      Created interactive analytics dashboards for Delete The Divide initiative, quantifying community impact data. 
                      Applied Oracle Analytics Cloud for ML models including Binary-Classifier, Clustering, and Multi-Classifier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 3 - Accenture */}
              <div className="relative flex items-center">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Break Through Tech AI Fellow</h3>
                      <span className="text-sm text-gray-500">Aug 2023 - Apr 2024</span>
                    </div>
                    <h4 className="text-lg text-primary-600 mb-2">Accenture</h4>
                    <p className="text-gray-600">
                      Developed predictive models assessing cellular tower vulnerability to natural disasters across the US. 
                      Utilized unsupervised learning techniques including k-means clustering and DBSCAN on historical datasets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 4 - Breakout Mentors */}
              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Machine Learning Tutor</h3>
                      <span className="text-sm text-gray-500">Sep 2023 - Jun 2024</span>
                    </div>
                    <h4 className="text-lg text-primary-600 mb-2">Breakout Mentors</h4>
                    <p className="text-gray-600">
                      Guided students in data science and ML, covering supervised learning, deep learning, and reinforcement learning. 
                      Collaborated to build a financial literacy chatbot using Flowise, LangChain, and OpenAI embeddings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 5 - Research Assistant */}
              <div className="relative flex items-center">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Research Assistant</h3>
                      <span className="text-sm text-gray-500">Dec 2021 - Dec 2022</span>
                    </div>
                    <h4 className="text-lg text-primary-600 mb-2">Cognitive Tools Lab & Early Learning Lab, UCSD</h4>
                    <p className="text-gray-600">
                      Spearheaded advanced image recognizability research comparing CLIP, VGG19, and human metrics. 
                      Presented findings to 20+ grad students, leading to 25% improvement in comprehension metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Science in Cognitive Science</h3>
              <h4 className="text-lg text-primary-600 mb-2">University of California San Diego</h4>
              <p className="text-gray-600 mb-4">Graduated March 2024</p>
              <p className="text-gray-600 mb-2">
                <strong>Specialization:</strong> Machine Learning and Neural Computation
              </p>
              <p className="text-gray-600 mb-4">
                <strong>GPA:</strong> 3.6
              </p>
              <div className="text-gray-600">
                <p className="font-medium mb-2">Relevant Coursework:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Supervised ML Algorithms</li>
                  <li>Unsupervised ML Algorithms</li>
                  <li>Deep Learning</li>
                  <li>Advanced Machine Learning Methods</li>
                  <li>Data Science in Practice</li>
                  <li>Brain-computer Interfaces</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning Foundations</h3>
              <p className="text-gray-600">Cornell University</p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oracle Cloud Infrastructure 2024</h3>
              <p className="text-gray-600">Certified Foundations Associate</p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oracle Cloud Infrastructure 2024</h3>
              <p className="text-gray-600">AI Foundations Associate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
