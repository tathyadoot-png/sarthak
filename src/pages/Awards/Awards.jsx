import React from 'react';
import { useOutletContext } from "react-router-dom";
import { Trophy, Medal, Star } from "lucide-react";

const Awards = () => {
  const context = useOutletContext();
  const lang = context?.lang || "en";
  const isHi = lang === "hi";

  const awardsList = [
    {
      year: "2023",
      title: isHi ? "स्वच्छ सुजल शक्ति सम्मान" : "Swachh Sujal Shakti Samman",
      by: "Ministry of Jal Shakti",
      icon: <Trophy className="text-yellow-500" />
    },
    {
      year: "2021",
      title: isHi ? "सर्वश्रेष्ठ NGO पुरस्कार" : "Best NGO Award",
      by: "MP Government",
      icon: <Medal className="text-blue-500" />
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#00a651] font-black uppercase tracking-widest text-[10px] mb-4">Recognition</h2>
          <h3 className="text-5xl font-black text-slate-900 italic">{isHi ? "पुरस्कार एवं सम्मान" : "Awards & Honors"}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardsList.map((award, index) => (
            <div key={index} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex items-start gap-8 hover:shadow-xl transition-all">
              <div className="p-5 bg-slate-50 rounded-2xl">{award.icon}</div>
              <div>
                <span className="text-[#00a651] font-black text-sm">{award.year}</span>
                <h4 className="text-2xl font-black text-slate-900 mt-1">{award.title}</h4>
                <p className="text-slate-500 font-medium mt-2">{award.by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;