import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Venkat Dileep Banka
              </span>
            </h1>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              A passionate <span className="text-blue-600 dark:text-blue-400 font-medium">Full-Stack Developer</span> and 
              <span className="text-purple-600 dark:text-purple-400 font-medium"> AI Enthusiast</span> creating innovative solutions 
              with modern technologies.
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
            >
              View My Work
            </button>
          </div>
          
          <div 
            className={`absolute bottom-10 transition-all duration-1000 delay-700 animate-bounce ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button 
              onClick={scrollToAbout}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;