"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Facebook, Instagram, Youtube, Heart, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer: React.FC<{ lang: "hi" | "en" }> = ({ lang }) => {
  const isHi = lang === "hi";
  const navigate = useNavigate();

  const navLinks = [
    { en: "About", hi: "हमारे बारे में", path: "/about" },
    { en: "Impact", hi: "प्रभाव", path: "/impact" },
    { en: "Sarthak Karmi", hi: "सार्थक कर्मी", path: "/impact/karmis" },
    { en: "Gallery", hi: "गैलरी", path: "/media" },
  ];

  return (
    <footer className="w-full bg-[#3e2723] text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

          {/* 1. BRANDING & MISSION */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sarthak" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h2 className="text-2xl font-black tracking-tighter italic leading-none">SARTHAK</h2>
                <p className="text-[#FFBF00] text-[8px] font-black uppercase tracking-[0.3em] mt-1">Samudayik Vikas Sanstha</p>
              </div>
            </div>

            <p className="text-sm text-white/60 font-medium leading-relaxed max-w-sm">
              {isHi
                ? "सार्थक एक समर्पित NGO है जो पूरे भारत में कचरा प्रबंधन की दिशा में काम कर रहा है। हमारा मानना है कि कचरा सिर्फ एक गलत जगह रखा संसाधन है।"
                : "Sarthak is a dedicated NGO working towards systemic changes in waste management across India. We believe waste is just a misplaced resource."}
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFBF00]">
                {isHi ? "नेविगेशन" : "Navigation"}
              </p>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li
                    key={item.en}
                    onClick={() => navigate(item.path)}
                    className="text-sm font-bold text-white/50 hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-[#FFBF00] transition-all" />
                    {isHi ? item.hi : item.en}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFBF00]">
                {isHi ? "कानूनी" : "Legal"}
              </p>
              <ul className="space-y-4 text-sm font-bold text-white/50">
                {/* <li className="hover:text-white cursor-pointer transition-colors">80G Status</li> */}
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>

          {/* 3. CONTACT & ACTION */}
          <div className="md:col-span-4 space-y-8">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFBF00]">
                {isHi ? "संपर्क करें" : "Contact Us"}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-[#FFBF00] shrink-0" />
                  <span className="text-sm font-bold text-white/80 leading-tight italic">Bhopal, Madhya Pradesh - 462039, India</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={18} className="text-[#FFBF00] shrink-0" />
                  <span className="text-sm font-bold text-white/80 italic">sarthakbpl10@gmail.com</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone size={18} className="text-[#FFBF00] shrink-0" />
                  <span className="text-sm font-bold text-white/80 italic">+91 9826325798</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/donate")}
              className="w-full py-4 bg-[#FFBF00] text-[#3e2723] rounded-xl text-[11px] font-[1000] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl"
            >
              {isHi ? "सहयोग दें" : "DONATE NOW"} <Heart size={14} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 text-center md:text-left">
            © 2026 Sarthak Samudayik Vikas Sanstha • ALL RIGHTS RESERVED
          </div>

          <a
            href="https://inedco.com"
            target="_blank"
            className="flex items-center gap-2 group text-[9px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-[#FFBF00] transition-colors"
          >
            <span>Powered by Inedco</span>
            <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;