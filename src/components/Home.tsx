'use client';

import { Github, Linkedin, Twitter, ArrowRight, Code, Zap, Coffee } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    "Full Stack Developer",
    "AI Specialist", 
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTitle(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 right-32 animate-bounce delay-1000">
        <Code className="w-6 h-6 text-blue-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-2000">
        <Zap className="w-5 h-5 text-purple-400 opacity-60" />
      </div>
      <div className="absolute top-48 left-48 animate-bounce delay-3000">
        <Coffee className="w-4 h-4 text-indigo-400 opacity-60" />
      </div>

      <div className='relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen'>
        {/* Text Content */}
        <div className={`lg:w-1/2 mb-10 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <p className='text-lg md:text-xl text-gray-600 mb-2 font-medium'>
              👋 Hello there! I'm
            </p>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4 leading-tight'>
              Godstime
            </h2>
          </div>
          
          <div className="h-16 mb-8">
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-500'>
              <span className="text-gray-700">&</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {titles[currentTitle]}
              </span>
            </h1>
          </div>
          
          <p className='text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed'>
            I architect <span className="font-semibold text-blue-600">intelligent web solutions</span> that blend cutting-edge AI capabilities 
            with robust full-stack engineering. Transforming complex problems into 
            <span className="font-semibold text-purple-600"> elegant, scalable applications</span>.
          </p>
          
          {/* Enhanced Call to Action */}
          <div className='flex flex-col sm:flex-row items-center gap-6 mb-12'>
            <a 
              href="#contact" 
              className='group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2'
            >
              Let's Build Something Amazing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#portfolio" 
              className='group text-gray-700 hover:text-blue-600 py-4 px-8 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 hover:bg-white/50 backdrop-blur-sm'
            >
              View My Work
            </a>
          </div>
          
          {/* Enhanced Social Links */}
          <div className='flex items-center gap-1'>
            <span className="text-gray-600 mr-4 font-medium">Connect with me:</span>
            <div className='flex gap-2'>
              <a 
                href="www.linkedin.com/in/godstime-america-078962239" 
                target="_blank" 
                rel="noopener noreferrer"
                className='group p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg'
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/GodstimeAmeric1?t=gsZjh_r_TL2-AoYLRuAVUA&s=08 " 
                target="_blank" 
                rel="noopener noreferrer"
                className='group p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg'
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com/Barclay-bank" 
                target="_blank" 
                rel="noopener noreferrer"
                className='group p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-gray-400 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg'
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Avatar Section */}
        <div className={`relative w-80 h-80 lg:w-96 lg:h-96 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
          </div>
          
          {/* Enhanced Blob Background */}
          <div className="absolute inset-4 z-0">
            {/* <svg 
              viewBox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full animate-pulse"
            >
              <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.4}} />
                </linearGradient>
              </defs>
              <path 
                d="M48.5,-63.1C60.8,-55.2,67.4,-38.6,68.5,-23.3C69.6,-7.9,65.3,6.1,58.3,19.1C51.3,32.1,41.7,44.1,30.2,52.6C18.8,61.1,5.4,66.1,-9.2,69.2C-23.7,72.3,-39.3,73.5,-51.7,66.2C-64.1,58.9,-73.3,43,-76.4,26.7C-79.4,10.4,-76.3,-6.2,-70.4,-20.6C-64.5,-35,-55.8,-47.1,-43.6,-55.4C-31.3,-63.6,-15.7,-68.1,1.2,-69.6C18.2,-71.1,36.3,-69,48.5,-63.1Z" 
                transform="translate(100 100)" 
                fill="url(#blobGradient)"
              />
            </svg> */}
          </div>

          {/* Avatar Image with Enhanced Styling */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative group">
              <img
                src="/minato.jpg"
                alt="Godstime - Full Stack & AI Developer"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-2xl border-4 border-white/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Floating Skills Badge */}
          <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 animate-bounce">
            <p className="text-sm font-semibold text-gray-700">🚀 Available for work</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.7"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;