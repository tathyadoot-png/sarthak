"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useNavigate, useOutletContext } from "react-router-dom";
import { 
  Award, Calendar, MapPin, ArrowLeft, Trophy, 
  ArrowUpRight, ShieldCheck, Medal 
} from "lucide-react";

type ContextType = { lang: "hi" | "en" };

const AchievementsPage = () => {
  const context = useOutletContext<ContextType>();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";
  const navigate = useNavigate();

  const allAwards = [
    { 
      year: "2021", 
      title: isHi ? "स्वच्छ नायक सम्मान" : "Swacch Nayak Samman", 
      org: isHi ? "जिला कलेक्टर भोपाल" : "District Collector Bhopal",
      desc: isHi ? "स्वच्छ भारत मिशन ग्रामीण में अपशिष्ट प्रबंधन के उत्कृष्ट कार्य के लिए।" : "Swachh Bharat Mission Rural excellence work of waste management.",
      image: "https://images.unsplash.com/photo-1579546647302-d830214f8a6d?q=80&w=600"
    },
    { 
      year: "2021", 
      title: isHi ? "स्वच्छता एंबेसडर" : "Swachhta Ambassador", 
      org: "BMC",
      desc: isHi ? "प्लास्टिक अपशिष्ट प्रबंधन में उत्कृष्ट कार्य के लिए।" : "Excellence work of Plastic Waste Management.",
      image: "https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?q=80&w=600"
    },
    { 
      year: "2020", 
      title: isHi ? "सीआईआई वेस्ट टू वेल्थ अवार्ड" : "CII Waste to Wealth Award", 
      org: "CII",
      desc: isHi ? "प्लास्टिक कचरे के प्रबंधन के लिए 3R अवार्ड, राष्ट्रीय स्तर पर द्वितीय विजेता।" : "CII 3R Award for Managing Plastic Waste, 2nd Winner of National Level.",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=600"
    },
    { 
      year: "2020", 
      title: isHi ? "अनहद सम्मान" : "Anhad Samman", 
      org: "Towards Better India",
      desc: isHi ? "प्लास्टिक अपशिष्ट प्रबंधन के क्षेत्र में बेहतर भारत की ओर योगदान।" : "Excellence work of Plastic Waste Management towards a better India.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600"
    },
    { 
      year: "2019", 
      title: isHi ? "ग्लोबल एनवायरनमेंट फैसिलिटी (GEF)" : "Global Environment Facility", 
      org: "Washington DC (USA)",
      desc: isHi ? "पर्यावरण के प्रति वैश्विक योगदान के लिए वाशिंगटन डीसी में सम्मानित।" : "Recognized in Washington DC for significant contribution to the environment.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=600"
    },
    { 
      year: "2019", 
      title: isHi ? "गौरव सम्मान" : "Gaurav Samman", 
      org: "Jago Bharat",
      desc: isHi ? "प्लास्टिक अपशिष्ट प्रबंधन में उत्कृष्ट प्रदर्शन के लिए।" : "Excellence work of Plastic Waste Management.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600"
    },
    { 
      year: "2018", 
      title: isHi ? "3R एक्सीलेंस अवार्ड" : "3R Excellence Award", 
      org: isHi ? "भारत सरकार" : "Govt. of India",
      desc: isHi ? "एशिया और प्रशांत के 8वें क्षेत्रीय 3R फोरम में पुरस्कार।" : "Awarded at the 8th Regional 3R forum in Asia and the Pacific.",
      image: "https://images.unsplash.com/photo-1579546647302-d830214f8a6d?q=80&w=600"
    },
    { 
      year: "2018", 
      title: isHi ? "स्वच्छता सम्मान पुरस्कार" : "Swachhta Samman Award", 
      org: isHi ? "मध्य प्रदेश सरकार" : "Govt. of Madhya Pradesh",
      desc: isHi ? "शहरी अपशिष्ट प्रबंधन में उत्कृष्ट योगदान के लिए।" : "Contribution to urban waste management.",
      image: "https://images.unsplash.com/photo-1569929233287-f0565228c4d4?q=80&w=600"
    },
    { 
      year: "2018", 
      title: isHi ? "अर्थ केयर अवार्ड्स" : "Earth Care Awards", 
      org: "JSW & Times of India",
      desc: isHi ? "प्लास्टिक अपशिष्ट प्रबंधन के अभिनव प्रयासों के लिए।" : "Recognized for Plastic Waste Management.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600"
    },
    { 
      year: "2017", 
      title: isHi ? "प्लास्टिक वेस्ट मैनेजमेंट राज्य स्तरीय पुरस्कार" : "State Level Award", 
      org: isHi ? "मध्य प्रदेश सरकार" : "Govt. of Madhya Pradesh",
      desc: isHi ? "राज्य स्तर पर प्लास्टिक कचरा प्रबंधन में श्रेष्ठता।" : "Recognized for State-level Plastic Waste Management.",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=600"
    },
    { 
      year: "2017", 
      title: isHi ? "गौरव प्रतीक अवार्ड" : "Gaurav Prateek Award", 
      org: "Municipal Corporation, Bhopal",
      desc: isHi ? "अपशिष्ट प्रबंधन और सामाजिक उत्थान में योगदान।" : "Contribution to waste management and social upliftment.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600"
    },
    { 
      year: "2017", 
      title: isHi ? "अर्थ डे नेटवर्क अवार्ड" : "Earth Day Network Award", 
      org: "Earth Day Network (USA)",
      desc: isHi ? "प्लास्टिक के प्रभावी पुन: उपयोग और लैंडफिल बोझ कम करने के लिए।" : "Effectively Reuse Plastic and thus reduce it overloading landfills.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=600"
    },
    { 
      year: "2014", 
      title: isHi ? "यशवंत राव केलकर युवा पुरस्कार" : "Professor Yashwant Rao Kelkar Award", 
      org: "ABVP, Bhuvaneshwar",
      desc: isHi ? "प्लास्टिक कचरे पर अग्रणी कार्य और कचरा बीनने वालों को रोजगार के लिए।" : "Pioneer Work of plastic waste, employment of rag pickers.",
      image: "https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?q=80&w=600"
    },
    { 
      year: "2013", 
      title: isHi ? "प्लास्टिक कचरे पर उत्कृष्ट कार्य" : "Excellence Work of Plastic Waste", 
      org: "MPPCB, Govt. of M.P.",
      desc: isHi ? "जागरूकता गतिविधियों और सेमिनार के आयोजन के लिए।" : "Recognition for Seminar and Awareness Activities.",
      image: "https://images.unsplash.com/photo-1579546647302-d830214f8a6d?q=80&w=600"
    },
    { 
      year: "2012", 
      title: isHi ? "ग्लोबल अचीवर्स अवार्ड्स" : "Global Achievers Awards", 
      org: "Economic Development Forum",
      desc: isHi ? "समाज सेवा के क्षेत्र में उपलब्धि।" : "Economic Development Forum For Social Services.",
      image: "https://images.unsplash.com/photo-1569929233287-f0565228c4d4?q=80&w=600"
    },
    { 
      year: "2008", 
      title: isHi ? "सर सैयद अवार्ड" : "Sir Syed Award", 
      org: "Bhopal",
      desc: isHi ? "अपशिष्ट प्रबंधन के क्षेत्र में योगदान।" : "Recognized for Waste Management.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfb] pb-32 selection:bg-[#FFBF00] selection:text-[#3e2723]">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-44 pb-24 px-6 md:px-14 overflow-hidden bg-[#3e2723]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFBF00]/5 -skew-x-12 translate-x-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.button 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            onClick={() => navigate(-1)} 
            className="mb-12 inline-flex items-center gap-3 text-[#FFBF00]/60 hover:text-[#FFBF00] transition-colors text-[10px] font-black uppercase tracking-[0.4em]"
          >
            <ArrowLeft size={14} /> {isHi ? "वापस जाएं" : "GO BACK"}
          </motion.button>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-[8.5rem] font-[1000] text-white leading-[0.85] tracking-tighter uppercase italic"
          >
            {isHi ? "हमारी" : "OUR"} <br />
            <span className="text-[#FFBF00] not-italic">
              {isHi ? "विरासत" : "LEGACY."}
            </span>
          </motion.h1>
          <p className="mt-12 text-[#FFBF00]/60 text-xl font-bold uppercase italic border-l-4 border-[#FFBF00] pl-8 max-w-2xl">
            {isHi ? "दो दशकों का समर्पण और 16+ राष्ट्रीय एवं अंतर्राष्ट्रीय पुरस्कार।" : "Two decades of dedication and 16+ National & International Honors."}
          </p>
        </div>
      </section>

      {/* 2. FULL AWARDS GRID (ALL 16) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-14 relative -mt-16 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allAwards.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-[#3e2723]/10 border-4 border-[#3e2723]/5 flex flex-col h-full group"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img src={award.image} alt={award.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/80 to-transparent opacity-60" />
                <div className="absolute top-6 right-6 bg-[#FFBF00] text-[#3e2723] px-4 py-1 rounded-full text-[10px] font-[1000] shadow-xl uppercase italic">
                  {award.year}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4 text-[#FFBF00]">
                    <Trophy size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#3e2723]/40 group-hover:text-[#FFBF00] transition-colors">{award.org}</span>
                </div>
                <h3 className="text-xl font-[1000] text-[#3e2723] uppercase italic leading-tight tracking-tighter mb-4">
                  {award.title}
                </h3>
                <p className="text-[#3e2723]/50 text-[10px] font-bold uppercase leading-relaxed mb-8 flex-grow">
                  {award.desc}
                </p>

                {/* Card Footer Details */}
                <div className="pt-6 border-t border-[#3e2723]/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#3e2723]">
                      <Calendar size={12} /> {award.year}
                   </div>
                   <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#3e2723]">
                      <MapPin size={12} /> {award.org.includes("USA") ? "Global" : "National"}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-44 px-6 text-center bg-[#fcfcfb]">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-24 bg-[#3e2723] rounded-[2rem] flex items-center justify-center mx-auto mb-12 rotate-12 shadow-2xl">
            <Medal size={48} className="text-[#FFBF00]" />
          </div>
          <h2 className="text-5xl md:text-8xl font-[1000] text-[#3e2723] uppercase italic tracking-tighter leading-[0.9] mb-12">
            RECOGNIZED FOR <br/><span className="text-[#FFBF00]">EXCELLENCE.</span>
          </h2>
          <button className="px-14 py-8 bg-[#3e2723] text-[#FFBF00] rounded-3xl font-[1000] uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl active:scale-95">
            Partner with Sarthak
          </button>
        </div>
      </section>

      {/* Background Decor */}
      <div className="fixed bottom-0 right-0 text-[30rem] font-[1000] text-[#3e2723]/[0.02] pointer-events-none select-none uppercase italic leading-none -mb-32 -mr-32">
        AWARDS
      </div>
    </main>
  );
};

export default AchievementsPage;