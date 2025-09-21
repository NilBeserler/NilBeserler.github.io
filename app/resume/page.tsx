'use client'

import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import Head from 'next/head'

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF file
    const link = document.createElement('a')
    link.href = '/Nil Beserler Resume 2025.pdf' // Your actual resume PDF filename
    link.download = 'Nil_Beserler_Resume.pdf'
    link.click()
  }

  return (
    <>
      <Head>
        <title>Resume | Data Scientist Portfolio</title>
        <meta name="description" content="Download my resume and view my professional experience, skills, and qualifications" />
      </Head>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resume
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Download my resume or explore my professional experience and qualifications below
          </p>
          <button 
            onClick={handleDownload}
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            <FaDownload className="mr-2" />
            Download PDF Resume
          </button>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Nil Beserler</h2>
            <p className="text-xl text-primary-600 mb-4">Associate Data Scientist</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                nilbeserler@gmail.com
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                San Diego, CA
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/nilbeserler/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/NilBeserler" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Recent graduate with a BS in Cognitive Science specializing in Machine Learning and Neural Computation from UC San Diego. 
              Experienced Associate Data Scientist with expertise in NLP systems, predictive modeling, and data visualization. 
              Proven track record in building multi-model systems, optimizing risk scoring models, and creating interactive analytics dashboards. 
              Strong background in Python, SQL, deep learning frameworks, and cloud technologies with experience in both industry and research settings.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Programming Languages</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch)</li>
                  <li>• R (Statistical Analysis, Data Visualization)</li>
                  <li>• SQL (Oracle Analytics Cloud, Data Processing)</li>
                  <li>• JavaScript (D3.js, React)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Tools & Technologies</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Machine Learning (Transformers, Ensemble Methods, Deep Learning)</li>
                  <li>• NLP (LangChain, OpenAI Embeddings, Pinecone)</li>
                  <li>• Cloud Platforms (Oracle Analytics Cloud)</li>
                  <li>• Visualization (Matplotlib, Interactive Dashboards)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-200 pb-2">
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Associate Data Scientist</h4>
                    <p className="text-lg text-primary-600">ICW Group</p>
                  </div>
                  <p className="text-gray-600 font-medium">November 2024 - Present</p>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Built a multi-model NLP system with transformers and ensemble methods to automate industry classification, improving accuracy through consensus-based scoring and robust data normalization</li>
                  <li>• Optimized underwriting risk scoring models by refining feature weighting and scoring methodologies, improving risk differentiation across multiple lines of business and contributing to lower loss ratios</li>
                  <li>• Increased model interpretability and stakeholder confidence by building comparison frameworks across model versions, integrating evaluation metrics, statistical analysis, and visual reporting</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Data Science Intern</h4>
                    <p className="text-lg text-primary-600">Oracle</p>
                  </div>
                  <p className="text-gray-600 font-medium">June 2024 - October 2024</p>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Created interactive analytics dashboards by collaborating with Delete The Divide (DTD) Interns to quantify and share data on community impact, resulting in visually compelling and data-driven stories for stakeholders</li>
                  <li>• Communicated with DTD Executives to understand key performance indicators and effectively leveraged data insights to the organization's mission, ensuring meaningful and actionable visual narratives that influenced decision-making</li>
                  <li>• Utilized SQL and Excel-like functions to support data ingestion, modeling, preparation, and enrichment; applied Oracle Analytics Cloud for machine learning models, leading to improved data-driven insights through Binary-Classifier, Clustering, Multi-Classifier, and Numeric Prediction models</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Break Through Tech AI Fellow</h4>
                    <p className="text-lg text-primary-600">Accenture</p>
                  </div>
                  <p className="text-gray-600 font-medium">August 2023 - April 2024</p>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Developed a predictive model that assesses the vulnerability of cellular towers to natural disasters across the United States. Utilized unsupervised learning and deep learning techniques, including k-means clustering and DBSCAN models, on historical datasets containing disaster records and cellular tower locations</li>
                  <li>• Optimized data processing workflows and data pipelines for efficient analysis and quicker insights by implementing parallel processing and automating ETL (Extract, Transform, Load) tasks, leading to a 20% reduction in processing time</li>
                  <li>• Enhanced understanding of business implications of machine learning models, effectively communicated complex technical details to stakeholders in a digestible manner, highlighting strategic value</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Machine Learning Tutor</h4>
                    <p className="text-lg text-primary-600">Breakout Mentors</p>
                  </div>
                  <p className="text-gray-600 font-medium">September 2023 - June 2024</p>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Guided and inspired students in data science and ML, covered topics such as supervised learning, deep learning, and reinforcement learning to foster a passion for learning and practical application</li>
                  <li>• Designed and implemented a hands-on curriculum emphasizing real-world problem-solving with modern data science tools like Pandas, NumPy, and Matplotlib, as well as deep learning frameworks such as PyTorch and TensorFlow</li>
                  <li>• Collaborated with a student to build a financial literacy chatbot using Flowise and LangChain, embedding text data with OpenAI embeddings and storing them in Pinecone for effective similarity searches, enhancing query response accuracy and user experience</li>
                </ul>
              </div>

              {/* Job 5 */}
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Research Assistant</h4>
                    <p className="text-lg text-primary-600">Cognitive Tools Lab & Early Learning and Cognition Lab at UCSD</p>
                  </div>
                  <p className="text-gray-600 font-medium">December 2021 - December 2022</p>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Spearheaded advanced image recognizability research, quantified by successfully comparing CLIP, VGG19, and human metrics through complex dataset wrangling and data visualization; using R and Python. Presented key findings to an audience of 20+ grad students, leading to a 25% improvement in comprehension of image recognizability metrics measured by poll ratings</li>
                  <li>• Conducted thorough literature reviews on computer vision models, fostering innovation, and leading feedback-driven meetings to drive progress in cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
              Education
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science in Cognitive Science</h4>
                  <p className="text-primary-600">University of California San Diego</p>
                  <p className="text-gray-600 text-sm">Machine Learning and Neural Computation Specialization</p>
                  <p className="text-gray-600 text-sm">GPA: 3.6</p>
                </div>
                <p className="text-gray-600 font-medium">Graduated March 2024</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Relevant Coursework</h4>
              <p className="text-gray-700">
                Supervised ML Algorithms, Unsupervised ML Algorithms, Deep Learning, Advanced Machine Learning Methods, 
                Data Science in Practice, Brain-computer Interfaces, Data Structures and Algorithms for Data Science, Statistical Analysis
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Machine Learning Foundations</span>
                <span className="text-gray-600 text-sm">Cornell University</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Oracle Cloud Infrastructure 2024</span>
                <span className="text-gray-600 text-sm">Certified Foundations Associate</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Oracle Cloud Infrastructure 2024</span>
                <span className="text-gray-600 text-sm">AI Foundations Associate</span>
              </div>
            </div>
          </div>

          {/* Projects Highlights */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
              Key Projects
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Fl(AI)shcards - AI-Driven Learning Assistant</h4>
                <p className="text-gray-700 text-sm">
                  Pioneered an AI-driven flashcard assistant using GPT-4 to transform learning for LIGN167 students. 
                  Features automated flashcard creation, personalized study experience, and spaced repetition algorithm.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Advanced AI for Biodiversity: Plant Specimen Classification</h4>
                <p className="text-gray-700 text-sm">
                  Developed ML models for categorizing 7.8M+ plant specimens at NYBG. Implemented VGG and ResNet50 
                  architectures, achieving 0.9676 accuracy and securing 22nd place out of 77 teams.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Telecommunications Disaster Impact Analysis</h4>
                <p className="text-gray-700 text-sm">
                  Collaborated with Accenture to analyze natural disaster impact on cellular towers across the US. 
                  Used unsupervised learning (K-Means, DBSCAN) and PCA for disaster preparedness strategies.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Predicting Hospital Discharge Type for Diabetes Patients</h4>
                <p className="text-gray-700 text-sm">
                  Analyzed 100K+ hospital admissions to predict discharge processes for diabetes patients. 
                  Applied Gradient Boosting and other ML techniques, achieving 82% accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="text-center bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Download?
            </h3>
            <p className="text-gray-600 mb-6">
              Get the complete version of my resume with detailed project descriptions and references.
            </p>
            <button 
              onClick={handleDownload}
              className="btn-primary text-lg px-8 py-3 inline-flex items-center"
            >
              <FaDownload className="mr-2" />
              Download PDF Resume
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
