import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Clock, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_DETAILS, SERVICES } from '@/constants';
import { cn } from '@/lib/utils';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <img
              src={HERO_IMAGES[currentSlide]}
              alt="Hero background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 border border-primary/30">
              Trusted by 1000+ Customers in Nakuru
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Your Trusted Digital & <span className="text-primary">Data Solutions</span> Partner
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Fast, affordable, and reliable cyber services in Nakuru. From KRA returns to eCitizen applications, we handle the complexity so you don't have to.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2 group"
              >
                Get a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href={`tel:${BUSINESS_DETAILS.phones[0]}`}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageSquare size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "w-12 h-1.5 rounded-full transition-all duration-300",
                currentSlide === idx ? "bg-primary" : "bg-white/20"
              )}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              We offer a wide range of digital solutions tailored to meet the needs of individuals and businesses in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary font-bold text-sm flex items-center gap-2 group/link"
                >
                  View Details
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Why ELM Data Solutions is Your Best Choice
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast Service",
                  desc: "We understand your time is valuable. Most applications are processed within minutes."
                },
                {
                  icon: ShieldCheck,
                  title: "100% Secure & Reliable",
                  desc: "Your data privacy is our priority. We use secure systems to handle all your sensitive information."
                },
                {
                  icon: Clock,
                  title: "Expert Support",
                  desc: "Our team consists of experienced professionals who know the ins and outs of Kenyan government portals."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
                alt="Professional service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-8 rounded-2xl max-w-xs">
              <div className="flex gap-1 text-primary mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium italic mb-2">"The speed and professionalism at ELM is unmatched. They helped me with my KRA returns in minutes!"</p>
              <p className="text-xs text-white/50 font-bold">— David M., Nakuru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white/50">Real feedback from our satisfied customers across Kenya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Wanjiku",
                role: "Business Owner",
                text: "ELM Data Solutions handled my business registration and eTIMS setup perfectly. Highly recommended for any entrepreneur in Nakuru."
              },
              {
                name: "John Kamau",
                role: "Teacher",
                text: "I always use their services for my TSC applications and KRA returns. They are honest, fast, and very affordable."
              },
              {
                name: "Mercy Chebet",
                role: "Student",
                text: "The team helped me with my HELB and KUCCPS applications. They made a stressful process very simple for me."
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-surface border border-white/5">
                <div className="flex gap-1 text-primary mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/70 mb-8 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-white/30">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">Ready to Get Started?</h2>
            <p className="text-black/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Don't let digital paperwork stress you out. Contact us today for fast and reliable assistance with all your online applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all"
              >
                Contact Us Now
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all flex items-center gap-2"
              >
                <MessageSquare size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
