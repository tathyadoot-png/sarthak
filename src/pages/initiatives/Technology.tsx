import React from 'react';
import { useOutletContext } from "react-router-dom";
import { Droplets, Info } from "lucide-react";

const Technology = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  return (
    <div className="py-24 space-y-32">
      {/* Pyrolysis Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[4rem] p-16 text-white overflow-hidden relative">
          <div className="max-w-2xl space-y-6 z-10 relative">
            <h3 className="text-5xl font-black italic">Pyrolysis: Plastic to Oil</h3>
            <p className="text-gray-400">Thermochemical decomposition of organic material at elevated temperatures in the absence of oxygen.</p>
            <div className="flex gap-10">
              <div><p className="text-2xl font-black text-[#00a651]">430°C</p><p className="text-[10px] uppercase font-bold opacity-50">Process Temp</p></div>
              <ul className="text-xs space-y-1 font-bold">
                <li>• Industrial Oil</li>
                <li>• Carbon Black</li>
                <li>• Syn Gas</li>
              </ul>
            </div>
          </div>
          <div className="absolute right-[-10%] top-[-10%] opacity-10"><Droplets size={400} /></div>
        </div>
      </section>

      {/* Narmada Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video bg-blue-50 rounded-[3rem] overflow-hidden flex items-center justify-center">
             <p className="text-blue-200 font-black text-6xl italic">2156 KM</p>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-4xl font-black text-blue-900 italic">Narmada Mission</h3>
            <p className="text-gray-500">In association with Akhil Bharatiya Vidyarthi Parishad (ABVP).</p>
            <div className="p-8 border-2 border-blue-100 rounded-3xl bg-blue-50/30">
              <p className="font-bold text-blue-900 mb-2 italic">The Drive:</p>
              <p className="text-sm text-gray-600 leading-relaxed">A massive awareness and cleanup drive covering 2156 KM along the holy Narmada river to ensure zero-plastic entry into the water body.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Technology;