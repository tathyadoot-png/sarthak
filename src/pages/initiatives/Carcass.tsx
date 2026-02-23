import React from 'react';
import { useOutletContext } from "react-router-dom";
import { ShieldCheck, ArrowRight } from "lucide-react";

const Carcass = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Joint Venture</p>
          <h2 className="text-4xl font-black text-slate-900">Carcass Utilization Plant</h2>
          <p className="text-gray-500 mt-2 italic font-medium">Partnership with: MP Livestock and Poultry Development Corporation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Raw Hide Recovery', 'Bone Dust', 'Tallow', 'Meat Meal'].map((item, idx) => (
            <div key={idx} className="p-10 bg-amber-50 rounded-[3rem] border border-amber-100 flex flex-col justify-between">
              <ShieldCheck className="text-amber-600 mb-6" />
              <h4 className="text-xl font-black leading-tight italic">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carcass;