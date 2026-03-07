"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { TrendingUp, Heart, CreditCard, Map, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";

const Impact = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans pb-24">
      
      {/* 🔹 HERO: IMPACT OVERVIEW */}
      <section className="relative pt-44 pb-32 px-6 bg-[#3e2723] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFBF00]/20 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBF00] text-[#3e2723] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-10 shadow-xl"
          >
            <TrendingUp size={14} />
            {isHi ? "प्रमाणित प्रभाव" : "VERIFIED IMPACT"}
          </motion.div>
          
          <h1 className="text-6xl md:text-[8rem] font-[1000] text-white uppercase tracking-tighter leading-[0.8] mb-12">
            {isHi ? "बदलाव का" : "POWER OF"} <br />
            <span className="text-[#FFBF00] italic">{isHi ? "प्रमाण।" : "CHANGE."}</span>
          </h1>
          
          <p className="text-white/60 text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-tight italic">
            {isHi 
              ? "हमारे आंकड़े केवल संख्या नहीं हैं, वे हजारों जिंदगियों की गरिमा और पर्यावरण की जीत का प्रतीक हैं।" 
              : "Our numbers aren't just statistics; they represent restored dignity and environmental victories."}
          </p>
        </div>
      </section>

      {/* 🔹 1. BEFORE & AFTER SECTION */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#FFBF00] font-black uppercase tracking-widest text-[10px] mb-4">Transformation Visuals</h2>
            <h3 className="text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
              {isHi ? "बदलाव की तस्वीरें" : "VISUAL PROOF"}
            </h3>
          </div>
          <p className="text-[#3e2723]/40 text-sm font-bold uppercase tracking-widest">{isHi ? "ग्राउंड जीरो से रिपोर्ट" : "Reporting from Ground Zero"}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-[3.5rem] border-4 border-[#3e2723]/5 shadow-xl">
            <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 font-bold italic">
               <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=800" className="w-full h-full object-cover grayscale opacity-50" />
            </div>
            <div className="absolute top-8 left-8 bg-red-600 text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Before</div>
          </div>
          
          <div className="group relative overflow-hidden rounded-[3.5rem] border-4 border-[#FFBF00]/20 shadow-xl">
            <div className="aspect-video bg-[#FFBF00]/10 flex items-center justify-center text-[#FFBF00] font-bold italic">
               <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 left-8 bg-[#FFBF00] text-[#3e2723] px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">After</div>
          </div>
        </div>
      </section>

      {/* 🔹 2. RAG PICKER STORY (Emotional Narrative) */}
      <section className="py-32 bg-[#3e2723] text-white rounded-[6rem] mx-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-white/5 rounded-[4rem] overflow-hidden shadow-2xl flex items-center justify-center border border-white/10 group">
               <img 
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#FFBF00] p-10 rounded-[3rem] shadow-2xl max-w-sm border border-white/10">
              <Heart className="text-[#3e2723] mb-4" fill="#3e2723" />
              <p className="text-sm font-[1000] uppercase italic text-[#3e2723] leading-tight">
                {isHi ? '"सार्थक ने हमें कचरा बीनने वाले से पर्यावरण रक्षक बना दिया।"' : '"Sarthak turned us from rag-pickers to environmental protectors."'}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-5xl md:text-7xl font-[1000] text-white leading-[0.9] uppercase tracking-tighter">
              {isHi ? "एक सार्थक कर्मी की कहानी" : "THE STORY OF A KARMI."}
            </h3>
            <div className="h-1.5 w-24 bg-[#FFBF00] rounded-full" />
            <p className="text-xl text-white/50 leading-relaxed font-medium">
              {isHi 
                ? "कभी सड़कों पर कचरा बीनने वाले इन लोगों के पास आज पहचान पत्र, वर्दी और समाज में सम्मान है। हमने 3200+ लोगों को मुख्यधारा से जोड़ा है।" 
                : "People who once struggled on the fringes now carry IDs, wear uniforms, and hold social respect. We have integrated 3200+ workers into the formal economy."}
            </p>
            <button className="flex items-center gap-4 text-[#FFBF00] font-black uppercase tracking-[0.2em] text-xs hover:gap-6 transition-all">
               {isHi ? "और कहानियाँ पढ़ें" : "READ MORE STORIES"} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 3. HEALTH & INCOME GROWTH (Yellow-Brown Cards) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Health Card */}
          <motion.div whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[4rem] bg-white border border-[#3e2723]/5 shadow-xl group">
            <div className="h-20 w-20 bg-[#3e2723] text-[#FFBF00] rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
               <CreditCard size={32} />
            </div>
            <h4 className="text-4xl font-[1000] text-[#3e2723] mb-4 uppercase tracking-tighter italic leading-none">{isHi ? "स्वास्थ्य कार्ड" : "HEALTH COVERAGE"}</h4>
            <p className="text-[#3e2723]/40 font-bold leading-relaxed mb-10 text-sm uppercase">
              {isHi ? "हर सार्थक कर्मी को सरकारी स्वास्थ्य योजनाओं और निजी बीमा का लाभ मिलता है।" : "Every worker gets access to government health schemes and private insurance."}
            </p>
            <div className="text-7xl font-[1000] text-[#FFBF00] tracking-tighter">100%</div>
            <p className="text-[10px] uppercase font-black tracking-widest text-[#3e2723]/20">Active Enrollment</p>
          </motion.div>

          {/* Income Growth */}
          <motion.div whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[4rem] bg-[#FFBF00] shadow-xl group">
            <div className="h-20 w-20 bg-[#3e2723] text-[#FFBF00] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
               <TrendingUp size={32} />
            </div>
            <h4 className="text-4xl font-[1000] text-[#3e2723] mb-4 uppercase tracking-tighter italic leading-none">{isHi ? "आय में वृद्धि" : "INCOME GROWTH"}</h4>
            <p className="text-[#3e2723]/60 font-bold leading-relaxed mb-10 text-sm uppercase">
              {isHi ? "औपचारिक रोजगार के कारण कर्मियों की मासिक आय में 3 गुना वृद्धि हुई है।" : "Formal employment has resulted in a 3x increase in monthly income for workers."}
            </p>
            <div className="text-7xl font-[1000] text-[#3e2723] tracking-tighter italic">300%</div>
            <p className="text-[10px] uppercase font-black tracking-widest text-[#3e2723]/40 text-center md:text-left">Earning Multiplier</p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 4. REPLICATION (National Expansion) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[5rem] p-12 md:p-24 border border-[#3e2723]/5 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
             <Globe2 size={400} className="text-[#3e2723]" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
            <div className="flex-1 space-y-10">
               <div className="h-16 w-16 bg-[#FFBF00] rounded-2xl flex items-center justify-center text-[#3e2723]">
                  <Map size={32} />
               </div>
               <h3 className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none italic">
                  {isHi ? "राष्ट्रीय" : "NATIONAL"} <br /> <span className="text-[#3e2723]/20">{isHi ? "विस्तार।" : "REPLICATION."}</span>
               </h3>
               <p className="text-[#3e2723]/50 text-xl font-medium leading-relaxed">
                  {isHi 
                    ? "मध्य प्रदेश की सफलता के बाद, हमारा मॉडल अब छत्तीसगढ़, राजस्थान और उत्तर प्रदेश जैसे राज्यों द्वारा भी अपनाया जा रहा है।" 
                    : "Following the MP success story, our proven model is being integrated by state bodies in Chhattisgarh, Rajasthan, and Uttar Pradesh."}
               </p>
               <div className="flex flex-wrap gap-4 pt-6">
                 {['CHHATTISGARH', 'RAJASTHAN', 'UTTAR PRADESH', 'GUJARAT'].map(state => (
                   <span key={state} className="px-6 py-3 bg-[#3e2723] rounded-full text-[10px] font-black uppercase text-white tracking-widest hover:bg-[#FFBF00] hover:text-[#3e2723] transition-colors cursor-default">
                      {state}
                   </span>
                 ))}
               </div>
            </div>
            
            <div className="flex-1 w-full">
               <div className="bg-[#3e2723] aspect-square rounded-[4rem] flex flex-col items-center justify-center p-12 text-center shadow-2xl group border-[12px] border-[#FFBF00]/10">
                  <p className="text-[#FFBF00] text-8xl md:text-[9rem] font-[1000] mb-2 tracking-tighter italic group-hover:scale-110 transition-transform">12+</p>
                  <p className="text-white font-black uppercase tracking-[0.3em] text-xs opacity-60">Cities Covered <br /> Outside MP</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Impact;