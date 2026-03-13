"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Play, Facebook, Youtube, ExternalLink, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface MediaLink {
  id: string;
  type: 'video' | 'social';
  videoId?: string;
  url?: string;
  title: string;
  platform: 'YouTube' | 'Facebook';
  desc: string;
}

const mediaLinks: MediaLink[] = [
  { id: 'yt1', type: 'video', videoId: 'i3i6xXWqOcA', title: 'Mala Nimbalkar: From Streets to Management', platform: 'YouTube', desc: 'A journey of dignity and waste management in Bhopal.' },
  { id: 'yt2', type: 'video', videoId: '7NwpQUw9gIs', title: 'UNDP Special: Sarthak Indore Project', platform: 'YouTube', desc: 'Showcasing the massive impact of plastic waste management.' },
  { id: 'yt3', type: 'video', videoId: 'ixlOUO8OiHM', title: 'Bhopal Model: Plastic Waste Excellence', platform: 'YouTube', desc: 'The revolutionary model recognized globally.' },
  { id: 'yt4', type: 'video', videoId: 'FdXij9rVC3k', title: 'Imteyaz Ali: The Visionary Interview', platform: 'YouTube', desc: 'Understanding the core mission of Sarthak NGO.' },
  { id: 'yt5', type: 'video', videoId: 'rhNpqsMs2aw', title: 'GGF Visit - Recycling Plant', platform: 'YouTube', desc: 'Global Green Foundation visiting Sarthak facilities.' },
  { id: 'yt7', type: 'video', videoId: 'gAFxw_-y7ug', title: 'Sarthak Impact Shorts', platform: 'YouTube', desc: 'Quick highlights of our sustainable waste management operations.' },
  { id: 'fb1', type: 'social', url: 'https://www.facebook.com/watch/?v=141575708934360', title: 'Sarthak Impact Video', platform: 'Facebook', desc: 'Direct updates from our field operations.' },
  { id: 'fb2', type: 'social', url: 'https://www.facebook.com/watch/?v=583609572026129', title: 'Community Outreach', platform: 'Facebook', desc: 'Joining hands with the local community.' },
  { id: 'fb3', type: 'social', url: 'https://www.facebook.com/share/p/1HW1kVfq39/', title: 'Latest Sarthak Updates', platform: 'Facebook', desc: 'Check out our latest post on community engagement.' },
];

interface MediaCenterProps {
  isHi: boolean;
}

const MediaCenter: React.FC<MediaCenterProps> = ({ isHi }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-24 max-w-7xl mx-auto bg-white text-[#3e2723] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] md:opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-center">
        <h1 className="text-[30vw] md:text-[20vw] font-black uppercase italic leading-none text-[#3e2723]">SARTHAK</h1>
      </div>

      <div className="px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="h-[2px] w-8 md:w-12 bg-[#FFBF00]"></span>
              <p className="text-[#FFBF00] font-black uppercase tracking-[0.3em] text-[10px]">
                {isHi ? "मीडिया और प्रेस" : "MEDIA & PRESS"}
              </p>
            </div>
            <h2 className="text-4xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[1] mb-2 text-[#3e2723]">
              {isHi ? "खबरों" : "IN THE"} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #3e2723' }}>
                {isHi ? "में" : "SPOTLIGHT."}
              </span>
            </h2>
          </div>
          
          <div className="hidden md:flex gap-4 mb-4">
            <button className="nav-prev w-14 h-14 rounded-xl border border-[#3e2723]/10 flex items-center justify-center hover:bg-[#FFBF00] hover:text-white transition-all cursor-pointer bg-white shadow-sm group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="nav-next w-14 h-14 rounded-xl border border-[#3e2723]/10 flex items-center justify-center hover:bg-[#FFBF00] hover:text-white transition-all cursor-pointer bg-white shadow-sm group">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="[&_.swiper-pagination-bullet]:bg-[#3e2723]/20 [&_.swiper-pagination-bullet]:w-6 md:[&_.swiper-pagination-bullet]:w-8 [&_.swiper-pagination-bullet]:h-[2px] [&_.swiper-pagination-bullet]:rounded-none [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:bg-[#FFBF00] [&_.swiper-pagination-bullet-active]:w-10 md:[&_.swiper-pagination-bullet-active]:w-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -10,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              prevEl: '.nav-prev',
              nextEl: '.nav-next',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 'auto', spaceBetween: 30 }
            }}
            className="!overflow-visible"
          >
            {mediaLinks.map((item) => (
              <SwiperSlide key={item.id} className="!w-[280px] md:!w-[520px] py-10">
                <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 border border-[#3e2723]/5 shadow-xl hover:shadow-2xl hover:border-[#FFBF00]/30 transition-all duration-700 h-full flex flex-col">
                  <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg bg-[#3e2723]/5">
                    {item.type === 'video' ? (
                      <>
                        <img 
                          src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`} 
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                          alt={item.title}
                        />
                        <button 
                          onClick={() => setActiveVideo(item.videoId!)}
                          className="absolute inset-0 flex items-center justify-center group/btn"
                        >
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFBF00] text-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover/btn:scale-100 transition-all duration-500">
                            <Play fill="currentColor" size={20} className="ml-1" />
                          </div>
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1877F2]/10 to-transparent p-6">
                        <Facebook size={32} className="text-[#1877F2] mb-4" />
                        <a 
                          href={item.url} target="_blank" rel="noreferrer"
                          className="bg-[#3e2723] text-white px-5 py-2.5 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#FFBF00] transition-colors"
                        >
                          VIEW POST <ExternalLink size={10} />
                        </a>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl border border-[#3e2723]/5 shadow-sm flex items-center gap-2">
                      {item.platform === 'YouTube' ? <Youtube size={10} className="text-red-500" /> : <Facebook size={10} className="text-[#1877F2]" />}
                      <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#3e2723]">{item.platform}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md md:backdrop-blur-2xl flex items-center justify-center p-2 md:p-4"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-20 right-4 md:top-20 md:right-14 w-10 h-10 md:w-14 md:h-14 bg-[#3e2723] text-white rounded-xl flex items-center justify-center hover:bg-[#FFBF00] transition-all z-[110] shadow-lg"
            >
              <X size={20} strokeWidth={3} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video rounded-xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-2 md:border-8 border-white"
            >
              <iframe 
                width="100%" height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Sarthak Media" frameBorder="0" allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaCenter;