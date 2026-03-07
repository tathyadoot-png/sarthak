"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTA: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";
  const navigate = useNavigate();

  return (
    // Pure White Background for a clean transition to Footer
    <section className="py-24 bg-white relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Light Grey Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#3e2723 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Small Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center items-center gap-2"
        >
          <span className="h-[1px] w-8 bg-[#3e2723]/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3e2723]/40">
            {isHi ? "हमसे जुड़ें" : "Get Involved"}
          </span>
          <span className="h-[1px] w-8 bg-[#3e2723]/20" />
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter mb-8 leading-[0.9]"
        >
          {isHi ? "कचरे से कंचन की" : "READY TO DRIVE"} <br />
          <span className="text-[#3e2723]/20">{isHi ? "यात्रा में साथ दें" : "THE CHANGE?"}</span>
        </motion.h2>
        
        {/* Buttons - Sirf yahan Yellow ka use hai highlights ke liye */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          {/* Primary Action */}
          <button 
            onClick={() => navigate("/donate")}
            className="group flex items-center justify-center gap-4 bg-[#3e2723] text-white px-12 py-6 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl shadow-black/10"
          >
            {isHi ? "सहयोग प्रदान करें" : "Donate to Mission"}
            <Heart size={16} className="text-[#FFBF00]" fill="currentColor" />
          </button>

          {/* Secondary Action */}
          <button 
            onClick={() => navigate("/contact")}
            className="group flex items-center justify-center gap-4 bg-[#F8FAFC] text-[#3e2723] px-12 py-6 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-slate-200 hover:border-[#3e2723] transition-all"
          >
            {isHi ? "पार्टनरशिप प्रस्ताव" : "Partner With Us"}
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;