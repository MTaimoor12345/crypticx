import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaCode, FaChartLine, FaUsers, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

export default function Academy() {
  // 5 banners for academy
  const banners = [
    {
      id: 1,
      title: "Learn Programming",
      description: "Master web, mobile, and blockchain development.",
      bgColor: "from-blue-900 to-purple-900",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      title: "Trading & Crypto Fundamentals",
      description: "Understand the world of trading and cryptocurrencies.",
      bgColor: "from-emerald-800 to-teal-900",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      title: "Mentorship Programs",
      description: "Get guidance from industry experts and mentors.",
      bgColor: "from-indigo-900 to-violet-900",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 4,
      title: "Workshops & Webinars",
      description: "Participate in hands-on workshops and live webinars.",
      bgColor: "from-purple-900 to-pink-900",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 5,
      title: "Career Support",
      description: "Get help with placements, interviews, and career growth.",
      bgColor: "from-blue-800 to-cyan-900",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000",
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
      {/* Coming Soon Message */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full">
                <FaGraduationCap className="text-6xl text-primary dark:text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Academy Coming Soon
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              We're working hard to bring you comprehensive learning resources. Our academy will feature expert-led courses, interactive workshops, and hands-on projects to help you master new skills.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What to Expect
              </h2>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Expert-led courses in programming, trading, and blockchain technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Interactive workshops and live sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Hands-on projects and real-world applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Certification programs and career guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     
 


      
    </div>
  );
}
