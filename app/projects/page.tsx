'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTimes } from 'react-icons/fa'

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Fl(AI)shcards - AI-Driven Learning Assistant',
      description: 'Pioneered an AI-driven flashcard assistant using GPT-4 to transform learning for LIGN167 students. Features automated flashcard creation, personalized study experience, spaced repetition algorithm, and intuitive Streamlit interface.',
      fullDescription: 'In my capstone project "Fl(AI)shcards" at UCSD, I pioneered an AI-driven flashcard assistant aimed at transforming the learning experience for LIGN167 students. By harnessing the power of GPT-4, this application not only automates the flashcard creation process but also personalizes the study experience. The app intelligently extracts texts from academic resources, ensuring that the flashcards are continually updated with the most relevant content. It dynamically generates question-and-answer pairings based on the course syllabus, organizes them by topic, and neatly stores them in a CSV format for efficient access.\n\nTo cater to individual study preferences, I integrated functionality that allows users to contribute custom questions and answers, enhancing the personalized learning journey. The user interface, crafted with the Streamlit framework, offers an intuitive and interactive experience, displaying flashcards with an option to reveal the answer on demand. It also features a sidebar for seamless topic navigation.\n\nA standout feature of "Fl(AI)shcards" is the integration of a spaced repetition algorithm, guided by a user rating system. This system helps to optimize the retention of information by determining the frequency of flashcard appearance, thereby adapting to the user\'s learning pace.\n\nDeveloping this project was both challenging and enlightening, particularly when it came to API integration and keeping up with the latest documentation. The iterative process of refining prompts and feedback with GPT-4 led to a significant improvement in the app\'s functionality and demonstrated the potential of close collaboration with AI in the realm of software development.',
      image: '/flash_cards.jpg',
      tags: ['AI/ML', 'Python', 'GPT-4', 'Streamlit', 'NLP'],
      github: null,
      live: null,
      date: '2024',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Advanced AI for Biodiversity: Plant Specimen Classification',
      description: 'Developed machine learning models for categorizing 7.8M+ plant specimens at NYBG. Implemented VGG and ResNet50 architectures with innovative image preprocessing techniques, achieving 0.9676 accuracy and securing 22nd place out of 77 teams.',
      fullDescription: 'In the Spring of 2024, I participated in the BTTAI x NYBG AI Studio, a collaborative initiative aimed at advancing biodiversity research through machine learning. This project, hosted in conjunction with Break Through Tech and the New York Botanical Garden (NYBG), challenged participants to develop machine learning models capable of categorizing an extensive collection of plant specimen images. Our goal was to streamline the analysis of over 7.8 million plant and fungal specimens housed at the NYBG, facilitating faster and more accurate biodiversity research.\n\nAs a key member of my team, I led efforts in implementing and fine-tuning advanced machine learning models, particularly focusing on the VGG and ResNet50 architectures. My primary contribution was the integration of innovative image preprocessing techniques, inspired by cutting-edge research from "Learning to Resize Images for Computer Vision Tasks" by Talebi and Milanfar. By adapting these methods, I developed a specialized resizing process that improved our model\'s ability to extract relevant features from the images, significantly boosting the accuracy and efficiency of our classifications.\n\nThroughout the competition, I experimented with various approaches to handle the dataset\'s complexity, which included a significant proportion of non-standard images. My strategies involved sophisticated data augmentation and adaptive resizing techniques that enhanced the model\'s generalization capabilities across unseen data. This not only allowed us to achieve a high score of 0.9676 but also helped us secure a commendable 22nd place out of 77 competing teams.\n\nThis project underscored the potential of integrating advanced computational techniques with traditional botanical research. The models and methodologies we developed are anticipated to set a foundation for future AI-driven ecological and botanical studies.',
      image: '/plant_specimen.jpg',
      tags: ['Computer Vision', 'Python', 'VGG', 'ResNet50', 'Deep Learning'],
      github: null,
      live: null,
      date: '2024',
      category: 'Computer Vision'
    },
    {
      id: 3,
      title: 'Telecommunications Disaster Impact Analysis',
      description: 'Collaborated with Accenture to analyze natural disaster impact on cellular towers across the US. Used unsupervised learning (K-Means, DBSCAN) and PCA to create predictive models for disaster preparedness and infrastructure resilience strategies.',
      fullDescription: 'I undertook a significant project in collaboration with Accenture, focusing on the impact of natural disasters on cellular towers across the United States. The project aimed to use unsupervised learning techniques for predictive analysis, creating a model that could inform disaster preparedness and infrastructure resilience strategies for a telecommunications client.\n\nWe processed and analyzed two key datasets: one detailing disaster declarations and another cataloging cellular towers, which included features like tower counts and locations. Through data cleaning and exploratory analysis, we enhanced the datasets by addressing missing data, standardizing variables, and enriching them with additional features such as disaster frequency, population density, and cellular tower types with specific vulnerabilities to natural disasters.\n\nFor the analytical approach, we decided on using clustering algorithms due to the lack of labels in our data. Starting with K-Means to establish baseline clusters, we then advanced to DBSCAN to better capture the complex spatial distributions of cellular towers, considering urban and rural density variations. Principal Component Analysis (PCA) was applied to manage the high dimensionality of our data, effectively reducing it while retaining 90% of the variance.\n\nOur findings were visually represented through maps, highlighting main clusters with distinct characteristics regarding tower durability, count, and disaster duration. These insights were pivotal for recommending tailored investment strategies to enhance the resilience of cellular infrastructure against natural disasters.',
      image: '/accenture-disaster-map.jpg',
      tags: ['Machine Learning', 'Python', 'K-Means', 'DBSCAN', 'PCA'],
      github: 'https://github.com/NilBeserler/Telecommunications_Disaster_Inquiry_Accenture',
      live: null,
      date: '2023-2024',
      category: 'Machine Learning'
    },
    {
      id: 4,
      title: 'Predicting Hospital Discharge Type for Diabetes Patients',
      description: 'Analyzed 100K+ hospital admissions to predict discharge processes for diabetes patients. Applied Gradient Boosting and other ML techniques, achieving 82% accuracy to enhance healthcare outcomes and reduce readmissions.',
      fullDescription: 'In the project "Predicting Discharge Type from Hospital for Diabetes Patients," our team delved into a dataset encompassing over 100,000 hospital admissions to understand and forecast discharge processes. This extensive dataset included a wide array of variables, such as patient demographics, hospital stay details, and various health indicators, setting the stage for a nuanced analysis leveraging state-of-the-art machine learning techniques.\n\nOur approach utilized a comprehensive suite of tools and algorithms to navigate and analyze the data. Python\'s powerful data manipulation libraries, Pandas and Scikit-learn, were instrumental in preprocessing and modeling efforts, enabling us to apply several predictive models to our dataset. Among these, Gradient Boosting emerged as the most effective, achieving an outstanding accuracy rate of 82%. This model\'s ability to decipher complex patterns and relationships in the data proved superior compared to other evaluated models, highlighting its robustness in handling multifaceted healthcare data.\n\nThe project aimed to enhance healthcare outcomes by predicting the type of discharge a patient might encounter, facilitating better post-care planning and potentially reducing the likelihood of readmissions. The high accuracy achieved by the Gradient Boosting model underscores the potential of machine learning in refining healthcare analytics, offering insights that can lead to more personalized patient care strategies and improved resource allocation within hospitals.',
      image: '/discahrge_type.jpg',
      tags: ['Healthcare Analytics', 'Python', 'Gradient Boosting', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/NilBeserler/Predicting-Discharge-Type-from-Hospital-for-Diabetes-Patients',
      live: null,
      date: '2023',
      category: 'Healthcare Analytics'
    },
    {
      id: 5,
      title: 'Part of Speech Tagging Using Structural Models',
      description: 'Explored deep learning methods for NLP grammatical tagging using Structural SVMs, HMMs, and Conditional Random Fields. Achieved 95% accuracy with CRF models on NLTK Treebank corpus, highlighting the effectiveness of structural models in sequential data.',
      fullDescription: 'In my project, "Part of Speech Tagging Using Structural Models," I explored the application of deep learning methods to enhance natural language processing, specifically focusing on grammatical tagging. By utilizing Structural Support Vector Machines, Hidden Markov Models, and Conditional Random Fields, I aimed to accurately categorize words in sentences according to their parts of speech. This study leveraged the NLTK\'s Treebank corpus, a linguistically parsed collection of sentences, to train and test the models.\n\nThrough experimentation, it was determined that Conditional Random Fields, with their ability to capture complex dependencies and utilize rich feature representations, outperformed the other models, achieving a 95% accuracy rate. This project not only highlighted the effectiveness of advanced structural models in handling sequential data but also underscored the importance of selecting the right model based on the task\'s specific requirements and the dataset\'s characteristics.\n\nThe research demonstrated how different structural models approach the same NLP task, providing valuable insights into the strengths and limitations of each approach. The high accuracy achieved with CRF models showcased the power of probabilistic graphical models in capturing linguistic patterns and dependencies within text data.',
      image: '/pos tagging.jpg',
      tags: ['NLP', 'Python', 'CRF', 'HMM', 'NLTK'],
      github: 'https://github.com/NilBeserler/POS_Tagging_Using_Structural_Models',
      live: null,
      date: '2023',
      category: 'NLP'
    },
    {
      id: 6,
      title: 'Financial Literacy Chatbot',
      description: 'Built a financial literacy chatbot using Flowise and LangChain with OpenAI embeddings stored in Pinecone. Implemented effective similarity searches and enhanced query response accuracy for improved user experience.',
      fullDescription: 'I collaborated with a student to build a financial literacy chatbot using Flowise and LangChain, embedding text data with OpenAI embeddings and storing them in Pinecone for effective similarity searches. This project focused on enhancing query response accuracy and user experience through advanced NLP techniques.\n\nThe chatbot was designed to provide educational content about financial literacy, helping users understand complex financial concepts through interactive conversations. By leveraging OpenAI\'s powerful embedding models, we were able to create a semantic search system that could understand user queries and retrieve the most relevant financial information.\n\nThe integration with Pinecone allowed for efficient storage and retrieval of vector embeddings, enabling the chatbot to quickly find relevant information from a large corpus of financial education materials. This approach significantly improved the user experience by providing accurate, contextually relevant responses to financial questions.\n\nThe project demonstrated the practical application of modern NLP technologies in educational contexts, showcasing how AI can be used to make complex topics more accessible and engaging for learners.',
      image: '/api/placeholder/400/250',
      tags: ['NLP', 'LangChain', 'OpenAI', 'Pinecone', 'Chatbot'],
      github: null,
      live: null,
      date: '2023-2024',
      category: 'NLP'
    },
    {
      id: 7,
      title: 'Image Recognizability Research',
      description: 'Conducted advanced research comparing CLIP, VGG19, and human metrics for image recognizability. Used R and Python for complex dataset wrangling and visualization, presenting findings to 20+ grad students with 25% improvement in comprehension.',
      fullDescription: 'I spearheaded advanced image recognizability research, quantified by successfully comparing CLIP, VGG19, and human metrics through complex dataset wrangling and data visualization using R and Python. This research project aimed to understand how different computer vision models perform compared to human perception in recognizing and categorizing images.\n\nThe study involved extensive data collection and preprocessing, working with large datasets of images and their corresponding human recognition scores. I implemented sophisticated analysis pipelines to compare the performance of state-of-the-art models like CLIP and VGG19 against human baseline metrics.\n\nPresented key findings to an audience of 20+ grad students, leading to a 25% improvement in comprehension of image recognizability metrics measured by poll ratings. The research provided valuable insights into the capabilities and limitations of current computer vision models when compared to human visual perception.\n\nI also conducted thorough literature reviews on computer vision models, fostering innovation, and leading feedback-driven meetings to drive progress in cross-functional teams. This project demonstrated my ability to bridge the gap between technical research and practical applications in computer vision.',
      image: '/CNN.jpg',
      tags: ['Computer Vision', 'Research', 'Python', 'R', 'CLIP', 'VGG19'],
      github: 'https://github.com/NilBeserler/FaceRecognition_CNN-COGS181_Final-',
      live: null,
      date: '2021-2022',
      category: 'Computer Vision'
    },
    {
      id: 8,
      title: 'Interactive Analytics Dashboards',
      description: 'Created interactive analytics dashboards for Oracle\'s Delete The Divide initiative, quantifying community impact data. Collaborated with executives to understand KPIs and leveraged Oracle Analytics Cloud for ML models including Binary-Classifier and Clustering.',
      fullDescription: 'I created interactive analytics dashboards by collaborating with Delete The Divide (DTD) Interns to quantify and share data on community impact, resulting in visually compelling and data-driven stories for stakeholders. This project was part of my internship at Oracle, where I worked on meaningful initiatives that used data science for social good.\n\nI communicated with DTD Executives to understand key performance indicators and effectively leveraged data insights to the organization\'s mission, ensuring meaningful and actionable visual narratives that influenced decision-making. The dashboards were designed to showcase the impact of various community programs and initiatives.\n\nI utilized SQL and Excel-like functions to support data ingestion, modeling, preparation, and enrichment; applied Oracle Analytics Cloud for machine learning models, leading to improved data-driven insights through Binary-Classifier, Clustering, Multi-Classifier, and Numeric Prediction models.\n\nThe project demonstrated how data visualization and analytics can be used to tell compelling stories about social impact, helping organizations understand the effectiveness of their programs and make data-driven decisions about future initiatives.',
      image: '/api/placeholder/400/250',
      tags: ['Data Visualization', 'Oracle Analytics', 'SQL', 'Dashboard', 'ML'],
      github: null,
      live: null,
      date: '2024',
      category: 'Data Visualization'
    }
  ]

  const categories = ['All', 'AI/ML', 'Computer Vision', 'Machine Learning', 'NLP', 'Healthcare Analytics', 'Data Visualization']

  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedTag)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore my portfolio of data science projects, machine learning models, and data visualization applications
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedTag(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="card overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && project.image !== '/api/placeholder/400/250' ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-blue-600"></div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaCalendarAlt className="mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center text-sm"
                      >
                        <FaGithub className="inline mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-sm"
                      >
                        <FaExternalLinkAlt className="inline mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{projects.length}</div>
                <div className="text-gray-600">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {projects.filter(p => p.live).length}
                </div>
                <div className="text-gray-600">Live Demos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {new Set(projects.flatMap(p => p.tags)).size}
                </div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new data science projects and challenges.
          </p>
          <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    {selectedProject.date}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Project Image */}
              <div className="mb-6">
                {selectedProject.image && selectedProject.image !== '/api/placeholder/400/250' ? (
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-to-br from-primary-400 to-blue-600 rounded-lg"></div>
                )}
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Description</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedProject.fullDescription}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center btn-primary"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
