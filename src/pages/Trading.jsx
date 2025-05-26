import React, { useState, useEffect } from 'react';
import { FaChartLine, FaShieldAlt, FaRobot, FaUsers, FaGlobe, FaChartBar, FaBuilding, FaNewspaper, FaBell, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import ContactButtons from '../components/ContactButtons';

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Professional Trading Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced trading strategies and tools to help you navigate the crypto markets with confidence.
          </p>
        </div>

        {/* Trading Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200 dark:border-blue-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-5 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaChartLine className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Technical Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Advanced tools and techniques for market analysis and predictions.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Advanced Charting</span>
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

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-200 dark:border-green-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-green-600 to-green-400 rounded-full p-5 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaRobot className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Automated Trading</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Algorithmic trading solutions for 24/7 market opportunities.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Trading Bots</span>
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

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-purple-200 dark:border-purple-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full p-5 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Risk Management</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Protect your investments with professional risk management.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Portfolio Protection</span>
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
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-red-200 dark:border-red-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-red-600 to-red-400 rounded-full p-5 shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaBuilding className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Brokerage Trading</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Professional brokerage services with competitive rates.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Professional Brokerage</span>
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
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-yellow-200 dark:border-yellow-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-full p-5 shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaNewspaper className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Fundamental Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              In-depth analysis of market fundamentals and trends.
            </p>
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
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-200 dark:border-indigo-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full p-5 shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaBell className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Signal Group</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Join our premium trading signals group for daily insights.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Real-time Signals</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Expert Analysis</span>
              </li>
            </ul>
            <div className="mt-6">
              <ContactButtons />
            </div>
          </div>
        </div>

        {/* Join Signal Group Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-12 mb-16 text-white shadow-2xl shadow-purple-500/20">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
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
