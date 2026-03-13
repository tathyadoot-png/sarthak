"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { X, Maximize2, Newspaper, Award, Camera, ArrowRight, Share2, Lightbulb, Zap } from "lucide-react";
import { galleryData, GalleryItem } from '../../data/galleryData'; 

const Gallery = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const [filter, setFilter] = useState<string>('all');
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: isHi ? "सब यादें" : "ALL ARCHIVES", icon: <Camera size={14} /> },
    { id: 'awards', label: isHi ? "पुरस्कार" : "AWARDS", icon: <Award size={14} /> },
    { id: 'initiatives', label: isHi ? "पहल" : "INITIATIVES", icon: <Lightbulb size={14} /> },
    { id: 'events', label: isHi ? "कार्यक्रम" : "KEY EVENTS", icon: <Zap size={14} /> },
    { id: 'press', label: isHi ? "अखबार" : "PRESS CLIPS", icon: <Newspaper size={14} /> },
  ];

  const allImages = useMemo(() => galleryData(isHi), [isHi]);

  const filteredImages = filter === 'all' 
    ? allImages 
    : allImages.filter(img => img.type === filter);

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
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img 
                    src={img.url} 
                    alt="Sarthak Archive" 
                    className={`w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 ${img.type === 'press' ? 'grayscale-[0.5] group-hover:grayscale-0' : ''}`} 
                  />
                  <div className="absolute inset-0 bg-[#3e2723]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center text-[#3e2723] scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 size={24} />
                     </div>
                  </div>
                </div>

                {/* Footer Info (Only Category Tag now) */}
                <div className="p-6">
                  <span className="text-[9px] font-black text-[#FFBF00] uppercase tracking-[0.3em] bg-[#3e2723] px-4 py-2 rounded-xl inline-block">
                    {img.type}
                  </span>
                </div>

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
                className="fixed top-26 right-12 w-20 h-20 bg-[#FFBF00] text-[#3e2723] rounded-3xl flex items-center justify-center transition-all z-[110] hover:rotate-90 hover:scale-110 shadow-2xl"
              >
                <X size={32} strokeWidth={3} />
              </button>

              <div className="max-w-5xl w-full flex flex-col items-center">
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] mb-12 ${selectedImg.type === 'press' ? 'bg-[#f4f1ea] p-6' : 'bg-black/20'}`}
                >
                  <img src={selectedImg.url} alt="Archive" className="w-full max-h-[70vh] object-contain rounded-[3rem]" />
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center space-y-6"
                >
                  <span className="text-[#FFBF00] font-black text-xs uppercase tracking-[0.4em] italic block">
                    {selectedImg.type}
                  </span>
                  <p className="text-white/60 text-lg font-bold leading-relaxed uppercase italic max-w-2xl mx-auto">
                    {isHi 
                      ? "यह सार्थक की दो दशकों की मेहनत और समाज में आए बदलाव का एक महत्वपूर्ण दस्तावेज़ है।" 
                      : "A visual testament to Sarthak's two-decade legacy in transforming urban waste ecosystems."}
                  </p>
                  {/* <button className="group mx-auto flex items-center gap-4 text-[#FFBF00] font-black uppercase tracking-[0.3em] text-[11px] pt-4">
                    {isHi ? "शेयर करें" : "SHARE ARCHIVE"} <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
                  </button> */}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;