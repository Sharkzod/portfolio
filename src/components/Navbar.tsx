'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  sectionId: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Skills', href: '#skills', sectionId: 'skills' },
    { name: 'Work', href: '#work', sectionId: 'work' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100;
      
      navItems.forEach(item => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item.sectionId);
          }
        }
      });

      // Special case for home section when at top of page
      if (window.scrollY === 0) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const handleNavClick = (href: string, sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  const handleDownloadResume = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const resumeUrl = '/resume.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Godstime_Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-slate-200/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home', 'home');
              }}
              className="group flex items-center"
            >
              <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  Godstime
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.sectionId);
                  }}
                  className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    activeSection === item.sectionId
                      ? 'text-slate-800 bg-slate-100/80'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50/50'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-300 ${
                    activeSection === item.sectionId ? 'w-8' : 'w-0 group-hover:w-8'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-800 transition-all duration-300 border-2 border-slate-300 hover:border-slate-400 rounded-xl hover:bg-slate-50/80 hover:shadow-lg"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact', 'contact');
              }}
              className="group relative flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Hire Me</span>
              <ExternalLink size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-800 hover:bg-slate-100/80 transition-all duration-300 hover:scale-105"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out transform ${
        isMenuOpen 
          ? 'translate-y-0 opacity-100 visible' 
          : '-translate-y-8 opacity-0 invisible'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 border-t border-slate-200/50">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.sectionId);
              }}
              className={`block px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                activeSection === item.sectionId
                  ? 'text-slate-800 bg-gradient-to-r from-slate-100 to-slate-50 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50/80'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMenuOpen ? 'slideInFromTop 0.5s ease-out forwards' : 'none'
              }}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile CTA Buttons */}
          <div className="pt-4 px-2 space-y-3">
            <button
              onClick={handleDownloadResume}
              className="group w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-800 transition-all duration-300 border-2 border-slate-300 hover:border-slate-400 rounded-xl hover:bg-slate-50/80 hover:shadow-lg"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact', 'contact');
              }}
              className="group relative flex items-center justify-center gap-2 w-full px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Hire Me</span>
              <ExternalLink size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[-1] md:hidden transition-opacity duration-500"
          onClick={toggleMenu}
        ></div>
      )}

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;