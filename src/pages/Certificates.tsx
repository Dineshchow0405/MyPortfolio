import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'AWS Cloud Foundation',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
      description: 'Comprehensive certification covering AWS cloud foundations.',
      image: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
      credentialUrl: 'https://drive.google.com/file/d/1WZb_ashfD29Hd-TsgSoOylV7HLBvVN0U/view?usp=sharing',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization']
    },
    {
      id: 2,
      title: 'AI For Students',
      issuer: 'Next Wave',
      date: 'Jul 2024',
      description: 'Begineer-level certification for developing Generative AI model applications on Using Prolog.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialUrl: 'https://drive.google.com/file/d/1m9PqGByB3r-IaEuOeHqSw3lUMQ00fUeb/view?usp=sharing',
      skills: ['Prolog', 'Scripting', 'Prompting', 'NLP']
    },
    {
      id: 3,
      title: 'Machine Learning Specialization',
      issuer: 'Amazon Web Services',
      date: 'Feb 2024',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and deep learning.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialUrl: 'https://drive.google.com/file/d/14BberOficuwPK8BG-s2GOYgXxOpss8O3/view?usp=drive_link',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks']
    },
    {
      id: 4,
      title: 'AI-ML Virtual Internship',
      issuer: 'EduSkills',
      date: 'Mar 2023',
      description: 'AIML Virtual Internship in the under of EduSkills was done with the help of AWS in learning through AI models.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialUrl: 'https://drive.google.com/file/d/1h2EjDVa-9mLNJUwlnM0sW3477DbtOYRX/view?usp=sharing',
      skills: ['Machine Learning', 'CNN', 'NLP', 'Python']
    },
    {
      id: 5,
      title: 'AWS Academy Data Engineering',
      issuer: 'AWS Academy',
      date: 'Feb 2024',
      description: 'A Begineer level Data Engineering Workshop in the under of AWS Academy.',
      image: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
      credentialUrl: 'https://drive.google.com/file/d/1Xdd1FcsSc3HulfdRbhi-F1834CRizYUF/view?usp=sharing',
      skills: ['DataStorage', 'DataProcessing', 'WareHousing', 'DatStreaming']
    },
    {
      id: 6,
      title: 'Artificial Intelligence',
      issuer: 'LearnWik Solutions Pvt. Ltd.',
      date: 'Jun 2023',
      description: 'Comprehensive AI certification covering machine learning algorithms and implementation.',
      image: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
      credentialUrl: 'https://drive.google.com/file/d/1vvNaZ2pcxvKPg9WBDLI34rOjXKDmQHOB/view?usp=sharing',
      skills: ['AI', 'Python', 'Prolog', 'ML']
    },
     {
        id: 7,
        title: 'Ethical Hacking & Cyber Security Workshop',
        issuer: 'Supraja Technologies',
        date: 'Oct 2024',
        validUntil: 'LifeTime',
        credentialId: 'CEH-SUP-2024-007',
        description: 'Comprehensive certification covering ethical hacking methodologies and cybersecurity practices.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOojUxu3gswoJdWkPItiyF0lXRJaOBmMgkUg&s',
        skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Cryptography'],
        
    },
    {
        id: 8,
        title: 'AI Internship',
        issuer: 'LearnWik Solutions Pvt. Ltd.',
        date: 'Jun 2023',
        validUntil: 'Lifetime',
        credentialId: 'LW01052',
        description: 'An Internship done on AI under LearnWik Solutions during the period of April to June.',
        image: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
        skills: ['AI', 'Prolog', 'Python', 'NumPy', 'Matplotlib'],
        
    },
    {
        id: 9,
        title: 'Flutter Developer Intern',
        issuer: 'Pramukesh & Co',
        date: 'Jul 2025',
        validUntil: 'LifeTime',
        credentialId: 'FLT-DART-2025-009',
        description: 'Development of android app using Flutter and dart technologies during May-July.',
      image: 'https://technobrains.io/wp-content/uploads/2021/07/flutter-Featured-Blog-Image2.jpg',
      skills: ['Dart', 'Flutter', 'UI/UX Design', 'Project Management'],
    },
    {
        id: 10,
        title: 'National Voluntary Blood Donation',
        issuer: 'Government Blood Bank',
        date: 'Oct 2024',
        validUntil: 'LifeTime',
        credentialId: '54/WG/AP/1997/BB/R',
        description: 'A Blood Donation camp was held in our college, As a active social responcible person I have donated my blood for the needy people.',
        image: 'https://pbs.twimg.com/media/DoadLkdXsAEHb0m.jpg',
        skills: ['Volunteerism', 'Health Awareness', 'Social Media', 'Interpersonal Skills'],
    },
    {
      id: 11,  
      title: 'Full Stack Web Development Bootcamp',
        issuer: 'SITE ACM Student Chapter',
        date: 'Mar 2024',
        validUntil: 'Lifetime',
        credentialId: 'SITE-ACM-2024-011',
        description: 'Intensive bootcamp covering full-stack web development with modern technologies.',
        image: 'https://iiitkottayam.ac.in/data/images/info/logoacm.png',
        skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Database Design'],
        },
    {
      id: 12,  
      title: 'Flutter Development Workshop',
        issuer: 'Digitalex Solutions',
        date: 'Mar 2025',
        validUntil: 'Lifetime',
        credentialId: 'DIGITALEX-FLUTTER-2025-012',
        description: 'Fundamental certification covering user interface and user experience on App Development.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwepDfPLlopNEirYcVJiTiP3M_2vE3yxW8LQ&s',
        skills: ['Flutter', 'Dart', 'UI/UX Design', 'Json'],
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Certificates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My continuous learning journey through professional certifications and specialized courses 
            in web development technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <Award className="text-yellow-500 mr-2" size={24} />
                      <h3 className="text-xl font-bold text-gray-900">{certificate.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {certificate.date}
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-medium mb-3">{certificate.issuer}</p>
                  <p className="text-gray-600 mb-4">{certificate.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={certificate.credentialUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Credential
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

export default Certificates;