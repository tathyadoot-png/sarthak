"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Building2, 
  ClipboardCheck, 
  Compass, 
  HardHat, 
  GraduationCap, 
  BarChart3, 
  ShieldCheck, 
  Globe2,
  Send,
  Recycle
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

const ZeroWasteCampusPage = () => {
  // Context check to prevent crash if lang is undefined
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const consultationSteps = [
    { 
      title: isHi ? "वेस्ट ऑडिट" : "Waste Audit", 
      desc: isHi ? "बेसलाइन मूल्यांकन और डेटा विश्लेषण।" : "Baseline assessment and data analysis.", 
      icon: <ClipboardCheck size={28} /> 
    },
    { 
      title: isHi ? "एक्शन प्लान" : "Action Plan", 
      desc: isHi ? "कस्टम जीरो वेस्ट रणनीति तैयार करना।" : "Developing customized zero waste strategies.", 
      icon: <Compass size={28} /> 
    },
    { 
      title: isHi ? "इंफ्रास्ट्रक्चर" : "Infrastructure", 
      desc: isHi ? "कंपोस्टिंग और रिसाइकिलिंग सेटअप का डिज़ाइन।" : "Design of composting & recycling setup.", 
      icon: <HardHat size={28} /> 
    },
    { 
      title: isHi ? "ट्रेनिंग" : "Staff Training", 
      desc: isHi ? "कर्मचारियों के लिए SOP और प्रशिक्षण।" : "SOP development and staff training.", 
      icon: <GraduationCap size={28} /> 
    }
  ];

  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans pb-24">
      
      {/* 🔹 HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6 bg-[#3e2723] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#8bc34a]/5 skew-x-[-20deg] translate-x-32 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <motion.h6 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            {isHi ? "ग्लोबल कंसल्टेंसी" : "GLOBAL CONSULTANCY SERVICES"}
          </motion.h6>
          <h1 className="text-6xl md:text-[9rem] font-[1000] text-white uppercase tracking-tighter leading-[0.8] mb-12">
            {isHi ? "जीरो वेस्ट" : "ZERO WASTE"} <br />
            <span className="text-[#8bc34a] italic">{isHi ? "कैंपस।" : "CAMPUS."}</span>
          </h1>
          <p className="text-white/50 text-xl md:text-3xl font-medium max-w-3xl leading-tight">
            {isHi 
              ? "संस्थानों और उद्योगों के लिए पूर्ण तकनीकी परामर्श। हम आपके कैंपस को एक रोल मॉडल में बदलते हैं।" 
              : "Complete technical consultancy for institutions and industries to achieve circular sustainability."}
          </p>
        </div>
      </section>

      {/* 🔹 GLOBAL FOOTPRINT */}
      <section className="py-20 px-6 border-b border-[#3e2723]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex items-center gap-4 text-[#3e2723]">
             <Globe2 size={32} className="text-[#8bc34a]" />
             <h3 className="text-xl font-black uppercase tracking-tighter">{isHi ? "वैश्विक उपस्थिति" : "GLOBAL FOOTPRINT"}</h3>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {["India", "Nepal", "Sri Lanka", "Saudi Arabia", "Oman", "Dubai"].map((country) => (
              <span key={country} className="text-[11px] font-black uppercase tracking-widest text-[#3e2723]/40 border-b-2 border-[#8bc34a]/20 pb-1">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 STEP-BY-STEP ROADMAP */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter mb-20">
            {isHi ? "परामर्श" : "THE CONSULTANCY"} <br /> <span className="text-[#3e2723]/20">{isHi ? "प्रक्रिया" : "ROADMAP"}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3e2723]/10 border border-[#3e2723]/10 rounded-[3rem] overflow-hidden shadow-2xl">
            {consultationSteps.map((step, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#8bc34a]/5 transition-colors group">
                <div className="text-[#3e2723] mb-8 group-hover:scale-110 group-hover:text-[#8bc34a] transition-all duration-300">
                  {step.icon}
                </div>
                <h4 className="text-xl font-black text-[#3e2723] uppercase mb-4 tracking-tighter leading-none">{step.title}</h4>
                <p className="text-[11px] font-bold text-[#3e2723]/40 leading-relaxed uppercase tracking-wider">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SERVICES & LEAD FORM */}
      <section className="py-24 px-6 bg-[#3e2723] text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-none mb-10">
              {isHi ? "हमारी" : "WHAT WE"} <br /> <span className="text-[#FFBF00]">{isHi ? "सेवाएं।" : "OFFER."}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { t: isHi ? "ऑन-साइट कंपोस्टिंग इंफ्रा" : "On-site Composting Infrastructure", i: <Building2 size={20}/> },
                 { t: isHi ? "प्लास्टिक रिसाइकिलिंग सिस्टम" : "Plastic Recycling Systems", i: <Recycle size={20}/> },
                 { t: isHi ? "नियामक अनुपालन दस्तावेज़ीकरण" : "Regulatory Compliance Documentation", i: <ShieldCheck size={20}/> },
                 { t: isHi ? "ESG और सस्टेनेबिलिटी रिपोर्टिंग" : "ESG & Sustainability Reporting", i: <BarChart3 size={20}/> }
               ].map((s, idx) => (
                 <div key={idx} className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-default group">
                    <div className="text-[#FFBF00] group-hover:scale-125 transition-transform">{s.i}</div>
                    <span className="text-xs font-black uppercase tracking-[0.15em]">{s.t}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-16 rounded-[4rem] text-[#3e2723] shadow-2xl">
             <h3 className="text-3xl font-[1000] uppercase tracking-tighter mb-8 leading-none italic">
               {isHi ? "प्रस्ताव का" : "REQUEST A"} <br /> {isHi ? "अनुरोध करें" : "PROPOSAL"}
             </h3>
             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={isHi ? "संस्थान का नाम" : "INSTITUTION NAME"} className="w-full bg-[#fcfcfb] border-2 border-[#3e2723]/5 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-[#8bc34a] transition-colors" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder={isHi ? "कचरे का प्रकार" : "TYPE OF WASTE"} className="w-full bg-[#fcfcfb] border-2 border-[#3e2723]/5 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-[#8bc34a] transition-colors" />
                  <input type="text" placeholder={isHi ? "मासिक मात्रा" : "MONTHLY QUANTITY"} className="w-full bg-[#fcfcfb] border-2 border-[#3e2723]/5 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-[#8bc34a] transition-colors" />
                </div>
                <input type="text" placeholder={isHi ? "स्थान" : "LOCATION"} className="w-full bg-[#fcfcfb] border-2 border-[#3e2723]/5 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-[#8bc34a] transition-colors" />
                <button type="submit" className="w-full bg-[#3e2723] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#8bc34a] hover:shadow-xl transition-all group">
                   {isHi ? "प्रस्ताव भेजें" : "SEND PROPOSAL"} <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ZeroWasteCampusPage;