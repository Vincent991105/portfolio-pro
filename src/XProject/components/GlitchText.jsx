// GlitchText.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className = "" }) => {
  // Framer Motion 的動畫配置：隨機跳動與透明度變化
  const glitchVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [1, 0.8, 1, 0.9, 1, 0], // 模擬閃爍
      x: [0, -2, 2, -1, 0, 1, 0], // 水平隨機跳動
      y: [0, 1, -1, 0, 2, -1, 0], // 垂直隨機跳動
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.5, 0.9, 1] // 控制閃爍與跳動的節奏
      }
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* 底層文字：主要的螢光綠色 */}
      <motion.span
        variants={glitchVars}
        initial="hidden"
        animate="visible"
        className="block text-emerald-500 font-mono"
      >
        {children}
      </motion.span>
      
      {/* 故障層 1：稍微偏移的紅色層 */}
      <motion.span
        variants={glitchVars}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.05, ...glitchVars.visible.transition }} // 稍微延遲
        className="absolute top-0 left-0 block text-red-500 font-mono opacity-50 mix-blend-screen"
        style={{ x: -1, y: 1 }}
      >
        {children}
      </motion.span>
      
      {/* 故障層 2：稍微偏移的藍色層 */}
      <motion.span
        variants={glitchVars}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1, ...glitchVars.visible.transition }} // 更多延遲
        className="absolute top-0 left-0 block text-blue-500 font-mono opacity-50 mix-blend-screen"
        style={{ x: 1, y: -1 }}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default GlitchText;