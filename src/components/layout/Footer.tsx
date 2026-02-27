import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import type { Lang } from "@/layouts/MainLayout";
import { useNavigate } from "react-router-dom";

const Footer = ({ lang }: { lang: Lang }) => {
  const isHi = lang === "hi";
  const navigate = useNavigate();

  const navLinks = [
    { en: "Impact", hi: "हमारा प्रभाव", path: "/impact" },
    { en: "Projects", hi: "परियोजनाएं", path: "/projects" },
    { en: "Our Team", hi: "हमारी टीम", path: "/team" },
    { en: "Media", hi: "मीडिया", path: "/media" },
  ];

  const policyLinks = [
    { en: "Privacy Policy", hi: "गोपनीयता नीति" },
    { en: "80G Status", hi: "80G स्थिति" },
    { en: "Reports", hi: "रिपोर्ट्स" },
  ];

  return (
    <footer className="relative w-full bg-slate-950 text-white pt-24 pb-10 overflow-hidden">
      
      {/* --- DESIGN ACCENTS --- */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-[#2b3291]" />
        <div className="flex-1 bg-[#00a651]" />
        <div className="flex-1 bg-[#fff200]" />
        <div className="flex-1 bg-[#ed1c24]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 1. BRAND SECTION */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10">
                 <img src={logo} alt="Sarthak" className="h-12 w-auto" />
                 <div className="pr-4">
                    <h2 className="text-2xl font-black tracking-tighter leading-none italic">SARTHAK</h2>
                    <p className="text-[#00a651] text-[8px] font-black uppercase tracking-widest">SNHC India Foundation</p>
                 </div>
               </div>
               
               <h3 className="text-3xl md:text-5xl font-black leading-[1.2] tracking-tight">
                 {isHi ? (
                   <>कचरे से <span className="text-[#00a651]">कंचन</span>,<br/>स्वच्छ भारत का <span className="text-[#2b3291]">नवनिर्माण</span>।</>
                 ) : (
                   <>Turning <span className="text-[#00a651]">Waste</span> to Wealth,<br/>for a <span className="text-[#2b3291]">Sustainable</span> Future.</>
                 )}
               </h3>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <motion.a 
                  whileHover={{ y: -5, color: "#fff" }}
                  key={i} href="#" 
                  className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS GRID */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                {isHi ? "नेविगेट करें" : "Explore"}
              </h4>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li 
                    key={item.en} 
                    onClick={() => navigate(item.path)}
                    className="text-sm font-bold text-white/50 hover:text-white cursor-pointer transition-all flex items-center gap-2 group"
                  >
                    <div className="h-1 w-0 bg-[#00a651] group-hover:w-3 transition-all" />
                    {isHi ? item.hi : item.en}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                {isHi ? "महत्वपूर्ण नीतियां" : "Policies"}
              </h4>
              <ul className="space-y-4 text-sm font-bold text-white/50">
                {policyLinks.map((policy) => (
                   <li key={policy.en} className="hover:text-white cursor-pointer transition-all">
                      {isHi ? policy.hi : policy.en}
                   </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. CONTACT & ACTION */}
          <div className="lg:col-span-3 space-y-8">
             <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <MapPin size={18} className="text-[#00a651] mt-1 shrink-0" />
                    <p className="text-xs font-bold text-white/70 leading-relaxed italic">
                      {isHi ? "भोपाल, मध्य प्रदेश - 462039" : "Bhopal, Madhya Pradesh - 462039"}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail size={18} className="text-[#2b3291] shrink-0" />
                    <p className="text-xs font-bold text-white/70">info@sarthakindia.org</p>
                  </div>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/donate")}  
                  className="w-full py-4 bg-[#00a651] rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#008a44] transition-all shadow-lg shadow-green-900/20"
                >
                  {isHi ? "सहयोग प्रदान करें" : "Donate Now"} <Heart size={14} className="fill-current" />
                </motion.button>
             </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">
              © 2026 Sarthak India
            </p>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
               <div className="h-1.5 w-1.5 rounded-full bg-[#fff200] animate-pulse" />
               <span className="text-[8px] font-black text-white/40 uppercase tracking-widest italic">
                 {isHi ? "पंजीकृत एनजीओ" : "Registered NGO"}
               </span>
            </div>
          </div>

          <a href="https://inedco.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
             <div className="text-right">
                <p className="text-[8px] font-black text-white/20 uppercase leading-none">Powered by</p>
                <p className="text-xs font-black text-white/80 group-hover:text-[#2b3291] transition-colors tracking-tighter">INEDCO NETWORKS</p>
             </div>
             <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:rotate-45 transition-all group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={16} />
             </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;