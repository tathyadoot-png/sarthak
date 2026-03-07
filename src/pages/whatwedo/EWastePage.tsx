"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Cpu, Truck, Trash2, FileCheck, ShieldCheck, 
  Binoculars, Globe, Download, Zap, Award, ArrowUpRight
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

const EWastePage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  return (
    <div className="bg-[#f7f7f6] min-h-screen font-sans pb-24 overflow-x-hidden">
      
      {/* 🔹 HERO SECTION: Centered & Bold with Floating Elements */}
      <section className="relative pt-44 pb-36 px-6 bg-[#3e2723] overflow-hidden text-center">
        {/* Decorative Background Circles */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" 
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-[#FFBF00] text-[#3e2723] text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-lg"
          >
            <Zap size={14} fill="#3e2723" />
            {isHi ? "ई-अपशिष्ट समाधान 2011" : "E-WASTE SOLUTIONS SINCE 2011"}
          </motion.div>
          
          <h1 className="text-6xl md:text-[10rem] font-[1000] text-white uppercase tracking-tighter leading-[0.8] mb-12">
            {isHi ? "जिम्मेदार" : "RESPONSIBLE"} <br />
            <span className="text-white/20">{isHi ? "ई-कचरा" : "E-WASTE"}</span> <span className="text-[#FFBF00] italic">{isHi ? "कलेक्शन।" : "COLLECTION."}</span>
          </h1>
          
          <p className="text-white/50 text-xl md:text-3xl font-medium max-w-3xl mx-auto leading-tight tracking-tight">
            {isHi 
              ? "हम ई-कचरे को सुरक्षित रूप से इकट्ठा करते हैं और EPR नियमों का पूरी तरह पालन करते हैं।" 
              : "Ethical collection, safe dismantling, and 100% authorized EPR compliance documentation."}
          </p>
        </div>
      </section>

      {/* 🔹 BENTO GRID SERVICES: Modern Non-Linear Layout */}
      <section className="relative -mt-24 px-6 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Box 1: EPR Compliance (Large) */}
          <div className="md:col-span-8 bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-[#3e2723]/5 flex flex-col md:flex-row justify-between items-end group overflow-hidden relative">
            <div className="relative z-10">
              <div className="h-20 w-20 bg-[#3e2723] rounded-3xl flex items-center justify-center text-[#FFBF00] mb-12 group-hover:scale-110 transition-transform duration-500">
                <FileCheck size={40} />
              </div>
              <h3 className="text-4xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter mb-6 leading-none">
                {isHi ? "EPR अनुपालन" : "EPR COMPLIANCE"}
              </h3>
              <p className="text-[#3e2723]/60 text-lg font-bold max-w-md leading-relaxed">
                {isHi ? "निर्माताओं के लिए अधिकृत दस्तावेज़ीकरण और पूर्ण कानूनी सहायता।" : "Authorized EPR compliance documentation and seamless regulatory support for producers."}
              </p>
            </div>
            <div className="text-[#3e2723]/5 absolute -bottom-10 -right-10 scale-150 rotate-12">
                <ShieldCheck size={300} />
            </div>
          </div>

          {/* Box 2: Doorstep Pickup (Tall) */}
          <div className="md:col-span-4 bg-[#FFBF00] p-12 rounded-[4rem] shadow-2xl flex flex-col items-center text-center justify-center group">
            <div className="bg-[#3e2723] p-8 rounded-full text-[#FFBF00] mb-8 group-hover:rotate-12 transition-transform">
                <Truck size={48} />
            </div>
            <h4 className="text-3xl font-[1000] text-[#3e2723] uppercase leading-tight mb-4">
              {isHi ? "डोरस्टेप पिकअप" : "DOORSTEP PICKUP"}
            </h4>
            <p className="text-[#3e2723]/70 font-black text-[10px] uppercase tracking-widest">
                {isHi ? "कंपनियों के लिए विशेष सेवा" : "Exclusively for Companies"}
            </p>
          </div>

          {/* Box 3: Collection Bins (Wide) */}
          <div className="md:col-span-5 bg-[#3e2723] p-12 rounded-[4rem] shadow-2xl text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
                <Trash2 size={48} className="text-[#FFBF00] mb-8" />
                <h4 className="text-3xl font-[1000] uppercase tracking-tighter leading-none mb-4">
                {isHi ? "ई-कचरा बिन्स" : "COLLECTION BINS"}
                </h4>
                <p className="text-white/50 font-bold">
                {isHi ? "संस्थानों में ई-कचरा संग्रहण पात्रों की स्थापना।" : "Strategically placed bins at educational and corporate institutions."}
                </p>
            </div>
          </div>

          {/* Box 4: Partners (Wide) */}
          <div className="md:col-span-7 bg-white p-12 rounded-[4rem] border border-[#3e2723]/5 shadow-xl flex items-center justify-between group">
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-3 w-3 bg-[#FFBF00] rounded-full animate-pulse" />
                    <span className="font-black uppercase tracking-widest text-xs text-[#3e2723]">Authorized Network</span>
                </div>
                <h4 className="text-4xl font-[1000] text-[#3e2723] uppercase tracking-tighter">
                   {isHi ? "सुरक्षित डिस्मेंटलिंग" : "SAFE DISMANTLING"}
                </h4>
             </div>
             <div className="h-20 w-20 border-2 border-[#3e2723]/10 rounded-full flex items-center justify-center group-hover:bg-[#3e2723] group-hover:text-white transition-all cursor-pointer">
                <ArrowUpRight size={32} />
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 THE E-CLINIC SECTION: Asymmetric Overlap Layout */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex flex-col lg:flex-row items-center">
            
            {/* Content Card */}
            <div className="w-full lg:w-3/5 z-20">
              <div className="bg-[#3e2723] p-12 md:p-24 rounded-[5rem] text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-4 mb-10">
                  <span className="px-4 py-1 border-2 border-[#FFBF00] text-[#FFBF00] text-[10px] font-black uppercase tracking-widest rounded-full">BMC x SARTHAK</span>
                </div>
                
                <h2 className="text-5xl md:text-8xl font-[1000] uppercase tracking-tighter leading-[0.85] mb-10">
                  {isHi ? "ई-क्लिनिक" : "E-CLINIC"} <br />
                  <span className="text-[#FFBF00] italic">{isHi ? "एम्बुलेंस।" : "AMBULANCE."}</span>
                </h2>
                
                <p className="text-white/60 text-xl font-medium leading-relaxed mb-12 border-l-4 border-[#FFBF00] pl-8">
                  {isHi 
                    ? "भोपाल नगर निगम के सहयोग से संचालित, यह पहल घरेलू ई-कचरे को सीधे आपके दरवाजे से एकत्र करती है।" 
                    : "A model citizen-led initiative for household e-waste collection, highlighted globally under Mission LiFE."}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                  <div className="space-y-2">
                    <Binoculars className="text-[#FFBF00]" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{isHi ? "जागरूकता" : "AWARENESS"}</p>
                  </div>
                  <div className="space-y-2">
                    <Globe className="text-[#FFBF00]" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{isHi ? "वैश्विक मॉडल" : "GLOBAL MODEL"}</p>
                  </div>
                  <div className="space-y-2">
                    <Award className="text-[#FFBF00]" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{isHi ? "मिशन LiFE" : "MISSION LiFE"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Image Card */}
            <div className="w-full lg:w-1/2 lg:-ml-24 mt-12 lg:mt-0 z-10">
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="aspect-[4/5] bg-white rounded-[5rem] p-4 shadow-2xl relative overflow-hidden"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800" 
                   alt="E-Waste Management" 
                   className="w-full h-full object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/80 to-transparent flex items-end p-16">
                    <p className="text-white font-black uppercase tracking-tighter text-3xl leading-none italic">
                        Leading the <br /> Change.
                    </p>
                 </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 MINIMAL CONTACT CTA */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-[#3e2723]/5 shadow-sm">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-6">
              {isHi ? "संपर्क करें।" : "GET IN TOUCH."}
            </h2>
            <p className="text-[#3e2723]/40 font-bold uppercase tracking-[0.3em] text-xs">
              {isHi ? "सुरक्षित ई-कचरा निपटान के लिए" : "For responsible e-waste disposal"}
            </p>
          </div>
          <button className="flex items-center gap-8 bg-[#3e2723] text-white px-10 py-6 rounded-full font-black uppercase tracking-widest text-[11px] group hover:bg-black transition-all shadow-2xl">
            {isHi ? "पिकअप शेड्यूल करें" : "SCHEDULE PICKUP"}
            <div className="h-10 w-10 bg-[#FFBF00] rounded-full flex items-center justify-center text-[#3e2723] group-hover:translate-x-2 transition-transform">
              <Download size={20} />
            </div>
          </button>
        </div>
      </section>

    </div>
  );
};

export default EWastePage;