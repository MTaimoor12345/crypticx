import React, { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaGraduationCap, FaCode, FaRobot, FaUsers } from 'react-icons/fa';

function Home() {
  const banners = [
    {
      id: 1,
      title: "Innovative Tech Solutions",
      description: "Building cutting-edge technology for tomorrow's challenges",
      bgColor: "from-blue-900 to-purple-900",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      buttonText: "Explore Services",
      icon: <FaCode className="text-6xl" />
    },
    {
      id: 2,
      title: "Expert Crypto Trading",
      description: "Navigate the crypto market with confidence and expertise",
      bgColor: "from-emerald-800 to-teal-900",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000",
      buttonText: "Trading Solutions",
      icon: <FaChartLine className="text-6xl" />
    },
    {
      id: 3,
      title: "Learn and Grow",
      description: "Join our academy and master the skills of tomorrow",
      bgColor: "from-indigo-900 to-violet-900",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
      buttonText: "Join Academy",
      icon: <FaGraduationCap className="text-6xl" />
    },
    {
      id: 4,
      title: "Blockchain Development",
      description: "Secure, transparent, and innovative blockchain solutions",
      bgColor: "from-purple-900 to-pink-900",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1000",
      buttonText: "Discover Blockchain",
      icon: <FaRobot className="text-6xl" />
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI technology",
      bgColor: "from-blue-800 to-cyan-900",
      image: "https://images.unsplash.com/photo-1677442135136-760c813029fb?auto=format&fit=crop&q=80&w=1000",
      buttonText: "AI Solutions",
      icon: <FaRocket className="text-6xl" />
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-black dark:text-white transition-all w-full overflow-x-hidden">
      {/* Banner Slider */}
      <div className="relative h-[60vh] sm:h-[70vh] w-screen overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`relative h-full bg-gradient-to-r ${banner.bgColor}`}>
              {/* Overlay Image */}
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                <div className="transform hover:scale-110 transition-transform duration-300 mb-4 sm:mb-8">
                  {React.cloneElement(banner.icon, { className: 'text-5xl sm:text-6xl text-white' })}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-center animate-fade-in px-2 text-white">
                  {banner.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 max-w-2xl text-center animate-fade-in-delay px-4 text-white/90">
                  {banner.description}
                </p>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-delay-2 text-sm sm:text-base">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-secondary scale-125' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center z-20 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white opacity-70" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12">
        {/* Section Heading and Intro */}
        <div className="text-center mb-8 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3b73] mb-3 sm:mb-4 tracking-wide">
            Our Core Divisions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We empower innovation, trading, and learning through our specialized divisions. Explore what makes us unique!
          </p>
        </div>

        {/* Attractive Divisions Section */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Tech Division */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-blue-200 dark:border-blue-800 group">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-4 sm:p-6 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-12">
                <FaCode className="text-4xl sm:text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1f3b73] mb-3 sm:mb-4 text-center">Tech Division</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4 sm:mb-6 text-sm sm:text-base">
              Building innovative tech solutions for tomorrow's challenges.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✓</span>
                <span>Web Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✓</span>
                <span>Mobile Apps</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✓</span>
                <span>AI Solutions</span>
              </li>
            </ul>
          </div>

          {/* Trading Division */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-200 dark:border-green-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-green-600 to-green-400 rounded-full p-6 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:rotate-12">
                <FaChartLine className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Trading Division</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Expert crypto trading insights and strategies for success.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Market Analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Trading Signals</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Risk Management</span>
              </li>
            </ul>
          </div>

          {/* Academy */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-purple-200 dark:border-purple-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full p-6 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:rotate-12">
                <FaGraduationCap className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Academy</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Empowering the next generation through education and mentorship.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-purple-500">✓</span>
                <span>Programming</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-500">✓</span>
                <span>Trading Skills</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-500">✓</span>
                <span>Career Support</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Stats Section */}
        <div className="w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-4 sm:p-6 md:p-8 mb-12 sm:mb-16 text-white">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">10K+</div>
              <p className="text-sm sm:text-base text-gray-300">Active Students</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">50M+</div>
              <p className="text-sm sm:text-base text-gray-300">Trading Volume</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">100+</div>
              <p className="text-sm sm:text-base text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">95%</div>
              <p className="text-sm sm:text-base text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3b73] mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join our community and take the first step towards your success in technology and trading.
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;