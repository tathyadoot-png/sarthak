"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/6.jpeg";
import ImpactStats from "./ImpactStats";

interface HeroProps {
  lang: "hi" | "en";
}

const HeroSection = ({ lang }: HeroProps) => {
  const isHi = lang === "hi";
  const navigate = useNavigate();

  // Stats Data based on the image
  const stats = [
    { label: isHi ? "प्लास्टिक पुनर्चक्रण (टन)" : "PLASTIC RECYCLED (TONS)", value: "500+" },
    { label: isHi ? "जैविक कचरा डाइवर्टेड (टन)" : "ORGANIC DIVERTED (TONS)", value: "1200+" },
    { label: isHi ? "ई-कचरा एकत्रित (टन)" : "E-WASTE COLLECTED (TONS)", value: "80+" },
    { label: isHi ? "वैश्विक भागीदार" : "GLOBAL PARTNERS", value: "25+" },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* --- HERO MAIN SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={img1}
            className="w-full h-full object-cover scale-105"
            alt="Waste Management Background"
          />
          <div className="absolute inset-0 bg-[#3e2723]/60 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black text-white leading-tight"
          >
            {isHi ? "अपशिष्ट प्रबंधन में " : "Pioneering "}
            <span className="text-[#FFBF00]">{isHi ? "नवाचार" : "Circular Innovations"}</span>
            <br />
            {isHi ? "और सामाजिक समावेश" : " & Social Inclusion"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            {isHi
              ? "तकनीकी विशेषज्ञता और सामुदायिक भागीदारी के माध्यम से शून्य-अपशिष्ट भविष्य की ओर।"
              : "Sarthak Samudayik partners with governments and industries to implement scalable, zero-waste systems that turn environmental challenges into economic opportunities."}
          </motion.p>

          {/* CTA Buttons - Shifted focus from 'Donate' to 'Partnership/Solutions' */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => navigate("/partnerships")}
              className="px-8 py-4 bg-[#FFBF00] text-[#3e2723] font-black rounded-md hover:bg-yellow-500 transition-all uppercase tracking-wider text-sm"
            >
              {isHi ? "साझेदारी करें" : "Partner With Us"}
            </button>
            <button
              onClick={() => navigate("/bhopal-model")}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-black rounded-md hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm backdrop-blur-sm"
            >
              {isHi ? "हमारा मॉडल देखें" : "Explore Our Model"}
            </button>
          </motion.div>
        </div>
      </section>
      <ImpactStats lang={lang} />
      {/* --- STATS BAR SECTION --- */}
      {/* <section className="bg-[#3e2723] py-12 px-6">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <h3 className="text-3xl md:text-5xl font-black text-[#FFBF00]">
                {stat.value}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-white/60 tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </div>
  );
};

export default HeroSection;