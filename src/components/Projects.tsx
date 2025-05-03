import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Crop Disease Prediction App',
      description: 'A CNN-based AI application for plant disease detection using image processing and environmental data integration. Helps farmers identify crop diseases efficiently.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
      tags: ['Python', 'CNN', 'AI', 'Image Processing'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Heart Disease Prediction App',
      description: 'An Android ML application using Logistic Regression and Decision Trees to predict heart disease risk based on patient data and health metrics.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      tags: ['Android', 'Kotlin', 'ML', 'Healthcare'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Restaurant Sentiment Analysis',
      description: 'NLP project implementing Naive Bayes and Deep Learning for restaurant review classification and customer insight generation.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
      tags: ['Python', 'NLP', 'Deep Learning'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Zomato Restaurant App',
      description: 'Full-stack web application using FastAPI and React for restaurant listing and search functionality with a responsive front-end UI.',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
      tags: ['React', 'FastAPI', 'Full Stack'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filters = ['All', 'Python', 'ML', 'React', 'Android', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in AI/ML, mobile development,
            and full-stack web applications.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative group h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;