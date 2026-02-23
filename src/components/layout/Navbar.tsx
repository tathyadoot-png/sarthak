"use client";

import { useState, useEffect } from "react";
import { 
  Globe, Menu, X, ChevronDown, Heart, Recycle, Zap, 
  Users, ShieldCheck, ImageIcon, Info, ArrowRight, Facebook, Instagram 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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

  const isHi = lang === "hi";

  const navItems = [
    { label: isHi ? "होम" : "Home", href: "/" },
    { label: isHi ? "संस्था" : "About", href: "/about" },
    {
      label: isHi ? "पहल" : "Initiatives",
      href: "/initiatives",
      dropdown: [
        { label: isHi ? "प्लास्टिक वेस्ट" : "Plastic Waste", href: "/initiatives/plastic", icon: <Recycle className="w-4 h-4 text-green-500" /> },
        { label: isHi ? "ई-वेस्ट" : "E-Waste", href: "/initiatives/ewaste", icon: <Zap className="w-4 h-4 text-blue-500" /> },
        { label: isHi ? "मृत पशु" : "Carcass", href: "/initiatives/carcass", icon: <ShieldCheck className="w-4 h-4 text-amber-500" /> },
        { label: isHi ? "नर्मदा" : "Narmada", href: "/initiatives/narmada", icon: <Info className="w-4 h-4 text-cyan-400" /> },
      ]
    },
    {
      label: isHi ? "प्रभाव" : "Impact",
      href: "/impact",
      dropdown: [
        { label: isHi ? "सार्थक कर्मी" : "Karmis", href: "/impact/karmis", icon: <Users className="w-4 h-4" /> },
        { label: isHi ? "कहानियाँ" : "Stories", href: "/impact/stories", icon: <ImageIcon className="w-4 h-4" /> },
      ]
    },
    { label: isHi ? "गैलरी" : "Gallery", href: "/gallery" },
    { label: isHi ? "संपर्क" : "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-[1000] transition-all duration-500 ${scrolled ? "py-2 bg-white/80 backdrop-blur-xl shadow-sm" : "py-5 bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRANDING */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Sarthak" className="h-9 w-9 object-contain rounded-full" />
          <div className="flex flex-col">
            <h1 className="font-black text-lg md:text-xl tracking-tighter text-[#1a1f5c] leading-none">SARTHAK</h1>
            <span className="text-[8px] font-bold uppercase tracking-widest text-[#00a651]">Welfare Foundation</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative px-3 py-1"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className={`text-[12px] font-bold uppercase tracking-wide flex items-center gap-1 transition-all ${
                  location.pathname.startsWith(item.href) && item.href !== "/" ? "text-[#00a651]" : "text-slate-600 hover:text-[#2b3291]"
                }`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={12} />}
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS (Desktop) */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all"
          >
            <Globe size={14} /> {lang === "hi" ? "EN" : "HI"}
          </button>

          <Link to="/partner" className="hidden lg:flex items-center gap-2 bg-[#2b3291] text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#00a651] transition-all shadow-lg shadow-blue-900/10">
            <Heart size={12} /> {isHi ? "हमसे जुड़ें" : "Join Hands With Us"}
          </Link>

          <button className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-[#2b3291]" onClick={() => setIsOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[2000]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-[#f8fafc] z-[2001] flex flex-col shadow-2xl">
              
              <div className="p-4 flex justify-between items-center bg-white border-b border-slate-50">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" className="h-6 w-6 object-contain" alt="logo" />
                  <span className="font-black text-xs tracking-tight text-[#1a1f5c]">SARTHAK MENU</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {navItems.map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    <div className="flex items-center justify-between p-3" onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.label ? null : item.label)}>
                      <Link to={item.dropdown ? "#" : item.href} onClick={() => !item.dropdown && setIsOpen(false)} className="text-[12px] font-black text-slate-700 uppercase tracking-tight">
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <ChevronDown size={14} className={`text-slate-400 transition-transform ${activeDropdown === item.label ? "rotate-180 text-emerald-500" : ""}`} />
                      )}
                    </div>
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.label && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50/50 px-2 pb-2">
                          <div className="grid grid-cols-1 gap-1.5 pt-1">
                            {item.dropdown.map(sub => (
                              <Link key={sub.label} to={sub.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white transition-colors">
                                <div className="p-1.5 bg-white rounded-lg shadow-sm">{sub.icon}</div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Drawer Footer with Partner Button & Toggle */}
              <div className="p-5 bg-white border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between px-1">
                  <div className="flex gap-4 text-slate-300">
                    <Instagram size={18} /> <Facebook size={18} />
                  </div>
                  <button 
                    onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }} 
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-0.5"
                  >
                    {isHi ? "Switch to English" : "हिंदी में देखें"}
                  </button>
                </div>

                <Link 
                  to="/partner" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full bg-[#1a1f5c] text-white h-14 rounded-xl flex items-center justify-center font-black text-[11px] uppercase tracking-[0.1em] shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
                >
                  {isHi ? "हमारे साथ जुड़ें" : "Partner With Us"} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;