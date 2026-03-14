import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Recycle, 
  Trees, 
  Zap, 
  Droplets, 
  ArrowRight 
} from 'lucide-react';
// 1. useOutletContext ko import karein
import { useOutletContext } from "react-router-dom";

const PaperWaste = () => {
  // 2. Context se lang nikalne ke liye hook use karein
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const stats = [
    { 
      label: isHi ? "बचाए गए पेड़" : "Trees Saved", 
      value: "17", 
      unit: isHi ? "प्रति टन" : "per ton",
      icon: <Trees className="text-green-600" /> 
    },
    { 
      label: isHi ? "ऊर्जा की बचत" : "Energy Saved", 
      value: "40%", 
      unit: "", 
      icon: <Zap className="text-yellow-500" /> 
    },
    { 
      label: isHi ? "पानी की बचत" : "Water Saved", 
      value: "26k", 
      unit: "Liters", 
      icon: <Droplets className="text-blue-500" /> 
    },
  ];

  const process = [
    {
      title: isHi ? "संग्रहण" : "Collection",
      desc: isHi ? "कार्यालयों और संस्थानों से कागज का पृथक्करण।" : "Segregation of paper waste from offices & institutions.",
    },
    {
      title: isHi ? "छंटाई" : "Sorting",
      desc: isHi ? "कागज की गुणवत्ता के आधार पर वर्गीकरण।" : "Grading based on paper quality and type.",
    },
    {
      title: isHi ? "पल्पिंग" : "Pulping",
      desc: isHi ? "पानी के साथ मिलाकर लुगदी तैयार करना।" : "Creating slurry by mixing with water and chemicals.",
    },
    {
      title: isHi ? "नया उत्पाद" : "Final Product",
      desc: isHi ? "पुनर्चक्रित कागज और स्टेशनरी का निर्माण।" : "Manufacturing recycled sheets and stationery.",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-slate-100"
        >
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <FileText size={16} className="text-[#FFBF00]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#3e2723]">
                {isHi ? "सतत समाधान" : "Sustainable Solutions"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#3e2723] leading-tight uppercase">
              {isHi ? "कागज कचरा प्रबंधन" : "Paper Waste Management"}
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              {isHi 
                ? "हम रद्दी कागज को मूल्यवान संसाधनों में बदलकर वनों के संरक्षण और कार्बन फुटप्रिंट को कम करने में मदद करते हैं।" 
                : "Transforming discarded paper into valuable resources to protect our forests and reduce carbon footprints."}
            </p>
          </div>
          <div className="flex-1 relative">
             <div className="w-full h-80 bg-[#FFBF00]/10 rounded-3xl flex items-center justify-center">
                <Recycle size={120} className="text-[#FFBF00] animate-spin-slow" />
             </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#3e2723]">{stat.value}</span>
                <span className="text-sm font-bold text-slate-400 uppercase">{stat.unit}</span>
              </div>
              <p className="text-slate-600 font-bold mt-1 uppercase text-xs tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#3e2723] uppercase tracking-tighter">
            {isHi ? "पुनर्चक्रण प्रक्रिया" : "The Recycling Process"}
          </h2>
        </div>
        

[Image of paper recycling process flow chart]

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {process.map((step, i) => (
            <div key={i} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="absolute top-4 right-4 text-4xl font-black text-[#FFBF00]/20">0{i+1}</span>
              <h3 className="text-sm font-black text-[#3e2723] uppercase mb-2">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-[#3e2723] rounded-[40px] p-10 md:p-16 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            {isHi ? "हमारे साथ जुड़ें" : "Join Our Circular Journey"}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {isHi 
              ? "क्या आपके पास भारी मात्रा में कागज कचरा hai? इसे सही तरीके से रिसाइकिल करने में हम आपकी मदद कर सकते हैं।" 
              : "Have bulk paper waste? Let us help you recycle it responsibly and efficiently."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#FFBF00] text-[#3e2723] px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center gap-2">
              {isHi ? "संपर्क करें" : "Contact Us"}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaperWaste;