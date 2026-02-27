"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Building2, Handshake, BarChart3, Globe, 
  ArrowRight, ShieldCheck, Zap, Layers 
} from "lucide-react";

interface PartnerContext { lang: "hi" | "en"; }

const Partner = () => {
  const context = useOutletContext<PartnerContext>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const services = [
    { 
      icon: <BarChart3 size={24} />, 
      title: isHi ? "CSR प्रोजेक्ट्स" : "CSR Projects", 
      desc: isHi 
        ? "शून्य अपशिष्ट समाधानों का पूर्ण क्रियान्वयन और प्रबंधन।" 
        : "Complete execution and management of zero-waste solutions for corporates.",
      tag: "Implementation"
    },
    { 
      icon: <Globe size={24} />, 
      title: isHi ? "EPR सेवाएं" : "EPR Services", 
      desc: isHi 
        ? "प्लास्टिक और ई-कचरे के लिए कानूनी और परिचालन अनुपालन।" 
        : "Legal and operational compliance for plastic and e-waste management.",
      tag: "Compliance"
    },
    { 
      icon: <Layers size={24} />, 
      title: isHi ? "सस्टेनेबिलिटी ऑडिट" : "Sustainability Audit", 
      desc: isHi 
        ? "आपके संस्थान के कार्बन फुटप्रिंट का विश्लेषण और सुधार।" 
        : "Analyzing and improving your organization's carbon footprint.",
      tag: "Analysis"
    }
  ];

  return (
    <div className="py-32 bg-white min-h-screen text-slate-900 selection:bg-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🔹 Compact Header */}
        <div className="mb-20 border-l-4 border-emerald-500 pl-8">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Zap size={14} className="text-emerald-500 fill-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Partnership Portal
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1a1f5c] tracking-tight leading-tight"
          >
            {isHi ? "कॉर्पोरेट पार्टनरशिप प्रोग्राम" : "Corporate Partnership Program"}
          </motion.h1>
          
          <p className="text-slate-500 mt-4 max-w-xl text-lg font-medium leading-relaxed">
            {isHi 
              ? "सार्थक के साथ जुड़कर अपने व्यावसायिक लक्ष्यों को पर्यावरणीय जिम्मेदारी के साथ जोड़ें।"
              : "Align your business goals with environmental responsibility by partnering with Sarthak."}
          </p>
        </div>

        {/* 🔹 Services Grid: Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-500 transition-colors">
                  {s.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-[#1a1f5c]">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 cursor-pointer group/link">
                Learn More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Compact CTA Box */}
        <motion.div 
          className="bg-[#1a1f5c] rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                <ShieldCheck size={32} className="text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {isHi ? "प्रस्ताव के लिए अनुरोध करें" : "Request a Detailed Proposal"}
                </h2>
                <p className="text-blue-200/60 text-sm mt-1">
                  {isHi ? "हमारी टीम 24 घंटे में आपसे संपर्क करेगी।" : "Our specialists will reach out within 24 business hours."}
                </p>
              </div>
            </div>

            <button className="px-10 h-16 bg-emerald-500 hover:bg-white text-[#1a1f5c] rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
              {isHi ? "संपर्क करें" : "Contact Now"} <Handshake size={18} />
            </button>
          </div>
          
          {/* Subtle Background Art */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
        </motion.div>

        {/* 🔹 Bottom Minimal Trust Bar */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <Building2 size={24} />
           <div className="h-4 w-px bg-slate-200 hidden md:block" />
           <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 italic text-center md:text-left">
             A Sarthak Sustainable Management Initiative
           </p>
        </div>

      </div>
    </div>
  );
};

export default Partner;