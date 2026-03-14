"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Wind, 
  Sun, 
  Combine, 
  ArrowRight, 
  CheckCircle2, 
  Scale 
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const AgricultureWaste = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const benefits = [
    {
      title: isHi ? "पराली प्रबंधन" : "Stubble Management",
      desc: isHi ? "खेतों में आग लगाने के बजाय कचरे का सही निपटान।" : "Scientific disposal instead of crop residue burning.",
      icon: <Wind className="text-blue-500" />
    },
    {
      title: isHi ? "मिट्टी की उर्वरता" : "Soil Health",
      desc: isHi ? "जैविक कचरे से मिट्टी के पोषण स्तर में सुधार।" : "Restoring soil nutrients through organic decomposition.",
      icon: <Sprout className="text-green-600" />
    },
    {
      title: isHi ? "अतिरिक्त आय" : "Extra Income",
      desc: isHi ? "कृषि अपशिष्ट को खाद या बायो-फ्यूल में बदलना।" : "Converting agro-waste into compost or bio-fuel for profit.",
      icon: <Scale className="text-[#FFBF00]" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fafaf9]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-600 rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Sun size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {isHi ? "सतत कृषि" : "Sustainable Farming"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-[0.9] mb-8">
              {isHi ? "कृषि अपशिष्ट" : "AGRICULTURE"} <br />
              <span className="text-[#FFBF00]">{isHi ? "प्रबंधन" : "WASTE REVIVAL"}</span>
            </h1>
            <p className="text-green-50 text-lg font-bold leading-relaxed">
              {isHi 
                ? "खेतों के कचरे को राख बनाने के बजाय उसे सोना (खाद) बनाने की तकनीक।" 
                : "Innovative techniques to turn farm residue into 'green gold' instead of toxic smoke."}
            </p>
          </div>
          <Combine className="absolute right-[-20px] bottom-[-20px] size-80 text-white/10 -rotate-12" />
        </motion.div>
      </section>

      {/* Impact Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 italic">
                {item.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainable Process */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="bg-[#3e2723] rounded-[3rem] p-8 md:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-8">
                {isHi ? "हमारा दृष्टिकोण" : "OUR GREEN APPROACH"}
              </h2>
              <div className="space-y-6">
                {[
                  { t: isHi ? "इन-सिटू प्रबंधन" : "In-situ Management", d: isHi ? "खेत में ही खाद बनाना।" : "Decomposition within the field." },
                  { t: isHi ? "पशु चारा निर्माण" : "Animal Fodder", d: isHi ? "कचरे से पौष्टिक चारे का उत्पादन।" : "Converting stalks into nutritious feed." },
                  { t: isHi ? "बायो-मास ऊर्जा" : "Bio-mass Energy", d: isHi ? "ऊर्जा उत्पादन के लिए उपयोग।" : "Clean energy from crop residues." }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#FFBF00] shrink-0" />
                    <div>
                      <h4 className="font-black text-sm uppercase">{point.t}</h4>
                      <p className="text-white/40 text-xs font-bold">{point.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center p-12">
                 <Sprout size={160} className="text-[#FFBF00] opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-green-500/20 blur-3xl rounded-full" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter mb-8">
            {isHi ? "मिट्टी बचाओ, भविष्य बचाओ" : "SAVE THE SOIL, SAVE THE FUTURE"}
          </h2>
          <button className="bg-[#3e2723] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 mx-auto hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all">
            {isHi ? "परियोजना से जुड़ें" : "JOIN THE MISSION"}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgricultureWaste;