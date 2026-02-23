import React from 'react';
import { useOutletContext } from "react-router-dom";
import { Zap, MapPin, Truck } from "lucide-react";

const EWaste = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  return (
    <div className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black text-blue-400">E-Waste Management</h2>
            <p className="opacity-70 italic text-sm">Partnership with: Technologic Unit II</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-3xl font-black text-blue-400">5</p>
                <p className="text-xs uppercase font-bold tracking-widest">Collection Centers</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-3xl font-black text-blue-400">437 MT</p>
                <p className="text-xs uppercase font-bold tracking-widest">Annual Collection</p>
              </div>
            </div>
            <p className="text-gray-400">Authorized processing of hazardous electronic components safely.</p>
          </div>
          <div className="flex-1 bg-blue-500/10 p-12 rounded-[4rem] border border-blue-500/20">
             <Zap size={80} className="text-blue-400 mb-6" />
             <h4 className="text-2xl font-bold mb-4 italic text-white underline">Authorized Process</h4>
             <ul className="space-y-3 text-sm opacity-80 list-disc pl-4">
                <li>Formal Collection Points</li>
                <li>Safe Dismantling</li>
                <li>Toxic Part Segregation</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EWaste;