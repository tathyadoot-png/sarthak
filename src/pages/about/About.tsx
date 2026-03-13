"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, Building2, Globe, ArrowRight, CheckCircle2, Sparkles,Quote } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import VisionMission from './VisionMission';
import HistorySection from './HistorySection';
import Governance from './Governance';
import img1 from "@/assets/8.jpeg";
import Organogram from './Organogram';

const About = () => {
    const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
    const isHi = lang === "hi";

    return (
        <div className="bg-[#f7f7f6] pt-24 md:pt-36 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* --- HERO SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-20">
                    
                    {/* LEFT Side: Visuals with Sarthak Brand Layers */}
                    <div className="lg:col-span-5 relative group">
                        {/* Background Decorative Accent */}
                        <div className="absolute -inset-4 bg-[#FFBF00]/10 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl z-10 aspect-[4/5]"
                        >
                            <img
                                src={img1}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                alt="Sarthak Sustainability"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/60 via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating Badge: Recognized Experts */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -left-4 md:-left-10 bg-[#3e2723] p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 max-w-[220px] md:max-w-[280px] z-20"
                        >
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Award key={s} size={18} className="text-[#FFBF00] fill-[#FFBF00]" />
                                ))}
                            </div>
                            <p className="text-[11px] md:text-xs font-black text-white leading-tight uppercase tracking-widest">
                                {isHi ? "300+ अंतरराष्ट्रीय विशेषज्ञों द्वारा मान्यता प्राप्त।" : "Recognized by 300+ Global Sustainability Experts."}
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT Side: Typography Driven Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFBF00]/10 border border-[#FFBF00]/20 text-[#3e2723] font-black uppercase tracking-[0.3em] text-[10px]"
                            >
                                <Sparkles size={12} className="text-[#FFBF00]" />
                                {isHi ? "हमारी विरासत" : "Our Legacy Since 1998"}
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl xl:text-8xl font-[1000] text-[#3e2723] tracking-tighter leading-[0.9]">
                                {isHi ? "सिर्फ एक संस्था नहीं," : "More Than"} <br />
                                <span className="text-[#3e2723]/30">
                                    {isHi ? "एक जन क्रांति।" : "Just An NGO."}
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-[#3e2723]/80 text-lg md:text-2xl font-medium leading-relaxed border-l-4 border-[#FFBF00] pl-8 py-2 italic">
                                {isHi
                                    ? "सार्थक ने कचरा प्रबंधन के लिए एक ऐसा मॉडल बनाया है जो पर्यावरण के साथ-साथ आजीवika को भी सुरक्षित करता है।"
                                    : "Sarthak has engineered a decentralized waste management model that prioritizes both environmental health and human dignity."}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    { text: isHi ? "पूर्णतः पारदर्शी" : "Fully Transparent", color: "bg-[#3e2723]" },
                                    { text: isHi ? "समुदाय संचालित" : "Community Driven", color: "bg-[#FFBF00]" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                                        <div className={`p-2 rounded-lg ${item.color} ${idx === 1 ? 'text-[#3e2723]' : 'text-white'} shadow-lg group-hover:scale-110 transition-transform`}>
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="font-black text-[#3e2723] text-xs uppercase tracking-widest">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Tiles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                            <button className="group relative p-8 bg-white rounded-[2.5rem] border border-[#3e2723]/5 text-left transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                                <Building2 className="text-[#FFBF00] mb-6 group-hover:rotate-12 transition-transform" size={40} />
                                <h4 className="font-black text-[#3e2723] uppercase tracking-widest text-[11px] mb-2">Industrial Partnership</h4>
                                <div className="flex items-center gap-2 text-[#3e2723]/40 group-hover:text-[#3e2723] transition-colors">
                                    <span className="text-[10px] font-bold">LEARN MORE</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </button>
                            
                            <button className="group relative p-8 bg-[#3e2723] rounded-[2.5rem] text-left transition-all duration-500 shadow-xl hover:-translate-y-2 overflow-hidden">
                                <Globe className="text-[#FFBF00] mb-6 group-hover:animate-spin-slow" size={40} />
                                <h4 className="font-black text-white uppercase tracking-widest text-[11px] mb-2">UNDP Global Partner</h4>
                                <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                                    <span className="text-[10px] font-bold">VIEW IMPACT</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>

                    
                </div>

                   
                      {/* 🔹 NANJI DESHMUKH QUOTE SECTION */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 p-8 bg-[#FFBF00]/5 border-l-4 border-[#FFBF00] rounded-r-[2rem] relative overflow-hidden"
                      >
                        <Quote className="absolute top-4 right-8 text-[#FFBF00]/10 w-24 h-24" />
                        <div className="relative z-10">
                          <p className="text-xl md:text-3xl font-black text-[#3e2723] leading-tight mb-6 italic">
                            "मैं अपने लिए नहीं, अपनों के लिए हूँ। अपने वे हैं, जो सदियों से पीड़ित एवं उपेक्षित हैं।"
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-[#3e2723]/20" />
                            <p className="text-[#3e2723] font-black uppercase tracking-widest text-sm">
                              — राष्ट्रऋषि नानाजी देशमुख
                            </p>
                          </div>
                        </div>
                      </motion.div>

           

                {/* --- SUB-SECTIONS WRAPPER --- */}
                <div className="space-y-40 md:space-y-60">
                    <section id="history" className="scroll-mt-32">
                        <HistorySection />
                    </section>
                    
                    <section id="vision" className="scroll-mt-32">
                        <VisionMission />
                    </section>

 <Organogram/>
                    <section id="governance" className="scroll-mt-32 pb-20">
                        <Governance />
                    </section>

                   
                </div>
            </div>
        </div>
    );
};

export default About;