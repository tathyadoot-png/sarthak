"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Users, Recycle, Building2, 
  MapPin, Award, CheckCircle2, TrendingUp 
} from "lucide-react";

// 🔹 1. Define Props Interface
interface BhopalModelProps {
  lang: "hi" | "en";
}

interface TimelinePhase {
  year: string;
  title: string;
  desc: string;
}

// 🔹 2. Use Props in Component Definition
const BhopalModel: React.FC<BhopalModelProps> = ({ lang }) => {
  const isHi = lang === "hi";

  const phases: TimelinePhase[] = [
    { 
      year: "2008", 
      title: isHi ? "शुरुआत" : "Inception", 
      desc: isHi ? "स्थानीय वार्डों में समुदाय आधारित पृथक्करण की शुरुआत।" : "Started with community-led segregation in local wards." 
    },
    { 
      year: "2012", 
      title: isHi ? "SHG एकीकरण" : "SHG Integration", 
      desc: isHi ? "कचरा बीनने वालों को डोर-टू-डोर कलेक्शन के लिए SHG में संगठित किया।" : "Formalized ragpickers into Self Help Groups for collection." 
    },
    { 
      year: "2016", 
      title: "PPP Framework", 
      desc: isHi ? "BMC के साथ भारत का पहला सफल प्लास्टिक वेस्ट मॉडल पार्टनरशिप।" : "Partnered with BMC for India's first successful plastic waste model." 
    },
    { 
      year: "2021", 
      title: isHi ? "राष्ट्रीय मान्यता" : "National Replication", 
      desc: isHi ? "नीति आयोग द्वारा देश भर में लागू करने के लिए मान्यता प्राप्त।" : "Recognized by NITI Aayog for nationwide implementation." 
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen text-slate-900 selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">The Sarthak Standard</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-[1000] text-[#1a1f5c] tracking-tighter leading-none mb-10">
            {isHi ? "भोपाल मॉडल।" : "The Bhopal Model."}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-8">
            {isHi 
              ? "एक पीपीपी (PPP) आधारित ढांचा जिसने कचरा बीनने वालों को सम्मान और शहर को स्वच्छता दी।" 
              : "A PPP-led framework that transformed waste management into a sustainable livelihood engine for thousands."}
          </p>
        </div>

        {/* CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Users />, 
              title: isHi ? "SHG कलेक्शन सिस्टम" : "SHG Collection System", 
              desc: isHi ? "कचरा बीनने वालों के स्वयं सहायता समूहों द्वारा विकेंद्रीकृत संग्रह।" : "Decentralized collection powered by formalized Self Help Groups." 
            },
            { 
              icon: <Building2 />, 
              title: isHi ? "PPP फ्रेमवर्क" : "PPP Framework", 
              desc: isHi ? "नगर निगम (BMC) के साथ सार्वजनिक-निजी भागीदारी का सफल मॉडल।" : "Successful Public-Private Partnership with Municipal Corporations." 
            },
            { 
              icon: <Recycle />, 
              title: isHi ? "जीरो-वेस्ट लक्ष्य" : "Circular Economy", 
              desc: isHi ? "प्लास्टिक कचरे का 100% प्रसंस्करण और लैंडफिल में कमी।" : "100% processing of plastic waste with a goal to reduce landfills." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm group-hover:bg-[#1a1f5c] group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h4 className="text-2xl font-black text-[#1a1f5c] mb-4 leading-tight">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* INFOGRAPHIC TIMELINE */}
        <div className="bg-[#1a1f5c] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-20">
              <TrendingUp className="text-emerald-400 mx-auto mb-4" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-[0.2em]">{isHi ? "विकास का सफर" : "Evolution Timeline"}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-white/10" />
              
              {phases.map((phase, i) => (
                <div key={i} className="relative z-10">
                  <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-[#1a1f5c] font-black text-xl mb-8 shadow-xl shadow-emerald-500/20">
                    {phase.year}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-emerald-400">{phase.title}</h4>
                  <p className="text-blue-100/40 text-[11px] font-medium leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        </div>

        {/* NATIONAL RECOGNITION SECTION */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Future Impact</span>
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1f5c] leading-none mb-8">
              Scalable Model <br/>Replication.
            </h3>
            <div className="space-y-6">
              {[
                { t: "NITI Aayog Best Practice", d: "Featured as a model for sustainable urban waste." },
                { t: "20+ Cities Replication", d: "Implemented successfully beyond Madhya Pradesh." },
                { t: "19,000+ Livelihoods", d: "Dignity and employment for waste pickers." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <div>
                    <h5 className="font-black text-[#1a1f5c] text-sm uppercase tracking-wide">{item.t}</h5>
                    <p className="text-xs text-slate-500 mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-100 rounded-[4rem] aspect-square overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595273670150-db0a3d39074f?q=80&w=1200" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="Bhopal Model in Action"
                />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-500 p-10 rounded-[3rem] shadow-xl text-[#1a1f5c] hidden md:block">
              <Award size={40} />
              <p className="text-[10px] font-black uppercase mt-4 tracking-widest">Certified Innovation</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BhopalModel;