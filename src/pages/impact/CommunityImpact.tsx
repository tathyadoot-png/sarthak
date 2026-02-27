"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Leaf, 
  TrendingUp, 
  Award, 
  Globe, 
  CheckCircle2,
  Users2,
  Gift,
  QrCode,
  MessageSquare,
  ArrowRight,
  Zap
} from "lucide-react";

const CommunityImpact = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="md:pt-40 pt-28 pb-32 bg-[#F9FBFA] text-slate-900 selection:bg-emerald-100 overflow-hidden">
      
      {/* 🔹 HERO: 27+ Years of Leadership */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-32 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Award size={12} /> 27+ Years of Community Leadership
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-900">
              {isHi ? "जन-भागीदारी से" : "Powered by"}<br/>
              <span className="text-emerald-600 italic">{isHi ? "परिवर्तन" : "People Power"}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10 font-medium">
              Sarthak pioneers ragpicker inclusion and SHG-based operations. We believe true transformation happens when marginalized communities become empowered stakeholders.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-12 pt-8 border-t border-slate-200">
               <div>
                  <div className="text-4xl font-black text-emerald-600">19,000+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Waste Workers Trained</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-emerald-600">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Community-Led Model</div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
            <div className="aspect-video rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Community Meeting" 
              />
              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-emerald-50">
               <div className="p-3 bg-emerald-500 text-white rounded-2xl"><Globe size={24}/></div>
               <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Recognized By</p>
                  <p className="text-sm font-bold text-slate-800 tracking-tight">World Bank, UNDP & GEF</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 THE BHOPAL MODEL: Stats Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="bg-emerald-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] -z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                The Bhopal Model:<br/>A Testament to People Power
              </h2>
              <p className="text-emerald-100/70 text-lg font-medium mb-12">
                This isn't just waste management — it's <span className="text-white underline decoration-emerald-400 underline-offset-8">social transformation</span>.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "5-6 MT Daily Collection", desc: "Managed entirely by trained community members." },
                  { title: "16 Ward Expansion", desc: "Driven entirely by public demand for the service." },
                  { title: "300+ Delegations", desc: "Visited from across India to learn our participation methods." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <CheckCircle2 className="text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg leading-none mb-1">{item.title}</h4>
                      <p className="text-sm text-emerald-200/60 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-10 bg-emerald-800 rounded-[3rem] flex flex-col justify-end gap-4 border border-emerald-700/50">
                  <h3 className="text-5xl font-black tracking-tighter">90%</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Segregation Accuracy at MRFs</p>
               </div>
               <div className="p-10 bg-white text-slate-900 rounded-[3rem] flex flex-col justify-end gap-4 shadow-xl">
                  <Heart size={40} className="text-emerald-600" />
                  <h3 className="text-2xl font-black tracking-tight leading-none italic uppercase">Lives Transformed</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Formalizing & Empowering Ragpicker Families</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 WASTE TO WEALTH: Process Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Waste to Wealth Ecosystem</h2>
          <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Collection", title: "SHG Segregation", desc: "SHG-run centers organize community plastic waste.", icon: <Users2 /> },
            { label: "Processing", title: "Pelletization", desc: "Local units employ community members in manufacturing.", icon: <Zap /> },
            { label: "Production", title: "Enterprises", desc: "Women-led enterprises create bags, cushions & boards.", icon: <Heart /> },
            { label: "Market", title: "Village Sales", desc: "Entrepreneurs sell eco-friendly tiles and benches.", icon: <Globe /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-2">{item.label}</p>
              <h3 className="text-xl font-black tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 THE MECHANISM: How we transform citizens */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mb-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase italic">Building Stakeholders, Not just Service Users</h2>
            <div className="space-y-4">
              {[
                { icon: <MessageSquare />, title: "Intensive IEC Drives", desc: "Nukkad nataks (street theater) & door-to-door rallies." },
                { icon: <Users />, title: "Community Ambassadors", desc: "Trained champions serving as local change agents." },
                { icon: <Gift />, title: "Reward-Based Programs", desc: "Incentive systems that celebrate regular participation." },
                { icon: <QrCode />, title: "QR Tracking & Dashboards", desc: "Tech-enabled monitoring accessible to everyone." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100 group">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-slate-400 group-hover:text-emerald-600 shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 p-2 rounded-[4rem] relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl" />
            <div className="bg-white rounded-[3.8rem] p-10 md:p-16">
               <h3 className="text-2xl font-black italic uppercase mb-8">Triple Impact Model</h3>
               <div className="space-y-12">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Economic</span>
                    <span className="text-xl font-black text-slate-900">Income Generation</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Environmental</span>
                    <span className="text-xl font-black text-slate-900">Zero-Waste Footprint</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Social</span>
                    <span className="text-xl font-black text-slate-900">Community Pride</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 POLICY ALIGNMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="bg-slate-100 rounded-[3rem] p-12 text-center border border-slate-200">
           <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Global Alignment</h3>
           <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">
              <span className="text-2xl font-black tracking-tighter">UN SDGs 11 & 12</span>
              <span className="text-2xl font-black tracking-tighter">EPR FRAMEWORK</span>
              <span className="text-2xl font-black tracking-tighter">PLASTIC TREATY 24-25</span>
              <span className="text-2xl font-black tracking-tighter">JANBHAGIDARI</span>
           </div>
        </div>
      </section>

    </div>
  );
};

export default CommunityImpact;