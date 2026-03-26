import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Zap, Users } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/constants';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Empowering Nakuru Through <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              ELM Data Solutions - TRUPRINT Cyber Services was founded with a simple mission: to bridge the digital divide in Nakuru and Njoro. We realized that many essential services were moving online, but many people found the process complex and intimidating.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Today, we are a leading provider of cyber and data solutions, helping thousands of clients navigate government portals, tax compliance, and creative design needs with speed and integrity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our team at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-widest">Years Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 rounded-3xl bg-surface border border-white/5 hover:border-primary/20 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/50 text-lg leading-relaxed">
              To provide accessible, efficient, and reliable digital solutions that simplify the lives of our clients, ensuring they meet their personal and professional obligations with ease.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-surface border border-white/5 hover:border-primary/20 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-white/50 text-lg leading-relaxed">
              To be the most trusted and innovative digital service hub in Kenya, recognized for our commitment to customer satisfaction, data integrity, and technological excellence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-white/50">The principles that guide everything we do.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Integrity", desc: "Honesty in every transaction and application." },
            { icon: Zap, title: "Speed", desc: "Fast processing to save your valuable time." },
            { icon: Heart, title: "Customer First", desc: "Your satisfaction is our primary goal." },
            { icon: Users, title: "Reliability", desc: "A partner you can count on, every time." }
          ].map((value, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-surface border border-white/5 text-center group hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon size={24} />
              </div>
              <h4 className="font-bold text-xl mb-3">{value.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-32 p-12 rounded-3xl bg-primary text-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Visit Our Office</h3>
            <p className="text-black/70 font-medium">We are located in the heart of {BUSINESS_DETAILS.location}.</p>
          </div>
          <a 
            href={`https://www.google.com/maps/search/${encodeURIComponent(BUSINESS_DETAILS.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 transition-all whitespace-nowrap"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
