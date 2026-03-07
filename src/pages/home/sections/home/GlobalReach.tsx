"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Globe2, ArrowRight } from "lucide-react";

const GlobalReach: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const countries = [
    { name: isHi ? "भारत" : "INDIA" },
    { name: isHi ? "नेपाल" : "NEPAL" },
    { name: isHi ? "श्रीलंका" : "SRI LANKA" },
    { name: isHi ? "सऊदी अरब" : "SAUDI ARABIA" },
    { name: isHi ? "ओमान" : "OMAN" },
    { name: isHi ? "दुबई" : "DUBAI" },
  ];

  return (
    // Background changed to Dark Brown to contrast with the Light About Section above
    <section className="py-24 bg-[#3e2723] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle Grid Pattern for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#FFBF00 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Top Icon - Yellow on Dark */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 bg-[#FFBF00] rounded-2xl rotate-12 flex items-center justify-center text-[#3e2723] shadow-2xl shadow-black/20">
            <Globe2 size={28} className="-rotate-12" />
          </div>
        </motion.div>

        {/* Heading - Now in White for high readability on dark */}
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-[1000] text-white uppercase tracking-[-0.05em] mb-4 leading-none"
        >
          {isHi ? "लोकल मॉडल, ग्लोबल रीच" : "LOCAL MODEL, GLOBAL REACH"}
        </motion.h2>
        
        {/* Subtext - Yellow for that Sarthak brand feel */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs md:text-sm font-black text-[#FFBF00] uppercase tracking-[0.4em] mb-14"
        >
          {isHi 
            ? "हमने इन देशों में तकनीकी परामर्श प्रदान किया है" 
            : "WE HAVE PROVIDED CONSULTANCY ACROSS"}
        </motion.p>

        {/* Country Chips - Transparent borders with White text */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {countries.map((country, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, backgroundColor: "#FFBF00", color: "#3e2723" }}
              className="bg-white/5 text-white/90 px-8 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-default"
            >
              {country.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Primary Button - Yellow Button that Pops on Dark Brown */}
        <motion.button 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-4 bg-[#FFBF00] text-[#3e2723] px-12 py-5 rounded-full text-xs md:text-sm font-[1000] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl shadow-black/20 group"
        >
          {isHi ? "हमारे साथ जुड़ें" : "PARTNER WITH US"}
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </motion.button>

      </div>

      {/* Decorative Background Text - Very Faded White */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black leading-none whitespace-nowrap text-white">
          GLOBAL • IMPACT • WORLDWIDE • CONSULTANCY
        </h2>
      </div>
    </section>
  );
};

export default GlobalReach;