import React, { useState, useEffect } from 'react';
import { FaChartLine, FaShieldAlt, FaRobot, FaUsers, FaGlobe, FaChartBar, FaBuilding, FaNewspaper, FaBell, FaWhatsapp, FaTelegram } from 'react-icons/fa';

function Trading() {
  // 5 banners for trading
  const banners = [
    {
      id: 1,
      title: "Real-Time Market Analysis",
      description: "Stay ahead with our up-to-the-minute crypto market insights.",
      bgColor: "from-blue-900 to-purple-900",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      title: "Accurate Trading Signals",
      description: "Get high-quality, actionable trading signals from experts.",
      bgColor: "from-emerald-800 to-teal-900",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      title: "Risk Management Strategies",
      description: "Protect your investments with our proven risk management.",
      bgColor: "from-indigo-900 to-violet-900",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 4,
      title: "Personal Mentorship",
      description: "One-on-one guidance from professional traders.",
      bgColor: "from-purple-900 to-pink-900",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 5,
      title: "Premium Trading Community",
      description: "Join a vibrant community of successful crypto traders.",
      bgColor: "from-blue-800 to-cyan-900",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1000",
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
    <div className="min-h-screen bg-white dark:bg-dark text-black dark:text-white transition-all">
      {/* Banner Slider */}
      <div className="relative h-[60vh] w-full overflow-hidden mb-12">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentBanner ? 'bg-secondary' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f3b73] mb-6">
            Professional Trading Solutions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced trading strategies and tools to help you navigate the crypto markets with confidence.
          </p>
        </div>

        {/* Trading Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaChartLine className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Technical Analysis</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Advanced Charting</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Pattern Recognition</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Market Indicators</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaRobot className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Automated Trading</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Trading Bots</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Strategy Automation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>24/7 Monitoring</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaShieldAlt className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Risk Management</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Portfolio Protection</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Stop-Loss Strategies</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Position Sizing</span>
              </li>
            </ul>
          </div>

          {/* Brokerage Trading */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaBuilding className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Brokerage Trading</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Professional Brokerage</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Low Trading Fees</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Secure Trading Platform</span>
              </li>
            </ul>
          </div>

          {/* Fundamental Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaNewspaper className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Fundamental Analysis</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Market Research</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Project Analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>News Impact Analysis</span>
              </li>
            </ul>
          </div>

          {/* Signal Group */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaBell className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] mb-4 text-center">Signal Group</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Real-time Signals</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Expert Analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Community Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Join Signal Group Section */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Signal Group</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get access to real-time trading signals, expert analysis, and a supportive community of traders.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Free Trial</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>3 Days Access</li>
                  <li>Basic Signals</li>
                  <li>Community Chat</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Monthly</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Full Access</li>
                  <li>Premium Signals</li>
                  <li>24/7 Support</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Yearly</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Best Value</li>
                  <li>All Premium Features</li>
                  <li>Priority Support</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://wa.me/353894666666"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaWhatsapp className="text-2xl" />
                WhatsApp
              </a>
              <a
                href="https://t.me/+353894666666"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0088cc] hover:bg-[#006699] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaTelegram className="text-2xl" />
                Telegram
              </a>
            </div>
            <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Join Now
            </button>
          </div>
        </div>

        {/* Trading Packages */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Trading Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-gray-300 mb-4">Perfect for beginners</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Basic Analysis Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Market Updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Community Access</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm transform scale-105">
              <div className="bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-gray-300 mb-4">For serious traders</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Advanced Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Trading Bots</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>1-on-1 Mentoring</span>
                </li>
              </ul>
              <button className="w-full bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-300 mb-4">For institutions</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>API Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Dedicated Support</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8">Why Choose Our Trading Services?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <FaChartBar className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-400">Consistent performance track record</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-3xl text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
              <p className="text-gray-600 dark:text-gray-400">Advanced security measures</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <FaUsers className="text-3xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-400">Professional traders & analysts</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                <FaGlobe className="text-3xl text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
              <p className="text-gray-600 dark:text-gray-400">Access to all major markets</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust our platform for their trading needs.
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trading;
