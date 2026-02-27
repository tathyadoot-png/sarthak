"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Recycle, 
  Factory, 
  Droplets, 
  Zap, 
  Users, 
  Truck, 
  ShieldCheck, 
  Globe,
  Fuel,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

const PlasticWastePage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="md:pt-40 pt-28 pb-32 bg-white overflow-hidden selection:bg-blue-100">
      
      {/* 🔹 HERO: Bold & Industrial */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-100 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <ShieldCheck size={14} className="fill-blue-900" /> {isHi ? "प्रमाणित अपशिष्ट प्रबंधन" : "Certified Waste Management"}
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-[1000] text-slate-900 tracking-tight leading-[0.9] mb-10">
              {isHi ? "प्लास्टिक" : "Plastic"}<br/>
              <span className="text-blue-900">{isHi ? "पुनर्चक्रण" : "Recycling"}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              {isHi 
                ? "भोपाल, इंदौर और ग्वालियर जैसे 24 नगर निगमों में फैला हमारा मॉडल, प्लास्टिक कचरे को औद्योगिक ईंधन और कच्चे तेल में बदल रहा है।"
                : "Our model across 24 municipal corporations like Bhopal & Indore transforms plastic waste into industrial fuel and crude oil."}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 py-8 border-t border-slate-100">
               <div>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">3200+</div>
                  <div className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mt-1">{isHi ? "सार्थक कर्मी" : "Sarthak Karmis"}</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">6 MT</div>
                  <div className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mt-1">{isHi ? "दैनिक संग्रह" : "Daily Collection"}</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">24+</div>
                  <div className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mt-1">{isHi ? "शहर कवर" : "Cities Covered"}</div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl opacity-70 animate-pulse" />
            <div className="relative aspect-square rounded-[4rem] bg-slate-900 border border-slate-800 shadow-2xl p-4 overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" 
                 className="w-full h-full object-cover rounded-[3.5rem] opacity-60 group-hover:scale-110 transition-transform duration-1000"
                 alt="Plastic Processing"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                    <Recycle size={40} />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 PYROLYSIS TECHNOLOGY SECTION (The Star Feature) */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="bg-blue-900 rounded-[4rem] p-10 md:p-24 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-12 text-blue-900 opacity-20"><Zap size={200} /></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter leading-none">
                {isHi ? "पायरोलिसिस: कचरे से तेल" : "Pyrolysis: Waste to Oil"}
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed font-medium border-l-4 border-blue-300 pl-8">
                {isHi 
                  ? "हम गैर-रिसाइकिल योग्य प्लास्टिक को 430°C से ऊपर ऑक्सीजन मुक्त वातावरण में गर्म करके औद्योगिक डीजल (Industrial Oil) और सिन-गैस में बदलते हैं।"
                  : "We decompose non-recyclable plastic in an oxygen-free environment above 430°C to produce industrial diesel and syn-gases."}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-4 bg-white/10 p-5 rounded-3xl border border-white/20">
                  <div className="p-3 bg-blue-900 rounded-2xl"><Droplets size={24} /></div>
                  <span className="font-black text-xs uppercase tracking-widest">{isHi ? "इंडस्ट्रियल ऑयल" : "Industrial Oil"}</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-5 rounded-3xl border border-white/20">
                  <div className="p-3 bg-blue-900 rounded-2xl"><Zap size={24} /></div>
                  <span className="font-black text-xs uppercase tracking-widest">{isHi ? "गैसीय ईंधन" : "Gaseous Fuel"}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-[3rem] p-8 border border-white/10 relative">
               <h4 className="font-black uppercase tracking-[0.2em] text-blue-300 mb-8 text-sm">Thermal Degradation Process</h4>
               <div className="space-y-6">
                  {["Input: Shredded Plastic", "Reactor: 430°C Heat", "Output: Pyrolysis Oil"].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-[10px] font-black">{idx + 1}</div>
                      <p className="font-bold tracking-tight text-lg">{step}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CEMENT PLANT PARTNERSHIP (Fuel Supply) */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none mb-4">
            {isHi ? "सीमेंट फैक्ट्रियों के लिए ईंधन" : "Fuel for Cement Factories"}
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Empowering the Circular Economy</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { city: "Bhopal & Indore", icon: <Truck />, title: "Logistics", desc: "Large scale collection through our Sarthak Karmis." },
             { city: "Bailing Units", icon: <Factory />, title: "Processing", desc: "Pressing plastic on bailing machines for optimized transport." },
             { city: "Cement Plants", icon: <Fuel />, title: "Energy", desc: "Used as a high-calorific alternative fuel in kilns." }
           ].map((card, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all duration-500"
             >
               <div className="w-14 h-14 bg-white text-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all">
                 {card.icon}
               </div>
               <p className="text-[10px] font-black text-blue-800  uppercase tracking-widest mb-2">{card.city}</p>
               <h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">{card.title}</h3>
               <p className="text-sm text-slate-400 font-medium leading-relaxed">{card.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 🔹 IMPACT LOCATIONS & PARTNERS */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">
              {isHi ? "हमारी पहुंच" : "Operating Locations"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Bhopal", "Indore", "Jabalpur", "Gwalior", "Sagar", "Dhar"].map((city) => (
                <span key={city} className="px-6 py-3 bg-slate-100 rounded-full text-xs font-black uppercase tracking-widest text-slate-600 border border-slate-200">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              {isHi 
                ? "हमारा मॉडल म.प्र. के 24 नगर निगमों में सफल रहा है, जिसे अन्य राज्यों के सचिवों और कलेक्टरों ने भी सराहा है।"
                : "Our model is successfully replicated in 24 municipal corporations of MP, appreciated by secretaries and collectors nationwide."}
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-[4rem] p-12 border border-slate-100">
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <h5 className="text-3xl font-black text-blue-900 tracking-tighter">5-6 MT</h5>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Daily Plastic<br/>Collection</p>
                </div>
                <div className="space-y-2">
                   <h5 className="text-3xl font-black text-blue-900 tracking-tighter">300+</h5>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Expert & Govt.<br/>Delegations Visited</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 FINAL CTA: Be the Change */}
      <section className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden text-center md:text-left"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10"><Globe size={180} /></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase tracking-tighter leading-none mb-6">
                {isHi ? "शून्य प्लास्टिक लैंडफिल" : "Zero Plastic Landfill"}
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                {isHi ? "प्रदूषण मुक्त नदियों और नालों के लिए हमारा साथ दें।" : "Partner with us for pollution-free rivers and drains."}
              </p>
            </div>
            <button className="whitespace-nowrap bg-blue-900 hover:bg-white hover:text-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-500/20 flex items-center gap-4 group">
              {isHi ? "भागीदार बनें" : "Become a Partner"}
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default PlasticWastePage;