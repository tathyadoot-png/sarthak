"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Presentation, 
  Settings, 
  ShieldCheck, 
  ArrowRight, 
  Award,
  Users,
  Briefcase
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const TrainingPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const trainingModules = [
    {
      title: isHi ? "ULB क्षमता संवर्धन" : "ULB Capacity Building",
      desc: isHi ? "नगर निगम अधिकारियों के लिए ठोस अपशिष्ट प्रबंधन (SWM) नियमों का प्रशिक्षण।" : "Training municipal officials on Solid Waste Management rules and execution.",
      icon: <Presentation className="text-blue-500" />
    },
    {
      title: isHi ? "तकनीकी कौशल" : "Technical Skills",
      desc: isHi ? "MRF सेंटर और कंपोस्टिंग यूनिट्स के संचालन का व्यावहारिक ज्ञान।" : "Hands-on training for operating MRF centers and composting units.",
      icon: <Settings className="text-slate-600" />
    },
    {
      title: isHi ? "स्वास्थ्य और सुरक्षा" : "Health & Safety",
      desc: isHi ? "कचरा कर्मियों के लिए PPE किट का उपयोग और सुरक्षा प्रोटोकॉल।" : "Safe handling of waste and PPE usage protocols for waste workers.",
      icon: <ShieldCheck className="text-green-600" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fcfcfb]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#3e2723] rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <GraduationCap size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {isHi ? "कौशल विकास" : "Skill Enhancement"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-[0.9] mb-8">
              {isHi ? "प्रशिक्षण एवं" : "TRAINING &"} <br />
              <span className="text-[#FFBF00]">{isHi ? "क्षमता विकास" : "CAPACITY BUILDING"}</span>
            </h1>
            <p className="text-white/60 text-lg font-bold leading-relaxed">
              {isHi 
                ? "हम कचरा प्रबंधन के क्षेत्र में विशेषज्ञों की एक नई पीढ़ी तैयार कर रहे हैं।" 
                : "Building a new generation of experts and skilled workers in the waste management sector."}
            </p>
          </div>
          <Presentation className="absolute right-[-40px] bottom-[-40px] size-96 text-white/5 -rotate-12" />
        </motion.div>
      </section>

      {/* 🔹 Training Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingModules.map((module, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFBF00] transition-colors">
                {React.cloneElement(module.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 italic leading-tight">
                {module.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {module.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Training Stats & Methodology */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="bg-[#f2f2ee] rounded-[3rem] p-8 md:p-16 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-10">
                {isHi ? "हमारा प्रशिक्षण दृष्टिकोण" : "OUR TRAINING APPROACH"}
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: isHi ? "प्रशिक्षित कर्मी" : "Trained Personnel", val: "50K+", icon: <Users size={20}/> },
                  { label: isHi ? "प्रशिक्षण सत्र" : "Sessions Held", val: "1200+", icon: <Presentation size={20}/> },
                  { label: isHi ? "प्रमाणन" : "Certifications", val: "100%", icon: <Award size={20}/> },
                  { label: isHi ? "प्लेसमेंट सहायता" : "Job Support", val: "Active", icon: <Briefcase size={20}/> }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="text-[#FFBF00] mb-3">{stat.icon}</div>
                    <div className="text-2xl font-black text-[#3e2723]">{stat.val}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
               
               <p className="text-slate-600 font-medium leading-relaxed">
                 {isHi 
                   ? "सार्थक के प्रशिक्षण कार्यक्रम न केवल कचरा प्रबंधन सिखाते हैं, बल्कि एक स्थायी भविष्य के लिए नेतृत्व क्षमता भी विकसित करते हैं।" 
                   : "Sarthak's training programs don't just teach waste management; they build leadership for a sustainable future."}
               </p>
               <div className="h-[1px] w-full bg-[#3e2723]/10" />
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                   <span className="text-xs font-bold text-[#3e2723] uppercase italic">{isHi ? "प्रैक्टिकल फील्ड विजिट्स" : "Practical Field Visits"}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                   <span className="text-xs font-bold text-[#3e2723] uppercase italic">{isHi ? "विशेषज्ञ सेमिनार" : "Expert Guest Seminars"}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Registration CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-[#FFBF00] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
              {isHi ? "प्रशिक्षण के लिए" : "REQUEST A"} <br />
              <span className="opacity-40">{isHi ? "अनुरोध करें" : "TRAINING SESSION"}</span>
            </h2>
          </div>
          <button className="group bg-[#3e2723] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-black transition-all shadow-xl">
            {isHi ? "संपर्क करें" : "GET IN TOUCH"} 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;