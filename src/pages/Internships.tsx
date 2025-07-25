import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: 'Pramukesh And Co',
      position: 'Flutter Developer Intern',
      duration: 'May 2025 - Jul 2025',
      location: 'Velpuru, Andhra Pradesh',
      description: 'As a Flutter Developer Intern at Pramukesh and Co, I was responsible for building cross-platform mobile applications using Flutter and Dart. During the internship, I gained hands-on experience in UI/UX design, Firebase integration, and backend communication. I concluded the internship by developing a production-level Attendance Management App, inspired by apps like PagarBook, designed to simplify employee attendance tracking and management for small businesses.',
      achievements: [
        'Developed responsive and reusable UI components using Flutter and Dart.',
        'Built features such as user registration, daily check-in/check-out, and monthly attendance reports.',
        'Conducted app testing and debugging across Android devices to ensure performance and reliability.',
        'Collaborated with mentors and team members via Git and version control systems.'
      ],
      technologies: ['Flutter', 'Dart', 'MaterialApp', 'Figma', 'VS Code'],
      companyLogo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      companyUrl: '#'
    },
    {
      id: 2,
      company: 'AIMERS Society',
      position: 'AI Intern',
      duration: 'May 2024 - Jul 2024',
      location: 'Remote',
      description: 'Worked on various AI tools for predictive analytics(Power BI) and data visualization(Object Detection). Analyzed large datasets for predictive weather forecasting.',
      achievements: [
        'Developed machine learning models for Object Detection',
        'Created data visualizations using Python and Tableau',
        'Performed statistical analysis on large datasets',
        'Made analytics on weather forecasting using bot'
      ],
      technologies: ['Python', 'Pandas', 'Json', 'NLP', 'Yolo'],
      companyLogo: 'https://media.licdn.com/dms/image/v2/C560BAQHuJJtpXYm6Nw/company-logo_200_200/company-logo_200_200/0/1634191812277?e=2147483647&v=beta&t=4CpLbMCf8eJuAy9R_D0oSxk9Emv7yRwwK2rsu3TQyDA',
      companyUrl: '#'
    },
    {
      id: 3,
      company: 'LearnWik Solutions Pvt Ltd',
      position: 'AIML Intern',
      duration: 'Apr 2023 - Jun 2023',
      location: 'Bengaluru, India',
      description: 'Developed and implementation of AI-Based Facial Recognition system.',
      achievements: [
        'Achieved 98.7% face recognition accuracy across diverse demographics using a custom-trained deep learning model optimized with transfer learning and data augmentation techniques.',
        'Reduced face detection and verification time by 40% by implementing real-time inference with model quantization and GPU acceleration, enabling smooth performance on edge devices.',
        'Successfully deployed the system for secure access control in a live environment, managing over 5,000 user profiles.'
      ],
      technologies: ['Deep Learning', 'Python', 'CNN', 'RoboFlow', 'Git'],
      companyLogo: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
      companyUrl: '#'
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Internships</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience gained through internships at innovative companies, 
            where I contributed to real-world projects and learned industry best practices.
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <img
                      src={internship.companyLogo}
                      alt={internship.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{internship.position}</h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <a
                          href={internship.companyUrl}
                          className="flex items-center hover:text-blue-600 transition-colors"
                        >
                          <Briefcase size={18} className="mr-2" />
                          {internship.company}
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end text-gray-500 text-sm mt-2 sm:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {internship.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{internship.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Internships;