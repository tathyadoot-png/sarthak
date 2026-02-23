"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Map, Zap, ArrowRight, CheckCircle2, Trophy } from "lucide-react";

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
    <div className="bg-[#f8fafc] w-full overflow-hidden">
      
      {/* 🔹 1. HERO HEADER SECTION */}
      <section className="pt-32 md:pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="h-[2px] w-10 md:w-12 bg-[#00a651]"></div>
          <span className="text-[#00a651] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px]">
            {isHi ? "प्रमाणित प्रभाव" : "Proven Impact"}
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-8xl font-black text-[#1a1f5c] tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 md:mb-12"
        >
          {isHi ? "सफलता की" : "Real Stories,"}<br />
          <span className="text-[#00a651]">{isHi ? "कहानियाँ" : "Real Change."}</span>
        </motion.h2>
        
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl">
          {isHi 
            ? "सार्थक का भोपाल मॉडल आज पूरे भारत के लिए कचरा प्रबंधन का एक बेंचमार्क बन गया है।" 
            : "Sarthak's 'Bhopal Model' has become a national benchmark for integrated plastic waste management."}
        </p>
      </section>

      {/* 🔹 2. TRANSFORMATION SECTION (Before/After) */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 shadow-xl border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden md:block">
            <Trophy size={400} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 text-[10px] md:text-[11px] font-black uppercase tracking-widest">
                <CheckCircle2 size={16} /> {isHi ? "लैंडफिल बहाली" : "Landfill Restoration"}
              </div>
              
              <h4 className="text-3xl md:text-6xl font-black text-[#1a1f5c] leading-tight tracking-tight">
                {isHi ? "डंपिंग यार्ड से सामुदायिक उद्यान तक" : "From Dumping Yards to Public Gardens"}
              </h4>
              
              <p className="text-slate-600 leading-relaxed text-lg md:text-xl italic border-l-4 md:border-l-8 border-[#00a651] pl-6 md:pl-10">
                {isHi 
                  ? "हमने वर्षों पुराने डंपिंग ग्राउंड्स को साफ कर उन्हें सुंदर पार्कों में बदला है।" 
                  : "We transformed toxic dumping sites into lush green public spaces, proving that zero-waste is possible."}
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4">
                <div className="p-6 md:p-8 bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100">
                  <div className="text-3xl md:text-4xl font-black text-[#1a1f5c]">15+</div>
                  <div className="text-[9px] md:text-[11px] text-slate-400 font-black uppercase tracking-widest mt-1">{isHi ? "साइट्स बहाल" : "Sites Restored"}</div>
                </div>
                <div className="p-6 md:p-8 bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100">
                  <div className="text-3xl md:text-4xl font-black text-[#1a1f5c]">200T</div>
                  <div className="text-[9px] md:text-[11px] text-slate-400 font-black uppercase tracking-widest mt-1">{isHi ? "दैनिक कचरा" : "Daily Waste"}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
              <div className="pt-10 md:pt-20">
                <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-lg border-[6px] md:border-[12px] border-white relative group">
                  <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale" alt="Before" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest">Before</span>
                  </div>
                </div>
              </div>
              <div className="pb-10 md:pb-20">
                <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white relative group">
                  <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute inset-0 bg-emerald-600/10 flex items-center justify-center">
                    <span className="text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest bg-[#00a651] px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">After</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. CASE STUDIES GRID */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {caseStudies.map((story, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3.5rem] shadow-lg border border-slate-100 flex flex-col h-full"
            >
              <div className="aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12">
                <img src={story.image} className="w-full h-full object-cover" alt={story.title} />
              </div>
              <div className="px-2 md:px-6 pb-4 md:pb-8 flex-1 flex flex-col">
                <span className="text-[#00a651] font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-4 block">{story.tag}</span>
                <h5 className="text-2xl md:text-4xl font-black text-[#1a1f5c] mb-6 md:mb-8 tracking-tight leading-tight">{story.title}</h5>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 md:mb-12 flex-1">{story.desc}</p>
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <div className="text-2xl md:text-4xl font-black text-[#1a1f5c]">{story.stat}</div>
                    <div className="text-[10px] md:text-[12px] text-slate-400 font-black uppercase mt-1">{story.statLabel}</div>
                  </div>
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white transition-all">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 4. SCALE SECTION */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-12">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center">
                <Map className="text-[#00a651]" size={32} md={40} />
              </div>
              
              <h4 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight text-[#1a1f5c]">
                {isHi ? "मॉडल का राष्ट्रव्यापी विस्तार" : "Scaling the Model Nationwide"}
              </h4>
              
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                {isHi 
                  ? "सार्थक का अभिनव कचरा प्रबंधन मॉडल अब 12 से अधिक राज्यों में दोहराया जा रहा है।" 
                  : "Our decentralized model is being replicated across 12+ Indian states, integrating marginalized workers."}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                 {['MP', 'Chhattisgarh', 'Rajasthan', 'Gujarat', 'Maharashtra', 'Odisha'].map(s => (
                   <span key={s} className="px-4 md:px-6 py-2 md:py-3 bg-slate-50 text-slate-600 rounded-xl text-[10px] md:text-[12px] font-black border border-slate-100 uppercase tracking-widest">
                     {s}
                   </span>
                 ))}
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="w-full max-w-[300px] md:max-w-[450px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border-2 md:border-4 border-dashed border-emerald-100 rounded-full animate-[spin_40s_linear_infinite]"></div>
                <div className="bg-white p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-50 relative z-10">
                  <Zap size={60} md={80} className="text-[#00a651]" />
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