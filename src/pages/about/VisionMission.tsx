"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const VisionMission = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  return (
    <section className="w-full">
      {/* 🔹 Heading Section - Updated to Match Theme */}
      <div className="mb-16">
        <h6 className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          {isHi ? "हमारा संकल्प" : "OUR COMMITMENT"}
        </h6>
        <h2 className="text-4xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
          {isHi ? "दृष्टिकोण और" : "PURPOSE &"} <br />
          <span className="text-[#3e2723]/30">{isHi ? "लक्ष्य।" : "STRATEGY."}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full">
        
        {/* 🔹 MISSION CARD (The Clean White/Yellow Look) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white border border-[#3e2723]/5 hover:border-[#FFBF00]/30 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(62,39,35,0.08)]"
        >
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFBF00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 space-y-6 md:space-y-10">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-[#3e2723] flex items-center justify-center text-[#FFBF00] shadow-xl group-hover:rotate-[10deg] transition-transform duration-500">
                <Target size={32} className="md:w-10 md:h-10" />
              </div>
              <ArrowUpRight className="text-[#3e2723]/20 group-hover:text-[#FFBF00] transition-colors" size={24} />
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl md:text-4xl font-[1000] text-[#3e2723] tracking-tighter uppercase italic">
                {isHi ? "हमारा मिशन" : "Our Mission"}
              </h4>
              <p className="text-[#3e2723]/70 text-base md:text-xl leading-relaxed font-bold max-w-[95%]">
                {isHi 
                  ? "नगर निगमों और समुदायों के साथ मिलकर ठोस अपशिष्ट प्रबंधन के लिए एक आत्मनिर्भर और टिकाऊ बिजनेस मॉडल तैयार करना।" 
                  : "To create a self-sustainable business model in solid waste management by partnering with municipal bodies and heavy industries."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🔹 VISION CARD (The Dark Brown Premium Look) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative group p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-[#3e2723] text-white overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2"
        >
          {/* Mesh Gradient Background */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFBF00]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-[#FFBF00]/20 transition-colors duration-1000" />
          
          <div className="relative z-10 space-y-6 md:space-y-10">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-[#FFBF00] flex items-center justify-center text-[#3e2723] shadow-2xl group-hover:-rotate-[10deg] transition-transform duration-500">
                <Eye size={32} className="md:w-10 md:h-10" />
              </div>
              <ArrowUpRight className="text-white/20 group-hover:text-[#FFBF00] transition-colors" size={24} />
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl md:text-4xl font-[1000] text-white tracking-tighter uppercase italic">
                {isHi ? "हमारा विजन" : "Our Vision"}
              </h4>
              <p className="text-white/70 text-base md:text-xl leading-relaxed font-bold max-w-[95%]">
                {isHi 
                  ? "एक ऐसा समाज जहाँ कचरा बीनने वालों को 'सार्थक कर्मी' के रूप में सम्मान मिले और हर अपशिष्ट संसाधन को पुनर्चक्रित किया जाए।" 
                  : "To see every rag-picker transformed into a 'Sarthak Karmi'—a dignified worker with social security and professional status."}
              </p>
            </div>

            {/* Subtle Tag for Vision */}
            <div className="pt-2">
               <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:border-[#FFBF00] group-hover:text-[#FFBF00] transition-colors">
                 Social Transformation
               </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMission;