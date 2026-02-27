"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, Heart, Users, Handshake, ArrowRight } from "lucide-react";

interface Props {
  lang: "hi" | "en";
}

const AwardsAndCTA: React.FC<Props> = ({ lang }) => {
  const isHi = lang === "hi";

  const awards = [
    { year: "2021", title: "Swacch Nayak Samman", org: "District Collector Bhopal" },
    { year: "2020", title: "CII Waste to Wealth Award", org: "CII National Level" },
    { year: "2019", title: "Global Environment Facility", org: "Washington DC (USA)" },
    { year: "2018", title: "3R Excellence Award", org: "Ministry of Housing & Urban Affairs" },
    { year: "2018", title: "Swachhta Samman Award", org: "Govt. of Madhya Pradesh" },
    { year: "2018", title: "Earth Care Awards", org: "JSW & Times of India" },
    { year: "2017", title: "Earth Day Network Award", org: "USA" },
    { year: "2008", title: "Sir Syed Award", org: "Bhopal" }
  ];

  return (
    <div className="w-full bg-slate-50 overflow-hidden">
      
      {/* 🔹 SECTION: AWARDS AUTO-SCROLLER */}
      <section className="py-24 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em]">
              {isHi ? "उपलब्धियां" : "Recognition"}
            </span>
            <h3 className="text-4xl font-[1000] text-slate-950 tracking-tighter">
               {isHi ? "वैश्विक सम्मान।" : "Global Recognition."}
            </h3>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest hidden md:block italic">
            Celebrating Excellence since 2008
          </p>
        </div>

        {/* Infinite Marquee Loop */}
        <div className="flex overflow-hidden select-none gap-6 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...awards, ...awards].map((award, idx) => (
              <div 
                key={idx} 
                className="w-[300px] flex-shrink-0 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-emerald-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-500">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-black text-slate-300 tracking-widest">{award.year}</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-950 uppercase leading-tight mb-1">{award.title}</h4>
                  <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">{award.org}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔹 SECTION: BENTO STYLE CTA */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Big Card */}
          <div className="md:col-span-2 bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-[1000] tracking-tighter leading-none mb-6">
                {isHi ? "स्वच्छ भारत की नींव बनें।" : "Build the Future <br/> of Non-Plastic."}
              </h2>
              <p className="max-w-md text-slate-400 font-medium">
                {isHi ? "चाहे आप स्वयंसेवक बनना चाहें या CSR साझेदारी—आपकी मदद परिवर्तन लाती है।" : "Every action fuels a cleaner, greener planet. Partner with us to scale the impact."}
              </p>
            </div>
            
            <div className="relative z-10 flex gap-4 mt-8">
              <button className="px-8 py-4 bg-emerald-500 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-emerald-400 transition-all">
                {isHi ? "जुड़ें" : "Join Movement"} <ArrowRight size={16} />
              </button>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-white border border-slate-200 rounded-[3rem] p-8 flex flex-col justify-between hover:shadow-xl transition-all group">
              <Heart className="text-rose-500 group-hover:scale-110 transition-transform" size={32} />
              <div>
                <h4 className="font-black text-xl text-slate-950 mb-2 uppercase tracking-tighter">{isHi ? "दान करें" : "Donate"}</h4>
                <p className="text-xs text-slate-500 mb-6">Empower waste workers with health and safety gear.</p>
                <button className="text-[10px] font-black uppercase text-emerald-600 tracking-widest flex items-center gap-2">
                  Support Now <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-emerald-600 rounded-[3rem] p-8 text-white flex flex-col justify-between hover:bg-emerald-700 transition-all group">
              <Users className="group-hover:scale-110 transition-transform" size={32} />
              <div>
                <h4 className="font-black text-xl mb-2 uppercase tracking-tighter">{isHi ? "स्वयंसेवक" : "Volunteer"}</h4>
                <p className="text-emerald-100/70 text-xs mb-6">Join our field activities and awareness drives.</p>
                <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  Apply Today <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AwardsAndCTA;