import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Heart, CreditCard, TrendingUp, ShieldCheck } from "lucide-react";

const SarthakKarmis = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const stats = [
    { icon: <CreditCard />, title: isHi ? "स्वास्थ्य कार्ड" : "Health Cards", val: "100%", desc: isHi ? "सभी कर्मियों का बीमा।" : "Insurance for all workers." },
    { icon: <TrendingUp />, title: isHi ? "आय वृद्धि" : "Income Growth", val: "3x", desc: isHi ? "मासिक आय में बढ़ोत्तरी।" : "Rise in monthly earnings." },
    { icon: <ShieldCheck />, title: isHi ? "सामाजिक सुरक्षा" : "Social Security", val: "3200+", desc: isHi ? "पंजीकृत सार्थक कर्मी।" : "Registered workers." }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-[#00a651] font-black uppercase tracking-widest text-xs mb-4">Our Heroes</h2>
          <h3 className="text-5xl font-black text-slate-900 italic">{isHi ? "सार्थक कर्मी" : "Sarthak Karmis"}</h3>
          <p className="mt-6 text-slate-500 max-w-3xl mx-auto text-lg">
            {isHi ? "हम कचरा बीनने वालों को संगठित कर उन्हें सम्मानजनक आजीविका और पहचान प्रदान करते हैं।" : "We organize rag-pickers and provide them with dignified livelihoods and identity."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm text-[#00a651] mb-6">{s.icon}</div>
              <p className="text-4xl font-black text-slate-900 mb-2">{s.val}</p>
              <h4 className="font-bold text-slate-700">{s.title}</h4>
              <p className="text-xs text-slate-400 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] rounded-[4rem] p-12 text-white flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1 space-y-6">
              <h4 className="text-3xl font-black italic">{isHi ? "गरिमापूर्ण जीवन" : "Dignity in Labor"}</h4>
              <p className="text-gray-400 leading-relaxed">
                {isHi ? "वर्दी, दस्ताने और पहचान पत्र ने उनके काम के प्रति समाज का नजरिया बदल दिया है। आज वे शहर के 'सफाई मित्र' हैं।" : "Uniforms, gloves, and ID cards have changed society's perspective towards their work. Today, they are the city's 'Safar Mitras'."}
              </p>
           </div>
           <div className="w-full md:w-1/3 aspect-square bg-slate-800 rounded-[3rem] flex items-center justify-center italic text-gray-500 border border-white/10">
             [Worker Photo]
           </div>
        </div>
      </div>
    </div>
  );
};

export default SarthakKarmis;