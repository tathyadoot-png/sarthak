"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Leaf, 
  Sprout, 
  Wind, 
  Recycle, 
  ArrowRight, 
  CheckCircle2, 
  Droplets,
  Sun,
  Globe
} from "lucide-react";

const OrganicPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  // 🔹 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const processSteps = [
    {
      title: isHi ? "संग्रह और पृथक्करण" : "Collection & Sorting",
      desc: isHi ? "किचन और गार्डन कचरे का घर-घर से व्यवस्थित संग्रह।" : "Systematic door-to-door collection of kitchen and garden waste.",
      icon: <Recycle size={24} />
    },
    {
      title: isHi ? "एरोबिक कम्पोस्टिंग" : "Aerobic Composting",
      desc: isHi ? "वैज्ञानिक विधियों से कचरे को उच्च गुणवत्ता वाली खाद में बदलना।" : "Transforming waste into high-quality compost using scientific methods.",
      icon: <Wind size={24} />
    },
    {
      title: isHi ? "मिट्टी का पुनरुद्धार" : "Soil Restoration",
      desc: isHi ? "तैयार 'सार्थक खाद' को खेतों और बगीचों तक पहुँचाना।" : "Delivering 'Sarthak Compost' to farms and local gardens.",
      icon: <Sprout size={24} />
    }
  ];

  return (
    <div className="md:pt-40 pt-28 pb-32 bg-white overflow-hidden selection:bg-emerald-100">
      
      {/* 🔹 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Leaf size={14} className="fill-emerald-700" /> {isHi ? "जीरो वेस्ट पहल" : "Zero Waste Initiative"}
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-[1000] text-slate-900 tracking-tight leading-[0.9] mb-10">
              {isHi ? "जैविक" : "Organic"}<br/>
              <span className="text-emerald-500">{isHi ? "क्रांति" : "Evolution"}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-10">
              {isHi 
                ? "सार्थक किचन और बगीचे के कचरे को 'सार्थक खाद' (Sarthak Compost) में बदलकर लैंडफिल के बोझ को कम करता है और पर्यावरण को पुनर्जीवित करता है।"
                : "Sarthak reduces landfill pressure by converting kitchen and garden waste into 'Sarthak Compost', reviving our natural ecosystem."}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-3 p-4 px-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <Droplets size={20} className="text-emerald-500" />
                  <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Natural Processing</span>
               </div>
               <div className="flex items-center gap-3 p-4 px-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <Sun size={20} className="text-emerald-500" />
                  <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Solar Integrated</span>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-[4rem] -rotate-3 blur-2xl opacity-50" />
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Organic Waste Management"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 THE PROCESS FLOW (New Section) */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {processSteps.map((step, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">{step.title}</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🔹 DETAILED CONTENT & BIOGAS (Expanded) */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-emerald-100 opacity-20"><Globe size={180} /></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">
                {isHi ? "बायोगैस और खाद का संगम" : "Biogas & Compost Integration"}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-8">
                {isHi 
                  ? "हमारा विकेंद्रीकृत मॉडल न केवल खाद बनाता है, बल्कि बायोगैस प्रणालियों के माध्यम से नवीकरणीय ऊर्जा भी पैदा करता है।"
                  : "Our decentralized model doesn't just create compost; it generates renewable energy through smart biogas systems."}
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  isHi ? "मीथेन उत्सर्जन में कमी" : "Reduction in Methane Emissions",
                  isHi ? "स्थानीय सामुदायिक भागीदारी" : "Local Community Participation",
                  isHi ? "मिट्टी की उर्वरता में सुधार" : "Improvement in Soil Fertility"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-700">
                    <CheckCircle2 size={18} className="text-emerald-500" /> {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-center text-center">
                 <h4 className="text-4xl font-black text-emerald-500 mb-2">100%</h4>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Natural Cycle</p>
              </div>
              <div className="p-8 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-center text-center mt-12">
                 <h4 className="text-4xl font-black text-emerald-500 mb-2">Zero</h4>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Chemicals Used</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 FINAL CTA */}
      <section className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="inline-flex items-center gap-6 bg-slate-900 text-white px-12 py-6 rounded-[2.2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-2xl group">
            {isHi ? "मॉडल प्रोफाइल डाउनलोड करें" : "Download Organic Profile"} 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="mt-8 text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em]">Sarthak NGO &bull; Organic Waste Management</p>
        </motion.div>
      </section>

    </div>
  );
};

export default OrganicPage;