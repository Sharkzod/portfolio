'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Cpu, ExternalLink, Github, ArrowRight, 
  LayoutTemplate, CpuIcon, Smartphone, X, Check
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  info: string;
  links: {
    live: string;
    code: string;
  };
  features: string[];
};

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "StorxByte Broker",
      description: "A Broker platform for trading Bitcoin and Etherium",
      tags: ["Javascript","Next", "Tailwind", "Node.js", "MongoDB", "Microservices"],
      category: "web",
      info: "StorxByte Broker is a full-stack cryptocurrency trading platform that allows users to trade major digital assets such as Bitcoin and Ethereum. The platform was designed with a focus on performance, scalability, and modern UI/UX principles. Built using a microservices architecture, the application ensures modularity and easier maintenance. The frontend is developed with Next.js and Tailwind CSS, delivering a fast, SEO-optimized, and responsive user interface. On the backend, it leverages Node.js and MongoDB to handle real-time transactions, user authentication, and data storage efficiently.",
      image: "/sta.jpg",
      links: {
        live: "https://staupdate-frontend.pages.dev/",
        code: "https://github.com/BossFDev/StaUpdate_frontend.git"
      },
      features: [
        "Real-time trading",
        "Real-time analytics dashboard",
        "Scalable microservices architecture"
      ]
    },
    {
      id: 2,
      title: "International Cargo",
      description: "An online platform for managing international cargo shipments",
      tags: ["TypeScript","Next", "Tailwind", "Node", "TypeScript","Microservices"],
      category: "web",
      info: `International Cargo is a robust web-based logistics platform designed to manage and track international cargo shipments efficiently. The system simplifies freight operations by providing a digital interface for managing shipment details, tracking progress, and coordinating logistics in real time.

Built with TypeScript across both the frontend and backend, the platform ensures type safety and improved developer experience. It leverages a microservices architecture for scalability and separation of concerns. The frontend uses Next.js and Tailwind CSS to deliver a clean, responsive UI, while the backend is structured with Node.js and modular service components.`,
      image: "/online.png",
      links: {
        live: "https://international-cargo-ship.onrender.com/",
        code: "https://github.com/Sharkzod/delivery_frontend.git"
      },
      features: [
        "Delivery tracking system",
        "Fast track all deliveries",
        "Delivery notification support"
      ]
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "An e-commerce platform",
      tags: ["TypeScript","Next", "Tailwind", "Node", "TypeScript","Microservices"],
      info: `E-commerce Application is a comprehensive online shopping platform that allows users to browse products, manage their carts, and complete purchases seamlessly. The application is built with a focus on user experience, performance, and scalability.`,
      category: "web",
      image: "/ecommerce.png",
      links: {
        live: "https://example.com",
        code: "https://github.com/example"
      },
      features: [
        "Easy Shopping",
        "Secure Payment Processing",
        "Product Search and Filtering",
      ]
    },

    {
  id: 4,
  title: "GradeMate",
  description: "An AI-powered exam grading bot",
  tags: [
    "Python", 
    "Flask", 
    "MongoDB", 
    "pdfplumber", 
    "docx", 
    "TypeScript", 
    "Next", 
    "Tailwind", 
    "Node", 
    "Microservices"
  ],
  info: `GradeMate is an intelligent exam grading system that automates the evaluation of student responses. 
  It accepts multiple file formats (TXT, PDF, DOCX), parses student details and answers, compares them with an answer key, 
  and generates accurate results instantly. Built with Flask, MongoDB, and modern web technologies (Next.js, TypeScript, Tailwind CSS, Node.js), 
  the system is designed for scalability and seamless integration with microservices.`,
  category: "ai",
  image: "/grademate.png",
  links: {
    live: "https://grademates.netlify.app/", 
    code: "https://github.com/Sharkzod/Exam-Grader" 
  },
  features: [
    "Upload exams in multiple formats (TXT, PDF, DOCX)",
    "Automatic parsing of student names and answers",
    "Instant grading with accurate scoring",
    "MongoDB integration for result storage",
    "Error handling for invalid or incomplete data",
    "Built with scalable microservices architecture"
  ]
}
]

  const filters = [
    { id: 'all', label: 'All Projects', icon: <LayoutTemplate size={18} /> },
    { id: 'ai', label: 'AI Projects', icon: <CpuIcon size={18} /> },
    { id: 'web', label: 'Web Apps', icon: <Code size={18} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={18} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          document.querySelectorAll<HTMLElement>('.project-card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
          });
          document.querySelectorAll<HTMLElement>('.project-feature').forEach((feature, index) => {
            feature.style.transitionDelay = `${index * 50}ms`;
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-24 px-4 overflow-hidden" id="work" ref={sectionRef}>
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
        <Cpu className="w-7 h-7 text-amber-500 opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack and AI capabilities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Enhanced Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-800 border border-slate-200'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`project-card bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-slate-800 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors">
                    View Details <ArrowRight size={16} />
                  </button>
                  <div className="flex gap-3">
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.links.code && (
                      <a 
                        href={project.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-800 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed mt-[53px] inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5 text-slate-800" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-white/90">{selectedProject.description}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4">Project Overview</h4>
                    <div className="space-y-4 text-slate-600">
                      <p className="leading-relaxed whitespace-pre-line">{selectedProject.info}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-slate-500">Category</span>
                        <p className="font-medium capitalize text-slate-500">{selectedProject.category}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Timeline</span>
                        <p className="font-medium text-slate-500">1.5 months</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Technologies</span>
                        <p className="font-medium text-slate-500">{selectedProject.tags.join(', ')}</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {selectedProject.links.live && (
                        <a 
                          href={selectedProject.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {selectedProject.links.code && (
                        <a 
                          href={selectedProject.links.code} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors border border-slate-200"
                        >
                          <Github size={16} /> View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="project-feature bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-slate-800 text-white p-2 rounded-lg">
                            <Check className="w-4 h-4" />
                          </div>
                          <p className="text-slate-700">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CTA */}
        <div className={`text-center mt-16 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Want to see more of my work?</h3>
          <a 
            href="https://github.com/Barclay-bank" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg"
          >
            <Github className="mr-2" /> Visit My GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
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

export default Work;