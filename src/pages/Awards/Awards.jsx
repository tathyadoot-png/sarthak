"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Trophy, Medal, Star, Users, Globe, Award } from "lucide-react";

const Awards = () => {
  const context = useOutletContext();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const impactStats = [
    { label: isHi ? "रोजगार सृजन" : "Employment Generation", value: "19,000+", sub: "Ragpickers", icon: <Users /> },
    { label: isHi ? "सरकारी पहल" : "Govt. Initiatives", value: "Replicated", sub: "Nationwide", icon: <Globe /> }
  ];

  const awardsList = [
    { year: "2021", title: "Swacch Nayak Samman", from: "District Collector Bhopal", for: "SBM Rural excellence work" },
    { year: "2020", title: "CII Waste to Wealth Award", from: "CII National Level", for: "Managing Plastic Waste (2nd Winner)" },
    { year: "2019", title: "Global Environment Facility", from: "Washington DC (USA)", for: "Contribution to Environment" },
    { year: "2018", title: "3R Excellence Award", from: "Ministry of Housing & Urban Affairs", for: "8th Regional 3R Forum Asia" },
    { year: "2018", title: "Swachhta Samman Award", from: "Govt. of MP (SBM)", for: "Urban waste management" },
    { year: "2018", title: "Earth Care Awards", from: "JSW & Times of India", for: "Plastic Waste Management" },
    { year: "2017", title: "Earth Day Network Award", from: "USA", for: "Effectively Reuse Plastic" },
    { year: "2014", title: "Prof. Yashwant Rav Kalker Award", from: "ABVP Bhuvaneshwar", for: "Pioneer Work in Plastic Waste" },
    { year: "2008", title: "Sir Syed Award", from: "Bhopal", for: "Waste Management Excellence" }
  ];

  return (
    <div className="py-24 bg-white min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {impactStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 bg-[#1a1f5c] rounded-[3.5rem] text-white flex items-center gap-8 relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-[#1a1f5c] shrink-0">
                {React.cloneElement(stat.icon, { size: 32 })}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-1">{stat.label}</p>
                <h3 className="text-5xl font-black italic tracking-tighter">{stat.value}</h3>
                <p className="text-blue-200/60 font-medium text-sm mt-1">{stat.sub}</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Trophy size={16} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Recognition & Legacy</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1f5c] tracking-tight italic leading-tight uppercase">
            {isHi ? "पुरस्कार एवं वैश्विक मान्यता" : "Awards & Global Recognition"}
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsList.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="px-4 py-1.5 bg-white rounded-full border border-slate-100 text-[10px] font-black text-[#1a1f5c] tracking-widest shadow-sm">
                    {award.year}
                  </div>
                  <Award className="text-slate-200 group-hover:text-emerald-500 transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#1a1f5c] mb-2 leading-tight group-hover:text-emerald-600 transition-colors">
                  {award.title}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">
                  By {award.from}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {award.for}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="mt-32 text-center border-t border-slate-100 pt-10">
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
             Honored by Local, National & International Communities since 2008
           </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;