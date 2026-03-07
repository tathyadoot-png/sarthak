"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Recycle, Factory,  Layout, Drill, Boxes, ArrowRight, Download } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const PlasticRecyclingPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const innovations = [
    {
      title: isHi ? "टिकाऊ प्लास्टिक शीट्स" : "Durable Plastic Sheets",
      desc: isHi ? "MLP कचरे से बनी उच्च घनत्व वाली शीट्स जो लकड़ी का विकल्प हैं।" : "High-density sheets made from MLP waste, serving as a sustainable wood alternative.",
      icon: <Layout className="text-[#FFBF00]" />
    },
    {
      title: isHi ? "सामुदायिक फर्नीचर" : "Community Furniture",
      desc: isHi ? "स्कूल और सार्वजनिक स्थानों के लिए रिसाइकल्ड बेंच और डेस्क।" : "Recycled benches and desks for schools and public infrastructure.",
      icon: <Boxes className="text-[#FFBF00]" />
    },
    {
      title: isHi ? "इंफ्रास्ट्रक्चर बोर्ड्स" : "Infrastructure Boards",
      desc: isHi ? "निर्माण कार्यों के लिए मजबूत और जलरोधी बोर्ड्स।" : "Heavy-duty, waterproof boards for various construction applications.",
      icon: <Drill className="text-[#FFBF00]" />
    }
  ];

  return (
    <div className="bg-[#f7f7f6]  min-h-screen">
      {/* 🔹 HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-24 bg-[#3e2723] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFBF00]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h6 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            {isHi ? "प्लास्टिक पुनर्चक्रण एवं नवाचार" : "PLASTIC RECYCLING & INNOVATIONS"}
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-[1000] text-white uppercase tracking-tighter leading-[0.9]"
          >
            {isHi ? "उन्नत" : "ADVANCED"} <br />
            <span className="text-white/30">{isHi ? "चक्रीय नवाचार" : "CIRCULAR TECH."}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-white/60 text-lg md:text-xl font-bold max-w-2xl leading-relaxed"
          >
            {isHi 
              ? "प्लास्टिक कचरा प्रबंधन हमारी प्रमुख ताकत है। हम कचरे को संसाधन में बदलकर पर्यावरण का संरक्षण करते हैं।" 
              : "Plastic waste management is our core strength. We transform low-value waste into high-value circular resources."}
          </motion.p>
        </div>
      </section>

      {/* 🔹 MLP INNOVATION SECTION */}
      <section className="py-24  max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=800" 
                alt="MLP Recycling" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#FFBF00] p-12 rounded-[3rem] hidden md:block">
              <Recycle size={60} className="text-[#3e2723] animate-spin-slow" />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
                {isHi ? "MLP नवाचार" : "MLP INNOVATION"}
              </h2>
              <p className="mt-6 text-[#3e2723]/70 text-lg font-bold">
                {isHi 
                  ? "हम नॉन-रिसाइक्लेबल मल्टीलेयर प्लास्टिक (MLP) को उपयोगी उत्पादों में बदलते हैं:" 
                  : "We convert non-recyclable multilayered plastics into durable materials, reducing landfill burden."}
              </p>
            </div>

            <div className="space-y-4">
              {innovations.map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-[#3e2723]/5 hover:border-[#FFBF00] transition-all">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-black text-[#3e2723] uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-sm font-bold text-[#3e2723]/50 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 PLASTIC ROADS SECTION */}
      <section className="py-24 bg-[#3e2723]  text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 h-full">
            {[...Array(10)].map((_, i) => <div key={i} className="border-r border-white" />)}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-7">
            <span className="text-[#FFBF00] font-black uppercase tracking-widest text-xs mb-4 block">Sustainable Engineering</span>
            <h2 className="text-5xl md:text-8xl font-[1000] uppercase tracking-tighter leading-none">
              {isHi ? "सड़क निर्माण में" : "PLASTIC FOR"} <br />
              <span className="text-[#FFBF00]">{isHi ? "प्लास्टिक।" : "ROADS."}</span>
            </h2>
            <p className="mt-10 text-white/70 text-lg md:text-2xl font-bold leading-relaxed italic">
              {isHi 
                ? "कटे हुए प्लास्टिक कचरे को प्रोसेस करके बिटुमेन के साथ मिश्रित किया जाता है, जिससे ग्रामीण और शहरी सड़कें अधिक समय तक चलती हैं।" 
                : "Shredded plastic waste is processed and supplied for bitumen blending, creating long-lasting urban and rural road networks."}
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
               {["Bitumen Blending", "Cost Effective", "Water Resistant"].map((tag, i) => (
                 <span key={i} className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5">
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#FFBF00] rounded-[3.5rem] p-10 text-[#3e2723] space-y-8 shadow-2xl rotate-3">
               {/* <Road size={50} /> */}
               <h3 className="text-3xl font-[1000] uppercase tracking-tighter italic leading-none">
                 {isHi ? "स्थायित्व और मजबूती" : "DURABILITY & STRENGTH"}
               </h3>
               <p className="font-bold text-sm">
                 {isHi 
                   ? "प्लास्टिक सड़कें सामान्य सड़कों की तुलना में भारी बारिश और गर्मी को बेहतर तरीके से झेलती हैं।" 
                   : "Plastic-infused roads show superior resistance to heavy rainfall and thermal expansion compared to traditional bitumen."}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 OTHER INNOVATIONS GRID */}
      <section className="py-24 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter">
            {isHi ? "अन्य तकनीकी नवाचार" : "OTHER INNOVATIONS"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: isHi ? "प्लास्टिक पेलेटाइजेशन" : "Pelletization", 
              icon: <Factory />, 
              desc: isHi ? "कचरे से प्लास्टिक के दाने बनाना।" : "Converting waste into high-quality polymer pellets." 
            },
            { 
              title: isHi ? "शीट एक्सट्रूज़न" : "Sheet Extrusion", 
              icon: <Layout />, 
              desc: isHi ? "विभिन्न मोटाई की औद्योगिक शीट्स।" : "Manufacturing industrial sheets of varying thickness." 
            },
            { 
              title: isHi ? "पॉलिमर मैन्युफैक्चरिंग" : "Polymer Products", 
              icon: <Boxes />, 
              desc: isHi ? "रिसाइकिल पॉलिमर से तैयार उत्पाद।" : "Finished goods manufactured from recycled polymers." 
            }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white rounded-[3rem] border border-[#3e2723]/5 hover:bg-[#3e2723] hover:text-white transition-all duration-500 shadow-xl shadow-[#3e2723]/5">
              <div className="h-16 w-16 bg-[#FFBF00] rounded-2xl flex items-center justify-center text-[#3e2723] mb-8 group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-[1000] uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-sm font-bold opacity-60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 CALL TO ACTION */}
      <section className="py-20  max-w-7xl mx-auto">
        <div className="bg-[#FFBF00] rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
              {isHi ? "हमारे साथ जुड़ें" : "PARTNER WITH"} <br />
              <span className="text-[#3e2723]/30">{isHi ? "सर्कुलर इकोनॉमी में।" : "THE CIRCULAR ECONOMY."}</span>
            </h2>
          </div>
          <button className="px-10 py-6 bg-[#3e2723] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-black transition-all">
            {isHi ? "प्रोजेक्ट रिपोर्ट डाउनलोड करें" : "DOWNLOAD CASE STUDY"} <Download size={20} className="text-[#FFBF00]" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlasticRecyclingPage;