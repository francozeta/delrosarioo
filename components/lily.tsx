'use client';

import { motion } from 'framer-motion';

interface LilyProps {
  delay?: number;
  x?: number | string;
  y?: number | string;
  size?: number;
}

export function Lily({ delay = 0, x = 0, y = 0, size = 100 }: LilyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 0.7,
        type: 'spring',
        stiffness: 70,
        damping: 12,
      }}
      className="absolute"
      style={{ x, y }}
    >
      <svg
        width={size}
        height={size * 1.3}
        viewBox="0 0 100 130"
        className="drop-shadow-2xl"
      >
        <defs>
          {/* Gradients para pétalos realistas */}
          <linearGradient id="petalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="1" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
            <stop offset="100%" stopColor="#db2777" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="petalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f097d1" stopOpacity="1" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
            <stop offset="100%" stopColor="#be185d" stopOpacity="0.9" />
          </linearGradient>

          <radialGradient id="centerGradient">
            <stop offset="0%" stopColor="#fcd34d" stopOpacity="1" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Tallo */}
        <motion.path
          d="M 50 130 Q 48 95 50 55"
          stroke="#15803d"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
          animate={{ strokeDasharray: 100, strokeDashoffset: 0 }}
          transition={{ delay: delay - 0.1, duration: 0.8 }}
        />

        {/* Hojas */}
        <motion.path
          d="M 45 95 Q 30 90 28 110 Q 30 105 45 95"
          fill="#16a34a"
          opacity="0.8"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.8, pathLength: 1 }}
          transition={{ delay: delay - 0.05, duration: 0.6 }}
        />
        <motion.path
          d="M 55 85 Q 70 75 72 95 Q 70 88 55 85"
          fill="#22c55e"
          opacity="0.7"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.7, pathLength: 1 }}
          transition={{ delay: delay, duration: 0.6 }}
        />

        {/* Pétalos del lirio - 6 pétalos con forma realista */}
        {/* Pétalo 1 - arriba */}
        <motion.path
          d="M 50 35 Q 45 15 50 0 Q 55 15 50 35 Z"
          fill="url(#petalGradient1)"
          custom={0}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.15,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Pétalo 2 - arriba derecha */}
        <motion.path
          d="M 60 28 Q 70 12 82 8 Q 70 25 60 28 Z"
          fill="url(#petalGradient2)"
          custom={1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.22,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Pétalo 3 - derecha */}
        <motion.path
          d="M 70 40 Q 85 30 92 42 Q 80 48 70 40 Z"
          fill="url(#petalGradient1)"
          custom={2}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.29,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Pétalo 4 - abajo derecha */}
        <motion.path
          d="M 60 52 Q 75 68 78 85 Q 65 70 60 52 Z"
          fill="url(#petalGradient2)"
          custom={3}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.36,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Pétalo 5 - abajo izquierda */}
        <motion.path
          d="M 40 52 Q 25 68 22 85 Q 35 70 40 52 Z"
          fill="url(#petalGradient1)"
          custom={4}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.43,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Pétalo 6 - izquierda */}
        <motion.path
          d="M 30 40 Q 15 30 8 42 Q 20 48 30 40 Z"
          fill="url(#petalGradient2)"
          custom={5}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.5,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Pétalo 7 - arriba izquierda */}
        <motion.path
          d="M 40 28 Q 30 12 18 8 Q 30 25 40 28 Z"
          fill="url(#petalGradient1)"
          custom={6}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: delay + 0.57,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
          }}
        />

        {/* Centro del lirio */}
        <motion.circle
          cx="50"
          cy="43"
          r="8"
          fill="url(#centerGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: delay + 0.4,
            duration: 0.5,
            type: 'spring',
          }}
        />

        {/* Estambres (filamentos) */}
        {[0, 120, 240].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 50 + 12 * Math.cos(rad);
          const y2 = 43 + 12 * Math.sin(rad);
          return (
            <motion.g key={`stamen-${i}`}>
              <motion.line
                x1="50"
                y1="43"
                x2={x2}
                y2={y2}
                stroke="#d97706"
                strokeWidth="1.2"
                opacity="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: delay + 0.45 }}
              />
              <motion.circle
                cx={x2}
                cy={y2}
                r="1.5"
                fill="#dc2626"
                opacity="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: delay + 0.5,
                  type: 'spring',
                }}
              />
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}
