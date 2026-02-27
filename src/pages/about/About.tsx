import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Building2, Globe, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import VisionMission from './VisionMission';
import HistorySection from './HistorySection';
import Governance from './Governance';
import img1 from "@/assets/8.jpeg";

const About = () => {
    const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
    const isHi = lang === "hi";

    return (
        <div className=" bg-[#fcfcfd] pt-24 md:pt-36 pb-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-14">

                {/* 🔹 HERO SECTION: Elevated with Glassmorphism and Depth */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-40">
                    
                    {/* LEFT Side: Visuals with Layered Effects */}
                    <div className="w-full lg:w-1/2 relative group">
                        {/* Background Decorative Blob */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-blue-100 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(26,31,92,0.15)] aspect-[4/5] md:aspect-square lg:aspect-[4/5] z-10"
                        >
                            <img
                                src={img1}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                alt="Sustainability"
                            />
                            {/* Refined Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5c]/60 via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating Badge: More "Premium" look */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -left-2 md:-left-10 bg-white/80 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 max-w-[220px] md:max-w-[280px] z-20"
                        >
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Award key={s} size={18} className="text-amber-500 fill-amber-500 drop-shadow-sm" />
                                ))}
                            </div>
                            <p className="text-[13px] md:text-sm font-black text-[#1a1f5c] leading-tight uppercase tracking-tight">
                                {isHi ? "300+ विशेषज्ञों द्वारा मान्यता प्राप्त।" : "Recognized by 300+ Global Experts."}
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT Side: Content with Better Typography */}
                    <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
                        <div className="space-y-6 text-center lg:text-left">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#00a651] font-bold uppercase tracking-[0.2em] text-[10px]"
                            >
                                <Sparkles size={12} />
                                {isHi ? "हमारी विरासत" : "Our Legacy"}
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl xl:text-8xl font-[1000] text-slate-950 tracking-tighter leading-[1] md:leading-[0.9]">
                                {isHi ? "सिर्फ एक संस्था नहीं," : "More Than"} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a651] via-[#2b3291] to-[#1a1f5c]">
                                    {isHi ? "एक जन क्रांति।" : "Just An NGO."}
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed border-l-4 border-emerald-500 pl-8 py-2 italic">
                                {isHi
                                    ? "सार्थक ने कचरा प्रबंधन के लिए एक ऐसा मॉडल बनाया है जो पर्यावरण के साथ-साथ आजीविका को भी सुरक्षित करता है।"
                                    : "Sarthak has engineered a waste management model that prioritizes both environmental health and human dignity."}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    { text: isHi ? "पूर्णतः पारदर्शी" : "Fully Transparent", color: "bg-emerald-500" },
                                    { text: isHi ? "समुदाय संचालित" : "Community Driven", color: "bg-blue-600" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                                        <div className={`p-2 rounded-lg ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="font-extrabold text-slate-800 text-sm uppercase tracking-wider">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Action Tiles: Glassmorphism and Hover Effects */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                            <button className="group relative p-8 bg-white rounded-[2.5rem] border border-slate-100 text-left transition-all duration-500 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,166,81,0.15)] hover:-translate-y-2 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Building2 size={80} />
                                </div>
                                <Building2 className="text-[#00a651] mb-6 group-hover:rotate-12 transition-transform" size={40} />
                                <p className="font-black text-[#1a1f5c] uppercase tracking-widest text-[11px] mb-2">Industrial Partnership</p>
                                <div className="flex items-center gap-2 text-slate-400 group-hover:text-[#00a651] transition-colors">
                                    <span className="text-[10px] font-bold">LEARN MORE</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </button>
                            
                            <button className="group relative p-8 bg-[#1a1f5c] rounded-[2.5rem] text-left transition-all duration-500 shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(26,31,92,0.3)] hover:-translate-y-2 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
                                    <Globe size={80} />
                                </div>
                                <Globe className="text-white mb-6 group-hover:animate-spin-slow" size={40} />
                                <p className="font-black text-white/90 uppercase tracking-widest text-[11px] mb-2">UNDP Global Partner</p>
                                <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                                    <span className="text-[10px] font-bold">VIEW IMPACT</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 🔹 SECTION DIVIDER: Subtle and Elegant */}
                <div className="relative w-full h-px bg-slate-200 my-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                </div>

                {/* 🔹 SUB-SECTIONS WRAPPER */}
                <div className="space-y-40 md:space-y-60">
                    <section id="history" className="scroll-mt-32">
                        <HistorySection />
                    </section>
                    
                    <section id="vision" className="scroll-mt-32">
                        <VisionMission />
                    </section>

                    <section id="governance" className="scroll-mt-32 pb-20">
                        <Governance />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;