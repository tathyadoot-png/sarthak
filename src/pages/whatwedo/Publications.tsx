"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  FileText, 
  Search, 
  FileDown,
  Globe,
  ArrowRight
} from 'lucide-react';
import { useOutletContext } from "react-router-dom";

const Publications = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const documents = [
    {
      title: isHi ? "वार्षिक प्रभाव रिपोर्ट 2025" : "ANNUAL IMPACT REPORT 2025",
      type: "PDF",
      desc: isHi ? "पिछले वर्ष के हमारे सभी प्रोजेक्ट्स और उनके परिणामों का डेटा।" : "Comprehensive data of all our projects and their outcomes over the past year.",
      date: "JAN 2026",
      fileUrl: "/docs/annual-report-2025.pdf", // PDF Path
      category: "Report"
    },
    {
      title: isHi ? "प्लास्टिक वेस्ट मैनेजमेंट रूल्स" : "PLASTIC WASTE MGMT RULES",
      type: "LINK",
      desc: isHi ? "भारत सरकार द्वारा जारी नवीनतम प्लास्टिक कचरा प्रबंधन नियम।" : "Latest Plastic Waste Management rules issued by the Govt. of India.",
      date: "DEC 2025",
      externalLink: "https://cpcb.nic.in/plastic-waste-rules/", // External Link
      category: "Policy"
    },
    {
      title: isHi ? "सार्थक मॉडल: एक केस स्टडी" : "SARTHAK MODEL: A CASE STUDY",
      type: "PDF",
      desc: isHi ? "भोपाल में लागू किए गए कचरा प्रबंधन मॉडल का विस्तृत अध्ययन।" : "An in-depth study of the waste management model implemented in Bhopal.",
      date: "OCT 2025",
      fileUrl: "/docs/case-study-bhopal.pdf",
      category: "Research"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fcfcfb]">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#3e2723] rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <BookOpen size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-widest italic">
                {isHi ? "संसाधन पुस्तकालय" : "RESOURCE LIBRARY"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-[0.85] mb-8">
              {isHi ? "ज्ञान और" : "KNOWLEDGE &"} <br />
              <span className="text-[#FFBF00]">{isHi ? "दस्तावेज़" : "DOCUMENTS"}</span>
            </h1>
            <p className="text-white/50 text-lg font-bold">
              {isHi 
                ? "हमारे सभी रिसर्च पेपर्स, रिपोर्ट्स और महत्वपूर्ण लिंक्स यहाँ प्राप्त करें।" 
                : "Access all our research papers, annual reports, and important industry links here."}
            </p>
          </div>
          <FileText className="absolute right-[-20px] bottom-[-20px] size-80 text-white/5 -rotate-12" />
        </motion.div>
      </section>

      {/* 🔹 Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className={`px-3 py-1 rounded-lg text-[9px] font-black tracking-widest uppercase ${doc.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                    {doc.type}
                  </div>
                  <span className="text-[10px] font-black text-slate-300">{doc.date}</span>
                </div>
                
                <h3 className="text-xl font-[1000] text-[#3e2723] uppercase tracking-tighter mb-4 leading-tight group-hover:text-[#FFBF00] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-slate-400 font-bold text-xs leading-relaxed mb-8">
                  {doc.desc}
                </p>
              </div>

              <div>
                {doc.type === "PDF" ? (
                  <a 
                    href={doc.fileUrl} 
                    download 
                    className="w-full bg-[#3e2723] text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#FFBF00] hover:text-[#3e2723] transition-all"
                  >
                    <FileDown size={16} />
                    {isHi ? "पीडीएफ डाउनलोड" : "DOWNLOAD PDF"}
                  </a>
                ) : (
                  <a 
                    href={doc.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full border-2 border-[#3e2723] text-[#3e2723] py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#3e2723] hover:text-white transition-all"
                  >
                    <Globe size={16} />
                    {isHi ? "लिंक देखें" : "VIEW LINK"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Info Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#FFBF00] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none mb-4">
              {isHi ? "अधिक जानकारी" : "NEED SPECIFIC"} <br />
              <span className="opacity-40">{isHi ? "चाहिए?" : "RESOURCES?"}</span>
            </h2>
            <p className="text-[#3e2723] font-bold text-sm">
              {isHi 
                ? "विशेष केस स्टडीज या डेटा सेट्स के लिए हमारी टीम से संपर्क करें।" 
                : "Contact our research wing for specific datasets or historical impact case studies."}
            </p>
          </div>
          <button className="bg-[#3e2723] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:scale-105 transition-all">
            {isHi ? "संपर्क करें" : "GET IN TOUCH"}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Publications;