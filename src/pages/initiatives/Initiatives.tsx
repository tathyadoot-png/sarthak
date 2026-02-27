"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import {
  Recycle,
  Zap,
  Leaf,
  Users,
  ArrowRight,
  ShieldCheck,
  FileDown,
  Handshake
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const InitiativesPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";
  const navigate = useNavigate();


  const initiatives = [
    {
      title: isHi ? "प्लास्टिक कचरा प्रबंधन" : "Plastic Waste Management",
      id: "plastic",
      icon: <Recycle className="w-8 h-8 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
      description: isHi
        ? "सामुदायिक संग्रह और औद्योगिक साझेदारी के माध्यम से प्लास्टिक कचरा प्रबंधन के 'भोपाल मॉडल' का नेतृत्व।"
        : "Pioneering the 'Bhopal Model' of plastic waste management through community-led collection and industrial partnerships.",
      features: isHi ? [
        "डोर-टू-डोर संग्रह और SHG संचालन",
        "सुरक्षित निपटान के लिए 10+ सीमेंट उद्योगों के साथ साझेदारी",
        "40,000 किमी+ सड़क निर्माण में प्लास्टिक का उपयोग",
        "नगर निगमों के साथ स्थायी PPP मॉडल"
      ] : [
        "Door-to-door collection & SHG operations",
        "Partnerships with 10+ cement industries for safe disposal",
        "Shredded MLP used in 40,000km+ of road construction",
        "Sustainable PPP model with Municipal Corporations"
      ],
      color: "bg-emerald-50 border-emerald-100",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      title: isHi ? "ई-कचरा प्रबंधन" : "E-Waste Management",
      id: "ewaste",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80",
      description: isHi
        ? "विषाक्त पर्यावरणीय रिसाव को रोकने के लिए अधिकृत संग्रह और जागरूकता के माध्यम से इलेक्ट्रॉनिक कचरे का सुरक्षित प्रबंधन।"
        : "Safely managing electronic waste through authorized collection and awareness to prevent toxic environmental leakage.",
      features: isHi ? [
        "अधिकृत ई-कचरा संग्रह केंद्र",
        "शहर भर में पिकअप के लिए समर्पित 'ई-कचरा एम्बुलेंस'",
        "प्रमाणित भागीदारों के माध्यम से सुरक्षित निराकरण",
        "खतरनाक कचरे पर नागरिक जागरूकता अभियान"
      ] : [
        "Authorized E-Waste collection centers",
        "Dedicated 'E-Waste Ambulance' for city-wide pickup",
        "Safe dismantling through certified partnerships",
        "Citizen awareness campaigns on hazardous waste"
      ],
      color: "bg-blue-50 border-blue-100",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: isHi ? "जैविक कचरा समाधान" : "Organic Waste Solutions",
      id: "organic",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80",
      description: isHi
        ? "विकेंद्रीकृत प्रसंस्करण और सामुदायिक खाद के माध्यम से जैविक कचरे को धन में बदलना।"
        : "Transforming organic waste into wealth through decentralized processing and community composting.",
      features: isHi ? [
        "सामुदायिक आधारित खाद प्रणाली",
        "नवीकरणीय ऊर्जा के लिए बायोगैस प्रणाली",
        "विकेंद्रीकृत जैविक कचरा प्रसंस्करण इकाइयां",
        "जैविक खाद के लिए स्थानीय बाजारों का निर्माण"
      ] : [
        "Community-based composting systems",
        "Biogas systems for renewable energy",
        "Decentralized organic waste processing units",
        "Creation of local markets for organic compost"
      ],
      color: "bg-green-50 border-green-100",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      title: isHi ? "सामाजिक समावेश और आजीविका" : "Social Inclusion & Livelihood",
      id: "social",
      icon: <Users className="w-8 h-8 text-amber-500" />,
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80",
      description: isHi
        ? "19,000+ कचरा बीनने वालों (सार्थक कर्मियों) को औपचारिक अर्थव्यवस्था में एकीकृत कर उन्हें सशक्त बनाना।"
        : "Empowering 19,000+ waste workers (Sarthak Karmis) by integrating them into the formal circular economy.",
      features: isHi ? [
        "व्यावसायिक क्षमता निर्माण और प्रशिक्षण",
        "परिवारों के लिए स्वास्थ्य और शैक्षिक सहायता",
        "SHGs और बैंकिंग के माध्यम से वित्तीय समावेशन",
        "कचरा बीनने वाले समुदायों के लिए गरिमा और सामाजिक सुरक्षा"
      ] : [
        "Professional capacity building & training",
        "Healthcare and educational support for families",
        "Financial inclusion through SHGs and banking",
        "Dignity and social security for ragpicker communities"
      ],
      color: "bg-amber-50 border-amber-100",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#fcfcfd] overflow-hidden">
      {/* 🔹 HERO SECTION: Compact & Modern */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-14 pt-10 pb-16 text-center">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-50/50 blur-[100px] -z-10" />

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00a651] border border-emerald-100"
          >
            <div className="h-1 w-1 rounded-full bg-[#00a651] animate-pulse" />
            <span className="font-black text-[9px] uppercase tracking-[0.3em]">
              {isHi ? "पहल" : "Our Initiatives"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-[1000] text-[#1a1f5c] tracking-tight leading-tight"
          >
            {isHi ? "कचरा प्रबंधन परियोजनाएं" : "Solid Waste Management"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {isHi
              ? "1998 से, सार्थक कचरे को धन में बदलने वाले PPP मॉडल का सफलतापूर्वक संचालन कर रहा है।"
              : "Since 1998, Sarthak has been leading sustainable PPP models that transform waste into community wealth."}
          </motion.p>
        </div>
      </section>



      {/* 🔹 INITIATIVES GRID */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 space-y-32 md:space-y-48">
        {initiatives.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-emerald-50 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              {/* Floating Info */}
              <motion.div
                whileHover={{ y: -5 }}
                className="absolute -bottom-8 -right-4 md:right-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 z-20 hidden md:block max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-xl ${item.color}`}>{item.icon}</div>
                </div>
                <p className="text-[10px] font-black text-[#1a1f5c] uppercase leading-tight tracking-tight">
                  {isHi ? "बड़े पैमाने पर प्रमाणित मॉडल" : "Proven Model for Scale"}
                </p>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-5 mb-8">
                <div className={`p-5 rounded-3xl ${item.color} border shadow-inner`}>
                  {item.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a1f5c] uppercase tracking-tighter leading-none">
                  {item.title}
                </h2>
              </div>

              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                {item.description}
              </p>

              <ul className="grid grid-cols-1 gap-5 mb-12">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="p-1 bg-emerald-50 rounded-full mt-1">
                      <ShieldCheck className="w-5 h-5 text-[#00a651] shrink-0" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(`/initiatives/${item.id}`)}
                className={`flex items-center gap-3 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1 ${item.buttonColor}`}
              >
                {isHi ? "अधिक जानकारी" : "Learn More"}
                <ArrowRight size={18} />
              </button>

            </div>
          </motion.div>
        ))}
      </section>

      {/* 🔹 BOTTOM CTA */}
      <section className="mt-40 max-w-6xl mx-auto px-6">
        <div className="bg-[#1a1f5c] rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00a651] opacity-20 blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400 opacity-10 blur-[120px] -ml-48 -mb-48"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-[1000] mb-8 uppercase tracking-tighter leading-none">
              {isHi ? "क्या आप इस मॉडल को लागू करना चाहते हैं?" : "Ready to implement this model?"}
            </h2>
            <p className="text-blue-100/80 mb-12 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              {isHi
                ? "हमारे पब्लिक प्राइवेट पार्टनरशिप (PPP) मॉडल में स्थायी प्रभाव के लिए नगर निगम, प्रदूषण बोर्ड, उद्योग और बैंक शामिल हैं।"
                : "Our Public Private Partnership (PPP) model involves Municipal Corporations, Pollution Boards, Industries, and Banks for sustainable impact."}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-[#00a651] hover:bg-white hover:text-[#1a1f5c] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl flex items-center gap-3">
                <Handshake size={20} /> {isHi ? "हमारे साथ जुड़ें" : "Partner With Us"}
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3">
                <FileDown size={20} /> {isHi ? "प्रोफाइल डाउनलोड करें" : "Download Profile"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;