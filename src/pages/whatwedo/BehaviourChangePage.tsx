"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Users2, 
  Megaphone, 
  GraduationCap, 
  BookOpen, 
  BarChart4, 
  Lightbulb,
  Heart,
  ArrowRight
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

const BehaviourChangePage = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const trainingFocus = [
    {
      title: isHi ? "BCC संचार" : "Behaviour Change (BCC)",
      desc: isHi ? "व्यवहार परिवर्तन संचार के माध्यम से आदतों में सुधार।" : "Strategic communication to foster sustainable waste habits.",
      icon: <Megaphone size={28} />
    },
    {
      title: isHi ? "संस्थान ओरिएंटेशन" : "Institutional Orientations",
      desc: isHi ? "स्कूलों और कॉलेजों में शून्य कचरा जागरूकता अभियान।" : "Zero waste awareness drives in schools and colleges.",
      icon: <GraduationCap size={28} />
    },
    {
      title: isHi ? "श्रमिक प्रशिक्षण" : "Worker Training",
      desc: isHi ? "सफाई मित्रों के लिए कौशल विकास और सुरक्षा प्रशिक्षण।" : "Skill development and safety training for sanitation workers.",
      icon: <Users2 size={28} />
    },
    {
      title: isHi ? "प्रभाव मूल्यांकन" : "Impact Assessment",
      desc: isHi ? "जमीनी स्तर पर बदलाव को मापने के लिए गहन अध्ययन।" : "In-depth studies to measure ground-level social changes.",
      icon: <BarChart4 size={28} />
    }
  ];

  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans pb-24 overflow-x-hidden">
      
      {/* 🔹 HERO: Signature Yellow Accent */}
      <section className="relative pt-44 pb-32 px-6 bg-[#3e2723] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFBF00]/10 blur-[150px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBF00] text-[#3e2723] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-10 shadow-xl"
          >
            <Heart size={14} fill="#3e2723" />
            {isHi ? "मानसिकता परिवर्तन" : "MINDSET TRANSFORMATION"}
          </motion.div>
          
          <h1 className="text-6xl md:text-[9rem] font-[1000] text-white uppercase tracking-tighter leading-[0.8] mb-12">
            {isHi ? "व्यवहार" : "BEHAVIOUR"} <br />
            <span className="text-[#FFBF00] italic">{isHi ? "परिवर्तन।" : "CHANGE."}</span>
          </h1>
          
          <p className="text-white/60 text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-tight">
            {isHi 
              ? "हमारा मानना है कि कचरा प्रबंधन की शुरुआत इंफ्रास्ट्रक्चर से नहीं, बल्कि इंसान की सोच से होती है।" 
              : "We believe waste management begins with mindset transformation, not just infrastructure."}
          </p>
        </div>
      </section>

      {/* 🔹 CORE ACTIVITIES: Clean Yellow Accents */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-6">
                {isHi ? "ट्रेनिंग और" : "TRAINING &"} <br /> {isHi ? "अभियान" : "CAMPAIGNING"}
              </h2>
              <div className="h-1.5 w-24 bg-[#FFBF00] rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {trainingFocus.map((item, i) => (
                 <div key={i} className="p-8 bg-white rounded-[3rem] border border-[#3e2723]/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="text-[#FFBF00] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-lg font-black text-[#3e2723] uppercase tracking-tighter mb-2 leading-none">{item.title}</h4>
                    <p className="text-[11px] font-bold text-[#3e2723]/40 leading-relaxed uppercase">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl rotate-3 scale-95 hover:rotate-0 hover:scale-100 transition-all duration-700 bg-[#FFBF00]">
                <img 
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800" 
                  alt="Education Awareness" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-[#3e2723] p-10 rounded-[3rem] shadow-2xl text-white" >
                <BookOpen size={40} className="text-[#FFBF00] mb-4" />
                <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Educational <br /> Literature</p>
             </div>
          </div>

        </div>
      </section>

      {/* 🔹 STATS: Signature Yellow Theme */}
      <section className="py-32 bg-[#FFBF00] rounded-[5rem] mx-6 px-6 text-[#3e2723]">
        <div className="max-w-5xl mx-auto text-center">
          <Lightbulb size={60} className="mx-auto mb-10 opacity-30" />
          <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter leading-none mb-10">
            {isHi 
              ? "जागरूकता से ही जिम्मेदारी का जन्म होता है।" 
              : "Awareness is the first step towards shared responsibility."}
          </h2>
          <div className="flex flex-wrap justify-center gap-16">
             <div className="text-center">
               <h3 className="text-7xl font-[1000] tracking-tighter italic">1M+</h3>
               <p className="font-black text-[10px] uppercase tracking-widest text-[#3e2723]/60">Lives Impacted</p>
             </div>
             <div className="text-center">
               <h3 className="text-7xl font-[1000] tracking-tighter italic">500+</h3>
               <p className="font-black text-[10px] uppercase tracking-widest text-[#3e2723]/60">Workshops</p>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA: Back to Sarthak Identity */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto border-2 border-[#3e2723]/5 rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-white">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-6">
              {isHi ? "ट्रेनिंग शुरू" : "PLAN A TRAINING"} <br /> <span className="text-[#3e2723]/20">{isHi ? "करें।" : "SESSION."}</span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#3e2723]/40">Mindset transformation begins here</p>
          </div>
          <button className="px-10 py-6 bg-[#3e2723] text-white rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-6 hover:bg-black transition-all group shadow-2xl">
            {isHi ? "अभी संपर्क करें" : "GET INVOLVED"} 
            <div className="bg-[#FFBF00] h-8 w-8 rounded-full flex items-center justify-center text-[#3e2723] group-hover:rotate-45 transition-transform">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </section>

    </div>
  );
};

export default BehaviourChangePage;