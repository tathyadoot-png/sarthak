"use client";

import React from 'react';
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { Globe2, Landmark, Cpu, ArrowUpRight } from "lucide-react";

interface PartnersProps {
  lang: "hi" | "en";
}

const Partners = ({ lang }: PartnersProps) => {
  const isHi = lang === "hi";
  
  const partners = [
    { name: "UNDP", label: isHi ? "संयुक्त राष्ट्र विकास" : "United Nations Development" },
    { name: "GEF", label: isHi ? "वैश्विक पर्यावरण सुविधा" : "Global Environment Facility" },
    { name: "BMC", label: isHi ? "भोपाल नगर निगम" : "Bhopal Municipal Corp." },
    { name: "CEE", label: isHi ? "पर्यावरण शिक्षा केंद्र" : "Centre for Env Education" },
    { name: "MPPCB", label: isHi ? "प्रदूषण नियंत्रण बोर्ड" : "Pollution Control Board" },
    { name: "BHEL", label: isHi ? "भारत हैवी इलेक्ट्रिकल्स" : "Bharat Heavy Electricals" },
    { name: "NHDC", label: isHi ? "नेशनल हाइड्रोइलेक्ट्रिक" : "National Hydroelectric" },
    { name: "EPCO", label: isHi ? "पर्यावरण नियोजन संगठन" : "Env Planning Org" },
  ];

  const scrollContent = [...partners, ...partners];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle={isHi ? "वैश्विक नेटवर्क" : "Strategic Alliances"}
          titleMain={isHi ? "दुनिया के भरोसेमंद" : "Trusted by Global"}
          titleGradient={isHi ? "संस्थान और सरकार" : "Institutions & Govts"}
          isHi={isHi}
        />
      </div>

      {/* --- INFINITY MARQUEE --- */}
      <div className="relative flex overflow-hidden group py-4 md:py-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, // Thoda fast kiya taaki engagement rahe
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-4 md:gap-6 px-4"
        >
          {scrollContent.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between p-6 md:p-8 min-w-[240px] md:min-w-[320px] h-[150px] md:h-[200px] bg-slate-950 rounded-[1.8rem] md:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group/card"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="block text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#00a651]">
                    {isHi ? "सत्यापित" : "Verified"}
                  </span>
                  <span className="text-2xl md:text-4xl font-black tracking-tighter text-white group-hover/card:text-[#00a651] transition-colors">
                    {partner.name}
                  </span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:bg-[#00a651] transition-colors shrink-0">
                   <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <span className="block text-[10px] md:text-[11px] font-bold text-slate-400 whitespace-normal leading-snug">
                  {partner.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Edge Blur Fades - Responsive Width */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* --- TRUST BADGES --- */}
      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
           {[
             { 
               icon: <Globe2 size={20} />, 
               title: isHi ? "ग्लोबल फंडिंग" : "Global Funding", 
               desc: isHi ? "GEF स्मॉल ग्रांट्स और UNDP इंडिया द्वारा समर्थित।" : "Supported by GEF Small Grants & UNDP India.",
               color: "text-blue-600", bg: "bg-blue-50"
             },
             { 
               icon: <Landmark size={20} />, 
               title: isHi ? "सरकारी स्वीकृति" : "Govt. Approval", 
               desc: isHi ? "मध्य प्रदेश के 24+ नगर निगमों में लागू।" : "Replicated in 24+ Municipal Corps in MP.",
               color: "text-emerald-600", bg: "bg-emerald-50"
             },
             { 
               icon: <Cpu size={20} />, 
               title: isHi ? "तकनीकी समझौता" : "Tech Agreement", 
               desc: isHi ? "टेक्नोलॉजिक यूनिट II के साथ 10 साल का ई-वेस्ट समझौता।" : "10-Year E-Waste deal with Technologic Unit II.",
               color: "text-slate-900", bg: "bg-slate-100"
             }
           ].map((box, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -5 }}
               className="flex flex-row md:flex-row gap-5 p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm items-center hover:shadow-md transition-all"
             >
               <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 ${box.bg} ${box.color}`}>
                 {box.icon}
               </div>
               <div>
                 <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-950">{box.title}</p>
                 <p className="text-[10px] md:text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{box.desc}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;