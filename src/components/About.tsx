'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Code, Cpu, Database, Globe, Server, Shield, Award, Users, Coffee, Zap, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const sectionRef = useRef(null);

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '3+', label: 'Years Experience', icon: TrendingUp },
    { number: '20+', label: 'Happy Clients', icon: Users },
    { number: '500+', label: 'Cups of Coffee', icon: Coffee }
  ];

  const expertiseAreas = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Modern web applications with React, Node.js, and scalable databases',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Seamlessly incorporate machine learning models into web applications',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Robust API development and microservices architecture',
      color: 'from-green-500 to-green-600'
    },
    // {
    //   icon: Globe,
    //   title: 'Cloud Deployment',
    //   description: 'Cloud-native applications with CI/CD pipelines',
    //   color: 'from-orange-500 to-orange-600'
    // },
    // {
    //   icon: Database,
    //   title: 'Data Engineering',
    //   description: 'Efficient data pipelines and analytics solutions',
    //   color: 'from-pink-500 to-pink-600'
    // },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Secure, optimized applications with best practices',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const achievements = [
    {
      metric: '40%',
      description: 'Increased user engagement with AI-powered recommendation system',
      icon: TrendingUp
    },
    {
      metric: '30%',
      description: 'Reduced support queries by integrating LLM capabilities',
      icon: Zap
    },
    {
      metric: '99.9%',
      description: 'Uptime achieved across deployed applications',
      icon: Shield
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 overflow-hidden" id="about" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center m-auto items-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-between bg-white/60 w-[100%] sm:w-[65%] backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
            {[
              { id: 'story', label: 'My Story' },
              { id: 'expertise', label: 'Expertise' },
              { id: 'achievements', label: 'Achievements' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* My Story Tab */}
          {activeTab === 'story' && (
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Enhanced Profile Image */}
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative group">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow p-1 opacity-60">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
                    </div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-80 h-80 m-4">
                      <div className="absolute inset-0 z-0">
                        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
                          <defs>
                            <linearGradient id="aboutBlobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.8}} />
                              <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 0.6}} />
                              <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.4}} />
                            </linearGradient>
                          </defs>
                          <path 
                            d="M48.5,-63.1C60.8,-55.2,67.4,-38.6,68.5,-23.3C69.6,-7.9,65.3,6.1,58.3,19.1C51.3,32.1,41.7,44.1,30.2,52.6C18.8,61.1,5.4,66.1,-9.2,69.2C-23.7,72.3,-39.3,73.5,-51.7,66.2C-64.1,58.9,-73.3,43,-76.4,26.7C-79.4,10.4,-76.3,-6.2,-70.4,-20.6C-64.5,-35,-55.8,-47.1,-43.6,-55.4C-31.3,-63.6,-15.7,-68.1,1.2,-69.6C18.2,-71.1,36.3,-69,48.5,-63.1Z" 
                            transform="translate(100 100)" 
                            fill="url(#aboutBlobGradient)"
                            className="animate-pulse"
                          />
                        </svg> */}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img
                          src="/minato.jpg"
                          alt="Godstime - Full Stack & AI Developer"
                          className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Content */}
                <div className="lg:w-2/3 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                      <span className="text-4xl">👋</span>
                      Nice to meet you!
                    </h3>
                    <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                      <p>
                        I'm a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with specialized expertise in <span className="font-semibold text-purple-600">AI integration</span>. 
                        My journey in tech started with a curiosity about how things work, which evolved into a deep love for creating digital solutions that make a real impact.
                      </p>
                      <p>
                        With over <span className="font-semibold text-green-600">3 years of experience</span> building production-grade applications, I bridge the gap 
                        between complex AI systems and user-friendly web interfaces. I believe in writing clean, maintainable code and creating experiences that users love.
                      </p>
                      <p>
                        When I'm not coding, you'll find me exploring the latest AI developments, contributing to open-source projects, or enjoying a good cup of coffee while planning my next big project.
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200/50">
                          <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                          <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expertise Tab */}
          {activeTab === 'expertise' && (
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200/50 h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Skills */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    'JavaScript/TypeScript', 'Python', 'React/Next.js', 'Node.js', 
                    'PyTorch', 'LLM Integration', 'REST',
                    'MongoDB','Microservices', 'Computer Vision', 'NLP'
                  ].map((skill, index) => (
                    <span 
                      key={skill} 
                      className="group bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200/50 text-center h-full">
                      <achievement.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                        {achievement.metric}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notable Projects */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Notable Achievements</h3>
                <div className="space-y-4">
                  {[
                    'Developed an AI-powered recommendation system that increased user engagement by 40%',
                    'Built and deployed 50+ web applications with React and Node.js',
                    'Integrated LLM capabilities into enterprise applications, reducing support queries by 30%',
                    'Led a team of 5 developers in building a scalable microservices architecture',
                    'Optimized database queries resulting in 60% faster application performance'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mt-2 mr-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;