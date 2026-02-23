import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { X, Maximize2 } from "lucide-react";

// 1. TypeScript ko batane ke liye ki context mein lang hai
interface GalleryContext {
  lang: "hi" | "en";
}

const Gallery = () => {
  // 2. Context ko interface ke saath access karein (Safe way)
  const context = useOutletContext<GalleryContext>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<any>(null);

  const categories = [
    { id: 'all', label: isHi ? "सभी" : "All" },
    { id: 'plastic', label: isHi ? "प्लास्टिक प्रबंधन" : "Plastic Waste" },
    { id: 'karmis', label: isHi ? "सार्थक कर्मी" : "Sarthak Karmis" },
    { id: 'events', label: isHi ? "कार्यक्रम" : "Events" },
  ];

  const images = [
    { id: 1, category: 'plastic', url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80', title: 'Plastic Collection' },
    { id: 2, category: 'karmis', url: 'https://images.unsplash.com/photo-1591336395442-aaeef06f6e7c?auto=format&fit=crop&q=80', title: 'Our Heroes' },
    { id: 3, category: 'events', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', title: 'Awareness Drive' },
    { id: 4, category: 'plastic', url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80', title: 'Recycling Unit' },
    { id: 5, category: 'karmis', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80', title: 'Training Session' },
    { id: 6, category: 'events', url: 'https://images.unsplash.com/photo-1528605248644-14dd04cb113d?auto=format&fit=crop&q=80', title: 'Community Meeting' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[#00a651] font-black uppercase tracking-widest text-[10px] mb-4">Visual Journey</h2>
          <h3 className="text-5xl font-black text-slate-900 italic mb-8">
            {isHi ? "हमारी गैलरी" : "Impact Gallery"}
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat.id 
                  ? "bg-[#2b3291] text-white shadow-lg" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer aspect-square rounded-[2rem] overflow-hidden bg-slate-100 shadow-md"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-10 right-10 text-white">
                <X size={40} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={selectedImg.url}
                className="max-w-full max-h-[80vh] rounded-3xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;