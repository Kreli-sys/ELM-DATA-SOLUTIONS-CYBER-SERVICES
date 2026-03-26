import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

export default function Blog() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Stay updated with the latest news, guides, and tips on digital services in Kenya.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/blog-${post.id}/800/600`} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-white/30 font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    5 min read
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary font-bold group/link"
                >
                  Read Full Article
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
