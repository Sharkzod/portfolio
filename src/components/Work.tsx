'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Cpu, Database, Globe, Server, 
  ExternalLink, Github, ArrowRight, Filter,
  LayoutTemplate, CpuIcon, Cloud, Smartphone
} from 'lucide-react';

// Define the Project type
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

  // Sample projects data - replace with your actual projects
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
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <LayoutTemplate size={18} /> },
    { id: 'ai', label: 'AI Projects', icon: <CpuIcon size={18} /> },
    { id: 'web', label: 'Web Apps', icon: <Globe size={18} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={18} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          // Cast elements to HTMLElement to access style property
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
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4" id="work" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack and AI capabilities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:text-blue-600 border border-gray-200'
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
              className={`project-card bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
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
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors">
                    View Details <ArrowRight size={16} />
                  </button>
                  <div className="flex gap-3">
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
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
                        className="text-gray-500 hover:text-gray-800 transition-colors"
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

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed mt-[53px] inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
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
                    <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h4>
                    <div className="space-y-4 text-gray-600">
                      <p className="leading-relaxed whitespace-pre-line">{selectedProject.info}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-500">Category</span>
                        <p className="font-medium capitalize text-gray-500">{selectedProject.category}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Timeline</span>
                        <p className="font-medium text-gray-500">1.5 months</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Technologies</span>
                        <p className="font-medium text-gray-500">{selectedProject.tags.join(', ')}</p>
                      </div>
                    </div>

                    <div className="mt-6 gap-3 w-[55%]">
                      {selectedProject.links.live && (
                        <a 
                          href={selectedProject.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors mb-[20px]"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {selectedProject.links.code && (
                        <a 
                          href={selectedProject.links.code} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                        >
                          <Github size={16} /> View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="project-feature bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Want to see more of my work?</h3>
          <a 
            href="https://github.com/Barclay-bank" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg"
          >
            <Github className="mr-2" /> Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;