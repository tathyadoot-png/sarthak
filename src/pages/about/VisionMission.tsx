import React from 'react';
import { motion } from "framer-motion";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const VisionMission = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  return (
    <section className="w-full">
      {/* 🔹 Heading Section */}
      <SectionHeading 
        subtitle={isHi ? "हमारा संकल्प" : "Our Commitment"}
        titleMain={isHi ? "दृष्टिकोण और" : "Purpose &"}
        titleGradient={isHi ? "लक्ष्य।" : "Strategy."}
        isHi={isHi}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mt-12 md:mt-20">
        
        {/* 🔹 MISSION CARD (The Clean Look) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white border border-slate-100 hover:border-emerald-200 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,166,81,0.12)]"
        >
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 space-y-6 md:space-y-10">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-[#00a651] flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 group-hover:rotate-[10deg] transition-transform duration-500">
                <Target size={32} className="md:w-10 md:h-10" />
              </div>
              <ArrowUpRight className="text-slate-300 group-hover:text-emerald-500 transition-colors" size={24} />
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl md:text-4xl font-[1000] text-[#1a1f5c] tracking-tighter uppercase italic">
                {isHi ? "हमारा मिशन" : "Our Mission"}
              </h4>
              <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium max-w-[90%]">
                {isHi 
                  ? "नगर निगमों और समुदायों के साथ मिलकर ठोस अपशिष्ट प्रबंधन के लिए एक आत्मनिर्भर और टिकाऊ बिजनेस मॉडल तैयार करना।" 
                  : "To create a self-sustainable business model in solid waste management by partnering with municipal bodies and heavy industries."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🔹 VISION CARD (The Dark Premium Look) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative group p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-[#0f172a] text-white overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(43,50,145,0.4)] transition-all duration-700"
        >
          {/* Mesh Gradient Background */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2b3291]/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-[#2b3291]/50 transition-colors duration-1000" />
          
          <div className="relative z-10 space-y-6 md:space-y-10">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#00a651] to-[#2b3291] flex items-center justify-center text-white shadow-2xl shadow-black group-hover:-rotate-[10deg] transition-transform duration-500">
                <Eye size={32} className="md:w-10 md:h-10" />
              </div>
              <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" size={24} />
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl md:text-4xl font-[1000] text-white tracking-tighter uppercase italic">
                {isHi ? "हमारा विजन" : "Our Vision"}
              </h4>
              <p className="text-slate-400 text-base md:text-xl leading-relaxed font-medium max-w-[90%]">
                {isHi 
                  ? "एक ऐसा समाज जहाँ कचरा बीनने वालों को 'सार्थक कर्मी' के रूप में सम्मान मिले और हर अपशिष्ट संसाधन को पुनर्चक्रित किया जाए।" 
                  : "To see every rag-picker transformed into a 'Sarthak Karmi'—a dignified worker with social security and professional status."}
              </p>
            </div>

            {/* Subtle Tag for Vision */}
            <div className="pt-2">
               <span className="inline-block px-4 py-1 rounded-full border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors">
                 Social Transformation
               </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMission;