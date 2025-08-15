'use client';

import { Github, Linkedin, Twitter, ArrowRight, Code, Zap, Coffee, Star, Award, Target } from 'lucide-react';
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
    <div className='relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 min-h-screen overflow-hidden'>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-slate-200/40 to-slate-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-1"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-br from-slate-300/40 to-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-2"></div>
      </div>

      {/* Professional Floating Icons */}
      <div className="absolute top-32 right-32 animate-bounce delay-1000">
        <Code className="w-8 h-8 text-slate-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-2000">
        <Zap className="w-7 h-7 text-amber-500 opacity-60" />
      </div>
      <div className="absolute top-48 left-48 animate-bounce delay-3000">
        <Coffee className="w-6 h-6 text-slate-500 opacity-60" />
      </div>
      <div className="absolute top-64 right-48 animate-bounce delay-500">
        <Star className="w-5 h-5 text-amber-400 opacity-50" />
      </div>

      <div className='relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center justify-between min-h-screen'>
        {/* Enhanced Text Content */}
        <div className={`lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-medium text-slate-600 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new opportunities
            </div>
            
            <p className='text-xl md:text-2xl text-slate-600 mb-3 font-medium'>
              👋 Hello, I'm
            </p>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 mb-6 leading-tight'>
              Godstime
            </h2>
          </div>
          
          <div className="h-20 mb-8">
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-500'>
              <span className="text-slate-700">&</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                {titles[currentTitle]}
              </span>
            </h1>
          </div>
          
          <p className='text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed'>
            I architect <span className="font-semibold text-slate-800 bg-amber-100/50 px-1 py-0.5 rounded">intelligent web solutions</span> that blend cutting-edge AI capabilities 
            with robust full-stack engineering. Transforming complex problems into 
            <span className="font-semibold text-slate-800 bg-slate-100 px-1 py-0.5 rounded"> elegant, scalable applications</span>.
          </p>
          
          {/* Professional Call to Action */}
          <div className='flex flex-col sm:flex-row items-center gap-6 mb-12'>
            <a 
              href="#contact" 
              className='group relative bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 overflow-hidden'
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Let's Build Something Amazing</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className='group text-slate-700 hover:text-slate-800 py-4 px-8 rounded-xl font-semibold transition-all duration-300 border-2 border-slate-300 hover:border-slate-400 hover:bg-white/80 backdrop-blur-sm hover:shadow-lg'
            >
              View My Work
            </a>
          </div>
          
          {/* Enhanced Social Links */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
            <span className="text-slate-600 font-medium">Connect with me:</span>
            <div className='flex gap-3'>
              <a 
                href="https://www.linkedin.com/in/godstime-america-078962239" 
                target="_blank" 
                rel="noopener noreferrer"
                className='group p-3 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1'
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://x.com/GodstimeAmeric1?t=gsZjh_r_TL2-AoYLRuAVUA&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className='group p-3 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1'
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a 
                href="https://github.com/Barclay-bank" 
                target="_blank" 
                rel="noopener noreferrer"
                className='group p-3 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-500 text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1'
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Professional Avatar Section */}
        <div className={`relative w-80 h-80 lg:w-96 lg:h-96 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Professional Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-400 via-amber-500 to-slate-400 animate-spin-slow p-1.5">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"></div>
          </div>
          
          {/* Professional Background Pattern */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/90 to-slate-100/80 backdrop-blur-sm shadow-2xl"></div>

          {/* Avatar Image with Professional Styling */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative group">
              <img
                src="/minato.jpg"
                alt="Godstime - Full Stack & AI Developer"
                className="w-52 h-52 lg:w-60 lg:h-60 rounded-full object-cover shadow-2xl border-4 border-white backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl"
              />
              {/* Professional Hover Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Professional Status Badges */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl px-4 py-2 shadow-lg animate-float">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-green-700">Available</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-50 to-orange-100 border-2 border-amber-200 rounded-2xl px-4 py-2 shadow-lg animate-float-delay-1">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <p className="text-sm font-semibold text-amber-700">5+ Years</p>
            </div>
          </div>

          {/* Skills Orbit */}
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 flex items-center justify-center animate-bounce delay-500">
              <span className="text-xs font-bold text-slate-700">AI</span>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 flex items-center justify-center animate-bounce delay-1000">
              <span className="text-xs font-bold text-slate-700">FS</span>
            </div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 flex items-center justify-center animate-bounce delay-1500">
              <Target className="w-5 h-5 text-slate-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-gradient-to-r from-slate-100 to-gray-100 h-1"></div>
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.9"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        @keyframes float-delay-1 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(-180deg); 
          }
        }
        @keyframes float-delay-2 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-25px) rotate(90deg); 
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float-delay-1 8s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;