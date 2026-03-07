"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate } from "react-router-dom";
import { 
  Building2, Handshake, BarChart3, Globe, 
  ArrowRight, ShieldCheck, Zap, Layers,
  Briefcase, Factory, Scale
} from "lucide-react";

interface PartnerContext { lang: "hi" | "en"; }

const Partner = () => {
  const context = useOutletContext<PartnerContext>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";
  const navigate = useNavigate();

  const services = [
    { 
      icon: <Factory size={28} />, 
      title: isHi ? "CSR प्रोजेक्ट्स" : "CSR PROJECTS", 
      desc: isHi 
        ? "शून्य अपशिष्ट समाधानों का पूर्ण क्रियान्वयन और प्रबंधन।" 
        : "Complete execution and management of zero-waste solutions for corporates.",
      tag: "Implementation"
    },
    { 
      icon: <Scale size={28} />, 
      title: isHi ? "EPR सेवाएं" : "EPR SERVICES", 
      desc: isHi 
        ? "प्लास्टिक और ई-कचरे के लिए कानूनी और परिचालन अनुपालन।" 
        : "Legal and operational compliance for plastic and e-waste management.",
      tag: "Compliance"
    },
    { 
      icon: <BarChart3 size={28} />, 
      title: isHi ? "सस्टेनेबिलिटी ऑडिट" : "SUSTAINABILITY AUDIT", 
      desc: isHi 
        ? "आपके संस्थान के कार्बन फुटप्रिंट का विश्लेषण और सुधार।" 
        : "Analyzing and improving your organization's carbon footprint.",
      tag: "Analysis"
    }
  ];

  return (
    <div className="py-44 bg-[#fcfcfb] min-h-screen text-[#3e2723] selection:bg-[#FFBF00] selection:text-[#3e2723]">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        {/* 🔹 Heavy Industrial Header */}
        <div className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-[#FFBF00]" />
            <span className="text-[#3e2723] font-black uppercase tracking-[0.4em] text-[10px]">
              {isHi ? "साझेदारी" : "PARTNERSHIP PORTAL"}
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[7.5rem] font-[1000] text-[#3e2723] tracking-tighter leading-[0.85] uppercase italic"
            >
              {isHi ? "कॉर्पोरेट" : "CORPORATE"} <br />
              <span className="text-[#FFBF00] not-italic">{isHi ? "गठबंधन" : "ALLIANCE."}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#3e2723]/60 text-xl font-bold uppercase italic border-l-4 border-[#FFBF00] pl-8 max-w-md mb-4"
            >
              {isHi 
                ? "सार्थक के साथ जुड़कर अपने व्यावसायिक लक्ष्यों को पर्यावरणीय जिम्मेदारी के साथ जोड़ें।"
                : "Aligning industrial growth with environmental circularity through strategic partnerships."}
            </motion.p>
          </div>
        </div>

        {/* 🔹 Services Grid: Industrial Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="p-12 bg-white rounded-[4rem] border-4 border-[#3e2723]/5 hover:border-[#FFBF00] transition-all duration-500 group shadow-xl shadow-[#3e2723]/5"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-20 h-20 bg-[#3e2723] rounded-[2rem] flex items-center justify-center text-[#FFBF00] shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                  {s.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3e2723]/20 group-hover:text-[#FFBF00] transition-colors">
                  {s.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-[1000] mb-6 text-[#3e2723] uppercase italic tracking-tighter leading-none">{s.title}</h3>
              <p className="text-[#3e2723]/50 text-xs font-bold uppercase leading-relaxed mb-12 h-16">{s.desc}</p>
              
              <div className="pt-8 border-t border-[#3e2723]/5 flex items-center justify-between group/link cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3e2723]">Details</span>
                <div className="w-10 h-10 rounded-full border-2 border-[#3e2723]/10 flex items-center justify-center group-hover/link:bg-[#3e2723] group-hover/link:text-[#FFBF00] transition-all">
                   <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 High-Impact CTA Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#3e2723] rounded-[5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 bg-[#FFBF00] rounded-[2.5rem] flex items-center justify-center rotate-12 shrink-0 shadow-2xl">
                <ShieldCheck size={48} className="text-[#3e2723]" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none mb-4">
                  {isHi ? "प्रस्ताव का अनुरोध करें" : "REQUEST A PROPOSAL"}
                </h2>
                <p className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em]">
                  {isHi ? "हमारी विशेषज्ञ टीम 24 घंटे में संपर्क करेगी।" : "Get a customized sustainability roadmap in 24 hours."}
                </p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/contact')}
              className="px-16 py-8 bg-[#FFBF00] hover:bg-white text-[#3e2723] rounded-3xl font-[1000] uppercase tracking-[0.3em] text-xs flex items-center gap-4 transition-all active:scale-95 shadow-2xl"
            >
              {isHi ? "अभी जुड़ें" : "CONTACT NOW"} <Handshake size={20} />
            </button>
          </div>
          
          {/* Industrial Background Art */}
          <div className="absolute top-0 right-0 text-[20rem] font-black text-white/[0.02] pointer-events-none select-none uppercase italic leading-none -mr-20">
            CSR
          </div>
        </motion.div>

        {/* 🔹 Trust Footer */}
        <div className="mt-32 pt-16 border-t-4 border-[#3e2723]/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-6 grayscale opacity-30">
              <Building2 size={32} />
              <Briefcase size={32} />
              <Globe size={32} />
           </div>
           <p className="text-[10px] font-[1000] uppercase tracking-[0.5em] text-[#3e2723]/20 italic">
             A Sarthak Sustainable Management Initiative © 2026
           </p>
        </div>

      </div>

      {/* Background Decor */}
      <div className="fixed bottom-0 left-0 text-[25rem] font-[1000] text-[#3e2723]/[0.01] pointer-events-none select-none uppercase italic leading-none -ml-20">
        ALLIANCE
      </div>
    </div>
  );
};

export default Partner;