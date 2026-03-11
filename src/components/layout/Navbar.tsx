"use client";

import { useState } from "react";
import {
  Globe,
  Menu,
  ChevronDown,
  Recycle,
  Leaf,
  Zap,
  Building2,
  BrainCircuit,
  School,
  ShieldCheck,
  Handshake,
  Users,
  Sparkles,
  Droplets,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

type Lang = "hi" | "en";

const Navbar = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  const isHi = lang === "hi";

  const navLabels = {
    home: isHi ? "मुख्य पृष्ठ" : "Home",
    about: isHi ? "हमारे बारे में" : "About",
    work: isHi ? "हम क्या करते हैं" : "What We Do",
    impact: isHi ? "प्रभाव" : "Impact",
    gallery: isHi ? "गैलरी" : "Gallery",
    contact: isHi ? "संपर्क" : "Contact",
    join: isHi ? "हमसे जुड़ें" : "Join Us",
  };

  const megaMenu = {
    wasteSolutions: [
      {
        label: isHi ? "प्लास्टिक पुनर्चक्रण" : "Plastic Recycling",
        href: "/plastic-recycling",
        icon: <Recycle size={18} />,
        desc: isHi ? "प्लास्टिक कचरा समाधान" : "Plastic waste solutions",
      },
      {
        label: isHi ? "जैविक कचरा" : "Organic Waste",
        href: "/organic-waste",
        icon: <Leaf size={18} />,
        desc: isHi ? "कम्पोस्टिंग समाधान" : "Composting systems",
      },
      {
        label: isHi ? "ई-कचरा प्रबंधन" : "E-Waste Management",
        href: "/e-waste",
        icon: <Zap size={18} />,
        desc: isHi ? "E-Clinic & recycling" : "E-Clinic & recycling",
      },
      {
        label: isHi ? "वेस्ट टू वेल्थ" : "Waste-to-Wealth",
        href: "/waste-to-wealth",
        icon: <Sparkles size={18} />,
        desc: isHi ? "कचरे से उत्पाद" : "Innovative recycling products",
      },
    ],

    models: [
      {
        label: isHi ? "भोपाल मॉडल" : "The Bhopal Model",
        href: "/bhopal-model",
        icon: <Building2 size={18} />,
      },
      {
        label: isHi ? "ज़ीरो वेस्ट कैंपस" : "Zero Waste Campus",
        href: "/zero-waste-campus",
        icon: <School size={18} />,
      },
      {
        label: isHi ? "व्यवहार परिवर्तन" : "Behaviour Change",
        href: "/behaviour-change",
        icon: <BrainCircuit size={18} />,
      },
      // {
      //   label: isHi ? "नर्मदा पहल" : "Narmada Initiative",
      //   href: "/narmada-initiative",
      //   icon: <Droplets size={18} />,
      // },
    ],

    impact: [
      {
        label: isHi ? "प्रभाव और उपलब्धियाँ" : "Impact & Achievements",
        href: "/impact",
        icon: <Trophy size={18} />,
      },
      {
        label: isHi ? "सार्थक कर्मी" : "Sarthak Karmi",
        href: "/sarthak-karmi",
        icon: <Users size={18} />,
      },
      {
        label: isHi ? "सफलता की कहानियाँ" : "Success Stories",
        href: "/success-stories",
        icon: <Sparkles size={18} />,
      },
    ],

    partnerships: [
      {
        label: isHi ? "हमारी साझेदारी" : "Our Partnerships",
        href: "/partnerships",
        icon: <Handshake size={18} />,
      },
      {
        label: isHi ? "प्रमाणन एवं अनुपालन" : "Certifications & Compliance",
        href: "/compliance",
        icon: <ShieldCheck size={18} />,
      },
    ],
  };

  return (
    <header
      className="fixed w-full z-[1000] py-3 bg-white shadow-sm border-b border-slate-100"
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Sarthak" className="h-12 w-12 md:h-12 md:w-12" />
          <div className="flex flex-col">
            <h1 className="font-black text-lg md:text-xl tracking-tighter text-[#3e2723] uppercase group-hover:text-[#FFBF00]">
              {isHi ? "सार्थक" : "SARTHAK"}
            </h1>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-green -mt-1">
              {isHi ? "संस्था" : "Sanstha"}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6">

          <Link
            to="/"
            className="text-[12px] font-black uppercase tracking-widest text-[#3e2723] hover:text-[#FFBF00]"
          >
            {navLabels.home}
          </Link>

          <Link
            to="/about"
            className="text-[12px] font-black uppercase tracking-widest text-[#3e2723] hover:text-[#FFBF00]"
          >
            {navLabels.about}
          </Link>

          <button
            onMouseEnter={() => setShowMegaMenu(true)}
            className="text-[12px] font-black uppercase tracking-widest text-[#3e2723] hover:text-[#FFBF00] flex items-center gap-1"
          >
            {navLabels.work}
            <ChevronDown size={14} />
          </button>

          <Link
            to="/impact"
            className="text-[12px] font-black uppercase tracking-widest text-[#3e2723] hover:text-[#FFBF00]"
          >
            {navLabels.impact}
          </Link>

          <Link
            to="/gallery"
            className="text-[12px] font-black uppercase tracking-widest text-[#3e2723] hover:text-[#FFBF00]"
          >
            {navLabels.gallery}
          </Link>

          <Link
            to="/contact"
            className="text-[12px] font-black uppercase tracking-widest text-[#3e2723] hover:text-[#FFBF00]"
          >
            {navLabels.contact}
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="hidden sm:block text-[12px] font-black text-[#3e2723] border-b-2 border-[#FFBF00]"
          >
            {lang === "hi" ? "English" : "हिंदी"}
          </button>

          <Link
            to="/partner"
            className="bg-[#FFBF00] text-[#3e2723] px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-[#1c1716] hover:text-white transition-all"
          >
            {navLabels.join}
          </Link>

          <button
            className="xl:hidden text-[#3e2723]"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

        </div>
      </nav>

      {/* Mega Menu */}
      <AnimatePresence>
        {showMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t"
          >
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 p-10">

              {[megaMenu.wasteSolutions, megaMenu.models, megaMenu.impact, megaMenu.partnerships].map(
                (section, i) => (
                  <div key={i} className="grid gap-4">
                    {section.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                      >
                        {item.icon}
                        <span className="text-[11px] font-black text-[#3e2723] uppercase">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

<AnimatePresence>
  {isOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/60 z-[1999] xl:hidden backdrop-blur-sm"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[350px] z-[2000] bg-white shadow-2xl flex flex-col overflow-y-auto xl:hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <div className="flex flex-col">
            <span className="font-black text-xl text-[#3e2723] tracking-tighter uppercase">
              {isHi ? "सार्थक" : "SARTHAK"}
            </span>
            <span className="text-[8px] font-bold text-[#FFBF00] uppercase tracking-widest">
              {isHi ? "संस्था" : "Sanstha"}
            </span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-3 bg-gray-50 rounded-full text-[#3e2723] hover:bg-gray-100"
          >
            <Menu size={20} className="rotate-45" /> 
          </button>
        </div>

        {/* Links Stack */}
        <div className="flex flex-col p-6 gap-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="py-3 text-sm font-black uppercase tracking-widest text-[#3e2723] border-b border-gray-50">
            {navLabels.home}
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="py-3 text-sm font-black uppercase tracking-widest text-[#3e2723] border-b border-gray-50">
            {navLabels.about}
          </Link>

          {/* --- WHAT WE DO (ACCORDION) --- */}
          <div className="flex flex-col border-b border-gray-50">
            <button 
              onClick={() => setIsWorkOpen(!isWorkOpen)}
              className="py-4 text-sm font-black uppercase tracking-widest text-[#3e2723] flex items-center justify-between"
            >
              {navLabels.work}
              <ChevronDown size={18} className={`transition-transform duration-300 ${isWorkOpen ? "rotate-180 text-[#FFBF00]" : ""}`} />
            </button>

            <AnimatePresence>
              {isWorkOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-gray-50/80 rounded-2xl mb-4"
                >
                  <div className="p-5 flex flex-col gap-8">
                    {/* 1. Waste Solutions (4 Items) */}
                    <div>
                      <p className="text-[9px] font-black text-[#FFBF00] mb-4 uppercase tracking-[0.2em]">Waste Solutions</p>
                      <div className="grid gap-4">
                        {megaMenu.wasteSolutions.map((item) => (
                          <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)} className="flex items-start gap-3">
                            <span className="text-[#FFBF00] mt-0.5">{item.icon}</span>
                            <div className="flex flex-col">
                              <span className="text-[11px] font-bold text-[#3e2723] uppercase">{item.label}</span>
                              <span className="text-[9px] text-gray-500 font-medium">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 2. Models (4 Items) */}
                    <div>
                      <p className="text-[9px] font-black text-[#FFBF00] mb-4 uppercase tracking-[0.2em]">Our Models</p>
                      <div className="grid gap-4">
                        {megaMenu.models.map((item) => (
                          <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                            <span className="text-[#FFBF00]">{item.icon}</span>
                            <span className="text-[11px] font-bold text-[#3e2723] uppercase">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 3. Impact (3 Items) */}
                    <div>
                      <p className="text-[9px] font-black text-[#FFBF00] mb-4 uppercase tracking-[0.2em]">Impact</p>
                      <div className="grid gap-4">
                        {megaMenu.impact.map((item) => (
                          <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-[11px] font-bold text-[#3e2723] uppercase">
                            <span className="text-[#FFBF00]">{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 4. Partnerships (2 Items) */}
                    <div>
                      <p className="text-[9px] font-black text-[#FFBF00] mb-4 uppercase tracking-[0.2em]">Trust & Partners</p>
                      <div className="grid gap-4">
                        {megaMenu.partnerships.map((item) => (
                          <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-[11px] font-bold text-[#3e2723] uppercase">
                            <span className="text-[#FFBF00]">{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/impact" onClick={() => setIsOpen(false)} className="py-4 text-sm font-black uppercase tracking-widest text-[#3e2723] border-b border-gray-50">
            {navLabels.impact}
          </Link>

          <Link to="/gallery" onClick={() => setIsOpen(false)} className="py-4 text-sm font-black uppercase tracking-widest text-[#3e2723] border-b border-gray-50">
            {navLabels.gallery}
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="py-4 text-sm font-black uppercase tracking-widest text-[#3e2723] border-b border-gray-50">
            {navLabels.contact}
          </Link>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
          <button
            onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }}
            className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#FFBF00] rounded-xl text-[11px] font-black text-[#3e2723] uppercase"
          >
            <Globe size={14} />
            {lang === "hi" ? "Switch to English" : "हिंदी में देखें"}
          </button>

          <Link
            to="/partner"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[#FFBF00] text-[#3e2723] py-4 rounded-xl text-center text-xs font-black uppercase tracking-widest shadow-xl shadow-[#FFBF00]/20"
          >
            {navLabels.join}
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