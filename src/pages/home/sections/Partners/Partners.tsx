"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Globe2, Landmark, ArrowUpRight, ShieldCheck, 
  Handshake, Leaf, GraduationCap
} from "lucide-react";

interface ContextType {
  lang: "hi" | "en";
}

const PartnersPage = () => {
  const context = useOutletContext<ContextType>() || { lang: "en" };
  const lang = context.lang;
  const isHi = lang === "hi";

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const globalPartners = [
    { name: "UNDP", label: isHi ? "संयुक्त राष्ट्र विकास कार्यक्रम" : "United Nations Development Programme", category: "Global" },
    { name: "GEF", label: isHi ? "वैश्विक पर्यावरण सुविधा" : "Global Environment Facility", category: "Global" },
    { name: "BMC", label: isHi ? "भोपाल नगर निगम" : "Bhopal Municipal Corporation", category: "Government" },
    { name: "MPPCB", label: isHi ? "म.प्र. प्रदूषण नियंत्रण बोर्ड" : "MP Pollution Control Board", category: "Government" },
  ];

  // 🌿 EXACTLY 16 Green Partners (Hardcoded for easy editing)
  const greenPartners = [
    // ROW 1
    { id: 1, name: "Partner 1", logo: "/logos/green-1.png" },
    { id: 2, name: "Partner 2", logo: "/logos/green-2.png" },
    { id: 3, name: "Partner 3", logo: "/logos/green-3.png" },
    { id: 4, name: "Partner 4", logo: "/logos/green-4.png" },
    { id: 5, name: "Partner 5", logo: "/logos/green-5.png" },
    { id: 6, name: "Partner 6", logo: "/logos/green-6.png" },
    { id: 7, name: "Partner 7", logo: "/logos/green-7.png" },
    { id: 8, name: "Partner 8", logo: "/logos/green-8.png" },
    // ROW 2
    { id: 9, name: "Partner 9", logo: "/logos/green-9.png" },
    { id: 10, name: "Partner 10", logo: "/logos/green-10.png" },
    { id: 11, name: "Partner 11", logo: "/logos/green-11.png" },
    { id: 12, name: "Partner 12", logo: "/logos/green-12.png" },
    { id: 13, name: "Partner 13", logo: "/logos/green-13.png" },
    { id: 14, name: "Partner 14", logo: "/logos/green-14.png" },
    { id: 15, name: "Partner 15", logo: "/logos/green-15.png" },
    { id: 16, name: "Partner 16", logo: "/logos/green-16.png" },
  ];

  const knowledgePartners = [
    { id: 1, name: "EPCO", role: "Environmental Planning", img: "/logos/epco.png" },
    { id: 2, name: "CEE", role: "Environment Education", img: "/logos/cee.png" },
    { id: 3, name: "UN-Habitat", role: "Technical Partner", img: "/logos/un-habitat.png" },
  ];

  return (
    <div className="bg-[#fcfcfb] min-h-screen pb-32 overflow-hidden selection:bg-[#FFBF00] selection:text-[#3e2723]">
      
      {/* 1. HERO HEADER */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto pt-44 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-[#FFBF00]"></span>
              <span className="text-[#3e2723] font-black uppercase tracking-[0.4em] text-[10px]">
                {isHi ? "हमारा नेटवर्क" : "PARTNERSHIP ECOSYSTEM"}
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="text-6xl md:text-[8rem] font-[1000] text-[#3e2723] leading-[0.85] tracking-tighter uppercase italic"
            >
              {isHi ? "रणनीतिक" : "STRATEGIC"} <br />
              <span className="text-[#FFBF00] not-italic">{isHi ? "गठबंधन" : "ALLIANCES."}</span>
            </motion.h1>
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-4 lg:pt-16">
            <p className="text-[#3e2723]/60 text-xl font-bold leading-tight italic uppercase border-l-4 border-[#FFBF00] pl-8">
              {isHi ? "सार्थक का प्रभाव सरकारी निकायों के भरोसे पर टिका है।" : "Sarthak's impact is built on the trust of leading institutions."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STRATEGIC PARTNERS */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalPartners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-[#3e2723]/5 shadow-xl group flex flex-col justify-between h-[280px] relative"
            >
              <div className="absolute top-0 right-0 p-8">
                <ArrowUpRight size={20} className="text-[#3e2723]/10 group-hover:text-[#FFBF00] transition-all" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#3e2723] text-[#FFBF00] text-[8px] font-black uppercase tracking-widest rounded-full mb-6">
                  {partner.category}
                </span>
                <h3 className="text-4xl font-[1000] text-[#3e2723] uppercase italic leading-none group-hover:text-[#FFBF00] transition-colors">
                  {partner.name}
                </h3>
              </div>
              <p className="text-[#3e2723]/40 text-[9px] font-black uppercase tracking-widest pt-4 border-t border-[#3e2723]/5">
                {partner.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. GREEN PARTNERS (Exactly 16 Cards) */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40">
        <div className="flex items-center gap-4 mb-12 text-center md:text-left">
            <Leaf className="text-[#FFBF00]" size={24} />
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter italic">
                {isHi ? "ग्रीन पार्टनर्स" : "GREEN PARTNERS"}
            </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {greenPartners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ scale: 1.05, borderColor: "#FFBF00" }}
              className="aspect-square bg-white border border-[#3e2723]/5 rounded-3xl p-6 flex items-center justify-center group transition-all"
            >
              <img 
                src={partner.logo} 
                className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                alt={partner.name} 
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. KNOWLEDGE PARTNERS (Exactly 3) */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40">
        <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-[#FFBF00]" size={28} />
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter italic">
                {isHi ? "नॉलेज पार्टनर्स" : "KNOWLEDGE PARTNERS"}
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {knowledgePartners.map((kp) => (
            <motion.div
              key={kp.id}
              whileHover={{ y: -10 }}
              className="bg-[#3e2723] text-white p-10 rounded-[3.5rem] relative overflow-hidden group shadow-2xl"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl p-4 mb-8">
                  <img src={kp.img} className="w-full h-full object-contain" alt={kp.name} />
                </div>
                <h4 className="text-3xl font-[1000] text-[#FFBF00] uppercase italic mb-2">{kp.name}</h4>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{kp.role}</p>
              </div>
              <Globe2 className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 opacity-20" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. TRUST AREA */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40 overflow-hidden">
        <div className="bg-[#3e2723] rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFBF00]/5 -skew-x-12 translate-x-20" />
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic leading-none tracking-tighter mb-8">
                {isHi ? "प्रमाणित और" : "VALIDATED &"} <br/>
                <span className="text-[#FFBF00]">RECOGNIZED.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8 text-[#FFBF00] text-5xl font-[1000]">
                <div>24+</div>
                <div>10Y+</div>
              </div>
            </div>
            <div className="grid gap-6">
              {[
                { icon: <Globe2 />, title: isHi ? "ग्लोबल फंडिंग" : "Global Funding", desc: "GEF & UNDP." },
                { icon: <Landmark />, title: isHi ? "सरकारी स्वीकृति" : "Govt. Approval", desc: "MP State Govt." },
                { icon: <ShieldCheck />, title: isHi ? "कानूनी अनुपालन" : "Compliance", desc: "100% Audit Cleared." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 group">
                   <div className="w-14 h-14 bg-[#FFBF00] rounded-2xl flex items-center justify-center text-[#3e2723] shadow-lg shrink-0 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest text-sm">{item.title}</h4>
                    <p className="text-white/40 text-[10px] font-bold uppercase mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="px-6 md:px-14 max-w-4xl mx-auto text-center pb-20">
        <Handshake size={64} className="mx-auto text-[#FFBF00] mb-8" />
        <h2 className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter italic mb-8">
            {isHi ? "हमारे साथ जुड़ें" : "BECOME A PARTNER."}
        </h2>
        <button className="px-12 py-8 bg-[#3e2723] text-[#FFBF00] rounded-3xl font-[1000] uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl active:scale-95">
            {isHi ? "साझेदारी शुरू करें" : "START A PARTNERSHIP"}
        </button>
      </section>
    </div>
  );
};

export default PartnersPage;