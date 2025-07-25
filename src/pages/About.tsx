import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Programming Languages', icon: Code, skills: ['C', 'Python', 'Java', 'JavaScript', 'Dart'] },
    { name: 'AI/ML & Frameworks', icon: Server, skills: ['Machine Learning', 'TensorFlow', 'OpenCV', 'Deep Learning', 'NLP'] },
    { name: 'Web & Mobile Development', icon: Database, skills: ['React.js', 'HTML', 'CSS', 'Flutter', 'Node.js'] },
    { name: 'Tools & Databases', icon: Smartphone, skills: ['MongoDB', 'Git', 'VS Code', 'Figma', 'RoboFlow'] },
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate AI/ML Engineer and Full Stack Developer with expertise in Python, Flutter, and web technologies, 
            dedicated to creating intelligent solutions and impactful applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <p className="text-gray-600 leading-relaxed">
              I started my journey in technology with a curiosity for Artificial Intelligence and Machine Learning. 
              Currently pursuing B.Tech in AI & ML at Sasi Institute of Technology & Engineering, I've developed 
              expertise in both AI/ML and full-stack development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My passion lies in solving complex problems through machine learning models, creating intelligent 
              applications with Flutter, and building responsive web solutions. I believe in continuous learning 
              and have completed multiple internships and certifications in AI/ML and development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new AI technologies, contributing to projects, 
              and participating in workshops and hackathons to enhance my skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="AI/ML Development"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-600 text-sm">{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;