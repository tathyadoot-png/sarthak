import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { TrendingUp, Heart, CreditCard, Map, ArrowRight } from "lucide-react";

const Impact = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  return (
    <div className="bg-white">
      {/* 1. BEFORE & AFTER SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#00a651] font-black uppercase tracking-widest text-xs mb-4">Transformation</h2>
          <h3 className="text-5xl font-black text-slate-900 italic">
            {isHi ? "बदलाव की तस्वीरें" : "Visual Proof of Change"}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-[3rem]">
            <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 font-bold italic">Before: Landfill Site</div>
            <div className="absolute bottom-6 left-6 bg-red-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase">Before</div>
          </div>
          <div className="group relative overflow-hidden rounded-[3rem]">
            <div className="aspect-video bg-green-100 flex items-center justify-center text-green-600 font-bold italic">After: Clean Public Space</div>
            <div className="absolute bottom-6 left-6 bg-[#00a651] text-white px-6 py-2 rounded-full font-black text-xs uppercase">After</div>
          </div>
        </div>
      </section>

      {/* 2. RAG PICKER STORY (Emotional Narrative) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl flex items-center justify-center italic text-gray-400">
              [Photo of a Sarthak Karmi]
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-slate-100">
              <Heart className="text-red-500 mb-4" fill="currentColor" />
              <p className="text-sm font-medium italic text-slate-600">
                {isHi ? '"सार्थक ने हमें कचरा बीनने वाले से पर्यावरण रक्षक बना दिया।"' : '"Sarthak turned us from rag-pickers to environmental protectors."'}
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              {isHi ? "एक सार्थक कर्मी की कहानी" : "Story of a Sarthak Karmi"}
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              {isHi 
                ? "कभी सड़कों पर कचरा बीनने वाले इन लोगों के पास आज पहचान पत्र, वर्दी और समाज में सम्मान है। हमने 3200+ लोगों को मुख्यधारा से जोड़ा है।" 
                : "People who once picked waste from streets now have IDs, uniforms, and social respect. We have integrated 3200+ workers into the formal economy."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. HEALTH CARDS & INCOME GROWTH (Data Section) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Health Card */}
          <motion.div whileHover={{ scale: 1.02 }} className="p-12 rounded-[3.5rem] bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <CreditCard className="mb-6 opacity-20" size={80} />
            <h4 className="text-3xl font-black mb-4 italic">{isHi ? "स्वास्थ्य कार्ड" : "Health Cards"}</h4>
            <p className="text-blue-100 leading-relaxed">
              {isHi ? "हर सार्थक कर्मी को सरकारी स्वास्थ्य योजनाओं और निजी बीमा का लाभ मिलता है।" : "Every worker gets access to government health schemes and private insurance."}
            </p>
            <div className="mt-8 text-5xl font-black">100%</div>
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Coverage Achieved</p>
          </motion.div>

          {/* Income Growth */}
          <motion.div whileHover={{ scale: 1.02 }} className="p-12 rounded-[3.5rem] bg-gradient-to-br from-[#00a651] to-green-800 relative overflow-hidden">
            <TrendingUp className="mb-6 opacity-20" size={80} />
            <h4 className="text-3xl font-black mb-4 italic">{isHi ? "आय में वृद्धि" : "Income Growth"}</h4>
            <p className="text-green-100 leading-relaxed">
              {isHi ? "औपचारिक रोजगार के कारण कर्मियों की मासिक आय में 3 गुना वृद्धि हुई है।" : "Formal employment has resulted in a 3x increase in monthly income for workers."}
            </p>
            <div className="mt-8 text-5xl font-black">300%</div>
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Earning Increase</p>
          </motion.div>
        </div>
      </section>

      {/* 4. REPLICATION IN OTHER STATES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
             <Map className="text-[#2b3291] mb-6" size={64} />
             <h3 className="text-4xl font-black text-slate-900 mb-6 italic">
                {isHi ? "अन्य राज्यों में विस्तार" : "Replication in Other States"}
             </h3>
             <p className="text-slate-500 text-lg leading-relaxed mb-8">
                {isHi 
                  ? "मध्य प्रदेश की सफलता के बाद, हमारा मॉडल अब छत्तीसगढ़, राजस्थान और उत्तर प्रदेश जैसे राज्यों द्वारा भी अपनाया जा रहा है।" 
                  : "After success in MP, our model is being adopted by states like Chhattisgarh, Rajasthan, and Uttar Pradesh."}
             </p>
             <div className="flex flex-wrap gap-4">
               {['Chhattisgarh', 'Rajasthan', 'UP', 'Gujarat'].map(state => (
                 <span key={state} className="px-6 py-2 bg-slate-100 rounded-full text-xs font-black uppercase text-[#2b3291] border border-slate-200">{state}</span>
               ))}
             </div>
          </div>
          <div className="flex-1 bg-slate-900 aspect-square rounded-[4rem] flex items-center justify-center p-12 text-center border-8 border-slate-100">
             <div>
                <p className="text-[#00a651] text-6xl font-black mb-2 italic">12+</p>
                <p className="text-white font-bold uppercase tracking-widest text-sm">Cities Covered Outside MP</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;