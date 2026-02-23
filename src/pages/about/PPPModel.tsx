import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Building2, Handshake, ShieldCheck } from "lucide-react";

const PPPModel = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  return (
    <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-[#00a651] text-[#00a651] text-xs font-bold uppercase tracking-widest">
              Success Strategy
            </div>
            <h3 className="text-5xl font-black leading-tight">
              {isHi ? "सार्वजनिक-निजी भागीदारी (PPP) मॉडल" : "The Power of PPP Model"}
            </h3>
            <p className="text-gray-400 text-lg">
              {isHi 
                ? "हम सरकार, निजी कंपनियों और समुदायों के बीच एक सेतु का काम करते हैं। हमारा मॉडल संसाधनों के अधिकतम उपयोग और दीर्घकालिक प्रभाव सुनिश्चित करता है।" 
                : "We act as a bridge between the government, private sector, and communities. Our model ensures maximum resource utilization and long-term sustainability."}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00a651]/20 rounded-xl text-[#00a651]"><Building2 size={24}/></div>
                  <div>
                    <h5 className="font-bold">{isHi ? "सरकारी सहयोग" : "Govt Support"}</h5>
                    <p className="text-xs text-gray-500">{isHi ? "नीति और बुनियादी ढांचा" : "Policy & Infrastructure"}</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2b3291]/20 rounded-xl text-[#2b3291]"><Handshake size={24}/></div>
                  <div>
                    <h5 className="font-bold">{isHi ? "निजी निवेश" : "Private CSR"}</h5>
                    <p className="text-xs text-gray-500">{isHi ? "तकनीक और फंडिंग" : "Tech & Funding"}</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Visual representation of PPP */}
            <div className="aspect-square bg-gradient-to-br from-[#2b3291] to-[#00a651] rounded-full flex items-center justify-center p-12 relative shadow-2xl">
               <div className="bg-black/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center">
                  <ShieldCheck size={60} className="mx-auto mb-6 text-[#00a651]" />
                  <p className="text-2xl font-black uppercase tracking-tighter">
                    {isHi ? "सस्टेनेबल इम्पैक्ट" : "Sustainable Impact"}
                  </p>
               </div>
               
               {/* Decorative Orbits */}
               <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow" />
               <div className="absolute inset-4 border border-white/10 rounded-full animate-reverse-spin" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PPPModel;