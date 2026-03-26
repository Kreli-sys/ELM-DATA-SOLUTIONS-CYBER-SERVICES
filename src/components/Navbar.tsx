import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS_DETAILS } from '@/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">E</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight">ELM DATA</span>
            <span className="text-[10px] text-primary font-semibold uppercase tracking-widest">Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`tel:${BUSINESS_DETAILS.phones[0]}`}
            className="bg-primary text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === link.path ? "text-primary" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a 
                href={`tel:${BUSINESS_DETAILS.phones[0]}`}
                className="bg-primary text-black py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
