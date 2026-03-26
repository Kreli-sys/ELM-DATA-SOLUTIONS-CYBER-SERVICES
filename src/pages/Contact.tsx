import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICES } from '@/constants';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Have a question or need assistance? Reach out to us via the form below or through our direct contact channels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-surface border border-white/5 space-y-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                  {BUSINESS_DETAILS.phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="block text-lg font-bold hover:text-primary transition-colors">{phone}</a>
                  ))}
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                  {BUSINESS_DETAILS.emails.map(email => (
                    <a key={email} href={`mailto:${email}`} className="block text-lg font-bold hover:text-primary transition-colors break-all">{email}</a>
                  ))}
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-lg font-bold">{BUSINESS_DETAILS.location}</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-6 rounded-3xl font-bold text-xl hover:scale-[1.02] transition-all shadow-lg"
            >
              <MessageSquare size={28} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-white/5">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-white/50 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="0712 345 678"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 ml-1">Service Needed</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option className="bg-surface">Select a service</option>
                      {SERVICES.map(s => (
                        <option key={s.id} className="bg-surface" value={s.id}>{s.title}</option>
                      ))}
                      <option className="bg-surface" value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help you today?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full bg-primary text-black py-5 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
