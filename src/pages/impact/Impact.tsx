"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Users, Leaf, Banknote, ArrowUpRight, Globe2 } from "lucide-react";

const Impact: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const impacts = [
    {
      id: "social",
      title: isHi ? "सामाजिक प्रभाव" : "SOCIAL IMPACT",
      icon: <Users size={28} />,
      bgColor: "bg-[#3e2723]",
      textColor: "text-white",
      accentColor: "bg-[#FFBF00]",
      stats: "1.8L+",
      label: isHi ? "सशक्त जीवन" : "Lives Impacted",
      desc: isHi 
        ? "कचरा बीनने वालों को 'सार्थक कर्मी' के रूप में पहचान और सम्मानजनक आजीविका देना।" 
        : "Transforming lives by integrating ragpickers into the formal economy with dignity.",
      image: "/img/37.jpeg"
    },
    {
      id: "environmental",
      title: isHi ? "पर्यावरणीय प्रभाव" : "ENVIRONMENTAL IMPACT",
      icon: <Leaf size={28} />,
      bgColor: "bg-[#FFBF00]",
      textColor: "text-[#3e2723]",
      accentColor: "bg-[#3e2723]",
      stats: "27K",
      label: isHi ? "किमी सड़कें" : "KM Roads Built",
      desc: isHi 
        ? "प्लास्टिक कचरे का सड़क निर्माण में अभिनव उपयोग कर कार्बन उत्सर्जन को कम करना।" 
        : "Innovative use of non-recyclable plastic in road construction to lower carbon footprints.",
      image: "/plasticwaste/3.jpg"
    },
    {
      id: "economical",
      title: isHi ? "आर्थिक प्रभाव" : "ECONOMICAL IMPACT",
      icon: <Banknote size={28} />,
      bgColor: "bg-white",
      textColor: "text-[#3e2723]",
      accentColor: "bg-[#FFBF00]",
      stats: "Self",
      label: isHi ? "सस्टेनेबल" : "Reliant Model",
      desc: isHi 
        ? "कचरे को संसाधन में बदलकर स्थानीय निकायों के लिए आत्मनिर्भर वित्तीय मॉडल बनाना।" 
        : "Converting waste into resources to create self-sustaining revenue for municipalities.",
      image: "/zerowaste/8.jpg"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#f8f8f5] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFBF00]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3e2723]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-[#FFBF00]" />
              <span className="text-[#FFBF00] text-xs font-black uppercase tracking-[0.4em]">
                {isHi ? "हमारा प्रभाव" : "OUR POSITIVE FOOTPRINT"}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-[0.85]"
            >
              TRIPLE <br />
              <span className="text-transparent stroke-text italic font-light">BOTTOM LINE</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:flex flex-col items-end text-right"
          >
            <Globe2 className="text-[#3e2723]/20 mb-4" size={40} />
            <p className="text-[#3e2723]/40 text-xs font-bold uppercase tracking-widest max-w-[200px]">
              {isHi ? "वैश्विक लक्ष्यों की ओर निरंतर अग्रसर" : "Driving progress towards global sustainability"}
            </p>
          </motion.div>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative h-[600px] rounded-[3.5rem] p-10 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:-translate-y-4 ${item.bgColor} ${item.textColor} shadow-[0_20px_50px_rgba(0,0,0,0.05)]`}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-1000 scale-110 group-hover:scale-100">
                <img src={item.image} alt="" className="w-full h-full object-cover grayscale" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
              </div>

              {/* Top Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.accentColor} ${item.id === 'social' ? 'text-[#3e2723]' : 'text-white'}`}>
                  {item.icon}
                </div>
                <h3 className="text-4xl font-[1000] uppercase tracking-tighter leading-none mb-6 italic">
                  {item.title}
                </h3>
                <p className="text-lg opacity-60 font-medium leading-relaxed max-w-[90%]">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <div className="flex flex-col gap-1 mb-8">
                  <span className="text-7xl font-[1000] tracking-tighter block leading-none">
                    {item.stats}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.3em] opacity-40 ml-1">
                    {item.label}
                  </span>
                </div>

                <div className="h-[1px] w-full bg-current opacity-10 mb-8" />

                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Status</span>
                    <span className="text-xs font-bold uppercase tracking-tighter">{isHi ? "सक्रिय प्रभाव" : "Active Impact"}</span>
                  </div>
                  <div className={`w-14 h-14 rounded-full border border-current flex items-center justify-center transition-all duration-500 group-hover:bg-[#FFBF00] group-hover:border-[#FFBF00] group-hover:text-[#3e2723]`}>
                    <ArrowUpRight size={24} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Stroke Text */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #3e2723;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Impact;