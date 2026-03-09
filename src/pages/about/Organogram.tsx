"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { ChevronDown, Network, Briefcase, Users } from "lucide-react";

const Organogram = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>() || { lang: "en" };
  const { lang } = context;
  const isHi = lang === "hi";

  const nodes = {
    director: {
      title: isHi ? "प्रोजेक्ट डायरेक्टर" : "PROJECT DIRECTOR",
      name: "Imtiyaz Ali",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    manager: isHi ? "प्रोग्राम मैनेजर" : "PROGRAM MANAGER",
    officer: isHi ? "अनुसंधान एवं प्रलेखन अधिकारी" : "RESEARCH & DOCUMENTATION",
    coordinator: isHi ? "प्रोजेक्ट कोआर्डिनेटर" : "PROJECT COORDINATOR",
    superwiser: isHi ? "एमआरएफ सुपरवाइजर" : "MRF SUPERWISER"
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 🔹 HEADER */}
        <div className="mb-16 md:mb-32 text-center">
          <h6 className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            {isHi ? "संगठनात्मक संरचना" : "STRUCTURE"}
          </h6>
          <h2 className="text-3xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
            {isHi ? "सार्थक का" : "ORGANOGRAM OF"} <br />
            <span className="text-[#3e2723]/30">{isHi ? "संगठन चार्ट।" : "SARTHAK."}</span>
          </h2>
        </div>

        <div className="flex flex-col items-center">
          
          {/* 🔹 LEVEL 1: PROJECT DIRECTOR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-30"
          >
            <div className="flex items-center bg-[#3e2723] text-white p-1.5 pr-6 md:pr-12 rounded-full shadow-2xl border border-[#FFBF00]/20 group">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#FFBF00] shrink-0">
                <img src={nodes.director.image} alt={nodes.director.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="ml-4 md:ml-6 flex flex-col">
                <span className="text-[#FFBF00] text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase">{nodes.director.title}</span>
                <span className="text-lg md:text-2xl font-[1000] italic tracking-tighter uppercase leading-none">{nodes.director.name}</span>
              </div>
            </div>
            {/* Vertical Line Down */}
            <div className="absolute left-1/2 top-full w-[2px] h-12 md:h-20 bg-gradient-to-b from-[#3e2723] to-[#FFBF00] -translate-x-1/2" />
          </motion.div>

          {/* 🔹 LEVEL 2: PROGRAM MANAGER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative mt-12 md:mt-20 z-20"
          >
            <div className="bg-[#FFBF00] text-[#3e2723] px-6 md:px-14 py-3 md:py-5 rounded-xl md:rounded-2xl shadow-xl font-[1000] text-base md:text-xl italic tracking-tighter uppercase border-b-4 border-[#3e2723]/20">
              {nodes.manager}
            </div>
            {/* Mobile Vertical Line | Desktop split logic happens below */}
            <div className="absolute left-1/2 top-full w-[2px] h-8 md:h-12 bg-[#3e2723]/10 -translate-x-1/2" />
          </motion.div>

          {/* 🔹 LEVEL 3: BRANCHES */}
          <div className="relative w-full mt-8 md:mt-12 flex flex-col items-center">
            {/* Desktop Horizontal Beam */}
            <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-[#3e2723]/10 hidden md:block" />
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 lg:gap-32 pt-0 md:pt-12 w-full">
              
              {/* Research Officer Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative w-full max-w-[280px] md:max-w-[320px]"
              >
                {/* Vertical Connector for this specific card */}
                <div className="absolute -top-6 md:-top-12 left-1/2 w-[2px] h-6 md:h-12 bg-[#3e2723]/10 -translate-x-1/2" />
                
                <div className="bg-white border border-[#3e2723]/10 p-6 md:p-8 rounded-[2rem] shadow-lg text-center md:text-left group">
                  <div className="h-10 w-10 md:h-12 md:w-12 bg-[#3e2723]/5 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0 group-hover:bg-[#FFBF00] transition-colors">
                    <Network size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-xs md:text-sm font-black text-[#3e2723] uppercase tracking-tight leading-tight italic">
                    {nodes.officer}
                  </h4>
                </div>
              </motion.div>

              {/* Project Coordinator Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative w-full max-w-[280px] md:max-w-[320px]"
              >
                {/* Vertical Connector for this specific card */}
                <div className="absolute -top-6 md:-top-12 left-1/2 w-[2px] h-6 md:h-12 bg-[#3e2723]/10 -translate-x-1/2" />
                
                <div className="bg-white border border-[#3e2723]/10 p-6 md:p-8 rounded-[2rem] shadow-lg text-center md:text-left group">
                  <div className="h-10 w-10 md:h-12 md:w-12 bg-[#3e2723]/5 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0 group-hover:bg-[#FFBF00] transition-colors">
                    <Briefcase size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-xs md:text-sm font-black text-[#3e2723] uppercase tracking-tight leading-tight italic">
                    {nodes.coordinator}
                  </h4>
                </div>
                {/* Arrow Down to Superwiser */}
                <div className="absolute left-1/2 top-full w-[2px] h-8 md:h-24 bg-gradient-to-b from-[#3e2723]/10 to-[#3e2723] -translate-x-1/2">
                  <ChevronDown className="absolute -bottom-2 -left-1.5 text-[#3e2723] w-3 h-3 md:w-4 md:h-4" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* 🔹 LEVEL 4: MRF SUPERWISER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-8 md:mt-24 w-full max-w-xl md:max-w-2xl px-4"
          >
            <div className="bg-[#3e2723] text-white py-5 md:py-8 px-6 md:px-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl flex items-center justify-center gap-4 md:gap-8 border border-white/10 group">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-[#FFBF00] flex items-center justify-center text-[#3e2723] shrink-0 shadow-lg">
                 <Users size={20} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-3xl font-[1000] italic tracking-tighter uppercase text-center md:text-left leading-none">
                {nodes.superwiser}
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Organogram;