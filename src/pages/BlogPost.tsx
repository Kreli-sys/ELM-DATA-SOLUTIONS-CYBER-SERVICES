import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { BLOG_POSTS, BUSINESS_DETAILS } from '@/constants';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="pt-32 pb-24 px-4">
      <article className="max-w-4xl mx-auto">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12 font-bold"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 text-sm text-white/30 font-bold uppercase tracking-widest mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-primary" />
              5 min read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
            <img 
              src={`https://picsum.photos/seed/blog-${post.id}/1200/800`} 
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-primary max-w-none">
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="text-white/70 text-lg leading-relaxed mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Post Footer */}
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                E
              </div>
              <div>
                <p className="font-bold">ELM Editorial Team</p>
                <p className="text-xs text-white/30 uppercase tracking-widest">Expert Guides</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all font-bold">
                <Share2 size={18} />
                Share
              </button>
              <a 
                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=I have a question about: ${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl transition-all font-bold"
              >
                <MessageSquare size={18} />
                Ask Us
              </a>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
