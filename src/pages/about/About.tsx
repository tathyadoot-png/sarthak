import React from 'react';
import { motion } from "framer-motion";
import { Award, Building2, Globe, Users2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import VisionMission from './VisionMission';
import HistorySection from './HistorySection';
import Governance from './Governance';
import img1 from "@/assets/8.jpeg"

const About = () => {
    const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
    const isHi = lang === "hi";

    return (
        <div className="w-full bg-white pt-24 md:pt-40 pb-20 overflow-hidden">
            <div className=" mx-auto px-6">

                {/* 🔹 HERO SECTION: IDENTITY */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 aspect-[4/5]">
                            <img
                                src={img1}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Sustainability"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#2b3291]/60 to-transparent" />
                        </div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute -bottom-10 -left-6 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 max-w-[280px] z-20"
                        >
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Award key={s} size={18} className="text-amber-500 fill-amber-500" />)}
                            </div>
                            <p className="text-sm font-[800] text-slate-900 leading-tight">
                                {isHi ? "300+ विशेषज्ञों और अधिकारियों द्वारा मान्यता प्राप्त।" : "Recognized by 300+ Global Experts & Bureaucrats."}
                            </p>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-10">
                        <div className="space-y-4">
                            <span className="text-[#00a651] font-black uppercase tracking-[0.4em] text-xs">Our Legacy</span>
                            <h2 className="text-5xl md:text-8xl font-[1000] text-slate-950 tracking-tighter leading-[0.85]">
                                {isHi ? "सिर्फ एक NGO नहीं," : "Beyond Just"} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a651] to-[#2b3291]">
                                    {isHi ? "एक क्रांति।" : "An NGO."}
                                </span>
                            </h2>
                        </div>

                        <p className="text-slate-500 text-xl font-medium leading-relaxed italic border-l-4 border-[#00a651] pl-6">
                            {isHi
                                ? "सार्थक ने कचरा प्रबंधन के लिए एक ऐसा मॉडल बनाया है जो पर्यावरण के साथ-साथ आजीविका को भी सुरक्षित करता है।"
                                : "Sarthak has engineered a waste management model that prioritizes both environmental health and human dignity."}
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-[#00a651] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#00a651]/20">
                                <Building2 className="text-[#00a651] mb-6 group-hover:text-white transition-colors" size={40} />
                                <p className="font-black text-slate-950 group-hover:text-white uppercase tracking-widest text-xs">Industrial Ties</p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-[#2b3291] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#2b3291]/20">
                                <Globe className="text-[#2b3291] mb-6 group-hover:text-white transition-colors" size={40} />
                                <p className="font-black text-slate-950 group-hover:text-white uppercase tracking-widest text-xs">UNDP Partner</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-40 space-y-40">
                    <div id="history"><HistorySection /></div>
                    <div id="vision"><VisionMission /></div>

                    <div id="governance"><Governance /></div>
                </div>
            </div>
        </div>
    );
};

export default About;