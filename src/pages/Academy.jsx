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
    <div className="min-h-[calc(100vh-80px)] bg-white dark:bg-dark text-black dark:text-white transition-all">
      {/* Coming Soon Message */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                <FaGraduationCap className="text-5xl text-primary dark:text-secondary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're working hard to bring you comprehensive learning resources. Our academy will feature expert-led courses, interactive workshops, and hands-on projects to help you master new skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
