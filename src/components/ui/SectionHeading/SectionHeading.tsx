import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  subtitle: string;
  titleMain: string;
  titleGradient: string;
  buttonText?: string;
  isHi?: boolean;
}

const SectionHeading = ({ 
  subtitle, 
  titleMain, 
  titleGradient, 
  buttonText, 
  isHi = false 
}: SectionHeadingProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-start mb-16 gap-8">
      <div className="max-w-4xl space-y-5">
        
        {/* 1. TOP SUBTITLE (With Line Accent) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="w-10 h-[2px] bg-[#2b3291] rounded-full" />
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2b3291]">
            {subtitle}
          </h2>
        </motion.div>

        {/* 2. MAIN LARGE TITLE */}
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[1000] text-slate-950 tracking-tighter leading-[0.95]"
        >
          {titleMain} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a651] to-[#2b3291]">
            {titleGradient}
          </span>
        </motion.h3>
      </div>

      {/* 3. ACTION BUTTON (Optional) */}
      {buttonText && (
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-8 py-5 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-sm hover:bg-slate-950 hover:text-white transition-all duration-500"
        >
          {buttonText}
          <div className="bg-slate-100 group-hover:bg-white/10 p-1 rounded-lg transition-colors">
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </motion.button>
      )}
    </div>
  );
};

export default SectionHeading;