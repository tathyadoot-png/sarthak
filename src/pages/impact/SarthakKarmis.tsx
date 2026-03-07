"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Heart, 
  Bike, 
  School, 
  Stethoscope, 
  IdCard, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Quote,
  Users2,
  CheckCircle,
  Award
} from "lucide-react";

const SarthakKarmis = () => {
  const context = useOutletContext<{ lang: "hi" | "en" }>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#fcfcfb] text-[#3e2723] selection:bg-[#FFBF00] selection:text-[#3e2723]">
      
      {/* 🔹 HERO: EMPOWERING THE FRONTLINE */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-14 relative overflow-hidden bg-[#3e2723]">
        <div className="absolute top-20 right-[-5%] text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none uppercase italic">
          Karmis
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
          className="max-w-7xl mx-auto w-full relative z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/10 text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <Heart size={12} fill="#FFBF00" />
            {isHi ? "सार्थक पहल" : "HUMANITY FIRST"}
          </motion.div>
          
          <h1 className="text-6xl md:text-[9rem] font-[1000] tracking-tighter leading-[0.85] mb-12 text-white uppercase">
            SARTHAK<br/>
            <span className="text-[#FFBF00] italic">KARMIS.</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-xl">
              {isHi 
                ? "कचरा बीनने वालों को संगठित कर उन्हें 'सफाई मित्र' की पहचान और सम्मानजनक जीवन देना ही हमारा संकल्प है।" 
                : "A legacy of transforming marginalized waste collectors into empowered, respected environmental stewards."}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex gap-10 border-l border-white/10 pl-10">
               <div>
                  <div className="text-4xl font-black text-[#FFBF00]">19K+</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{isHi ? "प्रशिक्षित" : "TRAINED"}</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-white">100%</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{isHi ? "बीमा" : "INSURED"}</div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 🔹 PILLARS OF SUPPORT */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 py-32">
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Education Card */}
          <div className="bg-[#FFBF00] rounded-[4rem] p-12 md:p-20 text-[#3e2723] flex flex-col justify-between aspect-square lg:aspect-auto shadow-xl shadow-[#FFBF00]/10">
              <School size={60} strokeWidth={1.5} className="mb-20 opacity-40" />
              <div>
                 <h3 className="text-4xl md:text-6xl font-[1000] tracking-tighter mb-6 uppercase leading-none italic">Future<br/>Generations.</h3>
                 <p className="text-[#3e2723]/70 text-lg font-bold leading-relaxed">
                   Free private school education for children of Sarthak Karmis, breaking the generational cycle of poverty.
                 </p>
              </div>
          </div>

          <div className="grid grid-rows-2 gap-6">
            {/* Health Card */}
            <div className="bg-white rounded-[3.5rem] p-10 border border-[#3e2723]/5 shadow-sm flex items-center gap-8 group hover:border-[#FFBF00] transition-colors">
               <div className="w-20 h-20 rounded-3xl bg-[#3e2723] flex items-center justify-center text-[#FFBF00] shrink-0 group-hover:scale-110 transition-transform">
                  <Stethoscope size={32} />
               </div>
               <div>
                  <h4 className="text-2xl font-black tracking-tight mb-2 uppercase italic">{isHi ? "स्वास्थ्य सुरक्षा" : "MEDICAL CARE"}</h4>
                  <p className="text-[#3e2723]/40 text-sm font-bold uppercase tracking-tight leading-snug">Monthly checkups and full maternity support in private hospitals.</p>
               </div>
            </div>

            {/* Bank/ID Card */}
            <div className="bg-[#3e2723] rounded-[3.5rem] p-10 text-white flex items-center gap-8 group">
               <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-[#FFBF00] shrink-0 group-hover:rotate-12 transition-transform">
                  <IdCard size={32} />
               </div>
               <div>
                  <h4 className="text-2xl font-black tracking-tight mb-2 uppercase italic text-[#FFBF00]">{isHi ? "वित्तीय समावेश" : "BANKING SUPPORT"}</h4>
                  <p className="text-white/40 text-sm font-medium leading-snug">Formal identity creation via Aadhaar and bank accounts for direct benefits.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 MOBILITY & TOOLS */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 py-32">
        <div className="bg-white rounded-[5rem] overflow-hidden border border-[#3e2723]/5 flex flex-col md:row-reverse lg:flex-row shadow-2xl">
           <div className="md:w-1/2 bg-[#3e2723]/5">
              <img 
                src="https://images.unsplash.com/photo-1618477462141-96541349f999?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Tools for Karmis"
              />
           </div>
           <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <Bike size={50} className="text-[#3e2723] mb-8" />
              <h3 className="text-4xl md:text-5xl font-[1000] tracking-tighter mb-6 uppercase italic leading-none">Light-Weight<br/>Rickshaws</h3>
              <p className="text-lg text-[#3e2723]/60 font-bold leading-relaxed mb-10">
                Specially engineered mobility solutions to reduce physical strain and increase collection efficiency for waste collectors.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {['Ergonomic Design', 'High Load Capacity', 'Low Maintenance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-[#3e2723]/40">
                    <CheckCircle size={14} className="text-[#FFBF00]" /> {item}
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 🔹 AWARENESS & NUKKAD NATAK */}
      <section className="py-40 bg-[#3e2723] rounded-[6rem] mx-6">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="text-center mb-24">
            <motion.div whileHover={{rotate: 360}} transition={{duration: 1}} className="inline-block">
               <Zap size={60} className="mx-auto text-[#FFBF00] mb-6" />
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-[1000] tracking-tighter italic uppercase text-white leading-none">
               CULTURE FOR<br/><span className="text-[#FFBF00]">CHANGE.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             <div className="relative p-12 bg-white/5 rounded-[4rem] border border-white/10 group hover:bg-[#FFBF00] transition-all duration-500">
                <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-[#3e2723]/10" size={100} />
                <h4 className="text-3xl font-black mb-6 uppercase italic text-white group-hover:text-[#3e2723]">Nukkad Natak</h4>
                <p className="text-white/40 text-lg leading-relaxed font-bold group-hover:text-[#3e2723]/70">
                  Street plays to tackle addiction (smoking/drinking) and provide technical training on waste segregation in a fun, visual way.
                </p>
             </div>
             
             <div className="flex flex-col gap-6">
                <div className="bg-white p-10 rounded-[3.5rem] flex-1 group">
                   <h5 className="text-3xl font-black text-[#3e2723] mb-2 uppercase italic leading-none">Evening Classes</h5>
                   <p className="text-[#3e2723]/40 font-bold text-sm uppercase tracking-widest">Adult literacy programs for men and women.</p>
                </div>
                <div className="bg-[#FFBF00] p-10 rounded-[3.5rem] flex-1">
                   <h5 className="text-3xl font-black text-[#3e2723] mb-2 uppercase italic leading-none">Skill Training</h5>
                   <p className="text-[#3e2723]/70 font-bold text-sm uppercase tracking-widest">Advanced technical training for plastic identification.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 FINAL ACTION */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="mx-auto text-[#FFBF00] mb-12" size={80} />
          <h2 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter mb-12 italic leading-tight">
             Restoring Dignity,<br/>One Life at a Time.
          </h2>
          <p className="text-2xl text-[#3e2723]/40 font-bold mb-16 leading-tight max-w-2xl mx-auto">
             Join Sarthak NGO in providing sustainable livelihoods to thousands of unsung environmental heroes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-12 py-6 bg-[#3e2723] text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black transition-all flex items-center gap-4 group">
               {isHi ? "हमारा समर्थन करें" : "SUPPORT THE KARMIS"}
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SarthakKarmis;