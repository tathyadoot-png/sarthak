import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Send, Mail, MapPin, Phone, Clock, 
  Facebook, Twitter, Instagram 
} from "lucide-react";

// 1. Interface ko component ke bahar rakhein
interface ContactContext {
  lang: "hi" | "en";
}

const ContactSection = () => {
  // 2. Context ko type ke saath access karein
  const context = useOutletContext<ContactContext>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi"; // Ab ye niche error nahi dega

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const contactInfo = [
    {
      icon: <MapPin className="text-[#00a651]" />,
      title: isHi ? "हमारा पता" : "Postal Address",
      details: "F3, Jyoti Apartment, Plot No 483, B sector, Sarvadharma, Kolar Road, Bhopal, MP 462042",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="text-[#2b3291]" />,
      title: isHi ? "संपर्क नंबर" : "Contact No",
      details: "0755-4921624, +91-9584003002",
      link: "tel:+919584003002"
    },
    {
      icon: <Mail className="text-[#00a651]" />,
      title: isHi ? "ईमेल करें" : "Mail Us",
      details: "snhcjournal@gmail.com",
      link: "mailto:snhcjournal@gmail.com"
    },
    {
      icon: <Clock className="text-[#2b3291]" />,
      title: isHi ? "कार्य समय" : "Operation Hours",
      details: isHi ? "सोम-शनि : 10:00 AM से 07:00 PM" : "Mon-Sat : 10.00 AM to 07.00 PM",
      subDetails: isHi ? "(रविवार: बंद)" : "(Sunday: Closed)"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#00a651] font-black uppercase tracking-[0.2em] text-[10px]"
            >
              Get in Touch
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-slate-900 italic mt-4 leading-tight"
            >
              {isHi ? "आइये साथ मिलकर काम करें" : "Let's Scale the Impact Together"}
            </motion.h3>
          </div>
          <div className="hidden md:block h-24 w-px bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-6 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1">{info.title}</h4>
                  <p className="text-slate-900 font-bold leading-relaxed">{info.details}</p>
                  {info.subDetails && <p className="text-red-500 text-xs mt-1 font-bold">{info.subDetails}</p>}
                </div>
              </motion.a>
            ))}

            <div className="p-8">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Social Ecosystem</p>
               <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-slate-900 text-white hover:bg-[#00a651] transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-slate-950 rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20"
          >
            <div className="relative z-10">
              <h4 className="text-3xl font-black italic mb-2">{isHi ? "संदेश भेजें" : "Send a Message"}</h4>
              <p className="text-gray-400 mb-10 font-medium">Have a query? Our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-500 ml-1">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00a651] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-500 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00a651] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-500 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-[#00a651] transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full h-16 bg-[#00a651] hover:bg-[#008c44] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-green-900/20">
                  {isHi ? "अभी भेजें" : "Dispatch Now"} <Send size={16} />
                </button>
              </form>
            </div>
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#00a651]/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;