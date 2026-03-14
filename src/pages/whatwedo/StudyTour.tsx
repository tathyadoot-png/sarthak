"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bus, 
  MapPin, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  BookOpen, 
  Camera,
  Globe2
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const StudyTour = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const tourDestinations = [
    {
      title: isHi ? "भोपाल मॉडल दर्शन" : "Bhopal Model Visit",
      desc: isHi ? "नगर निगम के साथ मिलकर कचरा प्रबंधन की लाइव वर्किंग को समझना।" : "Understanding live waste management operations with the Municipal Corporation.",
      location: "Bhopal, MP",
      icon: <MapPin className="text-red-500" />
    },
    {
      title: isHi ? "MRF सेंटर विजिट" : "MRF Center Visit",
      desc: isHi ? "मटेरियल रिकवरी फैसिलिटी में कचरे की छंटाई और प्रोसेसिंग देखना।" : "Observing waste segregation and processing at Material Recovery Facilities.",
      location: "Adampur Chhawani",
      icon: <Users className="text-blue-500" />
    },
    {
      title: isHi ? "जीरो वेस्ट कैंपस" : "Zero Waste Campus",
      desc: isHi ? "संस्थानों में कचरा मुक्त प्रणाली को लागू करने की विधि।" : "Learning the methodology of implementing zero-waste systems in institutions.",
      location: "Local Campuses",
      icon: <Lightbulb className="text-[#FFBF00]" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fcfcfb]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#3e2723] rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Bus size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {isHi ? "प्रायोगिक शिक्षा" : "Experiential Learning"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-[0.9] mb-8">
              {isHi ? "स्टडी टूर और" : "STUDY TOURS &"} <br />
              <span className="text-[#FFBF00]">{isHi ? "क्षेत्र भ्रमण" : "FIELD VISITS"}</span>
            </h1>
            <p className="text-white/60 text-lg font-bold leading-relaxed">
              {isHi 
                ? "किताबी ज्ञान से परे, जमीन पर हो रहे बदलावों को करीब से देखें और सीखें।" 
                : "Go beyond textbooks. Witness and learn from real-world environmental transformations on the ground."}
            </p>
          </div>
          <Globe2 className="absolute right-[-40px] bottom-[-40px] size-96 text-white/5 -rotate-12" />
        </motion.div>
      </section>

      {/* 🔹 Tour Highlights */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-[1000] text-[#3e2723] uppercase tracking-tighter italic">
            {isHi ? "प्रमुख भ्रमण स्थल" : "KEY TOUR DESTINATIONS"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourDestinations.map((tour, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFBF00] transition-colors">
                {tour.icon}
              </div>
              <div className="flex items-center gap-2 mb-3">
                 <span className="text-[10px] font-black text-[#FFBF00] uppercase tracking-widest">{tour.location}</span>
              </div>
              <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 leading-tight">
                {tour.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {tour.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 What you will Learn */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="bg-[#f2f2ee] rounded-[3rem] p-8 md:p-16 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
                {isHi ? "सीखने के मुख्य बिंदु" : "LEARNING OUTCOMES"}
              </h2>
              <div className="space-y-6">
                {[
                  { t: isHi ? "कचरा पृथक्करण" : "Waste Segregation", i: <BookOpen size={20}/> },
                  { t: isHi ? "सामुदायिक सहभागिता" : "Community Engagement", i: <Users size={20}/> },
                  { t: isHi ? "तकनीकी नवाचार" : "Technical Innovation", i: <Lightbulb size={20}/> },
                  { t: isHi ? "दस्तावेज़ीकरण" : "Documentation", i: <Camera size={20}/> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="text-[#FFBF00]">{item.i}</div>
                    <span className="font-black text-[#3e2723] uppercase text-sm tracking-tighter">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square bg-[#3e2723] rounded-[2.5rem] overflow-hidden group">
               <img src="/img/tour-placeholder.jpg" alt="Study Tour" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <Bus className="text-[#FFBF00]" size={32} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Registration CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-[#FFBF00] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-4">
              {isHi ? "टूर बुक करें" : "BOOK YOUR"} <br />
              <span className="opacity-40">{isHi ? "अपने संस्थान के लिए" : "INSTITUTIONAL TOUR"}</span>
            </h2>
            <p className="text-[#3e2723] font-bold text-sm">
              {isHi 
                ? "स्कूलों, कॉलेजों और सरकारी निकायों के लिए कस्टमाइज्ड स्टडी टूर्स उपलब्ध हैं।" 
                : "Customized study tours available for schools, colleges, and government bodies."}
            </p>
          </div>
          <button className="group bg-[#3e2723] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-black transition-all shadow-xl">
            {isHi ? "इनक्वायरी भेजें" : "SEND ENQUIRY"} 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudyTour;