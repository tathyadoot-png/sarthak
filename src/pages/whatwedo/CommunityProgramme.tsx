"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users2, 
  HeartHandshake, 
  Megaphone, 
  Gem, 
  ArrowRight, 
  CheckCircle2, 
  Smile,
  Handshake
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const CommunityProgramme = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const initiatives = [
    {
      title: isHi ? "सार्थक कर्मी उत्थान" : "Sarthak Karmi Welfare",
      desc: isHi ? "कचरा बीनने वालों को प्रशिक्षण, स्वास्थ्य बीमा और पहचान पत्र प्रदान करना।" : "Providing training, health insurance, and ID cards to waste pickers.",
      icon: <HeartHandshake className="text-pink-500" />
    },
    {
      title: isHi ? "जन जागरूकता अभियान" : "Awareness Campaigns",
      desc: isHi ? "नुक्कड़ नाटक और कार्यशालाओं के माध्यम से स्वच्छता का संदेश।" : "Spreading waste segregation awareness via street plays and workshops.",
      icon: <Megaphone className="text-[#FFBF00]" />
    },
    {
      title: isHi ? "महिला सशक्तिकरण" : "Women Empowerment",
      desc: isHi ? "स्वयं सहायता समूहों (SHG) के माध्यम से कचरे से उत्पाद बनाना।" : "Empowering women through SHGs to create wealth from waste products.",
      icon: <Gem className="text-blue-500" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fafafa]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3.5rem] p-8 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#FFBF00]/10 px-4 py-2 rounded-full mb-6">
              <Users2 size={16} className="text-[#3e2723]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e2723]">
                {isHi ? "जन भागीदारी" : "Public Participation"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-[0.9] mb-8">
              {isHi ? "सामुदायिक" : "COMMUNITY"} <br />
              <span className="text-[#FFBF00]">{isHi ? "सहभागिता" : "ENGAGEMENT"}</span>
            </h1>
            <p className="text-slate-500 text-lg font-bold leading-relaxed">
              {isHi 
                ? "हमारा मानना है कि बिना जन-भागीदारी के कोई भी बदलाव संभव नहीं है। हम समाज के हर वर्ग को जोड़ते हैं।" 
                : "We believe no change is possible without people's participation. We bridge the gap between waste and society."}
            </p>
          </div>
          <Handshake className="absolute right-[-40px] bottom-[-40px] size-96 text-slate-50 -rotate-12 select-none" />
        </motion.div>
      </section>

      {/* 🔹 Initiatives Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 italic">
                {item.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Impact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="bg-[#3e2723] rounded-[3rem] p-8 md:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-[2.5rem] flex items-center justify-center p-12">
                 <Smile size={160} className="text-[#FFBF00] opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-48 h-48 bg-[#FFBF00]/10 blur-3xl rounded-full" />
                 </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-8">
                {isHi ? "सार्थक कर्मियों का सम्मान" : "DIGNITY FOR WASTE WORKERS"}
              </h2>
              <div className="space-y-6">
                {[
                  { t: isHi ? "औपचारिक पहचान" : "Formal Recognition", d: isHi ? "नगर निगम द्वारा जारी पहचान पत्र।" : "Official ID cards issued by municipalities." },
                  { t: isHi ? "स्वास्थ्य सुरक्षा" : "Health Security", d: isHi ? "नियमित स्वास्थ्य जांच और बीमा।" : "Regular health checkups and insurance coverage." },
                  { t: isHi ? "कौशल विकास" : "Skill Development", d: isHi ? "नई तकनीकों और सुरक्षा का प्रशिक्षण।" : "Training in new technologies and safety protocols." }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#FFBF00] shrink-0" />
                    <div>
                      <h4 className="font-black text-sm uppercase">{point.t}</h4>
                      <p className="text-white/40 text-xs font-bold italic">{point.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-[#FFBF00] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
              {isHi ? "स्वयंसेवक बनें" : "BECOME A"} <br />
              <span className="opacity-40">{isHi ? "बदलाव का हिस्सा" : "CHANGE MAKER"}</span>
            </h2>
          </div>
          <button className="group bg-[#3e2723] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-black transition-all shadow-xl">
            {isHi ? "अभी जुड़ें" : "JOIN THE MOVEMENT"} 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunityProgramme;