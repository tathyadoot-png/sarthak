"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react";

const SocialInclusion = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  return (
    <div className="bg-[#f4f4f2] min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.span className="text-[#FFBF00] font-black tracking-[0.4em] uppercase text-xs">Human Impact</motion.span>
        <motion.h1 className="text-5xl md:text-8xl font-[1000] text-[#3e2723] uppercase tracking-tighter mt-4 leading-none">
          {isHi ? "सामाजिक" : "SOCIAL"} <br />
          <span className="italic opacity-30">{isHi ? "समावेशन।" : "INCLUSION."}</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { icon: <Heart />, title: isHi ? "गरिमा" : "Dignity", desc: isHi ? "कचरा बीनने वालों को सार्थक कर्मी के रूप में पहचान।" : "Recognizing ragpickers as Sarthak Karmis." },
            { icon: <Users />, title: isHi ? "शिक्षा" : "Education", desc: isHi ? "कर्मियों के बच्चों के लिए उज्ज्वल भविष्य।" : "Securing the future of workers' children." },
            { icon: <Award />, title: isHi ? "सुरक्षा" : "Security", desc: isHi ? "बीमा और स्वास्थ्य सुविधाओं तक पहुंच।" : "Access to insurance and healthcare." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-[#3e2723]/5"
            >
              <div className="w-16 h-16 bg-[#FFBF00]/10 rounded-2xl flex items-center justify-center text-[#FFBF00] mx-auto mb-6">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-[#3e2723] uppercase italic mb-4">{item.title}</h4>
              <p className="text-[#3e2723]/60 font-bold uppercase text-xs tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-[4rem] overflow-hidden">
          <img src="/img/37.jpeg" className="w-full max-h-[500px] object-cover" alt="Social Inclusion" />
        </div>
      </div>
    </div>
  );
};