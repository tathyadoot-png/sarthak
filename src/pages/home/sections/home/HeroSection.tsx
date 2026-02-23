"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/6.jpeg";

interface HeroProps {
  lang: "hi" | "en";
}

const HeroSection = ({ lang }: HeroProps) => {
  const isHi = lang === "hi";
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-between pt-24 md:pt-32 pb-12 px-4 md:px-6 overflow-hidden">
      
      {/* 1. TOP SECTION */}
      <div className="relative z-20 flex justify-between items-start max-w-[1800px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 md:gap-4 items-center"
        >
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-slate-100 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#00a651] rounded-full animate-ping" />
          </div>
          <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] leading-tight">
            {isHi ? "25 साल का अटूट सफर" : "Est. 1998 / Madhya Pradesh"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="hidden sm:block max-w-[200px] text-right"
        >
          <p className="text-slate-400 text-[10px] md:text-[11px] font-medium leading-relaxed italic">
            {isHi
              ? "पर्यावरण और समाज के बीच एक सेतु का निर्माण।"
              : "Building a bridge between environmental care and social equity."}
          </p>
        </motion.div>
      </div>

      {/* 2. CENTER SECTION: RESPONSIVE TEXT & IMAGE */}
      <div className="relative flex-grow flex items-center justify-center py-6 md:py-10">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <img
            src={img1}
            // Mobile (sm) par width 95% aur height 50% rakhi hai taki text bahar na jaye
            className="w-[95%] h-[70%] md:w-[90%] md:h-[80%] object-cover rounded-[5rem] md:rounded-[10rem] opacity-40 md:opacity-50"
            alt="Background"
          />
        </motion.div>

        <div className="relative z-10 text-center flex flex-col mt-7 md:mt-0 items-center px-2">
   
          <motion.h1
            initial={{ letterSpacing: "10px", opacity: 0 }}
            animate={{ letterSpacing: "-0.05em", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[18vw] md:text-[16vw] font-black text-[#1a1f5c] leading-[0.8] drop-shadow-sm"
          >
            {isHi ? "सार्थक" : "SARTHAK"}
          </motion.h1>


          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center mt-4 sm:mt-2 md:-mt-4"
          >
            <h2 className="text-[10px] sm:text-lg md:text-2xl font-bold italic md:mt-1 text-[#1a1f5c] max-w-[280px] sm:max-w-[600px] md:max-w-[900px] leading-tight tracking-wide uppercase">
              {isHi 
                ? "सामुदायिक विकास एवं जन कल्याण संस्था" 
                : "Society for Community Development and Public Welfare"}
            </h2>
            
            <div className="h-[2px] w-8 md:w-24 bg-[#00a651] mt-3 opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: NAVIGATION & CTA */}
      <div className="relative z-20 max-w-[1800px] mx-auto w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-8">

        {/* Floating Action Button: Mobile par full width touch target */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/initiatives")}
          className="group relative flex items-center justify-center gap-4 bg-[#1a1f5c] text-white px-6 py-4 md:px-8 md:py-6 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest overflow-hidden transition-all w-full sm:w-auto"
        >
          <span className="relative z-10">{isHi ? "हमारी दुनिया" : "Explore Work"}</span>
          <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform" />
          <div className="absolute inset-0 bg-[#00a651] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>

        {/* Avatars: Mobile par center-aligned */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex -space-x-3 md:-space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">
            {isHi ? "3200+ कर्मियों का परिवार" : "Powered by 3200+ dedicated workers"}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-100 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default HeroSection;