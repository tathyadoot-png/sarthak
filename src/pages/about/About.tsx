import React from 'react';
import { motion } from "framer-motion";
import { Award, Building2, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import VisionMission from './VisionMission';
import HistorySection from './HistorySection';
import Governance from './Governance';
import img1 from "@/assets/8.jpeg"

const About = () => {
    const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
    const isHi = lang === "hi";

    return (
        <div className="w-full bg-[#fcfcfd] pt-24 md:pt-36 pb-20 overflow-hidden">
            {/* 🔹 MAIN WRAPPER: Full width with smart padding instead of max-w */}
            <div className="w-full px-6 md:px-14 ">

                {/* 🔹 HERO SECTION */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-40">
                    
                    {/* LEFT Side: Visuals */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
                        >
                            <img
                                src={img1}
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                alt="Sustainability"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5c]/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating Badge - Optimized for Mobile */}
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="absolute -bottom-8 -left-2 md:-left-10 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/50 max-w-[220px] md:max-w-[280px] z-20"
                        >
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map(s => <Award key={s} size={16} className="text-amber-500 fill-amber-500" />)}
                            </div>
                            <p className="text-[12px] md:text-sm font-extrabold text-[#1a1f5c] leading-tight uppercase tracking-tight">
                                {isHi ? "300+ विशेषज्ञों द्वारा मान्यता प्राप्त।" : "Recognized by 300+ Global Experts."}
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
                        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-[#00a651] font-black uppercase tracking-[0.2em] text-[10px]"
                            >
                                {isHi ? "हमारी विरासत" : "Our Legacy"}
                            </motion.span>
                            
                            <h2 className="text-5xl md:text-7xl xl:text-8xl font-[1000] text-slate-950 tracking-tighter leading-[0.9] md:leading-[0.85]">
                                {isHi ? "सिर्फ एक संस्था नहीं," : "More Than"} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a651] via-[#2b3291] to-[#1a1f5c]">
                                    {isHi ? "एक जन क्रांति।" : "Just An NGO."}
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#00a651] pl-6 py-2">
                                {isHi
                                    ? "सार्थक ने कचरा प्रबंधन के लिए एक ऐसा मॉडल बनाया है जो पर्यावरण के साथ-साथ आजीवika को भी सुरक्षित करता है।"
                                    : "Sarthak has engineered a waste management model that prioritizes both environmental health and human dignity."}
                            </p>
                            
                            {/* Feature List for Mobile Clarity */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                {[
                                    { text: isHi ? "पूर्णतः पारदर्शी" : "Fully Transparent", color: "text-emerald-500" },
                                    { text: isHi ? "समुदाय संचालित" : "Community Driven", color: "text-blue-500" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className={item.color} />
                                        <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Action Tiles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                            <div className="p-6 md:p-8 bg-white rounded-[2rem] border border-slate-100 group hover:border-[#00a651] transition-all duration-500 shadow-sm hover:shadow-xl">
                                <Building2 className="text-[#00a651] mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <p className="font-black text-[#1a1f5c] uppercase tracking-widest text-[10px]">Industrial Partnership</p>
                                <div className="mt-4 flex items-center gap-2 text-slate-400 group-hover:text-[#00a651] transition-colors">
                                    <span className="text-[10px] font-bold">LEARN MORE</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                            
                            <div className="p-6 md:p-8 bg-white rounded-[2rem] border border-slate-100 group hover:border-[#2b3291] transition-all duration-500 shadow-sm hover:shadow-xl">
                                <Globe className="text-[#2b3291] mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <p className="font-black text-[#1a1f5c] uppercase tracking-widest text-[10px]">UNDP Global Partner</p>
                                <div className="mt-4 flex items-center gap-2 text-slate-400 group-hover:text-[#2b3291] transition-colors">
                                    <span className="text-[10px] font-bold">VIEW IMPACT</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔹 SECTION DIVIDER */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-20" />

                {/* 🔹 SUB-SECTIONS WRAPPER */}
                <div className="space-y-32 md:space-y-48">
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