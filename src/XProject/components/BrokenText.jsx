// BrokenText.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BrokenText = ({ children, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* 底層文字 */}
      <span className="block text-emerald-500 font-mono animate-text-break">
        {children}
      </span>
      
      {/* 破損層 1 (紅色位移) */}
      <span className="absolute top-0 left-0 block text-red-500 font-mono opacity-60 mix-blend-screen animate-text-break" style={{ animationDelay: '0.1s', x: -1 }}>
        {children}
      </span>
      
      {/* 破損層 2 (藍色位移) */}
      <span className="absolute top-0 left-0 block text-blue-500 font-mono opacity-60 mix-blend-screen animate-text-break" style={{ animationDelay: '0.2s', x: 1 }}>
        {children}
      </span>
    </div>
  );
};

export default BrokenText;