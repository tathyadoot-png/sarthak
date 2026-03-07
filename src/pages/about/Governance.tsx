"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Users, ShieldCheck, Scale, Download, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

const Governance = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const leaders = [
    { 
      name: "Mr. Imtiaz Ali", 
      role: isHi ? "संस्थापक एवं निदेशक" : "Founder & Director", 
      bio: isHi ? "ठोस अपशिष्ट प्रबंधन में 25+ वर्षों का अनुभव।" : "25+ years of expertise in SWM projects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop"
    },
    { 
      name: "Smt. Shagufta Ali", 
      role: isHi ? "अध्यक्ष" : "President", 
      bio: isHi ? "सामाजिक विकास कार्यक्रमों की विशेषज्ञ।" : "Expert in social development programs.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop"
    },
    { 
      name: "Team Sarthak", 
      role: isHi ? "बोर्ड सदस्य" : "Board Members", 
      bio: isHi ? "प्रोजेक्ट मैनेजमेंट में निपुण।" : "Skilled in project management.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&h=500&auto=format&fit=crop"
    },
  ];

  return (
    <section className="w-full py-10">
      
      {/* 🔹 GOVERNANCE PILLARS */}
      <div className="w-full">
        <div className="mb-16">
          <h6 className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            {isHi ? "प्रबंधन प्रणाली" : "GOVERNANCE FRAMEWORK"}
          </h6>
          <h2 className="text-4xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
            {isHi ? "पारदर्शी" : "OPERATIONAL"} <br />
            <span className="text-[#3e2723]/30">{isHi ? "कार्यप्रणाली।" : "INTEGRITY."}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { 
              title: isHi ? "गवर्निंग" : "Governing", 
              desc: isHi ? "नीति निर्धारण और दिशा।" : "Strategic policy and oversight.",
              icon: <Scale className="text-[#3e2723]" />,
              style: "bg-white border-[#3e2723]/5 text-[#3e2723]" 
            },
            { 
              title: isHi ? "कार्यकारी" : "Executive", 
              desc: isHi ? "प्रोजेक्ट्स का क्रियान्वयन।" : "Precise execution on-field.",
              icon: <Users className="text-[#3e2723]" />,
              style: "bg-[#FFBF00] border-[#FFBF00] text-[#3e2723] shadow-xl md:scale-105 z-10" 
            },
            { 
              title: isHi ? "अनुपालन" : "Compliance", 
              desc: isHi ? "वित्तीय पारदर्शिता।" : "Financial audits & transparency.",
              icon: <ShieldCheck className="text-white" />,
              style: "bg-[#3e2723] border-[#3e2723] text-white" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[3rem] border flex flex-col items-start transition-all duration-500 ${item.style}`}
            >
              <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 ${i === 1 ? 'bg-white' : 'bg-[#FFBF00]/10'}`}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-[1000] mb-3 tracking-tighter uppercase italic">{item.title}</h4>
              <p className="text-sm opacity-80 leading-relaxed font-bold">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 LEADERSHIP SECTION */}
      <div className="mt-40">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <Sparkles size={16} className="text-[#FFBF00]" />
             <span className="text-[#3e2723]/40 font-black uppercase tracking-[0.3em] text-[10px]">The Minds Behind Sarthak</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-[1000] text-[#3e2723] tracking-tighter uppercase leading-none">
            {isHi ? "हमारा नेतृत्व" : "LEADERSHIP"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 bg-[#3e2723]/5 shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={member.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723] via-[#3e2723]/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-10">
                  <p className="text-white text-sm font-bold leading-relaxed">{member.bio}</p>
                </div>
              </div>
              <h5 className="text-2xl font-[1000] text-[#3e2723] tracking-tighter uppercase italic">{member.name}</h5>
              <p className="text-[#FFBF00] font-black text-[10px] uppercase mt-2 tracking-[0.2em]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 COMPLIANCE SECTION */}
      <div className="mt-40">
        <div className="relative bg-[#3e2723] rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl">
          {/* Decorative Mesh */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBF00]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#FFBF00]/20 text-[#FFBF00] font-black text-[9px] uppercase tracking-widest mb-6">Transparency First</span>
                <h3 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter leading-none uppercase">
                  {isHi ? "प्रमाणन और" : "LEGAL &"} <br/>
                  <span className="text-[#FFBF00]">{isHi ? "वैधता।" : "COMPLIANCE."}</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "80G Registered", "12A Certified", "CSR-1 Registered", "FCRA Compliant"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-[#FFBF00]/10 transition-colors">
                    <CheckCircle2 className="text-[#FFBF00] shrink-0" size={24} />
                    <span className="text-[12px] font-black uppercase tracking-tighter text-white/90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-[3rem] p-10 text-[#3e2723] space-y-8 shadow-2xl">
              <p className="text-[#3e2723]/80 text-lg md:text-xl font-bold leading-relaxed italic">
                {isHi 
                  ? "\"सार्थक संस्थान पूर्ण जवाबदेही में विश्वास रखता है। हमारी सभी वित्तीय रिपोर्ट ऑडिट की जाती हैं।\"" 
                  : "\"We maintain high standards of accountability. Every rupee is audited to ensure maximum impact.\""}
              </p>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-8 py-6 bg-[#3e2723] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-[#3e2723]/20">
                  Audit Report 2024 <Download size={20} className="text-[#FFBF00]" />
                </button>
                <button className="w-full flex items-center justify-between px-8 py-6 bg-[#f7f7f6] border border-[#3e2723]/10 text-[#3e2723] rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#FFBF00]/20 transition-all">
                  FCRA Returns <ExternalLink size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Governance;