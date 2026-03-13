"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Factory, ShieldCheck, Zap } from "lucide-react";

const IndustrialWaste = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  return (
    <div className="bg-[#3e2723] min-h-screen pt-24 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-8xl font-[1000] uppercase tracking-tighter"
        >
          {isHi ? "औद्योगिक" : "INDUSTRIAL"} <br />
          <span className="text-[#FFBF00]/30">{isHi ? "समाधान।" : "SOLUTIONS."}</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="rounded-[3rem] overflow-hidden h-[400px] border border-white/10">
            <img src="/zerowaste/6.jpg" className="w-full h-full object-cover" alt="Industrial" />
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="h-14 w-14 shrink-0 bg-[#FFBF00] rounded-2xl flex items-center justify-center text-[#3e2723]">
                <Factory size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic">{isHi ? "सह-प्रसंस्करण" : "Co-Processing"}</h3>
                <p className="text-white/60 font-bold mt-2">
                  {isHi ? "सीमेंट भट्टियों में गैर-पुनर्चक्रण योग्य कचरे का उपयोग।" : "Utilization of non-recyclable waste in cement kilns as alternative fuel."}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="h-14 w-14 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-[#FFBF00]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic">{isHi ? "सुरक्षित निपटान" : "Safe Disposal"}</h3>
                <p className="text-white/60 font-bold mt-2">
                  {isHi ? "खतरनाक औद्योगिक कचरे का वैज्ञानिक प्रबंधन।" : "Scientific management of hazardous industrial waste flow."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};