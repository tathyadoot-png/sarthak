"use client";

import React from 'react';
import { motion } from "framer-motion";

const ImpactStats: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const stats = [
    {
      value: "1,82,000+",
      label: isHi ? "सार्थक कर्मी सशक्त" : "Sarthak Karmis Uplifted",
      desc: isHi ? "कचरा बीनने वालों का उत्थान" : "Informal waste workers' dignity"
    },
    {
      value: "27,000+",
      unit: "KM",
      label: isHi ? "प्लास्टिक की सड़कें" : "Plastic Waste Roads",
      desc: isHi ? "सुरक्षित प्लास्टिक निपटान" : "Built using shredded MLP"
    },
    {
      value: "437",
      unit: "MT",
      label: isHi ? "ई-कचरा प्रबंधित" : "E-Waste Managed",
      desc: isHi ? "सालाना सुरक्षित रीसाइक्लिंग" : "Processed annually safely"
    },
    {
      value: "12+",
      label: isHi ? "नगर निगम मॉडल" : "Municipal Models",
      desc: isHi ? "प्रतिकृति और प्रभाव" : "Integrated waste management models"
    }
  ];

  return (
    <section className="relative bg-[#3e2723] py-12 md:py-20 overflow-hidden border-t border-white/5">
      {/* Background Subtle Accent - Adjusted for mobile */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-[#FFBF00]/5 skew-x-[-10deg] md:skew-x-[-20deg] translate-x-1/2 md:translate-x-20 pointer-events-none" />

      <div className=" px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 md:space-y-3 group"
            >
              <div className="flex items-baseline gap-1">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFBF00] tracking-tighter transition-transform duration-500 group-hover:scale-105">
                  {stat.value}
                </h3>
                {stat.unit && (
                  <span className="text-lg md:text-xl font-black text-[#FFBF00]/60">{stat.unit}</span>
                )}
              </div>
              
              <div className="space-y-1">
                <p className="text-xs md:text-sm lg:text-base font-black text-white uppercase tracking-widest leading-tight">
                  {stat.label}
                </p>
                <p className="text-[9px] md:text-[10px] lg:text-xs font-bold text-white/40 uppercase tracking-[0.15em] leading-snug max-w-[200px] lg:max-w-none">
                  {stat.desc}
                </p>
              </div>

              {/* Decorative Line - Responsive width */}
              <div className="w-16 md:w-12 h-[2px] bg-[#FFBF00]/20 mt-3 md:mt-4 lg:group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;