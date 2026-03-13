"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Wheat, Wind, Activity } from "lucide-react";

const AgriWaste = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-[1000] text-[#3e2723] uppercase tracking-tighter"
        >
          {isHi ? "कृषि" : "AGRI"} <br />
          <span className="text-[#FFBF00]">{isHi ? "अपशिष्ट।" : "WASTE."}</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6 text-[#3e2723]/80 font-bold text-lg leading-relaxed">
            <p>
              {isHi 
                ? "सार्थक संस्था पराली जलाने की समस्या को ऊर्जा में बदलने पर काम कर रही है। हम कृषि अवशेषों से बायो-ब्रिकेट्स और बायो-गैस बनाने की तकनीक पर ध्यान केंद्रित करते हैं।" 
                : "Sarthak is transforming the challenge of stubble burning into an energy opportunity by converting agricultural residue into bio-briquettes and bio-gas."}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 bg-[#f4f4f2] rounded-3xl">
                <Wheat className="text-[#FFBF00] mb-4" size={32} />
                <h4 className="font-black uppercase text-sm">{isHi ? "बायो-फ्यूल" : "Bio-Fuel"}</h4>
              </div>
              <div className="p-6 bg-[#f4f4f2] rounded-3xl">
                <Wind className="text-[#FFBF00] mb-4" size={32} />
                <h4 className="font-black uppercase text-sm">{isHi ? "प्रदूषण मुक्त" : "Zero Smoke"}</h4>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
            <img src="/img/12.jpeg" className="w-full h-full object-cover" alt="Agri Waste" />
          </div>
        </div>
      </div>
    </div>
  );
};