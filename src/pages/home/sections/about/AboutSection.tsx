import React from 'react';
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Zap,
  BarChart3,
  Building2,
  Users2
} from "lucide-react";

const AboutSection: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const slideIn: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* 1. BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00a651]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2b3291]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* --- LEFT: THE NARRATIVE --- */}
          <motion.div
            variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-6 space-y-8 md:space-y-12"
          >
            <motion.div variants={slideIn} className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-4 text-[#00a651]">
                <span className="h-px w-8 md:w-10 bg-[#00a651]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">Impact Since 1998</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black leading-[1.1] lg:leading-[0.85] tracking-tighter">
                {isHi ? "सार्थक:" : "Sarthak:"} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
                  {isHi ? "एक मॉडल क्रांति" : "A Model Revolution"}
                </span>
              </h2>
            </motion.div>

            <motion.div variants={slideIn} className="relative group pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00a651] to-transparent" />
              <p className="text-lg md:text-xl lg:text-2xl text-slate-400 font-light leading-relaxed">
                {isHi
                  ? "भोपाल और इंदौर के नगर निगमों के साथ हमारा PPP मॉडल आज भारत में कचरा प्रबंधन की दिशा बदल रहा है।"
                  : "Our PPP model with Bhopal and Indore Municipal Corporations is redefining the architecture of urban waste management in India."}
              </p>
            </motion.div>

            {/* Quick Stats Grid - Optimized for Mobile */}
            <motion.div variants={slideIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-10">
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-3xl md:text-4xl font-black text-[#00a651] mb-2">300+</h4>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">{isHi ? "विशेषज्ञ विज़िट्स" : "Global Delegates Visited"}</p>
              </div>
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-3xl md:text-4xl font-black text-white mb-2">UNDP</h4>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">{isHi ? "सर्टिफाइड पार्टनर" : "Strategic Partner"}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: THE INTERACTIVE BLUEPRINT --- */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[2rem] md:rounded-[3rem]">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-14 space-y-10 md:space-y-12">

                <div className="space-y-8 md:space-y-10">
                  <h3 className="text-xl md:text-2xl font-bold flex items-center gap-4">
                    <Target className="text-[#00a651]" />
                    {isHi ? "सफलता का चक्र" : "The Circular Economy"}
                  </h3>

                  {/* Timeline Items - Adjusted for all screens */}
                  {[
                    { phase: isHi ? "01" : "01", icon: <Users2 size={20} />, color: "group-hover:bg-[#00a651]", text: isHi ? "कचरा बीनने वालों का सामाजिक और वित्तीय उत्थान।" : "Livelihood transformation for Rag Pickers." },
                    { phase: isHi ? "02" : "02", icon: <Building2 size={20} />, color: "group-hover:bg-[#2b3291]", text: isHi ? "औद्योगिक स्तर पर प्लास्टिक कचरे का प्रसंस्करण।" : "Industrial-grade Plastic Waste Processing." },
                    { phase: isHi ? "03" : "03", icon: <BarChart3 size={20} />, color: "group-hover:bg-amber-500", text: isHi ? "सीमेंट फैक्ट्रियों को कच्चे माल की आपूर्ति और राजस्व।" : "Revenue generation via Cement Factory Supply." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-8 group">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors ${item.color}`}>
                          {item.icon}
                        </div>
                        {idx !== 2 && <div className="flex-grow w-px bg-white/10 my-4" />}
                      </div>
                      <div className={idx !== 2 ? "pb-8 md:pb-10" : ""}>
                        <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1 md:mb-2">{isHi ? "चरण" : "Phase"} {item.phase}</h5>
                        <p className="text-base md:text-lg font-bold group-hover:text-white transition-colors leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expertise Callout - Mobile Friendly Row/Col */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-[#00a651] p-1 flex-shrink-0">
                      <Zap size={18} className="text-[#00a651] m-1" fill="currentColor" />
                    </div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Expert Staff in Env Protection & Health
                    </p>
                  </div>
                  <a
                    href="/docs/sarthak-profile.pdf"
                    download
                    className="w-full sm:w-auto text-center flex items-center justify-center gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-[#00a651] transition-all bg-white/5 hover:bg-white/10 px-6 py-4 rounded-full border border-white/10 group flex-shrink-0"
                  >
                     {isHi ? "पूरी प्रोफाइल" : "Full Profile"}
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BACKGROUND TEXT: Responsive Size */}
      <div className="absolute -bottom-6 md:-bottom-10 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] lg:text-[15vw] font-black leading-none whitespace-nowrap">
          ENVIRONMENT • DIGNITY • SUSTAINABILITY
        </h2>
      </div>
    </section>
  );
};

export default AboutSection;