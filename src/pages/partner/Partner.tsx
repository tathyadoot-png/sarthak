import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Building2, Handshake, BarChart3, Globe } from "lucide-react";

interface PartnerContext { lang: "hi" | "en"; }

const Partner = () => {
  const { lang } = useOutletContext<PartnerContext>();
  const isHi = lang === "hi";

  const services = [
    { icon: <BarChart3 />, title: isHi ? "CSR प्रोजेक्ट्स" : "CSR Projects", desc: "End-to-end implementation of waste management." },
    { icon: <Globe />, title: isHi ? "EPR सेवाएं" : "EPR Services", desc: "Helping brands fulfill their Extended Producer Responsibility." }
  ];

  return (
    <div className="py-24 bg-slate-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Building2 className="mx-auto text-[#00a651] mb-6" size={48} />
          <h1 className="text-6xl font-black italic">{isHi ? "कॉर्पोरेट पार्टनरशिप" : "Corporate Partnership"}</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Join hands with Sarthak to create a sustainable future through innovative waste management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((s, i) => (
            <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group">
              <div className="text-[#00a651] mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-3xl font-black mb-4 italic">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Box */}
        <div className="bg-[#00a651] p-16 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-slate-900">
            <h2 className="text-4xl font-black italic mb-4">{isHi ? "क्या आप तैयार हैं?" : "Ready to Collaborate?"}</h2>
            <p className="font-bold opacity-80">{isHi ? "हमारे CSR विशेषज्ञ से बात करने के लिए फॉर्म भरें।" : "Get a customized proposal for your organization."}</p>
          </div>
          <button className="h-20 px-12 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-4">
            {isHi ? "प्रस्ताव मांगें" : "Request Proposal"} <Handshake size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;