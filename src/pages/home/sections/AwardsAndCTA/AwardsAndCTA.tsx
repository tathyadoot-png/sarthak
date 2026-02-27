"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, Heart, Users, Handshake, ArrowUpRight } from "lucide-react";

const AwardsAndCTA = ({ lang }) => {
  const isHi = lang === "hi";

  const awards = [
    { year: "2021", title: isHi ? "स्वच्छ नायक सम्मान" : "Swacch Nayak Samman", org: "District Collector Bhopal", desc: "SBM Rural excellence work." },
    { year: "2020", title: "CII Waste to Wealth Award", org: "CII National Level", desc: "National Runner-up in Plastic Waste Management." },
    { year: "2019", title: "Global Environment Facility", org: "Washington DC (USA)", desc: "Contribution to Global Environment." },
    { year: "2018", title: "3R Excellence Award", org: "Ministry of Housing & Urban Affairs", desc: "8th Regional 3R Forum Asia & Pacific." },
    { year: "2018", title: "Swachhta Samman Award", org: "Govt. of Madhya Pradesh", desc: "Highest honor for urban waste management." },
    { year: "2018", title: "Earth Care Awards", org: "JSW & Times of India", desc: "Innovations in plastic upcycling." },
    { year: "2017", title: "Earth Day Network Award", org: "USA", desc: "Effectively Reuse Plastic & Reduce Landfills." },
    { year: "2017", title: "State Level Plastic Award", org: "Govt. of Madhya Pradesh", desc: "Excellence in Plastic Waste Management." },
    { year: "2017", title: "Gaurav Prateek Award", org: "Municipal Corporation Bhopal", desc: "Social upliftment of ragpickers." },
    { year: "2014", title: "Prof. Yashwant Rav Kalker", org: "ABVP Bhuvaneshwar", desc: "Pioneer Work in plastic waste." },
    { year: "2013", title: "Plastic Excellence Work", org: "MPPCB Govt. of M.P.", desc: "Awareness activities & Seminars." },
    { year: "2012", title: "Global Achievers Awards", org: "Economic Development Forum", desc: "Recognition for Social Services." },
    { year: "2008", title: "Sir Syed Award", org: "Bhopal", desc: "Excellence in Waste Management." }
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 🔹 SECTION 6: AWARDS (Hall of Fame) */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-5 md:top-10 left-0 w-full opacity-[0.02] select-none pointer-events-none overflow-hidden whitespace-nowrap text-center">
           <p className="text-[20vw] font-black leading-none uppercase">TRUST • IMPACT</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4">
              <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em]">
                {isHi ? "मान्यता और विरासत" : "Recognition & Legacy"}
              </span>
              <h3 className="text-4xl md:text-6xl font-[1000] text-slate-950 tracking-tighter leading-none">
                {isHi ? "सफ़र" : "A Journey"} <br />
                <span className="text-slate-400 italic font-light">{isHi ? "उपलब्धियों का" : "of Accolades."}</span>
              </h3>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global & National Honors</p>
                <p className="text-slate-900 text-sm font-black italic">Since 2008</p>
            </div>
          </div>
        </div>

        {/* Awards Scrollable Grid */}
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 4) * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-slate-950 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <Award size={20} />
                </div>
                <span className="text-xs font-black text-slate-300 group-hover:text-white/20 transition-colors">
                    {award.year}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-950 group-hover:text-white leading-tight transition-colors">
                  {award.title}
                </h4>
                <div>
                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest group-hover:text-emerald-400">
                    {award.org}
                    </p>
                    <p className="text-[11px] text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed mt-2">
                    {award.desc}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 SECTION 7: CALL TO ACTION */}
      <section className="px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Sustainability"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          <div className="relative z-10 py-20 md:py-32 px-6 md:px-20 flex flex-col items-center text-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="h-20 w-20 rounded-3xl bg-emerald-500 flex items-center justify-center text-white mb-10 shadow-2xl shadow-emerald-500/20"
            >
              <Handshake size={40} />
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-[1000] text-white tracking-tighter leading-[0.9] mb-8">
              {isHi ? "स्वच्छ भारत की नींव बनें।" : "Ready to Close the Loop?"}
            </h2>
            
            <p className="max-w-xl text-slate-400 font-medium mb-12 text-sm md:text-lg">
              {isHi 
                ? "आपकी हर मदद एक स्थायी परिवर्तन लाती है। आज ही हमसे जुड़ें।" 
                : "Join 19,000+ change-makers in building a zero-waste future."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {[
                { label: isHi ? "पार्टनरशिप" : "CSR Partner", icon: <Handshake size={16} />, color: "bg-emerald-500 text-white" },
                { label: isHi ? "स्वयंसेवक" : "Volunteer", icon: <Users size={16} />, color: "bg-white text-slate-950" },
                { label: isHi ? "दान करें" : "Donate", icon: <Heart size={16} />, color: "bg-rose-500 text-white" },
              ].map((btn, i) => (
                <button 
                  key={i}
                  className={`px-8 py-5 ${btn.color} rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg w-full sm:w-auto`}
                >
                  {btn.label} {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AwardsAndCTA;