"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Heart, BookOpen, Stethoscope, GraduationCap, Plus, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface SarthakKarmiProps {
  lang: "hi" | "en";
}

const SarthakKarmi = ({ lang }: SarthakKarmiProps) => {
  const isHi = lang === "hi";
  
  const benefits = [
    {
      icon: <Stethoscope className="text-[#00a651]" size={32} />,
      title: isHi ? "स्वास्थ्य सुरक्षा" : "Health First",
      desc: isHi ? "हर महीने मुफ्त स्वास्थ्य जांच और पूरे परिवार के लिए डिजिटल हेल्थ कार्ड।" : "Monthly free health checkups and digital health cards for the entire family.",
    },
    {
      icon: <GraduationCap className="text-[#2b3291]" size={32} />,
      title: isHi ? "शिक्षा का अधिकार" : "Education Support",
      desc: isHi ? "बच्चों के लिए स्कूलों में स्कॉलरशिप और बड़ों के लिए लिटरेसी प्रोग्राम।" : "School scholarships for children and literacy programs for adults.",
    },
    {
      icon: <BookOpen className="text-[#00a651]" size={32} />,
      title: isHi ? "कौशल प्रशिक्षण" : "Skill Training",
      desc: isHi ? "वेस्ट मैनेजमेंट और ई-वेस्ट हैंडलिंग के लिए प्रोफेशनल सर्टिफिकेट कोर्स।" : "Professional certification courses for advanced waste management.",
    },
    {
      icon: <Heart className="text-[#2b3291]" size={32} />,
      title: isHi ? "सामाजिक सम्मान" : "Social Dignity",
      desc: isHi ? "वर्दी और आईडी कार्ड के माध्यम से कूड़ा बीनने वालों को 'सार्थक कर्मी' की पहचान।" : "Professional identity as 'Sarthak Karmi' through uniforms and ID cards.",
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-10 md:top-20 left-0 w-full opacity-[0.03] text-[20vw] md:text-[15vw] font-black text-slate-900 whitespace-nowrap pointer-events-none select-none hidden sm:block z-0 leading-none">
        SOCIAL DIGNITY • TRANSFORMATION
      </div>
      
      {/* Ambient Orbs - Hidden on small mobile to improve performance */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/5 blur-[80px] md:blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00a651]/5 blur-[80px] md:blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-12 md:mb-24">
          <div className="lg:col-span-8">
            <SectionHeading 
              subtitle={isHi ? "सशक्त मानवता" : "Empowering Humanity"}
              titleMain={isHi ? "सार्थक कर्मी:" : "Sarthak Karmi:"}
              titleGradient={isHi ? "सशक्त समाज की नींव" : "The Heart of Impact"}
              isHi={isHi}
            />
          </div>

          {/* IMPACT BADGE - Centered on Mobile */}
          <div className="lg:col-span-4 lg:pb-16 flex justify-center lg:justify-end">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-950 p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group w-full max-w-[320px] lg:max-w-none"
            >
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#00a651]/20 blur-3xl group-hover:bg-[#00a651]/40 transition-colors" />
               <div className="relative z-10 flex items-center gap-4 md:gap-6">
                 <div className="h-12 w-12 md:h-16 md:w-16 bg-[#00a651] rounded-xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-[#00a651]/30">
                    <Plus size={24} className="md:w-8 md:h-8" strokeWidth={3} />
                 </div>
                 <div>
                    <p className="text-3xl md:text-4xl font-black tracking-tighter leading-none">3200+</p>
                    <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                        {isHi ? "जीवन बदले गए" : "Lives Reclaimed"}
                    </p>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* CARDS GRID - Responsive 1 to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group bg-white p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[4rem] border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-700 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="h-14 w-14 md:h-20 md:w-20 bg-slate-50 rounded-xl md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-10 group-hover:bg-slate-950 transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-500 scale-75 md:scale-100">
                  {item.icon}
                </div>
              </div>

              <h4 className="text-lg md:text-2xl font-black mb-3 md:mb-4 text-slate-950 tracking-tight leading-tight">
                {item.title}
              </h4>
              <p className="text-[12px] md:text-[13px] text-slate-500 font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
                {item.desc}
              </p>
              
              <div className="flex items-center justify-between w-full opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:flex">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    {isHi ? "अधिक जानकारी" : "Read More"}
                </span>
                <ArrowUpRight size={18} className="text-[#00a651]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY BAR - Stacked on Mobile */}
        <div className="mt-16 md:mt-28 bg-blue-950 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 shadow-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#00a651]" />
          
          <div className="space-y-4 text-center lg:text-left z-10">
             <p className="text-lg md:text-2xl lg:text-3xl text-white font-medium italic max-w-2xl leading-snug">
              {isHi 
                ? "\"कूड़ा बीनने वाले शहर के सबसे बड़े पर्यावरण रक्षक हैं, हम बस उन्हें वह सम्मान लौटा रहे हैं।\"" 
                : "\"Waste pickers are the true guardians of our environment; we simply provide the dignity they deserve.\""}
            </p>
          </div>
          
          <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-[#00a651] hover:bg-white text-white hover:text-slate-950 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] transition-all duration-500 shadow-xl shadow-black/20 whitespace-nowrap z-10">
            {isHi ? "प्रभाव की कहानी" : "Our Full Story"}
          </button>
        </div>
      </div>

      {/* Background Decorative Text - Hidden on smallest mobile */}
      {/* <div className="absolute -bottom-5 md:-bottom-10 left-0 w-full opacity-[0.02] text-[20vw] md:text-[15vw] font-black text-slate-950 whitespace-nowrap pointer-events-none select-none hidden sm:block">
        SOCIAL DIGNITY • TRANSFORMATION
      </div> */}
    </section>
  );
};

export default SarthakKarmi;