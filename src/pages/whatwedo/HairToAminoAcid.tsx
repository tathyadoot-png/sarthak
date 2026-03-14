"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  FlaskConical, 
  Sprout, 
  Scissors, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const HairToAminoAcid = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const features = [
    {
      title: isHi ? "केराटिन निष्कर्षण" : "Keratin Extraction",
      desc: isHi ? "बालों से शुद्ध केराटिन प्रोटीन निकालने की वैज्ञानिक विधि।" : "Scientific method to extract pure Keratin protein from hair waste.",
      icon: <Beaker className="text-purple-500" />
    },
    {
      title: isHi ? "तरल उर्वरक" : "Liquid Fertilizer",
      desc: isHi ? "अमीनो एसिड आधारित खाद जो पौधों की वृद्धि को बढ़ाती है।" : "Amino acid-based fertilizer that boosts plant growth and yield.",
      icon: <Sprout className="text-green-500" />
    },
    {
      title: isHi ? "शून्य अपशिष्ट" : "Zero Chemical",
      desc: isHi ? "बिना किसी हानिकारक रसायन के प्राकृतिक तरीके से तैयार।" : "100% organic process without harmful synthetic chemicals.",
      icon: <ShieldCheck className="text-blue-500" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fafafa]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#3e2723] to-[#5d4037] rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <FlaskConical size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {isHi ? "अपशिष्ट से नवाचार" : "Waste Innovation"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-[0.9] mb-8">
              {isHi ? "बालों से" : "HAIR TO"} <br />
              <span className="text-[#FFBF00]">{isHi ? "अमीनो एसिड" : "AMINO ACID"}</span>
            </h1>
            <p className="text-white/70 text-lg font-bold leading-relaxed">
              {isHi 
                ? "सैलून और पार्लर के बेकार बालों को उच्च गुणवत्ता वाले जैविक उर्वरक में बदलना।" 
                : "Converting salon hair waste into high-quality organic amino acid fertilizers for sustainable farming."}
            </p>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute right-[-100px] top-[-100px] opacity-10"
          >
            <Zap size={500} />
          </motion.div>
        </motion.div>
      </section>

      {/* 🔹 Process Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFBF00]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 italic">
                {item.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Science Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-[#3e2723] uppercase tracking-tighter mb-6 leading-none">
              {isHi ? "पुनर्चक्रण की प्रक्रिया" : "THE RECYCLING JOURNEY"}
            </h2>
            <p className="text-slate-500 font-bold mb-8 italic">
              {isHi 
                ? "बालों में नाइट्रोजन और प्रोटीन की मात्रा अधिक होती है, जो इसे खाद के लिए उत्तम बनाती है।" 
                : "Human hair is rich in Nitrogen and Protein, making it an ideal raw material for liquid fertilizers."}
            </p>
            
            <div className="space-y-4">
              {[
                { t: isHi ? "संग्रहण" : "Collection", d: isHi ? "सैलून से बालों का कचरा इकट्ठा करना।" : "Collecting hair waste from local salons." },
                { t: isHi ? "सफाई" : "Sanitization", d: isHi ? "अशुद्धियों को दूर करना।" : "Deep cleaning to remove oils and impurities." },
                { t: isHi ? "हाइड्रोलिसिस" : "Hydrolysis", d: isHi ? "अमीनो एसिड में बदलने की रसायनिक प्रक्रिया।" : "Chemical breakdown into absorbable amino acids." }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#3e2723] text-white flex items-center justify-center font-black text-xs italic">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#3e2723] uppercase">{step.t}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="aspect-video bg-[#3e2723] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group">
              <Scissors size={80} className="text-[#FFBF00] opacity-20 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
          </div>
        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-[#FFBF00] rounded-[3rem] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter mb-8 leading-none">
            {isHi ? "सैलून अपशिष्ट प्रबंधन" : "RESPONSIBLE SALON"} <br />
            <span className="opacity-40">{isHi ? "के लिए हाथ मिलाएं" : "WASTE MANAGEMENT"}</span>
          </h2>
          <button className="bg-[#3e2723] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 mx-auto hover:scale-105 transition-all shadow-xl">
            {isHi ? "पार्टनर बनें" : "BECOME A PARTNER"}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HairToAminoAcid;