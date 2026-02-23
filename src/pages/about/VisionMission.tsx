import React from 'react';
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';


const VisionMission = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  return (
    <section className="w-full">
      {/* 🔹 Reusable Heading Call */}
      <SectionHeading 
        subtitle={isHi ? "हमारा संकल्प" : "Our Commitment"}
        titleMain={isHi ? "दृष्टिकोण और" : "Purpose &"}
        titleGradient={isHi ? "लक्ष्य।" : "Strategy."}
        isHi={isHi}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
        
        {/* 🔹 MISSION CARD */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group p-10 md:p-14 rounded-[3.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-[#00a651]/10 transition-all duration-700 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a651]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00a651]/10 transition-colors" />
          
          <div className="relative z-10 space-y-8">
            <div className="h-16 w-16 rounded-2xl bg-[#00a651] flex items-center justify-center text-white shadow-lg shadow-[#00a651]/30 group-hover:rotate-12 transition-transform duration-500">
              <Target size={32} />
            </div>
            <div>
              <h4 className="text-3xl font-[1000] text-[#1a1a1a] tracking-tighter italic mb-4 uppercase">
                {isHi ? "हमारा मिशन" : "Our Mission"}
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {isHi 
                  ? "नगर निगमों और समुदायों के साथ मिलकर ठोस अपशिष्ट प्रबंधन के लिए एक आत्मनिर्भर और टिकाऊ बिजनेस मॉडल तैयार करना।" 
                  : "To create a self-sustainable business model in solid waste management by partnering with municipal bodies and heavy industries."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🔹 VISION CARD */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group p-10 md:p-14 rounded-[3.5rem] bg-[#1a1a1a] text-white hover:shadow-2xl hover:shadow-[#2b3291]/40 transition-all duration-700 overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2b3291]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-[#2b3291]/30 transition-colors" />
          
          <div className="relative z-10 space-y-8">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#00a651] to-[#2b3291] flex items-center justify-center text-white shadow-lg shadow-black/50 group-hover:-rotate-12 transition-transform duration-500">
              <Eye size={32} />
            </div>
            <div>
              <h4 className="text-3xl font-[1000] text-white tracking-tighter italic mb-4 uppercase">
                {isHi ? "हमारा विजन" : "Our Vision"}
              </h4>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                {isHi 
                  ? "एक ऐसा समाज जहाँ कचरा बीनने वालों को 'सार्थक कर्मी' के रूप में सम्मान मिले और हर अपशिष्ट संसाधन को पुनर्चक्रित किया जाए।" 
                  : "To see every rag-picker transformed into a 'Sarthak Karmi'—a dignified worker with social security and professional status."}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMission;