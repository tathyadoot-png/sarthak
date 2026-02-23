"use client";

import { useState, useEffect } from "react";
import { 
  Globe, Menu, X, ChevronDown, Heart, Recycle, Zap, 
  Users, ShieldCheck, ImageIcon, History, Target, Info 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// import logo from "@/assets/logo.png"; 

type Lang = "hi" | "en";

const Navbar = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: lang === "hi" ? "होम" : "Home", href: "/" },
    {
      label: lang === "hi" ? "संस्था" : "About",
      href: "/about",
  
    },
    {
      label: lang === "hi" ? "पहल" : "Initiatives",
      href: "/initiatives",
      dropdown: [
        { label: lang === "hi" ? "प्लास्टिक वेस्ट" : "Plastic Waste", href: "/initiatives/plastic", icon: <Recycle className="text-green-500" /> },
        { label: lang === "hi" ? "ई-वेस्ट" : "E-Waste", href: "/initiatives/ewaste", icon: <Zap className="text-blue-500" /> },
        { label: lang === "hi" ? "मृत पशु निस्तारण" : "Carcass Utilization", href: "/initiatives/carcass", icon: <ShieldCheck className="text-amber-500" /> },
        { label: lang === "hi" ? "नर्मदा स्वच्छता" : "Narmada Cleanup", href: "/initiatives/narmada", icon: <Info className="text-cyan-400" /> },
      ]
    },
    {
      label: lang === "hi" ? "प्रभाव" : "Impact",
      href: "/impact",
      dropdown: [
        { label: lang === "hi" ? "सार्थक कर्मी" : "Sarthak Karmis", href: "/impact/karmis", icon: <Users /> },
        { label: lang === "hi" ? "सफलता की कहानियाँ" : "Success Stories", href: "/impact/stories", icon: <ImageIcon /> },
      ]
    },
    { label: lang === "hi" ? "गैलरी" : "Gallery", href: "/gallery" },
    { label: lang === "hi" ? "संपर्क" : "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-[1000] transition-all duration-500 ${
        scrolled ? "py-3 bg-white/50 backdrop-blur-xl shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRANDING */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 opacity-50" />
            <img src="/logo.png" alt="Sarthak" className="h-12 w-12 object-contain rounded-full relative z-10" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-xl md:text-2xl tracking-tighter text-[#1a1f5c] leading-none">
              SARTHAK
            </h1>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#00a651]">
              Welfare Foundation
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative px-4 py-2"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className={`text-[13px] font-bold uppercase tracking-wide flex items-center gap-1 transition-all ${
                  location.pathname.startsWith(item.href) && item.href !== "/"
                  ? "text-[#00a651]" 
                  : "text-slate-600 hover:text-[#2b3291]"
                }`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
              </Link>

              {/* Mega Dropdown Logic */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 pt-4"
                  >
                    <div className="w-72 bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden p-2">
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.label} to={sub.href} 
                          className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all group/sub"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 group-hover/sub:bg-green-50 group-hover/sub:text-[#00a651] transition-colors text-slate-400">
                            {sub.icon}
                          </div>
                          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider group-hover/sub:text-[#2b3291]">
                            {sub.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all"
          >
            <Globe size={14} /> {lang === "hi" ? "EN" : "HI"}
          </button>

          <Link 
            to="/partner" 
            className="hidden lg:flex items-center gap-2 bg-[#2b3291] text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#00a651] shadow-lg shadow-blue-900/10 transition-all active:scale-95"
          >
            <Heart size={14} /> {lang === "hi" ? "सहयोग" : "Partner"}
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-[#2b3291]" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[2000] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/logo.png" className="h-10" alt="logo" />
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-slate-50">
                  <div 
                    className="flex justify-between items-center py-5" 
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    <Link 
                      to={item.href} 
                      onClick={() => !item.dropdown && setIsOpen(false)} 
                      className="text-2xl font-black text-[#1a1f5c] uppercase tracking-tighter"
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className={`p-2 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}>
                        <ChevronDown />
                      </div>
                    )}
                  </div>
                  
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} 
                      className="bg-slate-50 rounded-2xl p-4 mb-4 flex flex-col gap-4"
                    >
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.label} to={sub.href} 
                          className="text-xs font-bold text-slate-500 uppercase flex items-center gap-3" 
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-[#00a651]">→</span> {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-6 flex flex-col gap-4">
               <button 
                onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }}
                className="w-full py-4 rounded-2xl border border-slate-200 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2"
              >
                <Globe size={18} /> {lang === "hi" ? "English" : "हिंदी"}
              </button>
              <Link 
                to="/partner" 
                onClick={() => setIsOpen(false)}
                className="bg-[#00a651] text-white py-5 rounded-2xl text-center font-black text-lg uppercase tracking-widest shadow-xl shadow-green-900/20"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;