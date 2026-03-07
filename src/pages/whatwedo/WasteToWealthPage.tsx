"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Boxes, 
  Wind, 
  Flower2, 
  FlaskConical, 
  ArrowUpRight,
  Hammer,
  Zap
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

const WasteToWealthInnovations = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const innovations = [
    {
      title: isHi ? "प्लास्टिक से उत्पाद" : "Plastic to Products",
      products: isHi ? "टाइल्स, पेलेट्स, फर्नीचर, MLP बोर्ड" : "Tiles, Pellets, Furniture, MLP Boards.",
      desc: isHi ? "कचरा प्लास्टिक का औद्योगिक और घरेलू उत्पादों में रूपांतरण।" : "Conversion of waste plastic into high-utility industrial and lifestyle products.",
      icon: <Boxes size={32} />
    },
    {
      title: isHi ? "थर्मोकोल पुनर्चक्रण" : "Thermocol Recycling",
      products: isHi ? "डेंसिफायर तकनीक और EPS उत्पाद निर्माण" : "Densifier technology and EPS product manufacturing.",
      desc: isHi ? "थर्मोकोल कचरे को प्रोसेस करके नए EPS उत्पाद बनाना।" : "Processing thermocol waste into value-added EPS products using densification.",
      icon: <Wind size={32} />
    },
    {
      title: isHi ? "नारियल अपशिष्ट प्रसंस्करण" : "Coconut Waste Processing",
      products: isHi ? "एक्टिवेटेड कार्बन और क्राफ्ट उत्पाद" : "Activated carbon and craft products.",
      desc: isHi ? "नारियल के छिलकों से औद्योगिक कार्बन और हस्तशिल्प तैयार करना।" : "Creating industrial-grade carbon and sustainable crafts from coconut shells.",
      icon: <Zap size={32} />
    },
    {
      title: isHi ? "बायो-एंजाइम उत्पादन" : "Bio-Enzyme Production",
      products: isHi ? "जैविक कचरे से केमिकल-मुक्त सफाई समाधान" : "Chemical-free cleaning solutions from organic waste.",
      desc: isHi ? "गीले कचरे का उपयोग करके प्राकृतिक क्लीनर बनाना।" : "Producing natural cleaners through the fermentation of organic waste.",
      icon: <FlaskConical size={32} />
    },
    {
      title: isHi ? "मंदिर पुष्प पुनर्चक्रण" : "Temple Flower Recycling",
      products: isHi ? "अगरबत्ती और अनुष्ठान कचरे से इको-उत्पाद" : "Incense and eco-products from ritual waste.",
      desc: isHi ? "मंदिरों के फूलों को सुगंधित अगरबत्ती और जैविक खाद में बदलना।" : "Upcycling floral waste into fragrant incense and eco-friendly ritual items.",
      icon: <Flower2 size={32} />
    }
  ];

  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans pb-24">
      
      {/* 🔹 HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6 bg-[#3e2723] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#FFBF00] text-[#3e2723] text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-8"
          >
            <Hammer size={14} fill="#3e2723" />
            {isHi ? "वेस्ट-टू-वेल्थ नवाचार" : "WASTE-TO-WEALTH INNOVATIONS"}
          </motion.div>
          
          <h1 className="text-6xl md:text-[8rem] font-[1000] text-white uppercase tracking-tighter leading-[0.85] mb-10">
            {isHi ? "तकनीकी" : "TECH"} <br />
            <span className="text-[#FFBF00] italic">{isHi ? "समाधान।" : "SOLUTIONS."}</span>
          </h1>
        </div>
      </section>

      {/* 🔹 INNOVATIONS LISTING */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {innovations.map((item, i) => (
            <div 
              key={i}
              className="bg-white rounded-[3rem] p-10 md:p-14 border border-[#3e2723]/5 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
                <div className="h-20 w-20 shrink-0 bg-[#3e2723] rounded-3xl flex items-center justify-center text-[#FFBF00] group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#FFBF00] font-black text-xs uppercase tracking-widest bg-[#3e2723] inline-block px-3 py-1 rounded-md">
                    {item.products}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-[#3e2723]/60 text-lg font-bold leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-[#3e2723]/5 flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e2723]/40 italic">Innovation Spotlight</span>
                   <ArrowUpRight size={24} className="text-[#3e2723]/20 group-hover:text-[#FFBF00] transition-colors" />
                </div>
              </div>
            </div>
          ))}

          {/* 🔹 CONTACT BOX FOR PROPOSAL */}
          <div className="bg-[#FFBF00] rounded-[3rem] p-12 md:p-16 flex flex-col justify-center items-start text-[#3e2723]">
             <h4 className="text-4xl font-[1000] uppercase tracking-tighter leading-none mb-6">
                {isHi ? "इनोवेशन को" : "ADOPT THESE"} <br /> {isHi ? "अपनाएं।" : "INNOVATIONS."}
             </h4>
             <p className="text-sm font-black uppercase tracking-widest mb-10 opacity-70">
                {isHi ? "तकनीकी परामर्श के लिए संपर्क करें" : "Contact us for technical consultancy"}
             </p>
             <button className="bg-[#3e2723] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all">
                {isHi ? "प्रस्ताव मांगें" : "REQUEST PROPOSAL"}
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WasteToWealthInnovations;