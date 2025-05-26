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
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaRocket className="text-4xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1f3b73] mb-4 text-center">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              To democratize access to technology education and trading opportunities, enabling individuals to thrive in the digital economy.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
                <FaLightbulb className="text-4xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1f3b73] mb-4 text-center">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              To be the leading platform for technology education and trading, fostering innovation and financial empowerment worldwide.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8 text-center">Our Story</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Founded in 2023, CrypticX emerged from a vision to bridge the gap between traditional education and the rapidly evolving tech landscape. Our journey began with a simple yet powerful idea: to make technology education and trading accessible to everyone.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Today, we've grown into a comprehensive platform offering cutting-edge courses, professional trading tools, and a vibrant community of learners and traders. Our commitment to excellence and innovation continues to drive us forward.
            </p>
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8 text-center">Key Milestones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <FaUsers className="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Growth</h3>
                <p className="text-gray-600 dark:text-gray-400">10,000+ active members</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <FaChartLine className="text-3xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trading Success</h3>
                <p className="text-gray-600 dark:text-gray-400">$50M+ trading volume</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <FaAward className="text-3xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recognition</h3>
                <p className="text-gray-600 dark:text-gray-400">Industry awards & partnerships</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-700 mb-6">
                  {/* Add team member image here */}
                </div>
                <h3 className="text-2xl font-bold text-[#1f3b73] mb-2">John Doe</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Founder & CEO</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Visionary leader with 10+ years of experience in technology and finance.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-700 mb-6">
                  {/* Add team member image here */}
                </div>
                <h3 className="text-2xl font-bold text-[#1f3b73] mb-2">Jane Smith</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Head of Education</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Expert educator with a passion for making complex concepts accessible.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-700 mb-6">
                  {/* Add team member image here */}
                </div>
                <h3 className="text-2xl font-bold text-[#1f3b73] mb-2">Mike Johnson</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Trading Director</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Seasoned trader with expertise in both traditional and crypto markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1f3b73] mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform technology education and trading.
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}