"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { X, Maximize2, Newspaper, Users, Award, Camera, Calendar, ArrowRight, Share2 } from "lucide-react";

const Gallery = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<any>(null);

  const categories = [
    { id: 'all', label: isHi ? "सब यादें" : "ALL ARCHIVES", icon: <Camera size={14} /> },
    { id: 'press', label: isHi ? "अखबार" : "PRESS CLIPS", icon: <Newspaper size={14} /> },
    { id: 'vips', label: isHi ? "मुलाकातें" : "DIGNITARIES", icon: <Users size={14} /> },
    { id: 'events', label: isHi ? "कार्यक्रम" : "KEY EVENTS", icon: <Award size={14} /> },
  ];

  const images = [
    { id: 1, type: 'press', url: 'https://images.unsplash.com/photo-1585829365234-781fcd04c810?auto=format&fit=crop&q=80', title: isHi ? 'दैनिक भास्कर कवरेज' : 'Dainik Bhaskar Coverage', year: '2021' },
    { id: 2, type: 'vips', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80', title: isHi ? 'मुख्यमंत्री के साथ' : 'Meeting with CM', year: '2022' },
    { id: 3, type: 'events', url: 'https://images.unsplash.com/photo-1528605248644-14dd04cb113d?auto=format&fit=crop&q=80', title: isHi ? 'स्वच्छ भारत समिट' : 'Swachh Bharat Summit', year: '2023' },
    { id: 4, type: 'press', url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80', title: isHi ? 'नई दुनिया फीचर' : 'Nayi Duniya Feature', year: '2020' },
    { id: 5, type: 'vips', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', title: isHi ? 'विदेशी प्रतिनिधि' : 'Global Delegation', year: '2024' },
    { id: 6, type: 'events', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80', title: isHi ? 'कार्यशाला 2026' : 'Workshop 2026', year: '2026' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.type === filter);

  return (
    <div className="bg-[#fcfcfb] min-h-screen pt-44 pb-44 selection:bg-[#FFBF00] selection:text-[#3e2723]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-14">
        
        {/* 🔹 SECTION HEADER */}
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-[#FFBF00]" />
            <span className="text-[#3e2723] font-black uppercase tracking-[0.4em] text-[10px]">
              {isHi ? "इतिहास" : "CHRONICLES"}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-[1000] text-[#3e2723] tracking-tighter leading-[0.85] uppercase italic"
            >
              {isHi ? "सार्थक" : "SARTHAK"} <br />
              <span className="text-[#FFBF00] not-italic">{isHi ? "अभिलेखागार" : "ARCHIVES."}</span>
            </motion.h2>

            {/* 🔹 FILTER TABS */}
            <div className="flex flex-wrap gap-2 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-3 px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border-4 ${
                    filter === cat.id 
                    ? "bg-[#3e2723] text-[#FFBF00] border-[#3e2723] shadow-2xl -translate-y-1" 
                    : "bg-white text-[#3e2723]/40 border-[#3e2723]/5 hover:border-[#FFBF00]/30"
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* 🔹 MASONRY WALL */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedImg(img)}
                className={`relative break-inside-avoid cursor-pointer group rounded-[3rem] overflow-hidden transition-all duration-700
                  ${img.type === 'press' ? 'bg-[#f4f1ea] p-4 border-4 border-[#3e2723]/5' : 'bg-white shadow-xl shadow-[#3e2723]/5 border-4 border-[#3e2723]/5'} 
                `}
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className={`w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 ${img.type === 'press' ? 'grayscale-[0.5] group-hover:grayscale-0' : ''}`} 
                  />
                  <div className="absolute inset-0 bg-[#3e2723]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center text-[#3e2723] scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 size={24} />
                     </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-black text-[#FFBF00] uppercase tracking-[0.3em] bg-[#3e2723] px-3 py-1 rounded-lg">
                      {img.type}
                    </span>
                    <span className="text-[10px] font-black text-[#3e2723]/30 uppercase tracking-widest italic">{img.year}</span>
                  </div>
                  <h4 className="text-[#3e2723] font-[1000] text-xl leading-tight uppercase italic tracking-tighter group-hover:text-[#FFBF00] transition-colors">
                    {img.title}
                  </h4>
                </div>

                {/* News Texture for Press */}
                {img.type === 'press' && (
                  <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🔹 LIGHTBOX */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#3e2723] flex items-center justify-center p-6 md:p-20 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="fixed top-12 right-12 w-20 h-20 bg-[#FFBF00] text-[#3e2723] rounded-3xl flex items-center justify-center transition-all z-[110] hover:rotate-90 hover:scale-110 shadow-2xl"
              >
                <X size={32} strokeWidth={3} />
              </button>

              <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-16 items-center">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={`lg:col-span-7 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] ${selectedImg.type === 'press' ? 'bg-[#f4f1ea] p-6' : 'bg-black/20'}`}
                >
                  <img src={selectedImg.url} className="w-full h-auto rounded-[3rem]" />
                </motion.div>
                
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="lg:col-span-5 space-y-10"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-[2px] w-12 bg-[#FFBF00]"></div>
                      <span className="text-[#FFBF00] font-black text-xs uppercase tracking-[0.4em] italic">{selectedImg.type}</span>
                    </div>
                    <h3 className="text-5xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
                      {selectedImg.title}
                    </h3>
                    <p className="text-white/40 text-xl font-bold leading-relaxed uppercase italic">
                      {isHi 
                        ? "यह सार्थक की दो दशकों की मेहनत और समाज में आए बदलाव का एक महत्वपूर्ण दस्तावेज़ है।" 
                        : "A visual testament to Sarthak's two-decade legacy in transforming urban waste ecosystems."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10">
                      <Calendar className="text-[#FFBF00] mb-4" size={20} />
                      <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Archive Date</div>
                      <div className="text-white font-black text-xl italic">{selectedImg.year}</div>
                    </div>
                    <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10">
                      <Share2 className="text-[#FFBF00] mb-4" size={20} />
                      <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Impact</div>
                      <div className="text-white font-black text-xl italic">Public Record</div>
                    </div>
                  </div>

                  <button className="group flex items-center gap-4 text-[#FFBF00] font-black uppercase tracking-[0.3em] text-[11px] pt-4">
                    {isHi ? "पूरा लेख पढ़ें" : "READ FULL STORY"} <ArrowRight className="group-hover:translate-x-3 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔹 FOOTER DECOR */}
        <div className="mt-40 text-center">
            <p className="text-[#3e2723]/20 text-[10px] font-black uppercase tracking-[1em] italic">
              Legacy in Frames
            </p>
        </div>
      </div>

      {/* Background Decor Text */}
      <div className="fixed bottom-0 right-0 text-[20rem] font-[1000] text-[#3e2723]/[0.02] pointer-events-none select-none uppercase italic leading-none -mb-20 -mr-20">
        HISTORY
      </div>
    </div>
  );
};

export default Gallery;