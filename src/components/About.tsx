import React from 'react';
import { User, CalendarDays, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 aspect-square">
            <img
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Portrait of Venkat Dileep Banka"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              I'm <span className="text-blue-600 dark:text-blue-400">Venkat Dileep Banka</span>, a Full-Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer and AI Enthusiast with expertise in Android app development, web technologies, and machine learning. Currently pursuing B.Tech in CSE with a focus on Data Science at Gayatri Vidya Parishad College of Engineering.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With a perfect CGPA of 9.0 in my Full Stack Development Honor Degree, I've developed a strong foundation in both frontend and backend technologies. I'm particularly interested in AI/ML applications and have completed multiple internships, including positions at Google AI-ML and AWS Cloud Computing through AICTE.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Name</h4>
                  <p className="font-medium text-gray-900 dark:text-white">Venkat Dileep Banka</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Education</h4>
                  <p className="font-medium text-gray-900 dark:text-white">B.Tech CSE (2022–2026)</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="font-medium text-gray-900 dark:text-white">Prakasam, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Experience</h4>
                  <p className="font-medium text-gray-900 dark:text-white">AI-ML & Cloud Intern</p>
                </div>
              </div>
            </div>

            <a 
              href="https://drive.google.com/uc?export=download&id=1nqoMDPLWr86tp2iHphJ5hJqyED8dxM5A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
