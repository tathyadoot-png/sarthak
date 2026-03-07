"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, Calendar, MapPin, ArrowLeft, Trophy } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

type ContextType = { lang: "hi" | "en" };

const AllAchievements = () => {
  const { lang } = useOutletContext<ContextType>(); 
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
      org: isHi ? "आवास और शहरी मामलों के मंत्रालय, भारत सरकार" : "Ministry of Housing and Urban Affairs, Govt. of India",
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
      title: isHi ? "प्लास्टिक वेस्ट मैनेजमेंट राज्य स्तरीय पुरस्कार" : "State Level Awards for Plastic Waste Management", 
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
      title: isHi ? "प्रो. यशवंत राव केलकर युवा पुरस्कार" : "Professor Yashwant Rao Kelkar Youth Award", 
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
    <main className="min-h-screen bg-white pb-20 font-sans">
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[80%] bg-emerald-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[80%] bg-blue-50 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => navigate(-1)} className="mb-8 inline-flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors text-[10px] font-black uppercase tracking-[0.3em]">
            <ArrowLeft size={14} /> {isHi ? "वापस जाएं" : "Go Back"}
          </motion.button>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-[1000] text-slate-900 tracking-tighter leading-[0.85] mb-6">
            {isHi ? <>हमारी <span className="text-emerald-500 italic">जीत।</span></> : <>Our <span className="text-emerald-500 italic">Legacy.</span></>}
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            {isHi ? "दो दशकों की मेहनत और पर्यावरण के प्रति हमारी अटूट निष्ठा का प्रमाण।" : "A celebration of two decades of relentless dedication to our planet."}
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAwards.map((award, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col hover:border-emerald-100 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <img src={award.image} alt={award.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-black text-slate-900 shadow-sm border border-slate-100">{award.year}</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-emerald-600 mb-3">
                   <Trophy size={14} className="fill-emerald-600/10" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{award.org}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-4 group-hover:text-emerald-600 transition-colors">{award.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{award.desc}</p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                   <div className="flex items-center gap-2"><Calendar size={12} className="text-emerald-500" /> {award.year}</div>
                   <div className="flex items-center gap-2"><MapPin size={12} className="text-emerald-500" /> {award.org.includes("USA") ? "Global" : "India"}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllAchievements;