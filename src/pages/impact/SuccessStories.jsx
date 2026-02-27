"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Zap, ArrowRight, CheckCircle2, Award, Globe, Users2, Heart
} from "lucide-react";

const ImpactAndStories = () => {
  const context = useOutletContext();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const caseStudies = [
    {
      title: isHi ? "प्लास्टिक से सड़कें: एक क्रांति" : "Plastic to Roads: A Revolution",
      tag: "Infrastructure",
      desc: isHi 
        ? "40,000 किलोमीटर से अधिक सड़कों का निर्माण छंटनी किए गए प्लास्टिक कचरे का उपयोग करके किया गया है।" 
        : "Over 40,000 kilometers of roads have been constructed using shredded non-recyclable plastic waste across MP.",
      stat: "40k+ KM",
      statLabel: isHi ? "सड़कें बनाई गईं" : "Roads Built",
      image: "https://images.unsplash.com/photo-1596438410275-3037206ca27d?auto=format&fit=crop&q=80"
    },
    {
      title: isHi ? "सीमेंट उद्योग के साथ तालमेल" : "Cement Industry Linkage",
      tag: "Industrial Impact",
      desc: isHi 
        ? "हानिकारक कचरे को जलाने के बजाय, हम इसे सीमेंट भट्टियों में सह-प्रसंस्करण के लिए भेजते हैं।" 
        : "Instead of open burning, non-recyclable plastic is sent to cement kilns for safe co-processing.",
      stat: "100%",
      statLabel: isHi ? "सुरक्षित निपटान" : "Safe Disposal",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen pb-24 mb-20 overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 🔹 1. HERO SECTION: BOLD TYPOGRAPHY */}
      <section className="px-6 md:px-14 max-w-[1440px] mx-auto pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-emerald-500"></span>
              <span className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-[12px]">
                {isHi ? "प्रमाणित प्रभाव" : "Proven Impact"}
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden" whileInView="visible" variants={fadeInUp}
              className="text-6xl md:text-[120px] font-black text-[#1a1f5c] leading-[0.85] tracking-tight"
            >
              {isHi ? "सफलता की" : "Real Stories,"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-900">
                {isHi ? "कहानियाँ" : "Real Change."}
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="lg:col-span-4 lg:border-l border-slate-200 lg:pl-10"
          >
            <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
              {isHi 
                ? "सार्थक का भोपाल मॉडल आज पूरे भारत के लिए कचरा प्रबंधन का एक बेंचमार्क बन गया है।" 
                : "Sarthak's 'Bhopal Model' has become a national benchmark for integrated plastic waste management."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 2. LANDFILL RESTORATION: MODERN COMPARISON */}
      <section className="px-6 md:px-14 max-w-[1440px] mx-auto mb-40">
        <div className="bg-white rounded-[4rem] p-8 md:p-24 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-32" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500 text-white rounded-full text-[12px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-200">
                <CheckCircle2 size={18} /> {isHi ? "लैंडफिल बहाली" : "Landfill Restoration"}
              </div>
              <h4 className="text-5xl md:text-7xl font-black text-[#1a1f5c] leading-tight tracking-tighter italic uppercase">
                {isHi ? "डंपिंग यार्ड से सामुदायिक उद्यान तक" : "From Dumping Yards to Public Gardens"}
              </h4>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="group border-b-2 border-slate-100 pb-6 hover:border-emerald-500 transition-all">
                  <div className="text-5xl font-black text-[#1a1f5c]">15+</div>
                  <div className="text-[12px] text-slate-400 font-bold uppercase tracking-widest mt-2">{isHi ? "साइट्स बहाल" : "Sites Restored"}</div>
                </div>
                <div className="group border-b-2 border-slate-100 pb-6 hover:border-blue-500 transition-all">
                  <div className="text-5xl font-black text-[#1a1f5c]">200T</div>
                  <div className="text-[12px] text-slate-400 font-bold uppercase tracking-widest mt-2">{isHi ? "दैनिक कचरा" : "Daily Waste"}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -10 }} className="mt-16 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative ring-1 ring-slate-200">
                  <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale brightness-75" alt="Before" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white font-bold tracking-widest uppercase text-xs">Phase: Before</div>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative ring-[12px] ring-white">
                  <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute bottom-6 left-6 bg-emerald-500 px-6 py-2 rounded-full text-white font-black text-[10px] uppercase tracking-widest">Transformative Result</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. CASE STUDIES: ELEGANT CARDS */}
      <section className="px-6 md:px-14 max-w-[1440px] mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((story, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[4rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-[400px] overflow-hidden relative">
                <img src={story.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={story.title} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                <div className="absolute top-8 left-8 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-emerald-700 font-bold text-xs uppercase tracking-widest">{story.tag}</div>
              </div>
              <div className="p-12 md:p-16">
                <h5 className="text-4xl font-black text-[#1a1f5c] mb-6 leading-tight tracking-tight">{story.title}</h5>
                <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">{story.desc}</p>
                <div className="flex items-end justify-between border-t border-slate-50 pt-10">
                  <div>
                    <div className="text-5xl font-black text-emerald-600">{story.stat}</div>
                    <div className="text-[12px] text-slate-400 font-bold uppercase tracking-widest mt-1">{story.statLabel}</div>
                  </div>
                  <button className="w-20 h-20 rounded-full bg-[#1a1f5c] flex items-center justify-center text-white group-hover:bg-emerald-600 transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowRight size={32} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 4. COMMUNITY IMPACT */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-14 mb-40">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border border-emerald-100">
              <Award size={14} /> 27+ Years of Legacy
            </div>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-slate-900 uppercase italic">
              {isHi ? "जन-भागीदारी से" : "Powered by"}<br/>
              <span className="text-emerald-500 underline decoration-slate-200 underline-offset-[16px] decoration-4">{isHi ? "परिवर्तन" : "People Power"}</span>
            </h3>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-12 font-medium">
              Sarthak pioneers ragpicker inclusion. We believe true transformation happens when marginalized communities become empowered stakeholders.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="text-4xl font-black text-emerald-600">19,000+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Workers Trained</div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="text-4xl font-black text-[#1a1f5c]">100%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Community Owned</div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(16,185,129,0.2)]">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Impact" />
              <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center p-16 text-center">
                <h4 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none border-y-2 border-white/30 py-8">
                  Breaking the Cycle<br/>of Poverty
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. THE BHOPAL MODEL: DARK THEME */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-14 mb-40">
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-32 text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight italic">
                The Bhopal Model:<br/>
                <span className="text-emerald-400">A National Benchmark</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: "5-6 MT Daily Collection", desc: "Managed entirely by trained community members." },
                  { title: "16 Ward Expansion", desc: "Driven entirely by public demand for the service." },
                  { title: "300+ Delegations", desc: "Visited from across India to learn our methods." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-emerald-400" size={24} />
                    </div>
                    <div><h4 className="font-bold text-xl mb-1">{item.title}</h4><p className="text-slate-400 font-medium">{item.desc}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
               <div className="relative">
                  <div className="w-72 h-72 rounded-full border-2 border-dashed border-emerald-500/30 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-52 h-52 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.4)] relative overflow-hidden group">
                       <Zap size={80} className="text-white relative z-10" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                  </div>
               </div>
               <p className="mt-12 text-center text-emerald-400 font-bold uppercase tracking-[0.5em] text-xs">Zero Waste Visionary</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. WASTE TO WEALTH ECOSYSTEM */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-[#1a1f5c]">
             Waste to Wealth<br/>Ecosystem
           </h2>
           <p className="text-slate-400 font-bold uppercase tracking-widest text-sm max-w-[200px] text-right">
             Turning circular economy into reality
           </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "01. Collection", title: "SHG Segregation", desc: "SHG-run centers organize community plastic waste.", icon: <Users2 /> },
            { label: "02. Processing", title: "Pelletization", desc: "Local units employ community members in manufacturing.", icon: <Zap /> },
            { label: "03. Production", title: "Enterprises", desc: "Women-led enterprises create bags, cushions & boards.", icon: <Heart /> },
            { label: "04. Market", title: "Village Sales", desc: "Entrepreneurs sell eco-friendly tiles and benches.", icon: <Globe /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-slate-50 font-black text-8xl group-hover:text-emerald-50 transition-colors pointer-events-none">
                {i + 1}
              </div>
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 relative z-10">
                {item.icon}
              </div>
              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-500 mb-3">{item.label}</p>
                <h3 className="text-2xl font-black tracking-tight mb-4 text-[#1a1f5c]">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ImpactAndStories;