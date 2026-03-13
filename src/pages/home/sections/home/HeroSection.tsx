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

  return (
    <div className="w-full flex flex-col">
      {/* --- HERO MAIN SECTION --- */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">

        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={img1}
            className="w-full h-full object-cover scale-105 object-center md:object-top"
            alt="Waste Management Background"
          />
          <div className="absolute inset-0 bg-[#3e2723]/70 md:bg-[#3e2723]/60 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto pt-24 md:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-7xl font-black text-white leading-[1.1] md:leading-tight px-2"
          >
            {isHi ? "अपशिष्ट प्रबंधन में " : "Pioneering "}
            <span className="text-[#FFBF00]">{isHi ? "नवाचार" : "Circular Innovations"}</span>
            <br className="hidden md:block" />
            {isHi ? " और सामाजिक समावेश" : " & Social Inclusion"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed px-4 md:px-0"
          >
            {isHi
              ? "तकनीकी विशेषज्ञता और सामुदायिक भागीदारी के माध्यम से शून्य-अपशिष्ट भविष्य की ओर।"
              : "Sarthak Samudayik partners with governments and industries to implement scalable, zero-waste systems that turn environmental challenges into economic opportunities."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-6 md:px-0"
          >
            <button
              onClick={() => navigate("/partnerships")}
              className="w-full sm:w-auto px-10 py-4 bg-[#FFBF00] text-[#3e2723] font-black rounded-md hover:bg-yellow-500 transition-all uppercase tracking-wider text-xs md:text-sm shadow-xl"
            >
              {isHi ? "साझेदारी करें" : "Partner With Us"}
            </button>
            <button
              onClick={() => navigate("/bhopal-model")}
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white font-black rounded-md hover:bg-white hover:text-black transition-all uppercase tracking-wider text-xs md:text-sm backdrop-blur-sm"
            >
              {isHi ? "हमारा मॉडल देखें" : "Explore Our Model"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section below Hero */}
      <ImpactStats lang={lang} />

      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </div>
  );
};

export default HeroSection;