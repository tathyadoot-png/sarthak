"use client";

import { useState, useEffect } from "react";
import { 
  Globe, Menu, X, ChevronDown, Heart, Recycle, Zap, 
  Users, ShieldCheck, ImageIcon, Info, ArrowRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

type Lang = "hi" | "en";

const Navbar = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Scroll logic for transparent to white transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 FIX: Prevents background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isHi = lang === "hi";

  const navItems = [
    { label: isHi ? "होम" : "Home", href: "/" },
    { label: isHi ? "संस्था" : "About", href: "/about" },
    { label: isHi ? "पहल" : "Initiatives", href: "/initiatives" },
    {
      label: isHi ? "प्रभाव" : "Impact",
      href: "/impact",
      dropdown: [
        { label: isHi ? "सार्थक कर्मी" : "Karmis", href: "/impact/karmis", icon: <Users size={14} className="text-emerald-500" /> },
        { label: isHi ? "कहानियाँ" : "Stories", href: "/impact/stories", icon: <ImageIcon size={14} className="text-blue-500" /> },
      ]
    },
    { label: isHi ? "गैलरी" : "Gallery", href: "/gallery" },
    { label: isHi ? "संपर्क" : "Contact", href: "/contact" },
  ];

  return (
    <>
    <header className={`fixed w-full z-[1000] transition-all duration-500 ${scrolled || isOpen ? "py-3 bg-white shadow-sm" : "py-5 bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRANDING */}
        <Link to="/" className="flex items-center gap-3 z-[1001]">
          <img src="/logo.png" alt="Sarthak" className="h-9 w-9 object-contain rounded-full" />
          <div className="flex flex-col">
            <h1 className="font-black text-lg md:text-xl tracking-tighter text-[#1a1f5c] leading-none uppercase">SARTHAK</h1>
            <span className="text-[8px] font-bold uppercase tracking-widest text-[#00a651]">Welfare Foundation</span>
          </div>
        </Link>

        {/* DESKTOP NAV (xl and up) */}
        <div className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative py-2"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                  location.pathname === item.href ? "text-[#00a651]" : "text-slate-600 hover:text-[#2b3291]"
                }`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={12} />}
              </Link>

              {item.dropdown && activeDropdown === item.label && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 mt-1">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.label} to={sub.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/sub">
                      <div className="p-2 bg-slate-50 rounded-lg group-hover/sub:bg-white">{sub.icon}</div>
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight group-hover/sub:text-[#1a1f5c]">{sub.label}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === "hi" ? "en" : "hi")} className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Globe size={14} /> {lang === "hi" ? "EN" : "HI"}
          </button>

          <Link to="/partner" className="hidden lg:flex items-center gap-2 bg-[#1a1f5c] text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#00a651] transition-all">
             {isHi ? "जुड़ें" : "Join"}
          </Link>

          {/* 🔹 MOBILE TOGGLE (Visible below XL) */}
          <button 
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1a1f5c]" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>

    {/* 🔹 MOBILE DRAWER */}
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={() => setIsOpen(false)} 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[2000]" 
          />
          
          {/* Sidebar Drawer */}
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }} 
            className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-white z-[2001] flex flex-col shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="p-6 flex justify-between items-center border-b border-slate-50 bg-white sticky top-0">
              <div className="flex items-center gap-2">
                <img src="/logo.png" className="h-7 w-7 object-contain" alt="logo" />
                <span className="font-black text-sm tracking-tight text-[#1a1f5c]">SARTHAK</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500">
                <X size={20} />
              </button>
            </div>

            {/* Nav Links - Scrollable Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-slate-50 last:border-0 pb-2">
                  <div 
                    className="flex items-center justify-between py-3" 
                    onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    <Link 
                      to={item.dropdown ? "#" : item.href} 
                      onClick={() => !item.dropdown && setIsOpen(false)} 
                      className={`text-[13px] font-black uppercase tracking-tight ${location.pathname === item.href ? "text-[#00a651]" : "text-slate-800"}`}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <ChevronDown size={18} className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    )}
                  </div>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50 rounded-xl px-4 py-2 mt-1">
                        {item.dropdown.map(sub => (
                          <Link key={sub.label} to={sub.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-0">
                            {sub.icon}
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{sub.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom Section - Fixed at bottom of drawer */}
            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
              <button 
                onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }}
                className="w-full flex items-center justify-center gap-2 py-3 mb-4 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600"
              >
                <Globe size={14} /> {lang === "hi" ? "Switch to English" : "हिंदी में देखें"}
              </button>
              <Link to="/partner" onClick={() => setIsOpen(false)} className="w-full bg-[#1a1f5c] text-white h-14 rounded-xl flex items-center justify-center font-black text-[11px] uppercase tracking-[0.1em] shadow-lg">
                {isHi ? "हमारे साथ जुड़ें" : "Join Hands"} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;