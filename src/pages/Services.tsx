import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, BUSINESS_DETAILS } from '@/constants';

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Comprehensive</span> Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            We provide a wide range of digital and cyber services to help you navigate government portals and business requirements with ease.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {SERVICES.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
            >
              <div className="lg:col-span-1 sticky top-32">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <category.icon size={36} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-white/50 mb-8 leading-relaxed">
                  {category.description}
                </p>
                <a 
                  href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=I'm interested in ${category.title} services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
                >
                  Request Service
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item}</h4>
                        <p className="text-white/30 text-sm">Professional assistance for your {item.toLowerCase()} needs.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 p-12 rounded-3xl bg-surface border border-white/5 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="text-white/50 mb-10 max-w-2xl mx-auto">
            If you don't see the specific service you're looking for, get in touch with us. We handle many other digital and data-related tasks.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-neutral-200 transition-all"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
