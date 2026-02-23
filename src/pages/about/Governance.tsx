import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Users, ShieldCheck, FileText, Scale, Award, Download, CheckCircle2 } from "lucide-react";
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const Governance = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const leaders = [
    { 
      name: "Mr. Imtiaz Ali", 
      role: isHi ? "संस्थापक एवं निदेशक" : "Founder & Director", 
      bio: isHi ? "ठोस अपशिष्ट प्रबंधन में 25+ वर्षों का अनुभव और UNDP प्रोजेक्ट्स का नेतृत्व।" : "25+ years of expertise in SWM; led multiple UNDP-backed initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      name: "Mrs. Shazia Ali", 
      role: isHi ? "अध्यक्ष" : "President", 
      bio: isHi ? "सामाजिक विकास और महिला सशक्तिकरण कार्यक्रमों की विशेषज्ञ।" : "Expert in social development and women empowerment programs.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      name: "Mr. Ravi Gupta", 
      role: isHi ? "सचिव" : "Secretary", 
      bio: isHi ? "प्रोजेक्ट मैनेजमेंट और सरकारी तालमेल में निपुण।" : "Skilled in project management and government liasioning.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔹 SECTION 1: STRUCTURE */}
        <SectionHeading 
          subtitle={isHi ? "प्रबंधन प्रणाली" : "Governance Framework"}
          titleMain={isHi ? "पारदर्शी" : "Operational"}
          titleGradient={isHi ? "कार्यप्रणाली।" : "Integrity."}
          isHi={isHi}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 mt-12">
          {[
            { 
              title: isHi ? "गवर्निंग बॉडी" : "Governing Body", 
              desc: isHi ? "नीति निर्धारण और रणनीतिक दिशा।" : "Strategic policy making and organizational oversight.",
              icon: <Scale className="text-[#2b3291]" />,
              bg: "bg-slate-50" 
            },
            { 
              title: isHi ? "कार्यकारी टीम" : "Executive Team", 
              desc: isHi ? "जमीनी स्तर पर प्रोजेक्ट्स का क्रियान्वयन।" : "Ensuring precise execution of SWM projects on-field.",
              icon: <Users className="text-white" />,
              bg: "bg-[#00a651] text-white" 
            },
            { 
              title: isHi ? "अनुपालन" : "Compliance", 
              desc: isHi ? "वित्तीय पारदर्शिता और कानूनी ऑडिट।" : "Financial audits and regulatory transparency.",
              icon: <ShieldCheck className="text-[#00a651]" />,
              bg: "bg-slate-900 text-white" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[3rem] relative overflow-hidden group ${item.bg}`}
            >
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black mb-3 italic tracking-tight">{item.title}</h4>
              <p className="text-sm opacity-70 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔹 SECTION 2: LEADERSHIP */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-[1000] text-slate-950 tracking-tighter italic">
              {isHi ? "हमारा नेतृत्व" : "Meet Our Leadership"}
            </h3>
            <div className="h-1.5 w-20 bg-[#00a651] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((member, idx) => (
              <motion.div key={idx} className="group">
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b3291]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <p className="text-white text-sm font-medium leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-2xl font-black text-slate-900 italic tracking-tight">{member.name}</h5>
                  <p className="text-[#00a651] font-black text-[10px] uppercase mt-2 tracking-[0.2em]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔹 SECTION 3: COMPLIANCE BOARD */}
        <div className="relative bg-[#f8fafc] rounded-[4rem] p-12 md:p-24 overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2b3291]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#00a651] font-black uppercase tracking-widest text-[10px] mb-4 block italic">Trust & Records</span>
              <h3 className="text-5xl font-[1000] text-slate-950 tracking-tighter leading-none mb-8">
                {isHi ? "प्रमाणन और" : "Certifications &"} <br/>
                <span className="text-slate-400">{isHi ? "पारदर्शिता।" : "Legal Standing."}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "80G Registered", "12A Certified", "CSR-1 Registered", "FCRA Compliant"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="text-[#00a651]" size={18} />
                    <span className="text-xs font-black uppercase tracking-tight text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {isHi 
                  ? "सार्थक संस्थान पूर्ण जवाबदेही में विश्वास रखता है। हमारी सभी वित्तीय रिपोर्ट और ऑडिट रिपोर्ट सार्वजनिक रूप से उपलब्ध हैं।" 
                  : "Sarthak maintains the highest standards of accountability. Our financial statements are audited by independent firms annually."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-between px-8 py-5 bg-[#2b3291] text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-[#2b3291]/20 hover:scale-105 transition-transform group">
                  Audit Report 2024 <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <button className="flex-1 flex items-center justify-between px-8 py-5 bg-white border border-slate-200 text-slate-950 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all group">
                  FCRA Returns <FileText size={18} />
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