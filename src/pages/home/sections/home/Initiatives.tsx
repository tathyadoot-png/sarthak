"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Recycle, Sprout, HardHat, Zap, Factory, Wheat, ArrowUpRight } from "lucide-react";

const Initiatives: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const initiatives = [
    { title: isHi ? "प्लास्टिक प्रबंधन" : "Plastic Waste", icon: <Recycle size={24} />, desc: isHi ? "सड़क निर्माण के लिए MLP का प्रसंस्करण।" : "MLP shredding for roads.", img: "/plasticwaste/3.jpg", grid: "md:col-span-2 md:row-span-2" },
    { title: isHi ? "ई-कचरा" : "E-Waste", icon: <Zap size={24} />, desc: isHi ? "सुरक्षित निराकरण।" : "Safe dismantling.", img: "/ewaste/2.jpg", grid: "md:col-span-1 md:row-span-1" },
    { title: isHi ? "जैविक अपशिष्ट" : "Organic", icon: <Sprout size={24} />, desc: isHi ? "बायोगैस सिस्टम।" : "Biogas systems.", img: "/organicwaste/5.jpg", grid: "md:col-span-1 md:row-span-1" },
    { title: isHi ? "सामाजिक समावेशन" : "Social", icon: <HardHat size={24} />, desc: isHi ? "मित्रों का सशक्तिकरण।" : "Empowering Mitras.", img: "/img/37.jpeg", grid: "md:col-span-1 md:row-span-2" },
    { title: isHi ? "औद्योगिक" : "Industrial", icon: <Factory size={24} />, desc: isHi ? "सह-प्रसंस्करण।" : "Co-processing.", img: "/zerowaste/6.jpg", grid: "md:col-span-1 md:row-span-1" },
    { title: isHi ? "ज़ीरो वेस्ट" : "Zero Waste", icon: <Recycle size={24} />, desc: isHi ? "शून्य अपशिष्ट आयोजन।" : "Zero-waste events.", img: "/zerowaste/8.jpg", grid: "md:col-span-1 md:row-span-1" },
    { title: isHi ? "कृषि अपशिष्ट" : "Agri Waste", icon: <Wheat size={24} />, desc: isHi ? "बायो-ऊर्जा।" : "Bio-energy.", img: "/img/12.jpeg", grid: "md:col-span-1 md:row-span-1" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[10px] font-black tracking-[0.5em] text-[#FFBF00] uppercase block mb-3">
              {isHi ? "07 मिशन इम्पैक्ट" : "07 STRATEGIC MISSIONS"}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-[0.9]">
              {isHi ? "सतत" : "RADICAL"} <br />
              <span className="opacity-20 italic font-light">{isHi ? "बदलाव" : "CHANGE"}</span>
            </motion.h2>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[220px] group/main">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`
                relative overflow-hidden rounded-[2rem] cursor-pointer group 
                min-h-[250px] md:min-h-full transition-all duration-700
                ${item.grid} 
                md:group-hover/main:opacity-40 md:hover:!opacity-100 md:hover:scale-[1.02]
              `}
            >
              {/* Background Image */}
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 md:grayscale-[50%] md:group-hover:grayscale-0"
                alt={item.title}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-[#3e2723]/40 md:bg-[#3e2723]/30 group-hover:bg-[#3e2723]/10 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723] via-transparent to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-[#FFBF00] md:bg-white rounded-full flex items-center justify-center text-[#3e2723] shadow-xl group-hover:bg-[#FFBF00] transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 md:group-hover:opacity-100 transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-[11px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed md:max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[#3e2723]/20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Global Standards</span>
            <div className="hidden md:block h-[1px] flex-1 mx-8 bg-[#3e2723]/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Sarthak 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;