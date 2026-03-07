"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Zap, ArrowRight, CheckCircle2, Award, Globe, Users2, Heart, TrendingUp
} from "lucide-react";

// Explicit interface for TypeScript
interface ContextType {
  lang: "hi" | "en";
}

const SuccessStories: React.FC = () => {
  // Typecasting the context to our interface
  const context = useOutletContext<ContextType>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const caseStudies = [
    {
      title: isHi ? "प्लास्टिक से सड़कें: एक क्रांति" : "Plastic to Roads: A Revolution",
      tag: "Infrastructure",
      desc: isHi 
        ? "40,000 किलोमीटर से अधिक सड़कों का निर्माण छंटनी किए गए प्लास्टिक कचरे का उपयोग करके किया गया है।" 
        : "Over 40,000 kilometers of roads have been constructed using shredded non-recyclable plastic waste across MP.",
      stat: "40k+ KM",
      statLabel: isHi ? "सड़कें बनाई गईं" : "Roads Built",
      image: "https://images.unsplash.com/photo-1596438410275-3037206ca27d?auto=format&fit=crop&q=80"
    },
    {
      title: isHi ? "सीमेंट उद्योग के साथ तालमेल" : "Industrial Synergy",
      tag: "Industrial Impact",
      desc: isHi 
        ? "हानिकारक कचरे को जलाने के बजाय, हम इसे सीमेंट भट्टियों में सह-प्रसंस्करण के लिए भेजते हैं।" 
        : "Instead of open burning, non-recyclable plastic is sent to cement kilns for safe co-processing.",
      stat: "100%",
      statLabel: isHi ? "सुरक्षित निपटान" : "Safe Disposal",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-[#fcfcfb] w-full min-h-screen pb-24 overflow-hidden selection:bg-[#FFBF00] selection:text-[#3e2723]">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto pt-44 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-[#FFBF00]"></span>
              <span className="text-[#3e2723] font-black uppercase tracking-[0.3em] text-[10px]">
                {isHi ? "प्रमाणित प्रभाव" : "PROVEN IMPACT"}
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-6xl md:text-[8rem] font-[1000] text-[#3e2723] leading-[0.85] tracking-tighter uppercase italic"
            >
              {isHi ? "सफलता की" : "REAL"} <br />
              <span className="text-[#FFBF00] not-italic">
                {isHi ? "कहानियाँ" : "RESULTS."}
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="lg:col-span-4 lg:border-l-4 border-[#FFBF00] lg:pl-10"
          >
            <p className="text-[#3e2723]/60 text-xl font-bold leading-tight italic uppercase">
              {isHi 
                ? "सार्थक का भोपाल मॉडल आज पूरे भारत के लिए कचरा प्रबंधन का एक बेंचमार्क बन गया है।" 
                : "Sarthak's 'Bhopal Model' is now the national gold standard for plastic waste management."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. LANDFILL RESTORATION */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40">
        <div className="bg-[#3e2723] rounded-[4rem] p-8 md:p-24 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-32 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFBF00] text-[#3e2723] rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                <CheckCircle2 size={18} /> {isHi ? "लैंडफिल बहाली" : "LANDFILL RESTORATION"}
              </div>
              <h4 className="text-5xl md:text-7xl font-[1000] leading-none tracking-tighter italic uppercase">
                {isHi ? "डंपिंग यार्ड से उद्यान तक" : "FROM DUMPS TO GARDENS."}
              </h4>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b-4 border-white/10 pb-6 hover:border-[#FFBF00] transition-all">
                  <div className="text-5xl font-[1000] text-[#FFBF00]">15+</div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-2">{isHi ? "साइट्स बहाल" : "Sites Restored"}</div>
                </div>
                <div className="border-b-4 border-white/10 pb-6 hover:border-[#FFBF00] transition-all">
                  <div className="text-5xl font-[1000] text-[#FFBF00]">200T</div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-2">{isHi ? "दैनिक क्षमता" : "Daily Capacity"}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -10 }} className="mt-16 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white/10">
                  <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Before" />
                  <div className="absolute bottom-6 left-6 text-white font-black tracking-widest uppercase text-[10px] bg-black/40 px-3 py-1 rounded-md">Before</div>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-[#FFBF00]">
                  <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute bottom-6 left-6 bg-[#FFBF00] px-6 py-2 rounded-full text-[#3e2723] font-black text-[10px] uppercase tracking-widest shadow-lg italic">Result</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((story, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[4rem] border-4 border-[#3e2723]/5 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-[400px] overflow-hidden relative">
                <img src={story.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={story.title} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3e2723]/80" />
                <div className="absolute top-8 left-8 px-6 py-2 bg-[#FFBF00] text-[#3e2723] rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">{story.tag}</div>
              </div>
              <div className="p-12 md:p-16">
                <h5 className="text-4xl font-[1000] text-[#3e2723] mb-6 leading-none tracking-tighter uppercase italic">{story.title}</h5>
                <p className="text-[#3e2723]/60 text-lg leading-relaxed mb-12 font-bold uppercase text-[11px] tracking-tight">{story.desc}</p>
                <div className="flex items-end justify-between border-t-2 border-[#3e2723]/5 pt-10">
                  <div>
                    <div className="text-5xl font-[1000] text-[#FFBF00]">{story.stat}</div>
                    <div className="text-[10px] text-[#3e2723]/30 font-black uppercase tracking-widest mt-1">{story.statLabel}</div>
                  </div>
                  <button className="w-20 h-20 rounded-full bg-[#3e2723] flex items-center justify-center text-[#FFBF00] group-hover:scale-110 transition-all duration-500">
                    <ArrowRight size={32} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WASTE TO WEALTH ECOSYSTEM */}
      <section className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-5xl md:text-[7rem] font-[1000] uppercase tracking-tighter italic text-[#3e2723] leading-[0.8]">
              WASTE TO WEALTH<br/><span className="text-[#FFBF00]">ECOSYSTEM.</span>
            </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "01. Collection", title: "SHG Segregation", desc: "SHG-run centers organize community plastic waste.", icon: <Users2 /> },
            { label: "02. Processing", title: "Pelletization", desc: "Local units employ community members in manufacturing.", icon: <Zap /> },
            { label: "03. Production", title: "Enterprises", desc: "Women-led enterprises create bags, cushions & boards.", icon: <Heart /> },
            { label: "04. Market", title: "Village Sales", desc: "Entrepreneurs sell eco-friendly tiles and benches.", icon: <Globe /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[4rem] border-4 border-[#3e2723]/5 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[#3e2723]/5 font-[1000] text-8xl group-hover:text-[#FFBF00]/10 transition-colors pointer-events-none italic">
                {i + 1}
              </div>
              <div className="w-16 h-16 bg-[#3e2723] text-[#FFBF00] rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-all duration-500 relative z-10">
                {item.icon}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFBF00] mb-3">{item.label}</p>
                <h3 className="text-2xl font-black tracking-tighter mb-4 text-[#3e2723] uppercase">{item.title}</h3>
                <p className="text-[#3e2723]/50 font-bold uppercase text-[10px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;