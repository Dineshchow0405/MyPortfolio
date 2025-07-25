import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
      institution: 'Sasi Institute Of Technology & Engineering, Tadepalligudem',
      duration: '2022 - 2026',
      location: 'Andhra Pradesh, India',
      gpa: '8.2/10.0',
      description: 'Specialized in Artificial Intelligence & Machine Learning. Completed coursework in algorithms, database systems, machine learning, and software development.',
      coursework: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Machine Learning',
        'Artificial Intelligence',
        'Web Development',
        'Mobile App Development',
        'Cloud Computing',
        'Deep Learning'
      ],
      achievements: [
        'Maintaining CGPA of 8.2/10.0',
        'Active participant in AI/ML workshops and seminars',
        'Completed multiple internships in AI/ML domain',
        'Developed several AI/ML projects and applications'
      ],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      degree: 'Higher Secondary Education (12th)',
      institution: 'Sasi Junior College, Tanuku',
      duration: '2020 - 2022',
      location: 'Andhra Pradesh, India',
      gpa: '90.3%',
      description: 'Science stream with Mathematics, Physics and Chemistry. Achieved excellent grades in all subjects.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Computer Science'
      ],
      achievements: [
        'Achieved 90.3% in board examinations',
        'Excellent performance in Mathematics and Science subjects',
        'Active participation in college activities',
        'Secured admission in B.Tech AI & ML program'
      ],
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      degree: 'Secondary Education (10th)',
      institution: 'Roots School Of Essential Faculties, Tanuku',
      duration: '2017 - 2020',
      location: 'Andhra Pradesh, India',
      gpa: '97%',
      description: 'Completed with distinction in all subjects. Active participant in various academic and extracurricular activities.',
      coursework: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English',
        'Hindi'
      ],
      achievements: [
        'Achieved 97% in board examinations',
        'School topper in Mathematics',
        'Active participant in science exhibitions',
        'Leadership roles in school activities'
      ],
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const onlineCourses = [
    {
      title: 'AWS Cloud Foundation',
      platform: 'Amazon Web Services',
      completion: '2024',
      skills: ['Cloud Architecture', 'AWS Services', 'Security']
    },
    {
      title: 'Machine Learning Specialization',
      platform: 'AWS Academy',
      completion: '2024',
      skills: ['Machine Learning', 'Python', 'TensorFlow']
    },
    {
      title: 'AI For Students',
      platform: 'Next Wave',
      completion: '2024',
      skills: ['AI', 'Prolog', 'NLP']
    },
    {
      title: 'Flutter Development',
      platform: 'Digitalex Solutions',
      completion: '2025',
      skills: ['Flutter', 'Dart', 'Mobile Development']
    },
    {
      title: 'Full Stack Web Development',
      platform: 'SITE ACM Student Chapter',
      completion: '2024',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js']
    },
    {
      title: 'Ethical Hacking & Cyber Security',
      platform: 'Supraja Technologies',
      completion: '2024',
      skills: ['Penetration Testing', 'Network Security', 'Cryptography']
    },
    {
      title: 'AI-ML Virtual Internship',
      platform: 'EduSkills',
      completion: '2023',
      skills: ['Machine Learning', 'CNN', 'NLP']
    },
    {
      title: 'National Voluntary Blood Donation',
      platform: 'Government Blood Bank',
      completion: '2024',
      skills: ['Volunteerism', 'Health Awareness', 'Social Responsibility']
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My educational journey and continuous learning through formal education and 
            professional development courses.
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Formal Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <div className="flex items-center text-blue-600 font-medium mb-2">
                          <GraduationCap size={18} className="mr-2" />
                          {edu.institution}
                        </div>
                      </div>
                      <div className="flex flex-col text-gray-500 text-sm">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{edu.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                        <ul className="space-y-1">
                          {edu.coursework.map((course, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Continuous Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {onlineCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                  <span className="text-sm text-gray-500">{course.completion}</span>
                </div>
                <p className="text-blue-600 font-medium mb-4">{course.platform}</p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;