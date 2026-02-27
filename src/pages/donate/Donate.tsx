"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  QrCode, ShieldCheck, Smartphone, 
  Heart, Sparkles, CheckCircle2 
} from "lucide-react";

interface DonateContext { lang: "hi" | "en"; }

const Donate = () => {
  const { lang } = useOutletContext<DonateContext>();
  const isHi = lang === "hi";

  return (
    <div className="py-32 bg-[#FAF9F6] min-h-screen text-slate-900 selection:bg-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 🔹 Left Side: Instructions */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Easy Contribution</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-black text-[#1a1f5c] tracking-tight leading-tight mb-8">
              {isHi ? "स्कैन करें और बदलाव लाएं" : "Scan to Make a Difference"}
            </h1>
            
            <div className="space-y-6">
              {[
                { 
                  title: isHi ? "अपना ऐप खोलें" : "Open any UPI App", 
                  desc: "GPay, PhonePe, Paytm or any Bank App." 
                },
                { 
                  title: isHi ? "QR कोड स्कैन करें" : "Scan the QR Code", 
                  desc: "Point your camera at the box on the right." 
                },
                { 
                  title: isHi ? "पुष्टि करें" : "Confirm & Pay", 
                  desc: "Enter the amount and support Sarthak." 
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1f5c] text-sm">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tax Info */}
            <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm inline-flex items-center gap-4">
               <ShieldCheck size={24} className="text-emerald-500" />
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tax Exemption</p>
                  <p className="text-sm font-bold text-[#1a1f5c]">80G Certified NGO</p>
               </div>
            </div>
          </div>

          {/* 🔹 Right Side: The QR Card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-slate-50 relative max-w-sm w-full"
            >
              {/* Top Details */}
              <div className="text-center mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Official UPI ID</p>
                <p className="font-bold text-[#1a1f5c] text-sm bg-slate-50 py-2 px-4 rounded-full inline-block">
                  sarthak@upi
                </p>
              </div>

              {/* QR Code Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-500" />
                <div className="relative aspect-square bg-white border-2 border-slate-100 rounded-[2.5rem] p-6 flex items-center justify-center overflow-hidden">
                  {/* Yahan aap apna asli QR Image 'src' mein dalenge */}
                  <img 
                    src="/qr-placeholder.png" 
                    alt="Sarthak QR Code" 
                    className="w-full h-full object-contain grayscale-[0.2]"
                  />
                  
                  {/* QR Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <QrCode size={120} />
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 text-center space-y-4">
                <div className="flex justify-center gap-3">
                  <Smartphone size={18} className="text-slate-300" />
                  <Heart size={18} className="text-rose-400 fill-rose-400" />
                  <Sparkles size={18} className="text-emerald-400" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-relaxed">
                  {isHi ? "सार्थक सस्टेनेबल मैनेजमेंट" : "Sarthak Sustainable Management"}
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#1a1f5c] text-white p-4 rounded-3xl shadow-xl rotate-12">
                <p className="text-[9px] font-black uppercase tracking-widest leading-none">Safe &<br/>Secure</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Support Note */}
        <p className="mt-20 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.4em]">
          All contributions are used for waste picker welfare and environmental protection
        </p>

      </div>
    </div>
  );
};

export default Donate;