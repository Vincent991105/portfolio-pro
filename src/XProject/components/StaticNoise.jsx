// StaticNoise.jsx
import React from 'react';
import { motion } from 'framer-motion';

const StaticNoise = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.1, 0, 0.05, 0, 0.15, 0], // 隨機閃爍
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        times: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1] // 控制閃爍節奏
      }}
      className="fixed inset-0 pointer-events-none z-30 bg-noise mix-blend-overlay"
    />
  );
};

export default StaticNoise;