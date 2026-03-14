"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  ShieldAlert, 
  Truck, 
  FileCheck, 
  BarChart3, 
  ArrowRight, 
  Settings 
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const IndustrialWaste = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const services = [
    {
      title: isHi ? "खतरनाक कचरा प्रबंधन" : "Hazardous Waste Mgmt",
      desc: isHi ? "औद्योगिक कचरे का सुरक्षित और वैज्ञानिक निपटान।" : "Safe and scientific disposal of toxic industrial by-products.",
      icon: <ShieldAlert className="text-red-500" />
    },
    {
      title: isHi ? "अनुपालन रिपोर्टिंग" : "Compliance Reporting",
      desc: isHi ? "PCB मानकों के अनुसार कानूनी दस्तावेज़ीकरण।" : "Legal documentation as per Pollution Control Board norms.",
      icon: <FileCheck className="text-blue-500" />
    },
    {
      title: isHi ? "रिसोर्स रिकवरी" : "Resource Recovery",
      desc: isHi ? "कचरे से मूल्यवान सामग्री को पुनः प्राप्त करना।" : "Extracting valuable materials from industrial scrap.",
      icon: <Settings className="text-[#FFBF00]" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fcfcfb]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#3e2723] rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Factory size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {isHi ? "औद्योगिक समाधान" : "Industrial Excellence"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-[0.9] mb-8">
              {isHi ? "स्मार्ट इंडस्ट्रियल" : "SMART INDUSTRIAL"} <br />
              <span className="text-[#FFBF00]">{isHi ? "कचरा प्रबंधन" : "WASTE SOLUTIONS"}</span>
            </h1>
            <p className="text-white/60 text-lg font-bold leading-relaxed">
              {isHi 
                ? "हम उद्योगों को शून्य-कचरा लक्ष्य प्राप्त करने और पर्यावरण नियमों का पालन करने में मदद करते हैं।" 
                : "Helping industries achieve zero-waste goals while maintaining strict environmental compliance."}
            </p>
          </div>
          <Factory className="absolute right-[-40px] bottom-[-40px] size-96 text-white/5 -rotate-12" />
        </motion.div>
      </section>

      {/* 🔹 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFBF00] transition-colors duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 italic">
                {service.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#3e2723] uppercase tracking-tighter leading-none">
                {isHi ? "हमारी कार्यप्रणाली" : "OPERATIONAL FLOW"}
              </h2>
              <p className="text-slate-400 font-bold mt-4 uppercase text-xs tracking-widest">
                End-to-end industrial waste lifecycle
              </p>
            </div>
            <BarChart3 size={48} className="text-[#FFBF00] opacity-20" />
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {[
              { t: isHi ? "ऑडिट" : "Waste Audit", d: isHi ? "कचरे के प्रकार का विश्लेषण।" : "In-depth analysis of waste streams." },
              { t: isHi ? "संग्रहण" : "Collection", d: isHi ? "सुरक्षित लोडिंग और परिवहन।" : "Certified logistics and handling." },
              { t: isHi ? "उपचार" : "Treatment", d: isHi ? "वैज्ञानिक प्रसंस्करण।" : "Neutralization and processing." },
              { t: isHi ? "प्रमाणन" : "Certification", d: isHi ? "निपटान का प्रमाण पत्र।" : "Official destruction certificates." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-[#FFBF00]/10 absolute -top-10 left-0 select-none">0{i+1}</div>
                <h4 className="text-lg font-black text-[#3e2723] uppercase mb-2 relative z-10">{step.t}</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Final CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-[#FFBF00] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
              {isHi ? "इंडस्ट्रियल ऑडिट" : "SCHEDULE AN"} <br />
              <span className="opacity-30">{isHi ? "शेड्यूल करें।" : "INDUSTRIAL AUDIT."}</span>
            </h2>
          </div>
          <button className="group bg-[#3e2723] text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-black transition-all">
            {isHi ? "अभी शुरू करें" : "GET STARTED NOW"} 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndustrialWaste;