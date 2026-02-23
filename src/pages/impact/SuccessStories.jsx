import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Map, Zap } from "lucide-react";

const SuccessStories = () => {
  const context = useOutletContext();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-[#2b3291] font-black uppercase tracking-widest text-[10px] mb-4">Case Studies</h2>
          <h3 className="text-5xl font-black text-slate-900 italic">{isHi ? "सफलता की कहानियाँ" : "Success Stories"}</h3>
        </div>

        {/* Transformation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-6">
            <h4 className="text-3xl font-black text-slate-900 leading-tight">
              {isHi ? "लैंडफिल से सार्वजनिक उद्यान तक" : "From Landfills to Public Gardens"}
            </h4>
            <p className="text-slate-500 leading-relaxed text-lg">
              {isHi ? "हमने कई डंपिंग यार्ड्स को साफ कर उन्हें सामुदायिक केंद्रों और पार्कों में बदला है।" : "We have cleared several dumping yards and converted them into community centers and parks."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-slate-100 rounded-[2.5rem] relative overflow-hidden border border-slate-200 flex items-center justify-center italic text-slate-300 text-[10px] uppercase">Before Photo</div>
             <div className="aspect-square bg-green-50 rounded-[2.5rem] relative overflow-hidden border border-green-100 flex items-center justify-center italic text-green-200 text-[10px] uppercase">After Photo</div>
          </div>
        </div>

        {/* Scale Section */}
        <div className="bg-slate-900 rounded-[4rem] p-16 text-white overflow-hidden relative">
          <div className="max-w-2xl relative z-10">
            <Map className="text-[#00a651] mb-6" size={48} />
            <h4 className="text-4xl font-black mb-6 italic">{isHi ? "मॉडल का विस्तार" : "Scaling the Model"}</h4>
            <p className="text-gray-400 text-lg mb-8">
              {isHi ? "सार्थक का मॉडल अब 12+ राज्यों में अपनाया जा रहा है।" : "Sarthak's model is now being replicated across 12+ states."}
            </p>
            <div className="flex flex-wrap gap-3">
               {['MP', 'Chhattisgarh', 'Rajasthan', 'Gujarat'].map(s => (
                 <span key={s} className="px-5 py-2 bg-white/5 rounded-full text-[10px] font-bold border border-white/10 uppercase">{s}</span>
               ))}
            </div>
          </div>
          <Zap size={300} className="absolute right-[-50px] bottom-[-50px] text-white/5" />
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;