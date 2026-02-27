"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Recycle, 
  Zap, 
  Leaf, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Factory 
} from "lucide-react";

const initiatives = [
  {
    title: "Plastic Waste Management",
    id: "plastic",
    icon: <Recycle className="w-8 h-8 text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80", // Replace with actual site photo
    description: "Pioneering the 'Bhopal Model' of plastic waste management through community-led collection and industrial partnerships.",
    features: [
      "Door-to-door collection & SHG operations",
      "Partnerships with 10+ cement industries for safe disposal",
      "Shredded MLP used in 40,000km+ of road construction",
      "Sustainable PPP model with Municipal Corporations"
    ],
    color: "bg-emerald-50 border-emerald-100",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700"
  },
  {
    title: "E-Waste Management",
    id: "ewaste",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80",
    description: "Safely managing electronic waste through authorized collection and awareness to prevent toxic environmental leakage.",
    features: [
      "Authorized E-Waste collection centers",
      "Dedicated 'E-Waste Ambulance' for city-wide pickup",
      "Safe dismantling through certified partnerships",
      "Citizen awareness campaigns on hazardous waste"
    ],
    color: "bg-blue-50 border-blue-100",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "Organic Waste Solutions",
    id: "organic",
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80",
    description: "Transforming organic waste into wealth through decentralized processing and community composting.",
    features: [
      "Community-based composting systems",
      "Biogas systems for renewable energy",
      "Decentralized organic waste processing units",
      "Creation of local markets for organic compost"
    ],
    color: "bg-green-50 border-green-100",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    title: "Social Inclusion & Livelihood",
    id: "social",
    icon: <Users className="w-8 h-8 text-amber-500" />,
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80",
    description: "Empowering 19,000+ waste workers (Sarthak Karmis) by integrating them into the formal circular economy.",
    features: [
      "Professional capacity building & training",
      "Healthcare and educational support for families",
      "Financial inclusion through SHGs and banking",
      "Dignity and social security for ragpicker communities"
    ],
    color: "bg-amber-50 border-amber-100",
    buttonColor: "bg-amber-600 hover:bg-amber-700"
  }
];

const InitiativesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 🔹 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#00a651] font-black text-[12px] uppercase tracking-[0.3em] block mb-4"
        >
          Our Programs
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-[#1a1f5c] tracking-tight mb-6"
        >
          Solid Waste Management <br /> Programs in India
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg text-justify max-w-3xl mx-auto leading-relaxed"
        >
          Since 1998, Sarthak has evolved as a leading agency in Madhya Pradesh, 
          pioneering PPP models that turn waste into wealth while empowering marginalized communities.
        </motion.p>
      </section>

      {/* 🔹 INITIATIVES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {initiatives.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              {/* Floating Stat or Info */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50">{item.icon}</div>
                </div>
                <p className="text-[10px] font-black text-[#1a1f5c] uppercase leading-tight">Proven Model for Scale</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${item.color} border`}>
                  {item.icon}
                </div>
                <h2 className="text-3xl font-black text-[#1a1f5c] uppercase tracking-tighter">{item.title}</h2>
              </div>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {item.description}
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <ShieldCheck className="w-5 h-5 text-[#00a651] mt-0.5 shrink-0" />
                    <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`flex items-center gap-3 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg ${item.buttonColor}`}>
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 🔹 BOTTOM CTA */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <div className="bg-[#1a1f5c] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a651] opacity-20 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Ready to implement this model?</h2>
          <p className="text-blue-100 mb-8 text-justify max-w-2xl mx-auto">
            Our Public Private Partnership (PPP) model involves Municipal Corporations, Pollution Boards, Industries, and Banks for sustainable impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#00a651] hover:bg-white hover:text-[#1a1f5c] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all">
              Partner With Us
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all">
              Download Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;  