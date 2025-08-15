'use client'

import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, Twitter,
  CheckCircle, Loader2, AlertCircle, ArrowRight, Zap, Coffee
} from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "AI Recommendation Engine",
      description: "Personalized product suggestions with 35% conversion boost",
      tags: ["AI", "React", "Node.js"]
    },
    {
      id: 2,
      title: "Enterprise SaaS Platform",
      description: "Scalable B2B solution with 10k+ users",
      tags: ["TypeScript", "AWS", "Microservices"]
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-24 px-4 overflow-hidden" id="contact" ref={sectionRef}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-slate-200/40 to-slate-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-1"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-br from-slate-300/40 to-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-2"></div>
      </div>

      {/* Professional Floating Icons */}
      <div className="absolute top-32 right-32 animate-bounce delay-1000">
        <Mail className="w-8 h-8 text-slate-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-2000">
        <Zap className="w-7 h-7 text-amber-500 opacity-60" />
      </div>
      <div className="absolute top-48 left-48 animate-bounce delay-3000">
        <Coffee className="w-6 h-6 text-slate-500 opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mt-6"></div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <p className="text-slate-600 mb-6">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email Me</h4>
                    <a href="mailto:godstimeamerica99@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      godstimeamerica99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Call Me</h4>
                    <a href="tel:+2347048683270" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +234 (704) 868-3270
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">Port Harcourt, Rivers State.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Barclay-bank" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg transition-colors shadow hover:shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="www.linkedin.com/in/godstime-america-078962239" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors shadow hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/GodstimeAmeric1?t=gsZjh_r_TL2-AoYLRuAVUA&s=08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors shadow hover:shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Enhanced Discuss a Project Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Discuss a Project</h3>
              <p className="text-slate-600 mb-4">
                Interested in something similar to these projects?
              </p>
              
              <div className="space-y-4">
                {featuredProjects.map(project => (
                  <div key={project.id} className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors hover:shadow-sm">
                    <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Me a Message</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center placeholder-slate-500">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-600">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : formStatus === 'error' ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-red-800 mb-2">Error Sending Message</h4>
                <p className="text-red-600">
                  Please try again later or contact me through another method.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6 placeholder-gray-600">
                  <div className=''>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 placeholder-gray-400 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-500 transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full placeholder-gray-400 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-500 transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full placeholder-gray-400 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-500 transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full flex justify-center placeholder-gray-400 items-center px-6 py-3 rounded-lg font-medium text-white transition-colors shadow-lg ${
                        formStatus === 'submitting'
                          ? 'bg-slate-400 cursor-not-allowed'
                          : 'bg-slate-800 hover:bg-slate-900 hover:shadow-xl'
                      }`}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
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

export default Contact;