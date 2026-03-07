"use client";

import { useRef, useEffect } from "react";
import { Sparkles, Calendar, ArrowRight, History as HistoryIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { Lang } from "@/layouts/MainLayout";
import { useOutletContext } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HistorySection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const historyTimeline = [
    {
      year: "1998",
      title: isHi ? "पंजीकरण एवं नींव" : "Foundation",
      desc: isHi ? "भोपाल में एक NGO के रूप में शुरुआत, पर्यावरण और कचरा प्रबंधन के प्रति अटूट संकल्प।" : "Registered as an NGO in Bhopal, embarking on a mission for environmental care.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800",
      icon: <Calendar size={24} />
    },
    {
      year: "2010",
      title: "UNDP Milestone",
      desc: isHi ? "SGP-UNDP के साथ ऐतिहासिक साझेदारी, प्लास्टिक कचरे को आजीविका में बदलने का सफल मॉडल।" : "Strategic partnership with SGP-UNDP, creating livelihoods from plastic waste.",
      img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=800",
      icon: <HistoryIcon size={24} />
    },
    {
      year: "2013",
      title: isHi ? "औद्योगिक क्रांति" : "Industrial Linkage",
      desc: isHi ? "सीमेंट फैक्ट्रियों को RDF सप्लाई की शुरुआत, कचरा प्रबंधन में औद्योगिक स्तर का योगदान।" : "Pioneered RDF supply to cement industries, scaling waste solutions for the future.",
      img: "https://images.unsplash.com/photo-1536412597336-ade7b523ecbc?q=80&w=800",
      icon: <ArrowRight size={24} />
    },
    {
      year: "Today",
      title: isHi ? "विशाल परिवार" : "The Legacy",
      desc: isHi ? "3200+ सार्थक कर्मियों के साथ पूरे प्रदेश में विकास और स्वच्छता की नई इबारत।" : "Empowering 3200+ workers and leading large-scale waste management across MP.",
      img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=800",
      icon: <Sparkles size={24} />
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const scrollWidth = sectionRef.current?.scrollWidth || 0;
        const amountToScroll = scrollWidth - window.innerWidth;

        gsap.to(sectionRef.current, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${amountToScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(progressBarRef.current, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${amountToScroll}`,
            scrub: 1,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(".history-mobile-line", {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".mobile-history-container",
            start: "top 20%",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#f7f7f6]">
      <div className="min-h-screen md:h-screen flex flex-col overflow-hidden relative">
        
        {/* Progress Line - Yellow (#FFBF00) */}
        <div className="absolute top-0 left-0 h-1.5 bg-[#3e2723]/5 w-full z-50">
          <div ref={progressBarRef} className="h-full bg-[#FFBF00] w-0 shadow-[0_0_15px_rgba(255,191,0,0.4)] md:block hidden" />
        </div>

        {/* Heading Section */}
        <div className="pt-20 md:pt-24 px-6 md:px-24">
            <h6 className="text-[#FFBF00] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
               {isHi ? "25 वर्षों का गौरवशाली सफर" : "25 YEARS OF IMPACTFUL SERVICE"}
            </h6>
            <h2 className="text-4xl md:text-7xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-none">
              {isHi ? "सार्थक की" : "OUR"} <br />
              <span className="text-[#3e2723]/30">{isHi ? "विकास यात्रा" : "EVOLUTION"}</span>
            </h2>
        </div>

        {/* Desktop View (Horizontal) */}
        <div ref={sectionRef} className="hidden md:flex items-center pl-24 pr-[40vw] gap-32 whitespace-nowrap flex-grow">
          {historyTimeline.map((item, index) => (
            <div key={index} className="relative flex-shrink-0 w-[550px]">
              {/* Giant Background Year Text */}
              <div className="absolute -top-44 -left-10 text-[12rem] font-[1000] opacity-[0.03] text-[#3e2723] select-none pointer-events-none tracking-tighter">
                {item.year}
              </div>
              
              <div className="relative z-10">
                <div className="h-[420px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white relative group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Year Badge */}
                  <div className="absolute bottom-8 left-8 bg-[#FFBF00] shadow-xl px-8 py-3 rounded-2xl">
                    <span className="text-[#3e2723] font-black text-2xl tracking-tighter">{item.year}</span>
                  </div>
                </div>

                <div className="mt-10 space-y-4 px-2 whitespace-normal">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-10 bg-[#FFBF00] rounded-full" />
                    <h3 className="text-3xl font-[1000] text-[#3e2723] uppercase tracking-tighter">{item.title}</h3>
                  </div>
                  <p className="text-[#3e2723]/70 text-lg font-bold leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Cinematic End (Desktop) */}
          <div className="flex-shrink-0 w-[600px] pr-32 flex flex-col items-start justify-center">
            <div className="space-y-8 bg-white/50 p-12 rounded-[4rem] border border-white">
              <Sparkles className="text-[#FFBF00]" size={60} />
              <h2 className="text-5xl font-[1000] text-[#3e2723] uppercase tracking-tighter leading-[0.9]">
                {isHi ? "मिशन अभी जारी है," : "THE MISSION"} <br />
                <span className="text-[#3e2723]/30">{isHi ? "स्वच्छता की ओर।" : "CONTINUES."}</span>
              </h2>
              <p className="text-xs font-black uppercase tracking-widest text-[#3e2723]/40 italic">
                {isHi ? "एक बेहतर कल की ओर अग्रसर" : "Marching towards a circular future"}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View (Vertical Storyline) */}
        <div className="mobile-history-container md:hidden flex flex-col px-6 gap-20 pt-12 pb-32 relative">
          <div className="absolute left-8 top-0 bottom-20 w-[2px] bg-[#3e2723]/5">
            <div className="history-mobile-line w-full h-0 bg-[#FFBF00]" />
          </div>

          {historyTimeline.map((item, index) => (
            <div key={index} className="history-mobile-card relative pl-12">
              <div className="absolute left-[30px] top-2 w-3 h-3 rounded-full bg-[#FFBF00] -translate-x-1/2 shadow-[0_0_10px_#FFBF00]" />
              
              <div className="space-y-6">
                <span className="text-6xl font-[1000] text-[#3e2723]/10 absolute -top-4 left-10">
                  {item.year}
                </span>
                <div className="bg-white rounded-[2.5rem] p-4 shadow-xl border border-white/50 relative z-10">
                  <div className="rounded-[2rem] overflow-hidden aspect-video">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-[#3e2723] uppercase tracking-tighter mb-3">{item.title}</h3>
                    <p className="text-sm font-bold text-[#3e2723]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HistorySection;