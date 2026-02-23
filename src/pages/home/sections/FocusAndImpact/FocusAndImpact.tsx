"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Recycle, Zap, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface Props {
  lang: "hi" | "en";
}

const FocusAndImpact: React.FC<Props> = ({ lang }) => {
  const isHi = lang === "hi";

  const impactPoints = [
    {
      title: isHi ? "प्लास्टिक रिकवरी" : "Plastic Recovery",
      desc: isHi ? "सालाना 2000+ टन प्लास्टिक को लैंडफिल से बचाकर रीसायकल किया जाता है।" : "Systematic diversion of massive plastic volumes from urban landfills.",
      icon: <Recycle className="text-emerald-500" />,
      img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000&auto=format&fit=crop",
      side: "left"
    },
    {
      title: isHi ? "ई-वेस्ट एक्सपर्टीज" : "E-Waste Expertise",
      desc: isHi ? "इलेक्ट्रॉनिक कचरे का वैज्ञानिक और सुरक्षित निपटान।" : "Certified scientific handling of complex electronic scrap.",
      icon: <Zap className="text-blue-500" />,
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop",
      side: "right"
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <SectionHeading 
          subtitle={isHi ? "कार्य क्षेत्र" : "Areas of Impact"}
          titleMain={isHi ? "कचरे से" : "From Waste"}
          titleGradient={isHi ? "मूल्य निर्माण" : "To Value"}
          isHi={isHi}
        />

        {/* 🔹 CONTENT LAYERS */}
        <div className="space-y-20 md:space-y-48 lg:space-y-64 mt-12 md:mt-20">
          {impactPoints.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col ${item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 lg:gap-24`}>
              
              {/* Image Side */}
              <div className="w-full md:w-3/5 relative group">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[16/10] shadow-xl md:shadow-2xl"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </motion.div>
                
                {/* Floating Badge - Optimized for tablet & up */}
                <div className={`absolute -bottom-6 ${item.side === 'left' ? '-right-4 lg:-right-6' : '-left-4 lg:-left-6'} hidden sm:flex bg-[#00a651] p-4 lg:p-8 rounded-2xl md:rounded-[3rem] text-white shadow-2xl items-center gap-3 lg:gap-4 z-20`}>
                  <div className="p-2 md:p-3 bg-white/20 rounded-xl md:rounded-2xl">{item.icon}</div>
                  <span className="font-black uppercase tracking-widest text-[8px] md:text-[10px]">{isHi ? "सार्थक मिशन" : "Sarthak Mission"}</span>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 space-y-5 md:space-y-8 relative z-10 text-center md:text-left">
                <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                  <h3 className="text-3xl sm:text-4xl lg:text-6xl font-[1000] text-slate-950 tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                  <div className="h-1 md:h-1.5 w-16 md:w-20 bg-emerald-500 rounded-full" />
                </div>
                <p className="text-slate-600 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                  {item.desc}
                </p>
                <button className="group inline-flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-950">
                  <span className="p-3 md:p-4 bg-slate-100 rounded-full group-hover:bg-slate-950 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={18} />
                  </span>
                  {isHi ? "विस्तार से जानें" : "Explore Tech"}
                </button>
              </div>

              {/* Decorative Background Text - Responsive Scaling */}
              <div className={`absolute -top-10 md:-top-20 ${item.side === 'left' ? 'right-0' : 'left-0'} opacity-[0.03] text-[18vw] md:text-[12vw] font-black select-none pointer-events-none uppercase hidden sm:block`}>
                {item.title.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 STATS SECTION - Mobile 2-column grid */}
        <div className="mt-24 md:mt-48 relative pt-12 md:pt-20 border-t border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-12">
            {[
              { val: "3.2K+", label: isHi ? "सार्थक कर्मी" : "Active Karmis" },
              { val: "6MT", label: isHi ? "दैनिक प्लास्टिक" : "Daily Plastic" },
              { val: "437T", label: isHi ? "ई-वेस्ट इम्पैक्ट" : "E-Waste Handled" },
              { val: "16+", label: isHi ? "नगर वार्ड" : "Operational Wards" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1 md:space-y-2 text-center md:text-left">
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] text-slate-950 tracking-tighter italic leading-none">
                  {stat.val}
                </h4>
                <p className="text-[7px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-emerald-600 md:pl-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Floating Action Circle - Responsive hiding */}
          <div className="hidden xl:flex absolute -right-16 -top-12 w-56 h-56 bg-slate-950 rounded-full items-center justify-center text-center p-8 rotate-12 hover:rotate-0 transition-all duration-700 shadow-2xl z-20">
              <p className="text-white text-[10px] font-black uppercase tracking-widest leading-loose">
                {isHi ? "शून्य कचरा भविष्य की ओर" : "Towards a Zero Waste Future"}
              </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FocusAndImpact;