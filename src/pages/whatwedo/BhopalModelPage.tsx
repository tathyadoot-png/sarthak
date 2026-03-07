"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Network, 
  Users, 
  Settings, 
  Microchip, 
  Recycle, 
  FileText, 
  Box, 
  Globe,
  ArrowDownRight,
  Lightbulb
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

const BhopalModelPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const innovations = [
    {
      title: isHi ? "GO Cast मशीनें" : "GO Cast Machines",
      desc: isHi ? "विकेंद्रीकृत स्थानों पर स्थापित उन्नत प्रसंस्करण।" : "Advanced processing units installed at decentralized locations.",
      icon: <Settings size={28} />
    },
    {
      title: isHi ? "कागज पुनर्चक्रण" : "Paper Recycling",
      desc: isHi ? "EPCO के सहयोग से हस्तनिर्मित कागज मशीनें।" : "Handmade paper recycling in collaboration with EPCO.",
      icon: <FileText size={28} />
    },
    {
      title: isHi ? "ड्रम कंपोस्टिंग" : "Drum Composting",
      desc: isHi ? "जैविक कचरे के लिए कुशल ड्रम कंपोस्टिंग इकाइयाँ।" : "Efficient drum composting units for organic waste management.",
      icon: <Box size={28} />
    },
    {
      title: isHi ? "प्लास्टिक प्रोसेसिंग" : "Plastic Processing",
      desc: isHi ? "कम लागत वाली प्रभावी प्लास्टिक प्रसंस्करण प्रणालियाँ।" : "Low-cost, high-impact plastic processing systems.",
      icon: <Microchip size={28} />
    }
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans pb-24 overflow-x-hidden">
      
      {/* 🔹 HERO: Cinematic Industrial Look */}
      <section className="relative pt-40 pb-32 px-6 bg-[#3e2723] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="grid grid-cols-8 h-full w-full">
             {[...Array(8)].map((_, i) => <div key={i} className="border-r border-white/20" />)}
           </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-[#FFBF00]" />
            <span className="text-[#FFBF00] text-xs font-black uppercase tracking-[0.4em]">
              {isHi ? "प्रतिकृति मॉडल" : "REPLICABLE MODEL"}
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[9rem] font-[1000] text-white uppercase tracking-tighter leading-[0.8] mb-12">
            {isHi ? "भोपाल" : "THE BHOPAL"} <br />
            <span className="text-[#FFBF00]">{isHi ? "मॉडल।" : "MODEL."}</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed">
              {isHi 
                ? "विकेंद्रीकृत कचरा नेतृत्व का एक वैश्विक उदाहरण जो समुदाय और तकनीक को जोड़ता है।" 
                : "A world-class decentralized waste leadership framework integrating community and technology."}
            </p>
            <div className="flex flex-wrap gap-4">
               {["SHG-LED", "DECENTRALIZED", "INCLUSIVE"].map((tag) => (
                 <span key={tag} className="px-6 py-2 border border-white/10 rounded-full text-white/40 text-[10px] font-bold uppercase tracking-widest uppercase">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CORE PILLARS: Asymmetric Info Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-6">
                {isHi ? "एकीकृत" : "INTEGRATED"} <br /> {isHi ? "दृष्टिकोण" : "SYSTEMS"}
              </h2>
              <p className="text-[#3e2723]/50 font-bold mb-10">
                {isHi ? "यह मॉडल चार मुख्य स्तंभों पर टिका है जो इसे अद्वितीय बनाते हैं।" : "Four core pillars that make the Bhopal Model a global blueprint."}
              </p>
              <Lightbulb size={60} className="text-[#FFBF00]" />
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: isHi ? "सामुदायिक भागीदारी" : "Community Participation", d: isHi ? "नागरिकों की सक्रिय भूमिका।" : "Active involvement of every citizen.", i: <Users /> },
                { t: isHi ? "SHG-संचालित" : "SHG-Led Operations", d: isHi ? "स्वयं सहायता समूहों द्वारा प्रबंधन।" : "Managed by empowered self-help groups.", i: <Network /> },
                { t: isHi ? "विकेंद्रीकृत इकाइयाँ" : "Decentralized Units", d: isHi ? "स्रोत के पास ही कचरा प्रसंस्करण।" : "Processing waste right where it is generated.", i: <Settings /> },
                { t: isHi ? "समावेशी विकास" : "Inclusive Growth", d: isHi ? "अनौपचारिक श्रमिकों का एकीकरण।" : "Integration of informal waste workers.", i: <Recycle /> }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white rounded-[3rem] shadow-sm border border-[#3e2723]/5 hover:shadow-xl transition-all group">
                   <div className="text-[#3e2723] mb-6 group-hover:scale-110 transition-transform">{item.i}</div>
                   <h4 className="text-xl font-black text-[#3e2723] uppercase tracking-tighter mb-2">{item.t}</h4>
                   <p className="text-xs font-bold text-[#3e2723]/40 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 TECH INSTALLATIONS: The "Machine" Section */}
      <section className="py-32 bg-[#3e2723] rounded-[5rem] mx-6 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Globe size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-[1000] uppercase tracking-tighter leading-none mb-6">
              {isHi ? "तकनीकी" : "TECH"} <br /> <span className="text-[#FFBF00]">{isHi ? "नवाचार।" : "INNOVATIONS."}</span>
            </h2>
            <p className="text-white/40 font-bold max-w-xl uppercase tracking-widest text-xs">
              {isHi ? "कुशल कचरा प्रबंधन के लिए स्थापित उन्नत प्रणालियाँ" : "Advanced systems installed for high-efficiency waste recovery"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {innovations.map((tech, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all group">
                  <div className="mb-8 text-[#FFBF00] group-hover:text-[#3e2723] transition-colors">
                    {tech.icon}
                  </div>
                  <h4 className="text-xl font-[1000] uppercase tracking-tighter mb-4">{tech.title}</h4>
                  <p className="text-[11px] font-bold opacity-60 group-hover:opacity-100 leading-relaxed uppercase tracking-wider">{tech.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 🔹 GLOBAL REPLICATION CALL */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-[#3e2723]/5 pointer-events-none uppercase tracking-tighter">
            Global
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-10">
              {isHi ? "अन्य शहरों के लिए" : "READY FOR GLOBAL"} <br /> <span className="text-[#3e2723]/30">{isHi ? "एक अनुकरणीय मॉडल।" : "REPLICATION."}</span>
            </h2>
            <button className="px-12 py-6 bg-[#3e2723] text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-6 mx-auto hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all">
              {isHi ? "केस स्टडी डाउनलोड करें" : "DOWNLOAD CASE STUDY"} <ArrowDownRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BhopalModelPage;