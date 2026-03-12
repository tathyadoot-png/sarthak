"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Recycle, Sprout, HardHat, Zap, Factory, Wheat, ArrowRight, ArrowLeft } from "lucide-react";

const Initiatives: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const initiatives = [
    { title: isHi ? "प्लास्टिक प्रबंधन" : "Plastic Waste", icon: <Recycle size={32} />, desc: isHi ? "27,000km+ सड़क निर्माण के लिए MLP का प्रसंस्करण।" : "MLP shredding for 27,000km+ road construction.", img: "/plasticwaste/3.jpg" },
    { title: isHi ? "ई-कचरा प्रबंधन" : "E-Waste Management", icon: <Zap size={32} />, desc: isHi ? "ई-वेस्ट एम्बुलेंस और सुरक्षित निराकरण भागीदारी।" : "E-waste ambulance and safe dismantling partnerships.", img: "/ewaste/2.jpg" },
    { title: isHi ? "जैविक अपशिष्ट" : "Organic Waste", icon: <Sprout size={32} />, desc: isHi ? "सामुदायिक कंपोस्टिंग और बायोगैस सिस्टम।" : "Community composting and biogas systems.", img: "/organicwaste/5.jpg" },
    { title: isHi ? "ज़ीरो वेस्ट इवेंट" : "Zero Waste Event", icon: <Recycle size={32} />, desc: isHi ? "आयोजनों में शून्य अपशिष्ट प्रबंधन।" : "Zero-waste systems for mega events.", img: "/zerowaste/8.jpg" },
    { title: isHi ? "औद्योगिक अपशिष्ट" : "Industrial Waste", icon: <Factory size={32} />, desc: isHi ? "सह-प्रसंस्करण और सुरक्षित संग्रहण।" : "Co-processing of industrial waste streams.", img: "/zerowaste/6.jpg" },
    { title: isHi ? "सामाजिक समावेशन" : "Social Inclusion", icon: <HardHat size={32} />, desc: isHi ? "सफाई मित्रों का औपचारिकरण और सशक्तिकरण।" : "Empowering Safai Mitras through formalization.", img: "/img/37.jpeg" },
    { title: isHi ? "कृषि अपशिष्ट" : "Agriculture Waste", icon: <Wheat size={32} />, desc: isHi ? "अवशेषों का बायो-ऊर्जा में रूपांतरण।" : "Utilizing residues for bio-energy.", img: "/img/12.jpeg" }
  ];

  // Auto-slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + 400, behavior: 'smooth' });
        }
      }
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 400 : scrollLeft + 400;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              {isHi ? "हमारी मुख्य पहल" : "Our Core Initiatives"}
            </motion.h6>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-[0.85]">
              {isHi ? "सतत" : "Sustainable"} <br />
              <span className="text-[#3e2723]/20">{isHi ? "समाधान" : "Impact"}</span>
            </motion.h2>
          </div>

          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-4 rounded-full border border-[#3e2723]/10 hover:bg-[#3e2723] hover:text-white transition-all bg-white shadow-sm">
              <ArrowLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="p-4 rounded-full border border-[#3e2723]/10 hover:bg-[#3e2723] hover:text-white transition-all bg-white shadow-sm">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area - Restricted to 7xl width */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-12 snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative min-w-[280px] sm:min-w-[350px] md:min-w-[400px] h-[550px] rounded-[2.5rem] overflow-hidden snap-center flex-shrink-0 group shadow-xl shadow-black/5"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723] via-[#3e2723]/40 to-transparent" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="w-14 h-14 bg-[#FFBF00] rounded-2xl flex items-center justify-center text-[#3e2723] mb-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-[1000] uppercase tracking-tighter mb-4 leading-none">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-white/80 max-w-[280px] leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-[1px] w-12 bg-[#FFBF00]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFBF00]">Explore More</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;