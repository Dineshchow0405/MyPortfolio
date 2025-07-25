import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Attendance App',
      description: 'An app which stores the attendance log and the status of employees working days in a month also for requesting leaves in the same place.',
      image: 'https://i.pinimg.com/736x/15/a5/81/15a5815382871c82e1273fc649fcf986.jpg',
      technologies: ['Dart', 'Flutter', 'Json', 'Figma'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Dineshchow0405/AttendanceApp',
      date: 'Jun 2025'
    },
    {
      id: 2,
      title: 'My Portfolio',
      description: 'Full-stack based portfolio application with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Features include homepage, aboutMe, education, certificates, internships and projects.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com',
      date: 'Jun 2025'
    },
    {
      id: 3,
      title: 'Object Detection Using Machine Learning',
      description: 'Built a machine learning model to classify images using deep learning techniques. Achieved 95% accuracy on test dataset using CNN architecture.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'RoboFlow'],
      liveUrl: '#',
      githubUrl: 'https://github.com',
      date: 'May 2024'
    },
    {
      id: 4,
      title: 'Telegram Bot For Weather Prediction',
      description: 'An AI driven bot for predicitong weather report across cities.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Python', 'Json', 'TeleBot', 'NLP'],
      liveUrl: '#',
      githubUrl: 'https://colab.research.google.com/drive/1YkZj4I5qE6HRvWsA8kUghGuZmzpm72wK',
      date: 'Jun 2024'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development 
            and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;