"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  lang: "hi" | "en";
}

const AwardsAndCTA: React.FC<Props> = ({ lang }) => {
  const isHi = lang === "hi";
  const navigate = useNavigate();

  const awardCards = [
    { 
      year: "2021", 
      title: isHi ? "स्वच्छ नायक सम्मान" : "Swacch Nayak Samman", 
      org: isHi ? "जिला कलेक्टर भोपाल" : "District Collector Bhopal", 
      image: "https://images.unsplash.com/photo-1579546647302-d830214f8a6d?q=80&w=600",
    },
    { 
      year: "2021", 
      title: isHi ? "स्वच्छता एंबेसडर" : "Swachhta Ambassador", 
      org: "BMC", 
      image: "https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?q=80&w=600", 
    },
    { 
      year: "2020", 
      title: isHi ? "वेस्ट टू वेल्थ अवार्ड" : "Waste to Wealth Award", 
      org: "CII", 
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=600", 
    },
    { 
      year: "2020", 
      title: isHi ? "अनहद सम्मान" : "Anhad Samman", 
      org: "Towards Better India", 
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600", 
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em]">
                {isHi ? "हमारी पहचान" : "Our Legacy"}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-[1000] text-slate-900 tracking-tighter leading-[0.9] italic">
              {isHi ? <>सम्मान जो <br/>बदलाव लाते हैं।</> : <>Honors that <br/>Define Us.</>}
            </h2>
          </div>
          <button onClick={() => navigate("/achievements")} className="group flex items-center gap-3 px-6 py-3 border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all">
            {isHi ? "सभी उपलब्धियां देखें" : "View All Achievements"} <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardCards.map((award, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl shadow-slate-200"
            >
              <img src={award.image} alt={award.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                   <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-4 scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Award size={20} />
                   </div>
                   <span className="text-emerald-400 text-[10px] font-black tracking-widest uppercase block mb-1">{award.year}</span>
                   <h4 className="text-white text-lg font-black leading-tight uppercase tracking-tighter">{award.title}</h4>
                   <p className="text-white/60 text-[10px] font-bold uppercase mt-1 tracking-wider">{award.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsAndCTA;