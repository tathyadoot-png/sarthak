import { useRef, useEffect } from "react";
import { Sparkles, Calendar, ArrowRight, History as HistoryIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
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

      // 1. DESKTOP & TABLET (Horizontal Scroll)
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

      // 2. MOBILE (Vertical Timeline)
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

        const cards = gsap.utils.toArray(".history-mobile-card");
        cards.forEach((card: any) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            }
          });
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-bg">
      <div className="min-h-screen md:h-screen flex flex-col overflow-hidden relative">
        
        {/* Progress Line */}
        <div className="absolute top-0 left-0 h-1 bg-primary/20 w-full z-50">
          <div ref={progressBarRef} className="h-full bg-primary w-0 shadow-[0_0_10px_rgba(228,107,46,0.5)] md:block hidden transition-all" />
        </div>

        {/* Heading */}
        <div className="md:pt-12 lg:pt-3">
          <SectionHeading
            subtitle={isHi ? "25 वर्षों का गौरवशाली सफर" : "25 Years of Impactful Service"}
            titleMain={isHi ? "सार्थक की" : "Our"}
            titleGradient={isHi ? "विकास यात्रा" : "Evolution"}
            isHi={isHi}
          />
        </div>

        {/* Desktop View (Horizontal) */}
        <div ref={sectionRef} className="hidden md:flex items-center pl-24 pr-[40vw] gap-24 whitespace-nowrap flex-grow -mt-10 lg:mt-0">
          {historyTimeline.map((item, index) => (
            <div key={index} className="relative flex-shrink-0 w-[500px]">
              {/* Ghost Year Text */}
              <div className="absolute -top-36 -left-6 text-[10rem] font-black opacity-[0.05] font-gotu text-secondary select-none pointer-events-none">
                {item.year}
              </div>
              <div className="relative z-10">
                <div className="h-[380px] w-full rounded-[3.5rem] overflow-hidden shadow-soft border-4 border-white relative group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white shadow-xl px-6 py-2 rounded-2xl border border-border">
                    <span className="text-primary font-black text-xl font-gotu">{item.year}</span>
                  </div>
                </div>
                <div className="mt-8 space-y-4 px-4 whitespace-normal">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h3 className="text-3xl font-bold text-secondary font-gotu leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-muted text-base text-justify font-medium opacity-80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Cinematic End (Desktop) */}
          <div className="flex-shrink-0 w-[500px] pr-32 flex flex-col items-start justify-center">
            <div className="space-y-6">
              <Sparkles className="text-primary opacity-50" size={50} />
              <h2 className="text-4xl font-gotu font-bold text-secondary leading-[1.2]">
                {isHi ? "मिशन अभी जारी है," : "The mission continues,"} <br />
                <span className="text-primary">{isHi ? "स्वच्छता की ओर।" : "towards a greener future."}</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile View (Vertical Storyline) */}
        <div className="mobile-history-container md:hidden flex flex-col px-4 gap-16 pt-8 pb-20 relative overflow-hidden">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-20 w-[2px] bg-primary/10 -translate-x-1/2">
            <div className="history-mobile-line w-full h-0 bg-gradient-to-b from-primary via-secondary to-transparent origin-top" />
          </div>

          {historyTimeline.map((item, index) => (
            <div key={index} className="history-mobile-card relative w-full opacity-0 translate-y-10 scale-95">
              <div className="absolute left-1/2 -top-2 -translate-x-1/2 z-20">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-primary relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>
              </div>
              
              <div className="pt-8">
                <div className="flex justify-center mb-[-20px] relative z-20">
                  <span className="bg-bg px-4 py-1 text-secondary/30 font-black text-5xl font-gotu italic">
                    {item.year}
                  </span>
                </div>
                
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-4 border border-white/60 shadow-xl relative z-10">
                  <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                  </div>

                  <div className="mt-6 px-4 pb-4 text-center">
                    <h3 className="text-2xl font-bold text-secondary font-gotu mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
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