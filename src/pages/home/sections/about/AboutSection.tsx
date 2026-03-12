"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Zap,
  BarChart3,
  Building2,
  Leaf,
  Users2,
  Download
} from "lucide-react";

const AboutSection: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className=" py-20 md:py-32 bg-[#f7f7f6] text-[#3e2723] relative overflow-hidden">

      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      <div className="absolute -right-20 top-40 w-96 h-96 bg-[#FFBF00]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* --- LEFT: BRAND STORY --- */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-10"
          >
            <motion.div variants={slideUp} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#FFBF00]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#FFBF00]">
                  {isHi ? "1998 से निरंतर प्रभाव" : "Established 1998"}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-[#3e2723]">
                {isHi ? "सार्थक:" : "Sarthak:"} <br />
                <span className="opacity-30">
                  {isHi ? "एक मॉडल क्रांति" : "A Legacy of Change"}
                </span>
              </h2>
            </motion.div>

            <motion.div variants={slideUp} className="max-w-xl">
              <p className="text-xl md:text-2xl text-[#3e2723]/80 font-medium leading-relaxed italic">
                {isHi
                  ? "भोपाल और इंदौर के नगर निगमों के साथ हमारा PPP मॉडल आज भारत में कचरा प्रबंधन की दिशा बदल रहा है।"
                  : "Our PPP model with Bhopal and Indore Municipal Corporations is redefining the architecture of urban waste management in India."}
              </p>
            </motion.div>

            {/* Impact Cards */}
            <motion.div variants={slideUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-[#3e2723]/5 hover:shadow-md transition-shadow">
                <h4 className="text-4xl font-black text-[#3e2723] mb-1">300+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFBF00]">
                  {isHi ? "विशेषज्ञ विज़िट्स" : "Global Delegates"}
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#3e2723] shadow-lg shadow-[#3e2723]/10">
                <h4 className="text-4xl font-black text-white mb-1">UNDP</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {isHi ? "सर्टिफाइड पार्टनर" : "Strategic Partner"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: THE BLUEPRINT --- */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl shadow-[#3e2723]/5 border border-[#3e2723]/5 relative overflow-hidden"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f7f7f6] rounded-full" />

              <div className="relative z-10 space-y-12">
                <h3 className="text-2xl font-black flex items-center gap-4 text-[#3e2723]">
                  <Target className="text-[#FFBF00]" size={32} />
                  {isHi ? "सफलता का चक्र" : "Circular Systems"}
                </h3>

                <div className="space-y-10">
                  {[
                    {
                      phase: "01",
                      icon: <Users2 size={22} />,
                      title: isHi ? "सामाजिक प्रभाव" : "Social Impact",
                      text: isHi
                        ? "कचरा बीनने वालों के जीवन में सामाजिक और आर्थिक सुधार।"
                        : "Improving dignity, livelihood and financial stability of Rag Pickers."
                    },
                    {
                      phase: "02",
                      icon: <Leaf size={22} />,
                      title: isHi ? "पर्यावरणीय प्रभाव" : "Environmental Impact",
                      text: isHi
                        ? "प्लास्टिक कचरे का सुरक्षित प्रसंस्करण और पर्यावरण संरक्षण।"
                        : "Reducing plastic pollution through responsible waste processing."
                    },
                    {
                      phase: "03",
                      icon: <BarChart3 size={22} />,
                      title: isHi ? "आर्थिक प्रभाव" : "Economic Impact",
                      text: isHi
                        ? "औद्योगिक उपयोग से राजस्व सृजन और टिकाऊ आर्थिक मॉडल।"
                        : "Revenue generation through industrial use and circular economy."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#f7f7f6] text-[#3e2723] flex items-center justify-center border border-[#3e2723]/5 group-hover:bg-[#FFBF00] transition-colors duration-500">
                          {item.icon}
                        </div>
                        {idx !== 2 && <div className="flex-grow w-[2px] bg-[#f7f7f6] my-4" />}
                      </div>
                      <div className={idx !== 2 ? "pb-6" : ""}>
                        <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#FFBF00] mb-1">Phase {item.phase}</h5>
                        <h6 className="text-lg font-black text-[#3e2723] mb-1">{item.title}</h6>
                        <p className="text-sm md:text-base text-[#3e2723]/60 font-medium leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#f7f7f6] flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFBF00]/10 flex items-center justify-center flex-shrink-0">
                      <Zap size={20} className="text-[#FFBF00]" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#3e2723]/40 leading-tight">
                      {isHi ? "पर्यावरण संरक्षण और स्वास्थ्य क्षेत्र के विशेषज्ञ स्टाफ" : "Specialized Env Protection & Health Staff"}
                    </p>
                  </div>
                  <a
                    href="/docs/sarthak-profile.pdf"
                     download="sarthak-profile.pdf"
                    className="group flex items-center gap-3 bg-[#3e2723] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all shadow-lg shadow-[#3e2723]/10"
                  >
                    {isHi ? "प्रोफाइल डाउनलोड करें" : "Download Profile"}
                    <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[18vw] font-black leading-none whitespace-nowrap text-[#3e2723]">
          DIGNITY • SUSTAINABILITY • IMPACT • DIGNITY
        </h2>
      </div>
    </section>
  );
};

export default AboutSection;