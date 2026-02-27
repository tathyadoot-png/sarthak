"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Map, Zap, ArrowRight, CheckCircle2, Trophy, ExternalLink } from "lucide-react";

const SuccessStories = () => {
  const context = useOutletContext();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

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
    // Fixed: Reduced padding-top and added a min-h-screen for stability
    <div className="bg-[#fcfcfd] w-full min-h-screen pt-40 md:pt-20 pb-20 overflow-hidden">
      
      {/* 🔹 1. HERO HEADER SECTION */}
      <section className="px-6 md:px-14 max-w-[1400px] mx-auto mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-[#00a651]"></div>
              <span className="text-[#00a651] font-black uppercase tracking-[0.2em] text-[11px]">
                {isHi ? "प्रमाणित प्रभाव" : "Proven Impact"}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-[1000] text-[#1a1f5c] tracking-tighter leading-[0.9] mb-8"
            >
              {isHi ? "सफलता की" : "Real Stories,"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a651] to-[#2b3291]">
                {isHi ? "कहानियाँ" : "Real Change."}
              </span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:max-w-sm pb-4"
          >
            <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-4 border-emerald-500 pl-6">
              {isHi 
                ? "सार्थक का भोपाल मॉडल आज पूरे भारत के लिए कचरा प्रबंधन का एक बेंचमार्क बन गया है।" 
                : "Sarthak's 'Bhopal Model' has become a national benchmark for integrated plastic waste management."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 2. TRANSFORMATION SECTION (The "Sundar" Part) */}
      <section className="py-16 md:py-32 px-6 md:px-14 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-50 rounded-full text-emerald-600 text-[11px] font-black uppercase tracking-widest border border-emerald-100">
                <CheckCircle2 size={16} /> {isHi ? "लैंडफिल बहाली" : "Landfill Restoration"}
              </div>
              
              <h4 className="text-4xl md:text-6xl font-[1000] text-[#1a1f5c] leading-[1] tracking-tighter">
                {isHi ? "डंपिंग यार्ड से सामुदायिक उद्यान तक" : "From Dumping Yards to Public Gardens"}
              </h4>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-emerald-500 transition-colors duration-500">
                  <div className="text-4xl md:text-5xl font-black text-[#1a1f5c]">15+</div>
                  <div className="text-[11px] text-slate-400 font-black uppercase tracking-widest mt-2">{isHi ? "साइट्स बहाल" : "Sites Restored"}</div>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-blue-500 transition-colors duration-500">
                  <div className="text-4xl md:text-5xl font-black text-[#1a1f5c]">200T</div>
                  <div className="text-[11px] text-slate-400 font-black uppercase tracking-widest mt-2">{isHi ? "दैनिक कचरा" : "Daily Waste"}</div>
                </div>
              </div>
            </div>

            {/* Before/After Visuals */}
            <div className="relative group">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mt-12 aspect-[3/4] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative"
                >
                  <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-80" alt="Before" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">Before</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[3/4] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative"
                >
                  <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute bottom-4 right-4 bg-[#00a651] px-5 py-2 rounded-full shadow-lg">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">After</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. CASE STUDIES GRID */}
      <section className="py-12 px-6 md:px-14 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {caseStudies.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[3.5rem] shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-700 overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={story.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={story.title} 
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[#00a651] font-black text-[10px] uppercase tracking-widest shadow-sm">
                  {story.tag}
                </div>
              </div>

              <div className="p-10 md:p-14 flex-1 flex flex-col">
                <h5 className="text-3xl md:text-4xl font-[1000] text-[#1a1f5c] mb-6 tracking-tight leading-tight group-hover:text-[#00a651] transition-colors">
                  {story.title}
                </h5>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-1">{story.desc}</p>
                
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-[#1a1f5c]">{story.stat}</div>
                    <div className="text-[11px] text-slate-400 font-black uppercase mt-1">{story.statLabel}</div>
                  </div>
                  <button className="w-16 h-16 rounded-full bg-[#1a1f5c] flex items-center justify-center text-white hover:bg-[#00a651] transition-all transform group-hover:rotate-45">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 4. SCALE SECTION */}
      <section className="py-24 px-6 md:px-14 max-w-[1400px] mx-auto">
        <div className="bg-[#1a1f5c] rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10 text-white">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center border border-white/20">
                <Map className="text-emerald-400" size={40} />
              </div>
              
              <h4 className="text-4xl md:text-7xl font-[1000] tracking-tighter leading-[0.9]">
                {isHi ? "मॉडल का राष्ट्रव्यापी विस्तार" : "Scaling the Model Nationwide"}
              </h4>
              
              <p className="text-white/70 text-xl leading-relaxed max-w-lg">
                {isHi 
                  ? "सार्थक का अभिनव कचरा प्रबंधन मॉडल अब 12 से अधिक राज्यों में दोहराया जा रहा है।" 
                  : "Our decentralized model is being replicated across 12+ Indian states, integrating marginalized workers."}
              </p>

              <div className="flex flex-wrap gap-3">
                 {['MP', 'Chhattisgarh', 'Rajasthan', 'Gujarat', 'Maharashtra', 'Odisha'].map(s => (
                   <span key={s} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 transition-colors text-white/90 rounded-xl text-[11px] font-black border border-white/10 uppercase tracking-widest">
                     {s}
                   </span>
                 ))}
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-12 border-2 border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                <div className="bg-white p-20 rounded-[4rem] shadow-2xl transform rotate-12">
                  <Zap size={100} className="text-[#00a651] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;