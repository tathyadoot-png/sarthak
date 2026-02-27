// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useOutletContext } from "react-router-dom";
// import { 
//   Heart, 
//   Bike, 
//   School, 
//   Stethoscope, 
//   ShieldCheck, 
//   Zap,
//   ArrowDownRight,
//   Target,
//   UserCheck,
//   Award
// } from "lucide-react";

// const SarthakKarmis = () => {
//   const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
//   const isHi = lang === "hi";

//   const mainPillars = [
//     { id: "01", title: isHi ? "स्वास्थ्य" : "Health", icon: <Stethoscope />, color: "from-rose-500 to-orange-500" },
//     { id: "02", title: isHi ? "शिक्षा" : "Education", icon: <School />, color: "from-blue-500 to-cyan-500" },
//     { id: "03", title: isHi ? "गरिमा" : "Dignity", icon: <UserCheck />, color: "from-emerald-500 to-teal-500" },
//   ];

//   return (
//     <div className="bg-[#080808] text-white min-h-screen selection:bg-emerald-500 selection:text-black">
      
//       {/* 🔹 HERO: THE IMPACT OVERLAY */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Abstract Background Noise/Pattern */}
//         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
//         <div className="relative z-10 text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-[15vw] font-[1000] leading-none tracking-tighter uppercase mb-0 opacity-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full">
//               EMPOWER
//             </h1>
//             <h2 className="text-6xl md:text-[7rem] font-black italic tracking-[ -0.05em] leading-tight relative">
//               SARTHAK<br/>
//               <span className="text-emerald-500">{isHi ? "कर्मी" : "KARMI"}</span>
//             </h2>
//           </motion.div>

//           <div className="mt-12 flex flex-col items-center gap-6">
//             <p className="text-slate-400 font-medium max-w-lg text-lg">
//               {isHi 
//                 ? "कचरा बीनने वालों को समाज की मुख्यधारा से जोड़ना और उन्हें सशक्त बनाना।" 
//                 : "Integrating the invisible workforce into the heart of a formal circular economy."}
//             </p>
//             <div className="flex gap-4">
//               <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-widest">
//                 CPCB Authorized
//               </div>
//               <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-emerald-500">
//                 19,000+ Trained
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
//            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
//            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-500">Explore</span>
//         </div>
//       </section>

//       {/* 🔹 DUAL COLUMN IMPACT (Sticky Layout) */}
//       <section className="max-w-[1440px] mx-auto px-6 md:px-14 py-40">
//         <div className="grid lg:grid-cols-2 gap-20">
          
//           {/* Left Sticky Info */}
//           <div className="lg:sticky lg:top-40 lg:h-fit space-y-12">
//             <div className="space-y-4">
//               <Target className="text-emerald-500" size={48} />
//               <h3 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
//                 The Holistic<br/>Support System
//               </h3>
//             </div>
            
//             <div className="space-y-4">
//               {mainPillars.map((p) => (
//                 <div key={p.id} className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
//                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg`}>
//                       {p.icon}
//                    </div>
//                    <div className="flex-1">
//                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{p.id}</div>
//                       <div className="text-xl font-black uppercase italic tracking-tight">{p.title}</div>
//                    </div>
//                    <ArrowDownRight className="text-slate-700 group-hover:text-white transition-colors" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Scrolling Detailed Content */}
//           <div className="space-y-32">
            
//             {/* Education Block */}
//             <div className="group">
//                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden mb-10 relative">
//                   <img 
//                     src="https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?auto=format&fit=crop&q=80" 
//                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
//                     alt="Education" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
//                   <div className="absolute bottom-10 left-10"><School size={60} className="text-blue-500" /></div>
//                </div>
//                <h4 className="text-3xl font-black mb-6 uppercase">Education for All</h4>
//                <p className="text-slate-400 text-lg leading-relaxed">
//                  We provide free private school education for children and evening literacy classes for Sarthak Karmi adults. Education is the ultimate tool for breaking the generational cycle of poverty.
//                </p>
//             </div>

//             {/* Health Block */}
//             <div className="group">
//                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden mb-10 relative border border-white/10">
//                   <img 
//                     src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
//                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
//                     alt="Health" 
//                   />
//                   <div className="absolute inset-0 bg-rose-500/10" />
//                   <div className="absolute bottom-10 left-10"><Stethoscope size={60} className="text-rose-500" /></div>
//                </div>
//                <h4 className="text-3xl font-black mb-6 uppercase italic">Health & Maternity</h4>
//                <p className="text-slate-400 text-lg leading-relaxed">
//                  Monthly medical checkups and full maternity support in private hospitals. We treat the health of our Karmis as a priority, not an option.
//                </p>
//             </div>

//             {/* Mobility/Rickshaw Block */}
//             <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 relative overflow-hidden">
//                <Zap className="absolute -right-10 -top-10 text-white/5 w-60 h-60" />
//                <Bike size={48} className="text-amber-500 mb-8" />
//                <h4 className="text-3xl font-black mb-6">Light-Weight Mobility</h4>
//                <p className="text-slate-400 text-lg leading-relaxed">
//                  Our custom-designed light rickshaws allow Sarthak Karmis to move through the city with ease, reducing physical strain and increasing collection efficiency.
//                </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 🔹 NUKKAD NATAK: THE CULTURAL THEATER */}
//       <section className="py-40 bg-white text-slate-900 rounded-[5rem]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
//             <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] italic">
//               STREET<br/>THEATER.
//             </h2>
//             <p className="text-slate-500 font-bold max-w-xs uppercase tracking-widest text-xs border-l-2 border-slate-900 pl-4">
//               Using Nukkad Natak to fight addiction and spread environmental awareness.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="h-[600px] rounded-[3rem] overflow-hidden group">
//                <img 
//                 src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" 
//                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
//                 alt="Theater"
//                />
//             </div>
//             <div className="flex flex-col gap-4">
//                <div className="flex-1 bg-emerald-100 rounded-[3rem] p-12 flex flex-col justify-end">
//                   <h4 className="text-4xl font-black tracking-tighter mb-4 italic">De-Addiction</h4>
//                   <p className="text-emerald-800 font-medium">Stories that inspire our community to leave smoking and drinking behind.</p>
//                </div>
//                <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-end text-white">
//                   <h4 className="text-4xl font-black tracking-tighter mb-4 italic uppercase">SWM Training</h4>
//                   <p className="text-slate-400 font-medium">Visual learning for plastic segregation—making technical training fun.</p>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 THE FINAL COMMITMENT */}
//       <section className="py-40 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//            <Award className="mx-auto text-emerald-500 mb-10" size={80} />
//            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic">
//              Restoring Dignity,<br/>One Life at a Time.
//            </h2>
//            <p className="text-2xl text-slate-400 font-light mb-16">
//              From opening bank accounts to providing a global platform, Sarthak NGO is committed to the total well-being of Sarthak Karmis.
//            </p>
           
//            <div className="flex flex-wrap justify-center gap-6">
//               <button className="px-12 py-6 bg-emerald-600 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
//                 {isHi ? "हमारा समर्थन करें" : "Support the Karmis"}
//               </button>
//               <button className="px-12 py-6 bg-white/5 border border-white/10 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
//                 Download Impact Report
//               </button>
//            </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default SarthakKarmis;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { 
  Heart, 
  Bike, 
  School, 
  Stethoscope, 
  IdCard, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Quote,
  Users2,
  CheckCircle
} from "lucide-react";

const SarthakKarmis = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] selection:bg-emerald-100">
      
      {/* 🔹 SECTION 1: MINIMALIST HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-14 relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-20 right-[-5%] text-[25vw] font-black text-slate-200/40 leading-none select-none -z-0">
          HERO
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
          className="max-w-7xl mx-auto w-full relative z-10"
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            {isHi ? "सार्थक पहल" : "Humanity First"}
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-[8rem] font-[1000] tracking-tighter leading-[0.85] mb-12">
            SARTHAK<br/>
            <span className="text-emerald-600 italic">KARMIS.</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
              {isHi 
                ? "कचरा बीनने वालों को संगठित कर उन्हें 'सफाई मित्र' की पहचान और सम्मानजनक जीवन देना ही हमारा संकल्प है।" 
                : "A legacy of 27 years in transforming marginalized waste collectors into empowered environmental stewards."}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex gap-10 border-l border-slate-200 pl-10">
               <div>
                  <div className="text-4xl font-black text-slate-900">19K+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isHi ? "प्रशिक्षित" : "Trained"}</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-slate-900">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isHi ? "बीमा" : "Insured"}</div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 🔹 SECTION 2: BOLD SIDE-BY-SIDE (Education & Health) */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 py-32">
        <div className="grid lg:grid-cols-2 gap-4">
          
          {/* Education Card */}
          <div className="bg-emerald-600 rounded-[3.5rem] p-12 md:p-20 text-white flex flex-col justify-between aspect-square lg:aspect-auto">
             <School size={60} strokeWidth={1.5} className="mb-20 opacity-80" />
             <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase italic leading-none">Generational<br/>Empowerment.</h3>
                <p className="text-emerald-50 text-lg font-medium leading-relaxed opacity-90">
                  We provide free education in private schools for children of Sarthak Karmis, ensuring a brighter future for the next generation.
                </p>
             </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            {/* Health Card */}
            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-sm flex items-center gap-8">
               <div className="w-20 h-20 rounded-3xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                  <Stethoscope size={32} />
               </div>
               <div>
                  <h4 className="text-2xl font-black tracking-tight mb-2 uppercase italic">{isHi ? "स्वास्थ्य सुरक्षा" : "Medical Care"}</h4>
                  <p className="text-slate-500 text-sm font-medium">Monthly checkups and full maternity support in top-tier private hospitals.</p>
               </div>
            </div>

            {/* Bank/ID Card */}
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white flex items-center gap-8">
               <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <IdCard size={32} />
               </div>
               <div>
                  <h4 className="text-2xl font-black tracking-tight mb-2 uppercase italic">{isHi ? "वित्तीय समावेश" : "Banking Support"}</h4>
                  <p className="text-slate-400 text-sm font-medium">Helping open Bank accounts and Aadhaar cards for official identity and direct benefits.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: THE MOBILITY (Image + Info) */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 py-32">
        <div className="bg-white rounded-[4rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-xl shadow-slate-200/50">
           <div className="md:w-1/2 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1618477462141-96541349f999?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Karmi Tools"
              />
           </div>
           <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <Bike size={48} className="text-emerald-600 mb-8" />
              <h3 className="text-4xl font-black tracking-tighter mb-6 uppercase italic">Light-Weight Rickshaws</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                We engineered special light-weight rickshaws to reduce the physical toll on our workers, allowing them to collect waste efficiently across the city.
              </p>
              <div className="space-y-4">
                {['Ergonomic Design', 'High Load Capacity', 'Easy Maintenance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-slate-400">
                    <CheckCircle size={14} className="text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: AWARENESS (The Narrative) */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="text-center mb-24">
            <Zap size={48} className="mx-auto text-emerald-500 mb-6" />
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">{isHi ? "कला और जागरूकता" : "Change via Culture"}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
             <div className="relative p-12 bg-white rounded-[4rem] border border-slate-200 shadow-sm">
                <Quote className="absolute top-10 right-10 text-emerald-100" size={80} />
                <h4 className="text-2xl font-black mb-6 uppercase italic">Nukkad Natak</h4>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  Our street plays tackle heavy topics like addiction (smoking/drinking) and provide technical training on plastic segregation in a way that is engaging and memorable.
                </p>
             </div>
             <div className="flex flex-col justify-center">
                <div className="space-y-12">
                   <div>
                      <h5 className="text-4xl font-black text-emerald-600 mb-2">Evening Classes</h5>
                      <p className="text-slate-500 font-medium italic">Literacy programs for adult men and women to read and write.</p>
                   </div>
                   <div className="h-px bg-slate-200 w-24" />
                   <div>
                      <h5 className="text-4xl font-black text-slate-900 mb-2">Skill Training</h5>
                      <p className="text-slate-500 font-medium italic">Advanced handling of solid waste and plastic identification.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 5: FINAL CALL TO ACTION */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-emerald-600 rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden group shadow-2xl shadow-emerald-200">
             <Users2 className="absolute -bottom-10 -right-10 w-60 h-60 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
             <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 italic uppercase leading-none">Be a part of their<br/>Success Story.</h2>
                <p className="text-emerald-50 text-xl font-medium mb-12 opacity-80">Support Sarthak NGO in providing dignity and livelihood to thousands of Sarthak Karmis.</p>
                <button className="bg-white text-emerald-600 px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 mx-auto hover:bg-slate-900 hover:text-white transition-all">
                  {isHi ? "जुड़ें हमारे साथ" : "Partner with us"} <ArrowRight size={18} />
                </button>
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SarthakKarmis;