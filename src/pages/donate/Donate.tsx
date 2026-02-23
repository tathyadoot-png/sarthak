import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Heart, ShieldCheck, Zap, CreditCard } from "lucide-react";

interface DonateContext { lang: "hi" | "en"; }

const Donate = () => {
  const { lang } = useOutletContext<DonateContext>();
  const isHi = lang === "hi";

  const impactPoints = [
    { title: isHi ? "स्वास्थ्य सुरक्षा" : "Health Security", desc: isHi ? "कर्मियों के लिए मुफ्त स्वास्थ्य जांच" : "Free health checkups for Karmis" },
    { title: isHi ? "शिक्षा सहायता" : "Education Support", desc: isHi ? "कचरा बीनने वालों के बच्चों की पढ़ाई" : "Education for waste picker's children" },
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <span className="text-[#00a651] font-black uppercase tracking-widest text-[10px]">Support Our Mission</span>
            <h1 className="text-6xl font-black text-slate-900 italic mt-4 mb-8">
              {isHi ? "छोटा दान, बड़ा बदलाव" : "Small Gift, Big Impact"}
            </h1>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              {isHi ? "आपका योगदान सीधे उन लोगों तक पहुँचता है जो हमारे पर्यावरण को साफ रखने के लिए दिन-रात मेहनत करते हैं।" : "Your contribution directly reaches those who work day and night to keep our environment clean."}
            </p>
            
            <div className="space-y-6">
              {impactPoints.map((p, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-[#00a651] shadow-sm"><Zap size={20}/></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{p.title}</h4>
                    <p className="text-sm text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Donation Card */}
          <div className="bg-[#00a651] rounded-[4rem] p-12 text-white shadow-2xl shadow-green-900/20 relative overflow-hidden">
            <Heart className="absolute -top-10 -right-10 text-white/10" size={300} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck size={24} />
                <span className="font-bold uppercase tracking-widest text-xs">80G Tax Exempted</span>
              </div>
              
              <h3 className="text-3xl font-black mb-8 italic">{isHi ? "अभी योगदान दें" : "Make a Contribution"}</h3>
              
              <div className="space-y-4 mb-8">
                <label className="text-[10px] font-bold uppercase opacity-70">Select Amount (INR)</label>
                <div className="grid grid-cols-3 gap-3">
                  {['500', '1000', '5000'].map(amt => (
                    <button key={amt} className="py-4 bg-white/10 border border-white/20 rounded-2xl font-black hover:bg-white hover:text-[#00a651] transition-all">₹{amt}</button>
                  ))}
                </div>
              </div>

              <button className="w-full h-16 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-2xl">
                {isHi ? "पेमेंट गेटवे पर जाएँ" : "Proceed to Secure Pay"} <CreditCard size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;