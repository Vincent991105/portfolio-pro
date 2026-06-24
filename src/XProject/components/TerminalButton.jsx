import React from 'react';
import { motion } from 'framer-motion';

const TerminalButton = ({ children, onClick, variant = 'primary' }) => {
  const baseStyles = "relative font-mono py-3 px-8 uppercase tracking-[0.2em] transition-all duration-300 border focus:outline-none";
  const variants = {
    primary: "bg-emerald-500 text-slate-950 border-emerald-500 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
    outline: "border-emerald-800 text-emerald-800 hover:border-emerald-500 hover:text-emerald-500"
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );
};

export default TerminalButton;