'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Cpu, Database, Server, Cloud, GitBranch, Shield, 
  Layers, CpuIcon, Zap, CircuitBoard, BrainCircuit, 
  ToolCase
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
      color: "from-blue-500 to-blue-600",
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
      color: "from-purple-500 to-purple-600",
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
      color: "from-green-500 to-green-600",
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
      color: "from-orange-500 to-orange-600",
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
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-20 px-4" id="skills" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            My comprehensive toolkit for building intelligent, scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
       
{Object.entries(skillCategories).map(([key, category]) => {
  const categoryKey = key as keyof SkillCategories;
  return (
    <button
      key={key}
      onClick={() => setActiveCategory(categoryKey)}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
        activeCategory === categoryKey
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
          : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:text-blue-600 border border-gray-200'
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
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 h-full">
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].color} flex items-center justify-center mr-4`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{skillCategories[activeCategory].title}</h3>
                  <p className="text-gray-600">{skillCategories[activeCategory].description}</p>
                </div>
              </div>

              {/* Skill Progress Bars */}
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
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

          {/* All Skills Cloud */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Skillset</h3>
            <div className="flex flex-wrap gap-3 text-black ">
              {allSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border cursor-pointer border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent"
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
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Specialized In:</h4>
              <div className="space-y-4">
                {[
                  "AI-Powered Web Applications",
                  "Full Stack Architecture",
                  
                  "Performance Optimization",
                  "Secure Development Practices"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certification & Achievements */}
        {/* <div className={`mt-12 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications & Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AWS Certified Developer",
                  icon: <Cloud className="w-8 h-8 text-white" />,
                  description: "Expertise in cloud architecture and deployment"
                },
                {
                  title: "TensorFlow Developer",
                  icon: <CpuIcon className="w-8 h-8 text-white" />,
                  description: "Certified in building and training ML models"
                },
                {
                  title: "100+ Projects",
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
        </div> */}
      </div>
    </div>
  );
};

export default Skills;