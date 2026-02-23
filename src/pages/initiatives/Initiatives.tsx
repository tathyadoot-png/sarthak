import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext, Link } from "react-router-dom";
import { Recycle, Zap, ShieldCheck, Waves, ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const Initiatives = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const data = [
    {
      id: "plastic",
      title: isHi ? "प्लास्टिक वेस्ट" : "Plastic Waste",
      subtitle: "Material Recovery Facility",
      desc: isHi 
        ? "नगर निगमों के साथ मिलकर प्लास्टिक कचरे का वैज्ञानिक प्रबंधन और पुनर्चक्रण।" 
        : "Scientific management and recycling of plastic waste in partnership with municipal bodies.",
      icon: <Recycle size={28} />,
      color: "bg-emerald-500",
      image: "/assets/initiatives/plastic.jpg", // Replace with your image
    },
    {
      id: "ewaste",
      title: isHi ? "ई-वेस्ट" : "E-Waste",
      subtitle: "Green Recycling",
      desc: isHi 
        ? "पुराने इलेक्ट्रॉनिक उपकरणों का सुरक्षित निपटान और कीमती धातुओं की रिकवरी।" 
        : "Safe disposal of electronic waste and recovery of precious metals using green tech.",
      icon: <Zap size={28} />,
      color: "bg-blue-600",
      image: "/assets/initiatives/ewaste.jpg",
    },
    {
      id: "carcass",
      title: isHi ? "मृत पशु प्रबंधन" : "Carcass Management",
      subtitle: "Hygienic Disposal",
      desc: isHi 
        ? "शहरों में मृत पशुओं का गरिमापूर्ण और स्वच्छ वैज्ञानिक प्रबंधन।" 
        : "Dignified and hygienic scientific management of animal carcasses in urban areas.",
      icon: <ShieldCheck size={28} />,
      color: "bg-amber-600",
      image: "/assets/initiatives/carcass.jpg",
    },
    {
      id: "narmada",
      title: isHi ? "नर्मदा संरक्षण" : "Narmada River",
      subtitle: "Water Conservation",
      desc: isHi 
        ? "पवित्र नर्मदा नदी के घाटों की सफाई और कचरा प्रबंधन के लिए विशेष पहल।" 
        : "A dedicated initiative for the cleaning and waste management of Narmada river banks.",
      icon: <Waves size={28} />,
      color: "bg-cyan-600",
      image: "/assets/initiatives/river.jpg",
    }
  ];

  return (
    <div className="w-full bg-[#fcfcfd] pt-32 md:pt-48 pb-20 overflow-hidden">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        
        {/* 🔹 Dynamic Heading Section */}
        <div className="mb-20">
          <SectionHeading 
            subtitle={isHi ? "हमारी पहल" : "Our Initiatives"}
            titleMain={isHi ? "पर्यावरण" : "Action for"}
            titleGradient={isHi ? "संरक्षण।" : "Change."}
            isHi={isHi}
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mt-6 leading-relaxed"
          >
            {isHi 
              ? "हम समुदायों और सरकार के साथ मिलकर कचरे को संसाधन में बदलने का काम कर रहे हैं।" 
              : "We work with communities and governments to transform waste into sustainable resources."}
          </motion.p>
        </div>

        {/* 🔹 Initiatives List (Stack on Mobile, Grid on Desktop) */}
        <div className="space-y-12 md:space-y-24">
          {data.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-center`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Floating Icon */}
                <div className={`absolute -top-6 -left-4 md:-left-8 h-16 w-16 md:h-20 md:w-20 ${item.color} rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-black/20 group-hover:rotate-12 transition-transform duration-500`}>
                  {item.icon}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-3">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#00a651]">
                    {item.subtitle}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-[1000] text-[#1a1f5c] tracking-tighter italic uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium">
                  {item.desc}
                </p>

                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link 
                    to={`/initiatives/${item.id}`}
                    className="group/btn relative inline-flex items-center gap-4 px-8 py-4 bg-white border border-slate-200 rounded-full overflow-hidden transition-all duration-500 hover:border-[#1a1f5c] hover:shadow-xl"
                  >
                    <span className="relative z-10 font-black text-[11px] md:text-xs uppercase tracking-widest text-[#1a1f5c]">
                      {isHi ? "विस्तार से देखें" : "Explore Project"}
                    </span>
                    <div className="relative z-10 h-8 w-8 rounded-full bg-[#1a1f5c] text-white flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* 🔹 Bottom Section CTA */}
      <div className="mt-40 px-6">
        <div className="w-full bg-[#1a1f5c] rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <h4 className="text-white text-3xl md:text-6xl font-[1000] tracking-tighter leading-tight relative z-10">
                {isHi ? "हमारे साथ जुड़ें और" : "Join the Movement for a"} <br/>
                <span className="text-emerald-400">{isHi ? "बदलाव का हिस्सा बनें।" : "Cleaner Tomorrow."}</span>
            </h4>
            <div className="mt-10 relative z-10">
                <Link to="/contact" className="inline-block px-10 py-5 bg-[#00a651] text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-transform">
                    {isHi ? "संपर्क करें" : "Get In Touch"}
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;