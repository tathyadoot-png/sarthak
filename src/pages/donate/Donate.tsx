"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  QrCode, ShieldCheck, Smartphone, 
  Heart, Sparkles, CheckCircle2, 
  ArrowRight, Landmark, HandHeart
} from "lucide-react";

interface DonateContext { lang: "hi" | "en"; }

const Donate = () => {
  const { lang } = useOutletContext<DonateContext>();
  const isHi = lang === "hi";

  return (
    <div className="py-44 bg-[#fcfcfb] min-h-screen text-[#3e2723] selection:bg-[#FFBF00] selection:text-[#3e2723]">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* 🔹 Left Side: Impact & Instructions */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-[#FFBF00]" />
              <span className="text-[#3e2723] font-black uppercase tracking-[0.4em] text-[10px]">
                {isHi ? "योगदान दें" : "MAKE AN IMPACT"}
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-[7rem] font-[1000] text-[#3e2723] tracking-tighter leading-[0.85] mb-12 uppercase italic">
              {isHi ? "बदलाव के लिए" : "FUEL THE"} <br />
              <span className="text-[#FFBF00] not-italic">{isHi ? "स्कैन करें" : "CHANGE."}</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { 
                  title: isHi ? "अपना ऐप खोलें" : "OPEN UPI APP", 
                  desc: "GPay, PhonePe, or any banking app." 
                },
                { 
                  title: isHi ? "QR स्कैन करें" : "SCAN QR CODE", 
                  desc: "Point camera at the official secure code." 
                },
                { 
                  title: isHi ? "पुष्टि करें" : "ENTER AMOUNT", 
                  desc: "Enter your contribution and verify name." 
                },
                { 
                  title: isHi ? "आभार" : "INSTANT IMPACT", 
                  desc: "Your support directly aids waste-pickers." 
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white border-4 border-[#3e2723]/5 group hover:border-[#FFBF00] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3e2723] text-[#FFBF00] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} strokeWidth={3} />
                  </div>
                  <h4 className="font-[1000] text-[#3e2723] text-sm uppercase italic tracking-tighter mb-2">{step.title}</h4>
                  <p className="text-[10px] font-bold text-[#3e2723]/40 uppercase tracking-widest leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Tax Info Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-10 rounded-[3rem] bg-[#3e2723] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl"
            >
               <div className="w-20 h-20 rounded-2xl bg-[#FFBF00] flex items-center justify-center shrink-0 rotate-6 shadow-xl text-[#3e2723]">
                  <ShieldCheck size={40} strokeWidth={2.5} />
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFBF00] mb-2">Government Authorized</p>
                  <p className="text-2xl font-[1000] uppercase italic tracking-tighter">80G TAX EXEMPTION CERTIFIED</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase mt-2 tracking-[0.2em]">All donations are eligible for tax benefits in India.</p>
               </div>
            </motion.div>
          </div>

          {/* 🔹 Right Side: The Secure QR Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 md:p-16 rounded-[5rem] shadow-[0_60px_120px_rgba(62,39,35,0.12)] border-8 border-[#3e2723] relative w-full max-w-md"
            >
              {/* Top Branding */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                    <Landmark size={14} className="text-[#FFBF00]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3e2723]/30">Merchant Identifier</span>
                </div>
                <p className="font-[1000] text-[#3e2723] text-xl bg-[#fcfcfb] py-4 px-8 border-4 border-[#3e2723]/5 rounded-3xl uppercase italic tracking-tighter">
                  sarthak@upi
                </p>
              </div>

              {/* QR Code Frame */}
              <div className="relative">
                <div className="absolute -inset-6 bg-[#FFBF00]/10 rounded-[4rem] animate-pulse" />
                <div className="relative aspect-square bg-white border-4 border-[#3e2723] rounded-[3.5rem] p-8 flex items-center justify-center overflow-hidden shadow-inner">
                  {/* Real QR Image should go here */}
                  <img 
                    src="/qr-placeholder.png" 
                    alt="Sarthak Official QR" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                  
                  {/* Decorative Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                    <QrCode size={200} />
                  </div>
                </div>
              </div>

              {/* Security Footer */}
              <div className="mt-12 text-center">
                <div className="flex justify-center gap-6 mb-8 text-[#3e2723]/20">
                  <Smartphone size={24} />
                  <Heart size={24} className="text-[#FFBF00] fill-[#FFBF00]" />
                  <HandHeart size={24} />
                </div>
                <h5 className="text-xs font-[1000] uppercase tracking-[0.2em] text-[#3e2723] italic">
                  Sarthak Sustainable Management
                </h5>
                <p className="text-[9px] font-bold text-[#3e2723]/40 uppercase mt-2 tracking-widest">
                  Secure Industrial Payment Gateway
                </p>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -top-6 -right-6 bg-[#FFBF00] text-[#3e2723] px-6 py-6 rounded-[2.5rem] shadow-2xl -rotate-12 border-4 border-[#3e2723]">
                <Sparkles size={24} className="mb-2 mx-auto" />
                <p className="text-[10px] font-black uppercase tracking-widest leading-none text-center italic">100%<br/>Secure</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Support Note Bottom */}
        <div className="mt-32 pt-12 border-t-2 border-[#3e2723]/5 flex flex-col items-center gap-6">
            <p className="text-[#3e2723]/30 text-[10px] font-black uppercase tracking-[0.6em] text-center italic">
              Empowering communities through circular economy
            </p>
            <div className="flex gap-4 opacity-20 hover:opacity-100 transition-opacity">
               <div className="h-2 w-2 rounded-full bg-[#3e2723]" />
               <div className="h-2 w-2 rounded-full bg-[#FFBF00]" />
               <div className="h-2 w-2 rounded-full bg-[#3e2723]" />
            </div>
        </div>

      </div>

      {/* Background Decor */}
      <div className="fixed top-1/2 -right-40 text-[30rem] font-black text-[#3e2723]/[0.01] pointer-events-none select-none uppercase italic leading-none -translate-y-1/2 rotate-90">
        CONTRIBUTE
      </div>
    </div>
  );
};

export default Donate;