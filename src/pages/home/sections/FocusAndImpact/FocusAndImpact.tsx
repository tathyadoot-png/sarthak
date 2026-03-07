"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight, Recycle, Zap, Heart, Leaf } from "lucide-react";

interface Props {
  lang: "hi" | "en";
}

const FocusAndImpact: React.FC<Props> = ({ lang }) => {
  const isHi = lang === "hi";

  return (
    <section className="w-full bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔹 SECTION 1: PLASTIC & ROADS (Bento-style Collage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-32 md:mb-56">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
               <Recycle size={14} className="text-emerald-600" />
               <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">{isHi ? "प्लास्टिक मुक्त भारत" : "Plastic Free India"}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter leading-none uppercase">
              {isHi ? "कचरे से बनी " : "Roads Built from "} <br/>
              <span className="text-emerald-500 italic">{isHi ? "मजबूत सड़कें" : "Waste."}</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
              {isHi 
                ? "40,000 किमी से अधिक सड़कों का निर्माण। हम MLP प्लास्टिक को रीसायकल कर उसे विकास का हिस्सा बना रहे हैं।" 
                : "Over 40,000 km of roads constructed using shredded MLP plastic, diverting tons of waste from landfills."}
            </p>
            <div className="text-4xl font-black text-slate-900 italic tracking-tighter">40,000+ KM</div>
          </div>

          <div className="lg:col-span-7 relative order-1 lg:order-2 h-[400px] md:h-[600px]">
            {/* Overlapping Images */}
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000" className="w-full h-full object-cover" alt="Road Work" />
            </motion.div>
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800" className="w-full h-full object-cover" alt="Plastic Waste" />
            </motion.div>
          </div>
        </div>

        {/* 🔹 SECTION 2: SOCIAL & E-WASTE (Side-by-Side Mosaic) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          
          {/* Social Inclusion Card */}
          <div className="space-y-12">
            <div className="relative h-[500px]">
               <motion.div whileHover={{ scale: 1.02 }} className="absolute inset-0 rounded-[3.5rem] overflow-hidden shadow-xl border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000" className="w-full h-full object-cover" alt="Social" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="text-white">
                       <Heart className="text-rose-400 mb-4" size={32} />
                       <h3 className="text-3xl font-black uppercase tracking-tighter">{isHi ? "सार्थक कर्मी" : "Social Inclusion"}</h3>
                       <p className="text-white/70 text-sm mt-2">{isHi ? "3200+ परिवारों को सम्मानजनक जीवन" : "Dignity for 3200+ families"}</p>
                    </div>
                    <div className="p-4 bg-white rounded-full"><ArrowUpRight size={20} className="text-slate-900" /></div>
                  </div>
               </motion.div>
            </div>
          </div>

          {/* E-Waste & Organic Mini Grid */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="flex gap-6 items-center">
               <div className="h-20 w-20 rounded-3xl bg-blue-50 flex items-center justify-center border border-blue-100"><Zap className="text-blue-500" size={32} /></div>
               <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter">{isHi ? "ई-वेस्ट एम्बुलेंस" : "E-Waste Ambulance"}</h4>
                  <p className="text-slate-500 font-medium">{isHi ? "भारत की पहली समर्पित सेवा" : "India's first dedicated service"}</p>
               </div>
            </div>
            <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100">
               <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000" className="w-full h-full object-cover" alt="E-waste" />
            </div>
            <div className="flex gap-6 items-center pt-8 border-t border-slate-100">
               <div className="h-20 w-20 rounded-3xl bg-green-50 flex items-center justify-center border border-green-100"><Leaf className="text-green-600" size={32} /></div>
               <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter">{isHi ? "जैविक खाद" : "Organic Waste"}</h4>
                  <p className="text-slate-500 font-medium">{isHi ? "शून्य कचरा समाधान" : "Decentralized Composting"}</p>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FocusAndImpact;