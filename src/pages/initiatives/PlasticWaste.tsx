import React from 'react';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Factory, Users, Megaphone, Stethoscope, Recycle } from "lucide-react";

const PlasticWaste = () => {
  const { lang } = useOutletContext<{ lang: "hi" | "en" }>();
  const isHi = lang === "hi";

  const features = [
    { icon: <Users />, title: isHi ? "SHG फॉर्मेशन" : "SHG Formation", desc: isHi ? "महिला स्वयं सहायता समूहों का सशक्तिकरण।" : "Empowering Women Self-Help Groups." },
    { icon: <Factory />, title: isHi ? "सीमेंट इंडस्ट्री लिंकेज" : "Cement Linkage", desc: isHi ? "कचरे का को-प्रोसेसिंग के लिए उपयोग।" : "Co-processing waste in cement kilns." },
    { icon: <Megaphone />, title: isHi ? "जागरूकता अभियान" : "Awareness", desc: isHi ? "जन-भागीदारी और शिक्षा।" : "Public participation and education." },
    { icon: <Stethoscope />, title: isHi ? "स्वास्थ्य शिविर" : "Health Camps", desc: isHi ? "सार्थक कर्मियों के लिए नियमित चेकअप।" : "Regular checkups for Sarthak Karmis." },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-8 text-[#00a651]">{isHi ? "प्लास्टिक कचरा प्रबंधन" : "Plastic Waste Management"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            {isHi ? "हमारा मॉडल कचरा बीनने वालों को संगठित करता है और प्लास्टिक को लैंडफिल से बचाकर ऊर्जा में बदलता है।" : "Our model organizes rag-pickers and diverts plastic from landfills to energy recovery."}
          </p>
          <div className="bg-slate-50 p-8 rounded-[2rem] border-l-4 border-[#00a651]">
            <h4 className="font-bold mb-2">Collection Model</h4>
            <p className="text-sm text-gray-500 italic">Door-to-door collection & decentralized segregation centers.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-lg transition-all">
              <div className="text-[#00a651] mb-4">{f.icon}</div>
              <h5 className="font-bold mb-2">{f.title}</h5>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlasticWaste;