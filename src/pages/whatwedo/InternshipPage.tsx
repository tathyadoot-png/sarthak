"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  FileSearch, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Globe
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const InternshipPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const responsibilities = [
    {
      title: isHi ? "अनुसंधान और डेटाबेस" : "Research & Database",
      desc: isHi ? "क्षेत्र के आगामी संसाधनों और कार्यक्रमों का क्यूरेशन।" : "Curation of upcoming resources and events from the region."
    },
    {
      title: isHi ? "अभियान रणनीति" : "Campaign Strategy",
      desc: isHi ? "SASEANEE की संचार रणनीतियों को विकसित करने में योगदान।" : "Contribute to developing campaign and communication strategies."
    },
    {
      title: isHi ? "सामग्री विकास" : "Content Development",
      desc: isHi ? "सोशल मीडिया पोस्ट, न्यूज़लेटर्स और रिपोर्ट तैयार करना।" : "Develop materials like social media posts, Newsletters or reports."
    },
    {
      title: isHi ? "डिजिटल समन्वय" : "Digital Coordination",
      desc: isHi ? "सोशल मीडिया चैनल और वेबसाइट विकास का प्रबंधन।" : "Coordination in handling social media and website development."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fafafa]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFBF00]/10 px-4 py-2 rounded-full border border-[#FFBF00]/20">
                <Briefcase size={16} className="text-[#3e2723]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3e2723]">
                  {isHi ? "करियर अवसर" : "Career Opportunity"}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
                CEE <span className="text-[#FFBF00]">INTERNSHIP</span> <br />
                <span className="text-2xl md:text-4xl opacity-50 font-black italic">PROGRAMME 2026</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <MapPin size={18} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">New Delhi (Hybrid)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <Calendar size={18} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">6 Months</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-[#3e2723] rounded-[2.5rem] p-8 text-white flex flex-col justify-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFBF00] mb-2">Apply Before</p>
              <h3 className="text-3xl font-black mb-6">15th October</h3>
              <a 
                href="https://forms.gle/your-form-link" // Yahan apna link dalein
                target="_blank"
                className="w-full bg-[#FFBF00] text-[#3e2723] py-4 rounded-2xl font-black uppercase text-xs tracking-widest text-center hover:bg-white transition-colors"
              >
                {isHi ? "अभी आवेदन करें" : "Apply Now"}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* 🔹 Left Content: About & Responsibilities */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-4 flex items-center gap-3">
              <Globe className="text-[#FFBF00]" />
              About SASEANEE
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              The South and South East Asia Network for Environmental Education (SASEANEE) is a consortium of global partners and leading environmental organizations, with CEE serving as the Secretariat. The Network works to promote environmental literacy across South and South East Asia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-6">
              {isHi ? "प्रमुख जिम्मेदारियां" : "Key Responsibilities"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {responsibilities.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl group hover:border-[#FFBF00] transition-colors">
                  <h4 className="font-black text-[#3e2723] uppercase text-sm mb-2 group-hover:text-[#FFBF00] transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-slate-100 rounded-[2.5rem] p-8">
            <h2 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-6 italic">
              {isHi ? "पात्रता और कौशल" : "Qualifications & Skills"}
            </h2>
            <ul className="space-y-4">
              {[
                "Master’s degree in Environmental Science or Development Studies",
                "Proficiency in research methodologies and data analysis",
                "Strong visual design and editing skills",
                "Excellent written and verbal communication in English"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                  <span className="text-sm font-bold text-slate-600">{text}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 🔹 Right Sidebar: Takeaways */}
        <div className="space-y-8">
          <div className="bg-[#f2f2ee] rounded-[2.5rem] p-8 border border-slate-200">
            <h3 className="text-xl font-black text-[#3e2723] uppercase mb-6">{isHi ? "आपको क्या मिलेगा" : "Key Takeaways"}</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <FileSearch size={20} className="text-[#FFBF00]" />
                </div>
                <div>
                  <h5 className="font-black text-xs uppercase text-[#3e2723]">Internship Certificate</h5>
                  <p className="text-[10px] text-slate-500 font-bold mt-1">Official recognition upon completion.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <Users size={20} className="text-[#FFBF00]" />
                </div>
                <div>
                  <h5 className="font-black text-xs uppercase text-[#3e2723]">Access to Facilities</h5>
                  <p className="text-[10px] text-slate-500 font-bold mt-1">Work from CEE's resource centers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <GraduationCap size={20} className="text-[#FFBF00]" />
                </div>
                <div>
                  <h5 className="font-black text-xs uppercase text-[#3e2723]">Remuneration</h5>
                  <p className="text-[10px] text-slate-500 font-bold mt-1">Based on prior experience & skills.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#3e2723] text-white rounded-[2.5rem] p-8 text-center">
            <p className="text-xs font-bold opacity-60 mb-4 italic">Ready to make an impact?</p>
            <button className="w-full bg-white text-[#3e2723] py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
              Get Application Link
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;