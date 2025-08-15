'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Code, Cpu, Database, Globe, Server, Shield, Award, Users, Coffee, Zap, TrendingUp, Target, Rocket, Layers, CpuIcon } from 'lucide-react';

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
      color: 'from-slate-600 to-slate-800'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Seamlessly incorporate machine learning models into web applications',
      color: 'from-amber-600 to-orange-500'
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Robust API development and microservices architecture',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Secure, optimized applications with best practices',
      color: 'from-purple-600 to-purple-800'
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
    <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-24 px-4 overflow-hidden" id="about" ref={sectionRef}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-slate-200/40 to-slate-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-1"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-br from-slate-300/40 to-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-2"></div>
      </div>

      {/* Professional Floating Icons */}
      <div className="absolute top-32 right-32 animate-bounce delay-1000">
        <Layers className="w-8 h-8 text-slate-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-2000">
        <Rocket className="w-7 h-7 text-amber-500 opacity-60" />
      </div>
      <div className="absolute top-48 left-48 animate-bounce delay-3000">
        <CpuIcon className="w-6 h-6 text-slate-500 opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Crafting intelligent solutions at the intersection of AI and full-stack development
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className={`flex justify-center m-auto items-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-between bg-white/80 backdrop-blur-sm w-[100%] sm:w-[65%] rounded-full p-1 shadow-lg border border-slate-200">
            {[
              { id: 'story', label: 'My Journey' },
              { id: 'expertise', label: 'Expertise' },
              { id: 'achievements', label: 'Milestones' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
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
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-400 via-amber-500 to-slate-400 animate-spin-slow p-1.5 opacity-60">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"></div>
                    </div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-80 h-80 m-4">
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
                    <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                      <span className="text-4xl">👋</span>
                      Nice to meet you!
                    </h3>
                    <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                      <p>
                        I'm a passionate <span className="font-semibold text-slate-800 bg-blue-100/50 px-1 py-0.5 rounded">Full Stack Developer</span> with specialized expertise in <span className="font-semibold text-slate-800 bg-amber-100/50 px-1 py-0.5 rounded">AI integration</span>. 
                        My journey in tech started with a curiosity about how things work, which evolved into a deep love for creating digital solutions that make a real impact.
                      </p>
                      <p>
                        With over <span className="font-semibold text-slate-800 bg-green-100/50 px-1 py-0.5 rounded">3 years of experience</span> building production-grade applications, I bridge the gap 
                        between complex AI systems and user-friendly web interfaces. I believe in writing clean, maintainable code and creating experiences that users love.
                      </p>
                      <p>
                        When I'm not coding, you'll find me exploring the latest AI developments, contributing to open-source projects, or enjoying a good cup of coffee while planning my next big project.
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50">
                          <stat.icon className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                          <div className="text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                          <div className="text-sm text-slate-600">{stat.label}</div>
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
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50 h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-3">{area.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Technical Skills */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-3 justify-center text-slate-800 font-semibold">
                  {[
                    'JavaScript/TypeScript', 'Python', 'React/Next.js', 'Node.js', 
                    'PyTorch', 'LLM Integration', 'REST',
                    'MongoDB','Microservices', 'Computer Vision', 'NLP'
                  ].map((skill, index) => (
                    <span 
                      key={skill} 
                      className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 hover:text-white hover:border-transparent"
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
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50 text-center h-full">
                      <achievement.icon className="w-12 h-12 mx-auto mb-4 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-700 mb-3">
                        {achievement.metric}
                      </div>
                      <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Notable Projects */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Notable Achievements</h3>
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
                        <div className="w-3 h-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
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
};

export default About;