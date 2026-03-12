"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Send, Mail, MapPin, Phone, Clock, 
  Facebook, Twitter, Instagram, Linkedin, ArrowUpRight 
} from "lucide-react";

interface ContactContext {
  lang: "hi" | "en";
}

const ContactSection = () => {
  const context = useOutletContext<ContactContext>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: isHi ? "हमारा पता" : "POSTAL ADDRESS",
      details: "Sarthak Sanstha 3/8 Amir ganj Lower Idgah hill, Bhopal 462001",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone size={20} />,
      title: isHi ? "संपर्क नंबर" : "CONTACT NO",
      details: "+91 98263 25798 ,   0755-2542004",
      link: "tel:+919826325798"
    },
    {
      icon: <Mail size={20} />,
      title: isHi ? "ईमेल करें" : "MAIL US",
      details: "sarthakbpl10@gmail.com",
      link: "mailto:sarthakbpl10@gmail.com"
    },
    {
      icon: <Clock size={20} />,
      title: isHi ? "कार्य समय" : "OPERATION HOURS",
      details: isHi ? "सोम-शनि : 10:00 AM से 07:00 PM" : "Mon-Sat : 10.00 AM to 07.00 PM",
      subDetails: isHi ? "(रविवार: बंद)" : "(Sunday: Closed)"
    }
  ];

  return (
    <section className="py-44 bg-[#fcfcfb] overflow-hidden selection:bg-[#FFBF00] selection:text-[#3e2723]">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#FFBF00]" />
              <span className="text-[#3e2723] font-black uppercase tracking-[0.4em] text-[10px]">
                {isHi ? "संपर्क करें" : "GET IN TOUCH"}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[8rem] font-[1000] text-[#3e2723] italic leading-[0.85] tracking-tighter uppercase"
            >
              {isHi ? "चलो बात" : "LET'S"} <br />
              <span className="text-[#FFBF00] not-italic">{isHi ? "करते हैं" : "CONNECT."}</span>
            </motion.h2>
          </div>
          <div className="hidden md:block h-32 w-px bg-[#3e2723]/10 self-end mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-8 p-10 rounded-[3rem] bg-white border-4 border-[#3e2723]/5 hover:border-[#FFBF00] transition-all duration-500 shadow-xl shadow-[#3e2723]/5"
                >
                  <div className="w-16 h-16 shrink-0 bg-[#3e2723] text-[#FFBF00] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-[#3e2723]/40 text-[9px] uppercase tracking-[0.3em] mb-2 italic">{info.title}</h4>
                    <p className="text-[#3e2723] font-[1000] leading-tight text-lg italic tracking-tighter">{info.details}</p>
                    {info.subDetails && <p className="text-[#FFBF00] text-[10px] mt-2 font-black uppercase tracking-widest">{info.subDetails}</p>}
                  </div>
                  <ArrowUpRight className="text-[#3e2723]/10 group-hover:text-[#FFBF00] transition-colors" size={24} />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-10 bg-[#3e2723] rounded-[3rem] flex items-center justify-between">
               <span className="text-[10px] font-[1000] text-white/40 uppercase tracking-[0.3em] italic">Ecosystem</span>
               <div className="flex gap-4">
                 {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                   <a key={idx} href="#" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 text-[#FFBF00] hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all duration-300">
                     <Icon size={18} />
                   </a>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Side: Heavy Industrial Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-white rounded-[4rem] p-12 md:p-20 border-8 border-[#3e2723] relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h4 className="text-4xl md:text-5xl font-[1000] text-[#3e2723] italic uppercase tracking-tighter mb-4">{isHi ? "संदेश भेजें" : "SEND MESSAGE"}</h4>
              <p className="text-[#3e2723]/50 mb-12 font-bold uppercase text-xs tracking-widest">
                {isHi ? "हमारी टीम 24 घंटों में आपसे संपर्क करेगी" : "Our team will respond within 24 business hours."}
              </p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e2723] italic ml-1">Full Name</label>
                    <input type="text" className="w-full bg-[#fcfcfb] border-4 border-[#3e2723]/5 rounded-3xl px-8 py-5 outline-none focus:border-[#FFBF00] transition-all font-bold text-[#3e2723]" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e2723] italic ml-1">Email ID</label>
                    <input type="email" className="w-full bg-[#fcfcfb] border-4 border-[#3e2723]/5 rounded-3xl px-8 py-5 outline-none focus:border-[#FFBF00] transition-all font-bold text-[#3e2723]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e2723] italic ml-1">Subject</label>
                  <input type="text" className="w-full bg-[#fcfcfb] border-4 border-[#3e2723]/5 rounded-3xl px-8 py-5 outline-none focus:border-[#FFBF00] transition-all font-bold text-[#3e2723]" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e2723] italic ml-1">Your Message</label>
                  <textarea rows={4} className="w-full bg-[#fcfcfb] border-4 border-[#3e2723]/5 rounded-[2.5rem] px-8 py-6 outline-none focus:border-[#FFBF00] transition-all font-bold text-[#3e2723] resize-none"></textarea>
                </div>
                
                <button type="button" className="group w-full h-24 bg-[#3e2723] hover:bg-[#FFBF00] text-white hover:text-[#3e2723] rounded-3xl font-[1000] uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-6 transition-all duration-500 shadow-2xl active:scale-95">
                  {isHi ? "अभी भेजें" : "DISPATCH NOW"} 
                  <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Background Branding for the form */}
            <div className="absolute top-[-5%] right-[-5%] text-[15rem] font-black text-[#3e2723]/[0.03] pointer-events-none select-none uppercase italic leading-none">
              Mail
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large Background Text Decoration */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-[1000] text-[#3e2723]/[0.02] pointer-events-none select-none uppercase italic leading-none -mb-20 -mr-20">
        Contact
      </div>
    </section>
  );
};

export default ContactSection;