import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with us
      </span>
    </a>
  );
}
