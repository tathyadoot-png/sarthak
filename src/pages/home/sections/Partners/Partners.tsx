"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Globe2, Landmark, Cpu, ArrowUpRight, ShieldCheck, 
  Handshake, Star, Award, Building
} from "lucide-react";

interface ContextType {
  lang: "hi" | "en";
}

const PartnersPage = () => {
  const context = useOutletContext<ContextType>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const partners = [
    { name: "UNDP", label: isHi ? "संयुक्त राष्ट्र विकास कार्यक्रम" : "United Nations Development Programme", category: "Global" },
    { name: "GEF", label: isHi ? "वैश्विक पर्यावरण सुविधा" : "Global Environment Facility", category: "Global" },
    { name: "BMC", label: isHi ? "भोपाल नगर निगम" : "Bhopal Municipal Corporation", category: "Government" },
    { name: "CEE", label: isHi ? "पर्यावरण शिक्षा केंद्र" : "Centre for Environment Education", category: "Educational" },
    { name: "MPPCB", label: isHi ? "म.प्र. प्रदूषण नियंत्रण बोर्ड" : "MP Pollution Control Board", category: "Government" },
    { name: "BHEL", label: isHi ? "भारत हैवी इलेक्ट्रिकल्स लिमिटेड" : "Bharat Heavy Electricals Ltd.", category: "Corporate" },
    { name: "NHDC", label: isHi ? "नर्मदा हाइड्रोइलेक्ट्रिक डेवलपमेंट" : "Narmada Hydroelectric Development", category: "Corporate" },
    { name: "EPCO", label: isHi ? "पर्यावरण नियोजन एवं समन्वय संगठन" : "Env Planning & Org", category: "Government" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#fcfcfb] min-h-screen pb-32 overflow-hidden selection:bg-[#FFBF00] selection:text-[#3e2723]">
      
      {/* 1. HERO HEADER */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto pt-44 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-[#FFBF00]"></span>
              <span className="text-[#3e2723] font-black uppercase tracking-[0.4em] text-[10px]">
                {isHi ? "हमारा वैश्विक नेटवर्क" : "OUR GLOBAL NETWORK"}
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="text-6xl md:text-[8rem] font-[1000] text-[#3e2723] leading-[0.85] tracking-tighter uppercase italic"
            >
              {isHi ? "रणनीतिक" : "STRATEGIC"} <br />
              <span className="text-[#FFBF00] not-italic">
                {isHi ? "गठबंधन" : "ALLIANCES."}
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-4 lg:pt-16"
          >
            <p className="text-[#3e2723]/60 text-xl font-bold leading-tight italic uppercase border-l-4 border-[#FFBF00] pl-8">
              {isHi 
                ? "सार्थक का प्रभाव दुनिया के सबसे बड़े संस्थानों और सरकारी निकायों के भरोसे पर टिका है।" 
                : "Sarthak's impact is built on the trust of the world's leading institutions and government bodies."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN PARTNERS GRID */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border-4 border-[#3e2723]/5 shadow-xl group relative overflow-hidden h-[320px] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-8">
                <ArrowUpRight size={24} className="text-[#3e2723]/10 group-hover:text-[#FFBF00] group-hover:rotate-45 transition-all" />
              </div>

              <div>
                <span className="inline-block px-4 py-1 bg-[#3e2723] text-[#FFBF00] text-[8px] font-black uppercase tracking-widest rounded-full mb-6">
                  {partner.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-[1000] text-[#3e2723] uppercase italic leading-none group-hover:text-[#FFBF00] transition-colors">
                  {partner.name}
                </h3>
              </div>

              <div className="pt-6 border-t-2 border-[#3e2723]/5">
                <p className="text-[#3e2723]/40 text-[10px] font-black uppercase tracking-widest leading-snug">
                  {partner.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. IMPACT TRUST SECTION */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40">
        <div className="bg-[#3e2723] rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFBF00]/5 -skew-x-12 translate-x-20" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic leading-none tracking-tighter mb-8">
                {isHi ? "प्रमाणित और" : "VALIDATED &"} <br/>
                <span className="text-[#FFBF00]">RECOGNIZED.</span>
              </h2>
              <p className="text-white/40 font-bold uppercase text-sm mb-12 italic leading-relaxed">
                {isHi 
                  ? "हमारा मॉडल न केवल स्थानीय बल्कि अंतरराष्ट्रीय स्तर पर भी स्थिरता के मानकों को पूरा करता है।" 
                  : "Our model meets global sustainability standards, validated by international funding and government audits."}
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-5xl font-[1000] text-[#FFBF00]">24+</div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Municipal Corps</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-[1000] text-[#FFBF00]">10Y+</div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Trust Relationship</div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                { icon: <Globe2 />, title: isHi ? "ग्लोबल फंडिंग" : "Global Funding", desc: "Supported by GEF & UNDP India." },
                { icon: <Landmark />, title: isHi ? "सरकारी स्वीकृति" : "Govt. Approval", desc: "MP State Govt. Implementation Partner." },
                { icon: <ShieldCheck />, title: isHi ? "कानूनी अनुपालन" : "Compliance", desc: "100% Legal & Environmental Audit Cleared." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 bg-[#FFBF00] rounded-2xl flex items-center justify-center text-[#3e2723] shadow-lg group-hover:scale-110 transition-transform">
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

      {/* 4. CALL TO ACTION AREA */}
      <section className="px-6 md:px-14 max-w-4xl mx-auto text-center">
        <div className="mb-12">
            <Handshake size={64} className="mx-auto text-[#FFBF00] mb-8" />
            <h2 className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter italic mb-8">
                {isHi ? "हमारे साथ जुड़ें" : "BECOME A PARTNER."}
            </h2>
            <p className="text-[#3e2723]/50 font-bold uppercase text-xs leading-relaxed max-w-xl mx-auto mb-12">
                {isHi 
                  ? "यदि आप एक संस्थान या सरकारी निकाय हैं और कचरा प्रबंधन में क्रांति लाना चाहते हैं, तो हमसे संपर्क करें।" 
                  : "If you are an institution or government body looking to revolutionize waste management, let's collaborate."}
            </p>
            <button className="px-12 py-8 bg-[#3e2723] text-[#FFBF00] rounded-3xl font-[1000] uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl active:scale-95">
                {isHi ? "साझेदारी शुरू करें" : "START A PARTNERSHIP"}
            </button>
        </div>
      </section>

      {/* Background Decor */}
      <div className="fixed bottom-0 right-0 text-[30rem] font-[1000] text-[#3e2723]/[0.02] pointer-events-none -mb-32 -mr-32 uppercase italic leading-none">
        Allies
      </div>
    </div>
  );
};

export default PartnersPage;