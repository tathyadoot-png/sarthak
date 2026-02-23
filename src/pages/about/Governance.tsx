import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Users, ShieldCheck, FileText, Scale, Download, CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const Governance = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const leaders = [
    { 
      name: "Mr. Imtiaz Ali", 
      role: isHi ? "संस्थापक एवं निदेशक" : "Founder & Director", 
      bio: isHi ? "ठोस अपशिष्ट प्रबंधन में 25+ वर्षों का अनुभव।" : "25+ years of expertise in SWM projects.",
      image: "/api/placeholder/400/500"
    },
    { 
      name: "Smt. Shagufta Ali", 
      role: isHi ? "अध्यक्ष" : "President", 
      bio: isHi ? "सामाजिक विकास कार्यक्रमों की विशेषज्ञ।" : "Expert in social development programs.",
      image: "/api/placeholder/400/500"
    },
    { 
      name: "Team Sarthak", 
      role: isHi ? "बोर्ड सदस्य" : "Board Members", 
      bio: isHi ? "प्रोजेक्ट मैनेजमेंट में निपुण।" : "Skilled in project management.",
      image: "/api/placeholder/400/500"
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      
      {/* 🔹 PILLARS SECTION - Responsive Padding */}
      <div className="w-full">
        <SectionHeading 
          subtitle={isHi ? "प्रबंधन प्रणाली" : "Governance Framework"}
          titleMain={isHi ? "पारदर्शी" : "Operational"}
          titleGradient={isHi ? "कार्यप्रणाली।" : "Integrity."}
          isHi={isHi}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
          {[
            { 
              title: isHi ? "गवर्निंग" : "Governing", 
              desc: isHi ? "नीति निर्धारण और दिशा।" : "Strategic policy and oversight.",
              icon: <Scale className="text-[#2b3291]" />,
              style: "bg-slate-50 border-slate-100 text-slate-900" 
            },
            { 
              title: isHi ? "कार्यकारी" : "Executive", 
              desc: isHi ? "प्रोजेक्ट्स का क्रियान्वयन।" : "Precise execution on-field.",
              icon: <Users className="text-white" />,
              style: "bg-[#00a651] border-[#008f45] text-white shadow-xl shadow-emerald-500/20 md:scale-105 z-10" 
            },
            { 
              title: isHi ? "अनुपालन" : "Compliance", 
              desc: isHi ? "वित्तीय पारदर्शिता।" : "Financial audits & transparency.",
              icon: <ShieldCheck className="text-white" />,
              style: "bg-[#1a1f5c] border-[#131744] text-white" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border flex flex-col items-start ${item.style}`}
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${i === 0 ? 'bg-white shadow-sm' : 'bg-white/10'}`}>
                {item.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-black mb-3 tracking-tight uppercase italic">{item.title}</h4>
              <p className="text-xs md:text-sm opacity-80 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 LEADERSHIP SECTION */}
      <div className="mt-24 md:mt-40">
        <div className="mb-12">
          <span className="text-[#00a651] font-black uppercase tracking-[0.3em] text-[10px]">The Minds Behind Sarthak</span>
          <h3 className="text-4xl md:text-6xl font-[1000] text-slate-950 tracking-tighter italic">
            {isHi ? "हमारा नेतृत्व" : "Leadership"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {leaders.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-xl">
                <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5c] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-xs font-medium leading-relaxed">{member.bio}</p>
                </div>
              </div>
              <h5 className="text-xl font-black text-slate-900 italic tracking-tight">{member.name}</h5>
              <p className="text-[#00a651] font-bold text-[9px] uppercase mt-1 tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 COMPLIANCE SECTION - Fix for "Squeezed" look */}
      <div className="mt-24 md:mt-40 relative">
        <div className="relative bg-[#f8fafc] md:bg-white md:backdrop-blur-none rounded-[2.5rem] md:rounded-[4.5rem] p-6 md:p-20 border border-slate-100 md:shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="space-y-8 md:space-y-10">
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-[9px] uppercase tracking-widest mb-4">Transparency First</span>
                <h3 className="text-4xl md:text-7xl font-[1000] text-[#1a1f5c] tracking-tighter leading-none">
                  {isHi ? "प्रमाणन और" : "Legal &"} <br/>
                  <span className="text-emerald-500">{isHi ? "वैधता।" : "Compliance."}</span>
                </h3>
              </div>
              
              {/* Change: Mobile par grid-cols-1 kiya taaki squeeze na ho */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "80G Registered", "12A Certified", "CSR-1 Registered", "FCRA Compliant"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-[#00a651] shrink-0" size={20} />
                    <span className="text-[11px] font-black uppercase tracking-tight text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1f5c] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white space-y-8 shadow-2xl">
              <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-medium italic opacity-90">
                {isHi 
                  ? "\"सार्थक संस्थान पूर्ण जवाबदेही में विश्वास रखता है। हमारी सभी वित्तीय रिपोर्ट ऑडिट की जाती हैं।\"" 
                  : "\"We maintain high standards of accountability. Every rupee is audited and accounted for to ensure maximum impact.\""}
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <button className="w-full flex items-center justify-between px-6 py-5 bg-white text-[#1a1f5c] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
                  Audit Report 2024 <Download size={18} />
                </button>
                <button className="w-full flex items-center justify-between px-6 py-5 bg-white/10 border border-white/20 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                  FCRA Returns <ExternalLink size={18} />
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