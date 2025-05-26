import React from 'react';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaAward, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-black dark:text-white transition-all">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CrypticX</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering the future of technology through innovation, education, and community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200 dark:border-blue-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-5 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaRocket className="text-4xl text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center text-lg">
              To democratize access to technology education and trading opportunities, enabling individuals to thrive in the digital economy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-purple-200 dark:border-purple-800 group">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full p-5 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:rotate-12 w-24 h-24 mx-auto flex items-center justify-center">
                <FaLightbulb className="text-4xl text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1f3b73] dark:text-white mb-4 text-center">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center text-lg">
              To be the leading platform for technology education and trading, fostering innovation and financial empowerment worldwide.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8 text-center">Our Story</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl border border-indigo-200 dark:border-indigo-800">
            <div className="relative">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Founded in 2023, CrypticX emerged from a vision to bridge the gap between traditional education and the rapidly evolving tech landscape. Our journey began with a simple yet powerful idea: to make technology education and trading accessible to everyone.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Today, we've grown into a comprehensive platform offering cutting-edge courses, professional trading tools, and a vibrant community of learners and traders. Our commitment to excellence and innovation continues to drive us forward.
              </p>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8 text-center">Key Milestones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200 dark:border-blue-800 group">
              <div className="text-center">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-12 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1f3b73] dark:text-white mb-2">Community Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">10,000+ active members</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-200 dark:border-green-800 group">
              <div className="text-center">
                <div className="bg-gradient-to-tr from-green-600 to-green-400 rounded-full p-4 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:rotate-12 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1f3b73] dark:text-white mb-2">Trading Success</h3>
                <p className="text-gray-600 dark:text-gray-300">$50M+ trading volume</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-purple-200 dark:border-purple-800 group">
              <div className="text-center">
                <div className="bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full p-4 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:rotate-12 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <FaAward className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1f3b73] dark:text-white mb-2">Recognition</h3>
                <p className="text-gray-600 dark:text-gray-300">Industry awards & partnerships</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200 dark:border-blue-800 group">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-3 mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-5xl text-white font-bold">JD</div>
                </div>
                <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-2">John Doe</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Visionary leader with 10+ years of experience in technology and finance.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-purple-200 dark:border-purple-800 group">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:rotate-3 mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-5xl text-white font-bold">JS</div>
                </div>
                <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-2">Jane Smith</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">Head of Education</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Expert educator with a passion for making complex concepts accessible.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-200 dark:border-green-800 group">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-green-600 to-green-400 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:rotate-3 mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-5xl text-white font-bold">MJ</div>
                </div>
                <h3 className="text-2xl font-bold text-[#1f3b73] dark:text-white mb-2">Mike Johnson</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">Trading Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Seasoned trader with expertise in both traditional and crypto markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of our mission to transform technology education and trading.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}