"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Users, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Award,
  ArrowRight,
  Handshake,
  Quote,
  Clock
} from "lucide-react";

const SocialPage = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  // 🔹 Robust Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const timeline = [
    { year: "1998", text: isHi ? "संस्था का पंजीकरण और शुरुआत" : "Registration & Humble Beginnings" },
    { year: "2010", text: isHi ? "10,000+ सार्थक कर्मियों का जुड़ाव" : "Reached 10,000+ Sarthak Karmis" },
    { year: "2024", text: isHi ? "डिजिटल समावेशन और वैश्विक पहचान" : "Digital Inclusion & Global Impact" }
  ];

  const features = [
    { 
      title: isHi ? "व्यावसायिक प्रशिक्षण" : "Vocational Training", 
      icon: <Briefcase size={28} />,
      desc: isHi ? "सार्थक कर्मियों के लिए आधुनिक कौशल विकास।" : "Advanced skill development for waste workers."
    },
    { 
      title: isHi ? "स्वास्थ्य सुरक्षा" : "Health Security", 
      icon: <ShieldCheck size={28} />,
      desc: isHi ? "नियमित चिकित्सा शिविर और बीमा सहायता।" : "Regular medical camps and insurance support."
    },
    { 
      title: isHi ? "शिक्षा पहल" : "Education First", 
      icon: <GraduationCap size={28} />,
      desc: isHi ? "श्रमिकों के बच्चों के लिए छात्रवृत्ति कार्यक्रम।" : "Scholarship programs for workers' children."
    },
    { 
      title: isHi ? "वित्तीय शक्ति" : "Financial Power", 
      icon: <Handshake size={28} />,
      desc: isHi ? "SHGs के माध्यम से बैंकिंग और बचत प्रणाली।" : "Banking and savings through SHG networks."
    }
  ];

  return (
    <div className="md:pt-40 pt-28 pb-32 bg-white overflow-hidden selection:bg-amber-100">
      
      {/* 🔹 HERO SECTION: Focus on Human Connection */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Award size={14} /> {isHi ? "19,000+ जिंदगियां बदलीं" : "19,000+ Lives Transformed"}
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-[1000] text-slate-900 tracking-tight leading-[0.9] mb-10">
              {isHi ? "मानवीय" : "Human"}<br/>
              <span className="text-amber-500">{isHi ? "गरिमा" : "Dignity"}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-10 italic">
              <Quote className="inline-block mr-2 text-amber-200" size={30} />
              {isHi 
                ? "हमारा लक्ष्य केवल कचरा प्रबंधन नहीं, बल्कि उस कचरे को बीनने वाले हाथों को समाज की मुख्यधारा में लाना है।"
                : "Our goal isn't just waste management; it's bringing the hands that pick the waste into the societal mainstream."}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-12 pt-6 border-t border-slate-100">
               <div>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">1998</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Foundation Year</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">25+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of Service</div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-amber-50 rounded-[5rem] rotate-3 blur-2xl opacity-60" />
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover"
                alt="Social Impact"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-2">Impact Story</p>
                <h3 className="text-2xl font-black leading-tight">Empowering workers<br/>across Madhya Pradesh.</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 FEATURES GRID: Clean & Interactive */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -15 }}
              className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                {f.icon}
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">{f.title}</h4>
              <p className="text-xs text-slate-400 font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🔹 TIMELINE SECTION: Heritage & Trust */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-white opacity-5"><Clock size={200} /></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-[1000] text-white uppercase tracking-tighter mb-16 text-center md:text-left">
              {isHi ? "हमारी विकास यात्रा" : "Our Journey Since 1998"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 border-l-2 border-amber-500/30 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:pt-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[9px] md:left-0 -top-[9px] w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  <h4 className="text-3xl font-black text-amber-500 mb-4">{item.year}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed uppercase text-xs tracking-widest">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 FINAL ACTION */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">
            {isHi ? "बदलाव की लहर बनें" : "Fuel the Change"}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-amber-500 hover:bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl group flex items-center justify-center gap-4">
              {isHi ? "अभी जुड़ें" : "Join the Movement"} 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-white border-2 border-slate-100 hover:border-amber-500 text-slate-900 px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all">
              {isHi ? "रिपोर्ट देखें" : "View Annual Report"}
            </button>
          </div>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em] pt-8">Sarthak Samudayik Vikas &bull; Empowering Communities</p>
        </motion.div>
      </section>

    </div>
  );
};

export default SocialPage;