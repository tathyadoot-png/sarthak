"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { X, Maximize2, Newspaper, Users, Award, Camera } from "lucide-react";

const Gallery = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<any>(null);

  const categories = [
    { id: 'all', label: isHi ? "सब कुछ" : "All Memories", icon: <Camera size={14} /> },
    { id: 'press', label: isHi ? "अखबार की कतरन" : "Press Cuttings", icon: <Newspaper size={14} /> },
    { id: 'vips', label: isHi ? "खास मुलाकातें" : "Dignitaries", icon: <Users size={14} /> },
    { id: 'events', label: isHi ? "बड़े कार्यक्रम" : "Key Events", icon: <Award size={14} /> },
  ];

  // Mix of different types of images
  const images = [
    { id: 1, type: 'press', url: 'https://images.unsplash.com/photo-1585829365234-781fcd04c810?auto=format&fit=crop&q=80', title: 'Dainik Bhaskar Coverage', size: 'portrait' },
    { id: 2, type: 'vips', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80', title: 'With CM of MP', size: 'landscape' },
    { id: 3, type: 'events', url: 'https://images.unsplash.com/photo-1528605248644-14dd04cb113d?auto=format&fit=crop&q=80', title: 'Swachh Bharat Summit', size: 'square' },
    { id: 4, type: 'press', url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80', title: 'Nayi Duniya Feature', size: 'landscape' },
    { id: 5, type: 'vips', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', title: 'Delegation Visit', size: 'portrait' },
    { id: 6, type: 'events', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80', title: 'Workshop 2026', size: 'square' },
    // Aap yahan 50+ images araam se add kar sakte hain
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.type === filter);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-40 pb-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-14">
        
        {/* 🔹 SECTION HEADER */}
        <header className="mb-20 space-y-6">
<motion.h2 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  /* leading-[0.85] ya leading-none ko thoda adjust kiya hai. 
     'leading-tight' ya 'leading-[0.9]' bade fonts ke liye best hota hai.
  */
  className="text-3xl md:text-[80px]  font-black text-[#1a1f5c] tracking-tighter leading-[0.9] md:leading-[0.85] uppercase italic"
>
  {isHi ? "सार्थक" : "SARTHAK"}
  <br />
  
  <span className="text-emerald-500 block md:inline-block mt-6">
    {isHi ? "यादें और प्रभाव" : "ARCHIVES"}
  </span>
</motion.h2>

          {/* 🔹 FILTER TABS (Pills Style) */}
          <div className="flex flex-wrap gap-3 pt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                  filter === cat.id 
                  ? "bg-[#1a1f5c] text-white shadow-2xl scale-105" 
                  : "bg-white text-slate-400 hover:bg-slate-50 border border-slate-100"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </header>

        {/* 🔹 MASONRY WALL LAYOUT */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImg(img)}
                className={`relative break-inside-avoid cursor-pointer group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100
                  ${img.type === 'press' ? 'p-3 bg-[#fdfcf0]' : ''} 
                `}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-2xl ${img.type === 'press' ? 'border-[1px] border-slate-200' : ''}`}>
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.type}
                  </div>
                </div>

                {/* Caption Area */}
                <div className="p-6">
                  <h4 className="text-[#1a1f5c] font-black text-lg leading-tight group-hover:text-emerald-600 transition-colors uppercase italic tracking-tighter">
                    {img.title}
                  </h4>
                  <div className="mt-4 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-widest italic text-slate-500">View Archive</span>
                    <Maximize2 size={16} className="text-emerald-500" />
                  </div>
                </div>

                {/* Press Texture Overlay (Only for News) */}
                {img.type === 'press' && (
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🔹 LIGHTBOX (Immersive Detail) */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-4 md:p-12 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="fixed top-8 right-8 w-14 h-14 bg-slate-100 hover:bg-emerald-500 hover:text-white rounded-full flex items-center justify-center transition-all z-[110]"
              >
                <X size={28} />
              </button>

              <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-center py-20">
                <div className={`lg:col-span-7 rounded-[2rem] overflow-hidden shadow-2xl ${selectedImg.type === 'press' ? 'bg-[#fdfcf0] p-4 border border-slate-200' : ''}`}>
                  <img src={selectedImg.url} className="w-full h-auto rounded-xl" />
                </div>
                
                <div className="lg:col-span-5 space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-12 bg-emerald-500"></span>
                    <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em]">{selectedImg.type}</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black text-[#1a1f5c] uppercase italic tracking-tighter leading-none">
                    {selectedImg.title}
                  </h3>
                  <div className="w-full h-[1px] bg-slate-100"></div>
                  <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
                    {isHi 
                      ? "यह दस्तावेज़ सार्थक की यात्रा और समाज पर इसके गहरे प्रभाव का प्रमाण है।" 
                      : "This archive entry documents Sarthak's journey and its profound impact on society and policy making."}
                  </p>
                  
                  <div className="pt-6 grid grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact Level</div>
                      <div className="text-[#1a1f5c] font-bold text-lg">National</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Year</div>
                      <div className="text-[#1a1f5c] font-bold text-lg">2021 - 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;