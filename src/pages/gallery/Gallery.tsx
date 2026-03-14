"use client";

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { X, Maximize2, Newspaper, Award, Camera, ChevronLeft, ChevronRight, Lightbulb, Zap, GraduationCap, Users, BatteryCharging, Leaf, Recycle, Heart, Globe, Coins, Trash2 } from "lucide-react";
import { galleryData } from '../../data/galleryData'; 

const Gallery = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const [filter, setFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: isHi ? "सब" : "ALL", icon: <Camera size={14} /> },
    { id: 'press', label: isHi ? "अखबार" : "PRESS", icon: <Newspaper size={14} /> },
    { id: 'awards', label: isHi ? "पुरस्कार" : "AWARDS", icon: <Award size={14} /> },
    { id: 'bsss', label: "BSSS", icon: <GraduationCap size={14} /> },
    { id: 'conferences', label: isHi ? "सम्मेलन" : "CONFERENCES", icon: <Users size={14} /> },
    { id: 'ewaste', label: "E-WASTE", icon: <BatteryCharging size={14} /> },
    { id: 'organicwaste', label: isHi ? "जैविक" : "ORGANIC", icon: <Leaf size={14} /> },
    { id: 'plasticwaste', label: isHi ? "प्लास्टिक" : "PLASTIC", icon: <Recycle size={14} /> },
    { id: 'socialinclusion', label: isHi ? "सामाजिक" : "SOCIAL", icon: <Heart size={14} /> },
    { id: 'undp', label: "UNDP", icon: <Globe size={14} /> },
    { id: 'wastetowealth', label: "WEALTH", icon: <Coins size={14} /> },
    { id: 'zerowaste', label: "ZERO", icon: <Trash2 size={14} /> },
  ];

  const allImages = useMemo(() => galleryData(isHi), [isHi]);

  const filteredImages = useMemo(() => 
    filter === 'all' ? allImages : allImages.filter(img => img.type === filter),
    [filter, allImages]
  );

  const selectedImg = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % filteredImages.length);
    }
  }, [selectedIndex, filteredImages.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [selectedIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <div className="bg-[#fcfcfb] min-h-screen pt-24 md:pt-44 pb-20 md:pb-44 selection:bg-[#FFBF00] selection:text-[#3e2723] overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-14">
        
        {/* 🔹 SECTION HEADER */}
        <header className="mb-12 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4 md:mb-8"
          >
            <div className="h-[2px] w-8 md:w-12 bg-[#FFBF00]" />
            <span className="text-[#3e2723] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
              {isHi ? "इतिहास" : "CHRONICLES"}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl lg:text-[10rem] font-[1000] text-[#3e2723] tracking-tighter leading-[0.9] uppercase italic"
            >
              {isHi ? "सार्थक" : "SARTHAK"} <br />
              <span className="text-[#FFBF00] not-italic">{isHi ? "अभिलेखागार" : "ARCHIVES."}</span>
            </motion.h2>

            {/* Scrollable Categories for Mobile */}
            <div className="flex overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap gap-2 pb-4 scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setFilter(cat.id); setSelectedIndex(null); }}
                  className={`flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 border-2 md:border-4 ${
                    filter === cat.id 
                    ? "bg-[#3e2723] text-[#FFBF00] border-[#3e2723] shadow-xl" 
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
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-8 space-y-4 md:space-y-8">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedIndex(index)}
                className={`relative break-inside-avoid cursor-pointer group rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 p-2 md:p-4 border-2 md:border-4 border-[#3e2723]/5 shadow-sm
                  ${img.type === 'press' ? 'bg-[#f4f1ea]' : 'bg-white'} 
                `}
              >
                <div className="relative overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem]">
                  <img 
                    src={img.url} 
                    alt="Archive" 
                    loading="lazy"
                    className={`w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 ${img.type === 'press' ? 'grayscale-[0.3] group-hover:grayscale-0' : ''}`} 
                  />
                  <div className="absolute inset-0 bg-[#3e2723]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFBF00] rounded-full flex items-center justify-center text-[#3e2723] scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 size={20} className="md:size-24" />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🔹 MOBILE OPTIMIZED LIGHTBOX */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#3e2723] flex flex-col items-center justify-center p-4 mt-14 md:mt-14"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Close Button - More accessible on Mobile */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-8 right-8 w-8 h-8 md:w-16 md:h-16 bg-[#FFBF00] text-[#3e2723] rounded-xl flex items-center justify-center transition-all z-[110]"
              >
                <X size={24} strokeWidth={3} />
              </button>

              <div className="relative w-full max-w-5xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {/* Nav Arrows - Hidden on very small screens, use touch swipe or smaller buttons */}
                <button 
                  onClick={handlePrev}
                  className="hidden md:flex absolute -left-20 w-16 h-16 bg-white/5 hover:bg-[#FFBF00] text-white hover:text-[#3e2723] rounded-full items-center justify-center transition-all"
                >
                  <ChevronLeft size={32} />
                </button>

                <motion.div 
                  key={selectedImg.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl p-2 md:p-6 ${selectedImg.type === 'press' ? 'bg-[#f4f1ea]' : 'bg-white/5'}`}
                >
                  <img 
                    src={selectedImg.url} 
                    alt="Archive" 
                    className="max-w-full max-h-[70vh] object-contain rounded-[1.5rem] md:rounded-[3rem]" 
                  />
                </motion.div>

                <button 
                  onClick={handleNext}
                  className="hidden md:flex absolute -right-20 w-16 h-16 bg-white/5 hover:bg-[#FFBF00] text-white hover:text-[#3e2723] rounded-full items-center justify-center transition-all"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
              
              {/* Footer Info */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mt-8 space-y-2"
              >
                <span className="text-[#FFBF00] font-black text-[10px] uppercase tracking-[0.3em]">
                  {selectedImg.type} — {selectedIndex + 1} / {filteredImages.length}
                </span>
                <p className="text-white/60 text-[10px] md:text-sm uppercase tracking-widest max-w-xs md:max-w-md mx-auto">
                  {isHi ? "सार्थक का दो दशकों का सफर" : "Sarthak's Two-Decade Legacy"}
                </p>
                
                {/* Mobile Arrows (Small) */}
                <div className="flex md:hidden gap-4 justify-center pt-4">
                   <button onClick={handlePrev} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"><ChevronLeft size={24}/></button>
                   <button onClick={handleNext} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"><ChevronRight size={24}/></button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;