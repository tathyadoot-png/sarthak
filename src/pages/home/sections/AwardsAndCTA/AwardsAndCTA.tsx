"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, Heart, Users, Handshake, ArrowUpRight } from "lucide-react";

interface Props {
  lang: "hi" | "en";
}

const AwardsAndCTA: React.FC<Props> = ({ lang }) => {
  const isHi = lang === "hi";

  const awards = [
    {
      year: "2020",
      title: isHi ? "CII वेस्ट टू वेल्थ अवार्ड" : "CII Waste to Wealth Award",
      org: "Confederation of Indian Industry",
      desc: isHi ? "प्लास्टिक प्रबंधन में राष्ट्रीय स्तर पर द्वितीय स्थान।" : "National Runner-up in Plastic Waste Management Excellence."
    },
    {
      year: "2019",
      title: "Global Environment Facility",
      org: "Washington DC, USA",
      desc: isHi ? "पर्यावरण संरक्षण में वैश्विक योगदान के लिए।" : "Special Recognition for Global Environmental Impact."
    },
    {
      year: "2018",
      title: isHi ? "स्वच्छता सम्मान अवार्ड" : "Swachhta Samman Award",
      org: "Govt. of Madhya Pradesh",
      desc: isHi ? "शहरी कचरा प्रबंधन में उत्कृष्ट कार्य।" : "Highest honor for urban waste management by the State."
    },
    {
      year: "2018",
      title: "Earth Care Awards",
      org: "JSW & Times of India",
      desc: isHi ? "प्लास्टिक कचरे के प्रभावी पुन: उपयोग के लिए।" : "Innovations in plastic upcycling and reuse."
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 🔹 SECTION 6: AWARDS */}
      <section className="py-20 md:py-32 relative">
        {/* Background Large Text - Adjusted for Mobile */}
        <div className="absolute top-5 md:top-10 left-0 w-full opacity-[0.02] select-none pointer-events-none overflow-hidden whitespace-nowrap">
           <p className="text-[25vw] md:text-[20vw] font-black leading-none uppercase">Excellence • Recognition</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4">
              <span className="text-emerald-600 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
                {isHi ? "मान्यता" : "Recognition"}
              </span>
              <h3 className="text-4xl md:text-7xl font-[1000] text-slate-950 tracking-tighter leading-none">
                {isHi ? "सफ़र" : "A Legacy"} <br />
                <span className="text-slate-400 italic font-light">{isHi ? "पुरस्कारों का" : "of Impact."}</span>
              </h3>
            </div>
            <button className="group flex items-center gap-3 px-6 md:px-8 py-4 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all duration-500 w-full md:w-auto justify-center">
              {isHi ? "पूरी गैलरी" : "View All Accolades"} <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Awards Cards */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-slate-950 transition-all duration-700"
            >
              <div className="absolute top-6 right-8 text-3xl md:text-4xl font-black text-slate-200 group-hover:text-white/10 transition-colors">
                {award.year}
              </div>

              <div className="mt-8 md:mt-12 space-y-4 md:space-y-6 relative z-10">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg md:text-xl font-black text-slate-950 group-hover:text-white leading-tight">
                    {award.title}
                  </h4>
                  <p className="text-[9px] md:text-[10px] font-black text-emerald-600 uppercase tracking-widest group-hover:text-emerald-400">
                    {award.org}
                  </p>
                </div>
                
                <p className="text-xs md:text-sm text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 SECTION 7: CALL TO ACTION */}
      <section className="px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1595273670150-db0a3d39074f?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Nature"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/90 md:via-slate-950/80 to-transparent" />
          </div>

          <div className="relative z-10 py-16 md:py-32 px-6 md:px-24 flex flex-col items-center text-center">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="h-16 w-16 md:h-24 md:w-24 rounded-2xl md:rounded-[2.5rem] bg-emerald-500 flex items-center justify-center text-white mb-8 md:mb-12 shadow-2xl"
            >
              <Handshake className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
            
            <h2 className="text-3xl md:text-[6rem] font-[1000] text-white tracking-tighter leading-[1.1] md:leading-[0.85] max-w-5xl mb-6 md:mb-10">
              {isHi 
                ? "स्वच्छ भारत की नींव बनें।" 
                : "The Future is Non-Plastic."}
            </h2>
            
            <p className="max-w-2xl text-base md:text-xl text-slate-400 font-medium mb-10 md:mb-16">
              {isHi 
                ? "चाहे आप स्वयंसेवक बनना चाहें या CSR साझेदारी—आपकी हर मदद एक स्थायी परिवर्तन लाती है।" 
                : "Whether you volunteer or partner via CSR, every action fuels a cleaner, greener planet for the next generation."}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 w-full sm:w-auto">
              {[
                { label: isHi ? "स्वयंसेवक बनें" : "Volunteer", icon: <Users size={18} />, color: "bg-emerald-500 text-white" },
                { label: isHi ? "पार्टनरशिप" : "CSR Partnership", icon: <Handshake size={18} />, color: "bg-white text-slate-950" },
                { label: isHi ? "दान करें" : "Donate", icon: <Heart size={18} />, color: "bg-rose-500 text-white" },
              ].map((btn, i) => (
                <button 
                  key={i}
                  className={`px-8 md:px-10 py-5 md:py-6 ${btn.color} rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl w-full sm:w-auto`}
                >
                  {btn.label} {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      {/* <footer className="py-8 md:py-12 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-center md:text-left">
            © {new Date().getFullYear()} Sarthak Sanstha. Made with Impact.
          </p>
          <div className="flex gap-6 md:gap-8">
            {['Privacy', 'Legal', 'Contact'].map(link => (
              <a key={link} href="#" className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer> */}

    </div>
  );
};

export default AwardsAndCTA;