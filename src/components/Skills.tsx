'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Cpu, Server, BrainCircuit, ToolCase, 
  Zap, Layers, Rocket, CpuIcon, Target
} from 'lucide-react';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  skills: {
    name: string;
    level: number;
  }[];
};

type SkillCategories = {
  frontend: SkillCategory;
  backend: SkillCategory;
  ai: SkillCategory;
  devops: SkillCategory;
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof SkillCategories>('frontend');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Skill categories with detailed information
  const skillCategories = {
    frontend: {
      title: "Frontend Mastery",
      icon: <Code className="w-6 h-6" />,
      description: "Crafting pixel-perfect, responsive interfaces with modern frameworks",
      color: "from-slate-600 to-slate-800",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 80 }
      ]
    },
    backend: {
      title: "Backend Engineering",
      icon: <Server className="w-6 h-6" />,
      description: "Building robust, scalable server-side architectures",
      color: "from-blue-600 to-blue-800",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 85 }
      ]
    },
    ai: {
      title: "AI Integration",
      icon: <BrainCircuit className="w-6 h-6" />,
      description: "Implementing intelligent features with machine learning",
      color: "from-amber-600 to-orange-500",
      skills: [
        { name: "Python", level: 80 },
        { name: "PyTorch", level: 80 },
        { name: "LLM Integration", level: 90 },
        { name: "NLP", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "Openai", level: 80 }
      ]
    },
    devops: {
      title: "Tools",
      icon: <ToolCase className="w-6 h-6" />,
      description: "Collaborating and building with the best tools",
      color: "from-purple-600 to-purple-800",
      skills: [
        { name: "git", level: 85 },
        { name: "gitHub", level: 95 },
        { name: "FastApi", level: 75 },
      ]
    }
  };

  // All skills for the tag cloud
  const allSkills = Object.values(skillCategories).flatMap(category => 
    category.skills.map(skill => skill.name)
  );

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
    <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-24 px-4 overflow-hidden" id="skills" ref={sectionRef}>
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
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
            My comprehensive toolkit for building intelligent, scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Enhanced Category Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {Object.entries(skillCategories).map(([key, category]) => {
            const categoryKey = key as keyof SkillCategories;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(categoryKey)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === categoryKey
                    ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-800 border border-slate-200'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Selected Category Details */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 h-full">
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].color} flex items-center justify-center mr-4 shadow-md`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{skillCategories[activeCategory].title}</h3>
                  <p className="text-slate-600">{skillCategories[activeCategory].description}</p>
                </div>
              </div>

              {/* Skill Progress Bars */}
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced All Skills Cloud */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Complete Skillset</h3>
            <div className="flex flex-wrap gap-3 text-slate-800">
              {allSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border cursor-pointer border-slate-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 hover:text-white hover:border-transparent"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    fontSize: `${Math.random() * 6 + 12}px`,
                    opacity: `${Math.random() * 0.4 + 0.6}`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Expertise Highlights */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Specialized In:</h4>
              <div className="space-y-4">
                {[
                  "AI-Powered Web Applications",
                  "Full Stack Architecture",
                  "Performance Optimization",
                  "Secure Development Practices"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Certification & Achievements */}
        <div className={`mt-12 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications & Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Specialist",
                  icon: <BrainCircuit className="w-8 h-8 text-white" />,
                  description: "Expertise in AI integration and implementation"
                },
                {
                  title: "Full Stack Developer",
                  icon: <Code className="w-8 h-8 text-white" />,
                  description: "Certified in modern web development"
                },
                {
                  title: "10+ Projects",
                  icon: <Layers className="w-8 h-8 text-white" />,
                  description: "Delivered production-grade applications"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
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

export default Skills;