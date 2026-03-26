import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICES } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight">ELM DATA</span>
              <span className="text-[10px] text-primary font-semibold uppercase tracking-widest">Solutions</span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed">
            Your trusted partner for digital and data solutions in Nakuru. We provide fast, reliable, and affordable cyber services to individuals and businesses.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="text-white/50 hover:text-primary transition-colors text-sm">Home</Link></li>
            <li><Link to="/services" className="text-white/50 hover:text-primary transition-colors text-sm">Services</Link></li>
            <li><Link to="/about" className="text-white/50 hover:text-primary transition-colors text-sm">About Us</Link></li>
            <li><Link to="/blog" className="text-white/50 hover:text-primary transition-colors text-sm">Blog</Link></li>
            <li><Link to="/contact" className="text-white/50 hover:text-primary transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-6 text-lg">Our Services</h4>
          <ul className="flex flex-col gap-4">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to="/services" className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={12} />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-3">
              <Phone className="text-primary shrink-0" size={20} />
              <div className="flex flex-col gap-1">
                {BUSINESS_DETAILS.phones.map(phone => (
                  <a key={phone} href={`tel:${phone}`} className="text-white/50 hover:text-primary transition-colors text-sm">{phone}</a>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="text-primary shrink-0" size={20} />
              <div className="flex flex-col gap-1">
                {BUSINESS_DETAILS.emails.map(email => (
                  <a key={email} href={`mailto:${email}`} className="text-white/50 hover:text-primary transition-colors text-sm">{email}</a>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="text-primary shrink-0" size={20} />
              <span className="text-white/50 text-sm leading-relaxed">
                {BUSINESS_DETAILS.location}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs text-center md:text-left">
          © {new Date().getFullYear()} ELM Data Solutions - TRUPRINT Cyber Services. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Privacy Policy</a>
          <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
