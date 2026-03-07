"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Recycle, Sprout, HardHat, Zap } from "lucide-react";

const Initiatives: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";

  const initiatives = [
    {
      title: isHi ? "प्लास्टिक प्रबंधन" : "Plastic Waste",
      icon: <Recycle size={32} />,
      desc: isHi 
        ? "डोर-टू-डोर कलेक्शन और सड़क निर्माण के लिए MLP का प्रसंस्करण (40,000km+)।" 
        : "Door-to-door collection and MLP shredding for road construction (40,000km+).",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: isHi ? "ई-कचरा प्रबंधन" : "E-Waste Management",
      icon: <Zap size={32} />,
      desc: isHi 
        ? "अधिकृत संग्रहण केंद्र, ई-वेस्ट एम्बुलेंस और सुरक्षित निराकरण भागीदारी।" 
        : "Authorized collection centers, e-waste ambulance, and safe dismantling partnerships.",
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: isHi ? "जैविक अपशिष्ट" : "Organic Waste",
      icon: <Sprout size={32} />,
      desc: isHi 
        ? "सामुदायिक कंपोस्टिंग, बायोगैस सिस्टम और विकेंद्रीकृत प्रसंस्करण समाधान।" 
        : "Community composting, biogas systems, and decentralized processing solutions.",
      img: "https://images.unsplash.com/photo-1592185152497-03502ba152fe?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: isHi ? "सामाजिक गरिमा" : "Social Inclusion",
      icon: <HardHat size={32} />,
      desc: isHi 
        ? "सफाई मित्रों का औपचारिकरण, स्वास्थ्य बीमा और स्थिर आय के माध्यम से सशक्तिकरण।" 
        : "Empowering Safai Mitras through formalization, health cover, and steady income.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h6 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-4"
            >
              {isHi ? "हमारी मुख्य पहल" : "Our Core Initiatives"}
            </motion.h6>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none"
            >
              {isHi ? "सतत समाधान," : "Sustainable"} <br />
              <span className="text-[#3e2723]/30">{isHi ? "बेहतर कल।" : "Circular Systems"}</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold text-[#3e2723]/60 max-w-xs italic leading-relaxed"
          >
            {isHi 
              ? "हम कचरे को समस्या नहीं, बल्कि एक संसाधन के रूप में देखते हैं जो समुदायों को सशक्त बनाता है।" 
              : "We transform waste from a liability into a resource that empowers communities and environment."}
          </motion.p>
        </div>

        {/* Grid Section - Adjusted to 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm"
            >
              {/* Background Image with Overlay */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723] via-[#3e2723]/60 to-transparent transition-colors duration-500 group-hover:from-black" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-4 text-[#FFBF00] transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-[1000] uppercase tracking-tighter mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] font-bold text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
                
                {/* Visual indicator */}
                <div className="mt-6 w-8 h-[2px] bg-[#FFBF00] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Initiatives;