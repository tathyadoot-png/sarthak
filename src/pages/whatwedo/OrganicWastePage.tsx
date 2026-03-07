"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Sprout, 
  Settings, 
  Trash2, 
  Building2, 
  Home, 
  Factory, 
  Cylinder, 
  FlaskConical,
  CheckCircle,
  Download
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

const OrganicWastePage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const sectors = [
    { name: isHi ? "संस्थान" : "Institutions", icon: <Building2 size={20} /> },
    { name: isHi ? "उद्योग" : "Industries", icon: <Factory size={20} /> },
    { name: isHi ? "आवासीय परिसर" : "Residential", icon: <Home size={20} /> },
    { name: isHi ? "सरकारी भवन" : "Govt Buildings", icon: <Settings size={20} /> },
  ];

  const techniques = [
    {
      title: isHi ? "ड्रम कंपोस्टिंग" : "Drum Composting",
      desc: isHi ? "शहरी और छोटे स्थानों के लिए कॉम्पैक्ट सिस्टम।" : "Compact systems designed for urban and space-constrained sites.",
      icon: <Cylinder className="text-[#FFBF00]" />
    },
    {
      title: isHi ? "पिट कंपोस्टिंग" : "Pit Composting",
      desc: isHi ? "बड़े परिसरों के लिए पारंपरिक और प्रभावी विधि।" : "Traditional and effective method for large campuses.",
      icon: <Trash2 className="text-[#FFBF00]" />
    },
    {
      title: isHi ? "एरोबिक इकाइयाँ" : "Aerobic Units",
      desc: isHi ? "बिना गंध के तेज़ अपघटन की तकनीक।" : "Odor-free, accelerated decomposition technology.",
      icon: <Sprout className="text-[#FFBF00]" />
    },
    {
      title: isHi ? "बायो-एंजाइम एक्सीलरेटर" : "Bio-Enzyme Tech",
      desc: isHi ? "खाद बनने की प्रक्रिया को तेज़ करने वाले प्राकृतिक तत्व।" : "Natural catalysts to speed up the composting process.",
      icon: <FlaskConical className="text-[#FFBF00]" />
    }
  ];

  return (
    <div className="bg-[#f7f7f6] min-h-screen font-sans">
      
      {/* 🔹 HERO SECTION - Full Width Background, Centered Content */}
      <section className="relative pt-32 pb-20 px-6 bg-[#3e2723] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h6 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            {isHi ? "जैविक अपशिष्ट एवं खाद समाधान" : "ORGANIC WASTE & COMPOSTING"}
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-[1000] text-white uppercase tracking-tighter leading-[0.95]"
          >
            {isHi ? "विकेंद्रीकृत" : "DECENTRALIZED"} <br />
            <span className="text-white/30">{isHi ? "खाद प्रबंधन" : "COMPOSTING."}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-white/60 text-lg font-bold max-w-xl leading-relaxed"
          >
            {isHi 
              ? "सार्थक ने खाद बनाने की 12 नवीन तकनीकें विकसित की हैं, जो विभिन्न क्षेत्रों की जरूरतों के अनुसार अनुकूलित हैं।" 
              : "Sarthak has developed 12 innovative composting techniques, adapted for diverse sectors and site requirements."}
          </motion.p>
        </div>
      </section>

      {/* 🔹 KEY STATS & SECTORS - Centered Layout */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] border border-[#3e2723]/5 shadow-xl">
                <h2 className="text-7xl font-[1000] text-[#3e2723] tracking-tighter">350+</h2>
                <p className="text-sm font-black uppercase text-[#FFBF00] tracking-widest mt-2">Systems Installed</p>
                <p className="mt-4 text-[#3e2723]/60 font-bold leading-relaxed">
                  {isHi 
                    ? "बल्क वेस्ट जनरेटर (BWG) साइटों पर सफलतापूर्वक ऑन-साइट कंपोस्टिंग सिस्टम स्थापित।" 
                    : "Successfully installed on-site composting systems at Bulk Waste Generator (BWG) sites across the region."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {sectors.map((sector, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 bg-[#3e2723] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">
                    {sector.icon}
                    {sector.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techniques.map((item, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2.5rem] border border-[#3e2723]/5 hover:border-[#FFBF00] transition-all shadow-sm">
                  <div className="h-12 w-12 bg-[#f7f7f6] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFBF00]/10 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black text-[#3e2723] uppercase tracking-tighter mb-2">{item.title}</h4>
                  <p className="text-xs font-bold text-[#3e2723]/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 INFRASTRUCTURE DESIGN SECTION - Full Width Background, Centered Content */}
      <section className="py-24 bg-[#3e2723] text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
           <div className="grid grid-cols-6 h-full w-full">
             {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white" />)}
           </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Sprout size={48} className="text-[#FFBF00] mb-8" />
            <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter leading-none mb-8">
              {isHi ? "कस्टम इंफ्रास्ट्रक्चर" : "CUSTOMIZED"} <br />
              <span className="text-[#FFBF00]">{isHi ? "डिजाइन और स्थापना।" : "INFRASTRUCTURE."}</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-bold leading-relaxed italic mb-12">
              {isHi 
                ? "हम साइट की आवश्यकताओं के अनुसार अनुकूलित जैविक कचरा बुनियादी ढांचे को डिजाइन और स्थापित करते हैं।" 
                : "We design and install professional organic waste infrastructure tailored specifically to your site's spatial and volume requirements."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {[
                isHi ? "साइट सर्वेक्षण" : "Site Survey",
                isHi ? "क्षमता योजना" : "Capacity Planning",
                isHi ? "तकनीकी सहायता" : "Technical Support"
              ].map((step, i) => (
                <div key={i} className="flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <CheckCircle size={16} className="text-[#FFBF00]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CALL TO ACTION - Centered Layout */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFBF00] rounded-[3.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#FFBF00]/20">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-[0.9]">
                {isHi ? "अपना कचरा प्रबंधन" : "OPTIMIZE YOUR"} <br />
                <span className="text-[#3e2723]/30">{isHi ? "बेहतर बनाएं।" : "WASTE STRATEGY."}</span>
              </h2>
            </div>
            <button className="whitespace-nowrap px-8 py-5 bg-[#3e2723] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-black transition-all shadow-xl shadow-[#3e2723]/20">
              {isHi ? "समाधान बुक करें" : "GET A PROPOSAL"} <Download size={18} className="text-[#FFBF00]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OrganicWastePage;