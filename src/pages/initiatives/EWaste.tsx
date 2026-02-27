"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Zap, 
  MapPin, 
  ShieldCheck, 
  Recycle, 
  ArrowUpRight, 
  Cpu,
  Boxes,
  Clock,
  Truck,
  FileText,
  CircuitBoard,
  ArrowRight
} from "lucide-react";

const EWaste = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const collectionPoints = [
    { name: "Bhanpur", area: "Transfer Station" },
    { name: "Anand Nagar", area: "Collection Unit" },
    { name: "Jathedi", area: "Processing Point" },
    { name: "Adampur", area: "Final Segregation" },
    { name: "Govindpura", area: "Industrial Hub" }
  ];

  return (
    <div className="md:pt-40 pt-28 pb-32 bg-[#FAFBFF] text-slate-900 selection:bg-blue-200 overflow-hidden">
      
      {/* 🔹 HERO SECTION: High-Tech Overlay */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40 relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-[11px] font-black uppercase tracking-[0.15em] mb-8 text-blue-800">
              <CircuitBoard size={14} /> {isHi ? "ई-कचरा समाधान" : "E-Waste Eco-System"}
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-[5.5rem] font-[1000] tracking-tight leading-[0.85] mb-10 text-slate-900">
              {isHi ? "स्मार्ट" : "Future"}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 italic">
                {isHi ? "रीसाइक्लिंग" : "Recycling"}
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-500 leading-relaxed max-w-lg mb-12 font-medium">
              {isHi 
                ? "टेक्नोलॉजिक यूनिट II (बैंगलोर) के साथ 10 साल का रणनीतिक समझौता, पर्यावरण-अनुकूल निष्पादन के लिए।"
                : "A premier 10-year partnership with Technologic Unit II (Bangalore) for certified, zero-landfill electronic disposal."}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-10 pt-4">
               <div className="relative">
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">437<span className="text-blue-600">MT</span></div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{isHi ? "वार्षिक लक्ष्य" : "Annual Target"}</div>
               </div>
               <div className="w-px h-12 bg-slate-200 hidden sm:block" />
               <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-blue-800 rounded-2xl text-white shadow-lg shadow-blue-200"><Clock size={22}/></div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Decade-long<br/>Partnership</div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative group">
             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-30 transition-duration-500" />
             <div className="relative aspect-[4/5] rounded-[3.5rem] bg-white p-4 shadow-2xl border border-white">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    alt="E-waste"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Certified</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase tracking-widest border border-white/20">Authorized</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold tracking-tight">CPCB/KSCB Approved Facility</h3>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 COLLECTION GRID: Modern Bento Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-slate-50/50 -z-0"><MapPin size={200} /></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">
                {isHi ? "संग्रह नेटवर्क" : "Collection Hubs"}
              </h2>
              <p className="text-slate-500 font-medium mb-12 max-w-md">Authorized centers strategically placed across Bhopal for rapid waste intake.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {collectionPoints.map((point, idx) => (
                  <motion.div 
                    whileHover={{ x: 10 }}
                    key={idx} 
                    className="flex items-center gap-5 p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-200 hover:bg-white transition-all cursor-default"
                  >
                    <div className="text-xl font-black text-blue-100 group-hover:text-blue-600 transition-colors">0{idx + 1}</div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 tracking-tight leading-none mb-1">{point.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{point.area}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-5 grid gap-6">
            <div className="bg-blue-800 rounded-[3rem] p-10 text-white flex flex-col justify-between group overflow-hidden relative">
               <CircuitBoard className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
               <FileText size={40} className="mb-8" />
               <div>
                 <h3 className="text-2xl font-black tracking-tight mb-3 italic">CPCB Licensed</h3>
                 <p className="text-blue-100 text-sm font-medium leading-relaxed">Full compliance with Environment Protection Act (1986) and E-Waste Management Rules.</p>
               </div>
            </div>
            
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-between group">
               <div className="flex justify-between items-start">
                  <Zap size={40} className="text-blue-500" />
                  <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                    <ArrowUpRight size={20} />
                  </div>
               </div>
               <div>
                 <h3 className="text-2xl font-black tracking-tight mb-2 uppercase italic text-blue-500">Bangalore Unit</h3>
                 <p className="text-slate-400 text-sm font-medium leading-relaxed italic underline decoration-blue-500/50 underline-offset-4">Technologic Unit II Partnership</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 PROCESS INFOGRAPHIC */}
      
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-[1000] uppercase tracking-tighter italic mb-4">{isHi ? "प्रक्रिया" : "The Workflow"}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -z-10 hidden md:block" />
           {[
             { icon: <Truck />, step: "01", title: "Smart Pickup", desc: "Coordinated logistics from 5 major hubs." },
             { icon: <Boxes />, step: "02", title: "De-Manufacturing", desc: "Separating toxic chemicals from metals." },
             { icon: <Recycle />, step: "03", title: "Final Recovery", desc: "Authorized processing at Technologic Unit II." }
           ].map((item, i) => (
             <motion.div 
               whileHover={{ y: -10 }}
               key={i} 
               className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group"
             >
               <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-800 group-hover:text-white transition-all duration-500 shadow-inner">
                 {item.icon}
               </div>
               <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Step {item.step}</div>
               <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
               <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 🔹 CTA: Sleek and Direct */}
      <section className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="relative p-12 md:p-24 rounded-[4rem] bg-slate-900 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 skew-x-12 translate-x-1/3 opacity-20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter leading-none mb-6 italic uppercase">
                Ready to <span className="text-blue-500">De-Clutter?</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium">Schedule a pickup for your industrial or household e-waste today and get a disposal certificate.</p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-blue-600 hover:bg-white text-white hover:text-slate-900 px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl shadow-blue-500/40 flex items-center gap-4"
            >
              {isHi ? "अभी शुरू करें" : "Get Started"}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EWaste;