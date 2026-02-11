'use client';

import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Lily } from './lily';

const PLAYLIST_URL = process.env.NEXT_PUBLIC_PLAYLIST_URL || 'https://music.apple.com/pe/playlist/dolce/pl.u-vxy66AjC86VkVqY?ls=1&app=music';

const flowerPositions = [
  { x: -50, y: -50, delay: 0.1 },
  { x: 50, y: -50, delay: 0.2 },
  { x: -50, y: 50, delay: 0.3 },
  { x: 50, y: 50, delay: 0.4 },
  { x: 0, y: 0, delay: 0.5 },
];

export function ValentineProposal() {
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [attemptCount, setAttemptCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    const isMobile = window.innerWidth < 640;
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (!containerRect) return;

    // Generar posición aleatoria pero dentro de los límites de la pantalla
    const maxX = containerRect.width - 100;
    const maxY = containerRect.height - 50;

    const randomX = (Math.random() - 0.5) * maxX * 0.6;
    const randomY = (Math.random() - 0.5) * maxY * 0.4;

    setNoButtonPos({ x: randomX, y: randomY });
    setAttemptCount((prev) => prev + 1);
  };

  const handleNoInteraction = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f5a5c7 100%)',
      }}
    >
      {/* Confetti when YES */}
      {answered === true && (
        <Confetti
          ref={confettiRef}
          width={typeof window !== 'undefined' ? window.innerWidth : 800}
          height={typeof window !== 'undefined' ? window.innerHeight : 600}
          numberOfPieces={300}
          recycle={true}
          gravity={0.2}
        />
      )}

      {answered === null ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
          className="relative flex h-screen w-full flex-col items-center justify-center gap-8 px-4"
        >
          {/* Flores decorativas grandes - dispersas */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-2 left-0 sm:top-8 sm:left-4"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <Lily delay={0.3} x={0} y={0} size={140} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-6 right-0 sm:top-12 sm:right-4"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 2.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.3,
              }}
            >
              <Lily delay={0.4} x={0} y={0} size={150} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 sm:top-0"
          >
            <motion.div
              animate={{ y: [0, -22, 0] }}
              transition={{
                duration: 2.7,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.15,
              }}
            >
              <Lily delay={0.5} x={0} y={0} size={145} />
            </motion.div>
          </motion.div>

          {/* Título principal */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-6xl font-black text-white drop-shadow-lg">
              ¿Quieres ser mi
            </h1>
            <h1 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent drop-shadow-lg mt-2">
              San Valentín?
            </h1>
          </motion.div>

          {/* Texto decorativo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white drop-shadow-md font-semibold"
          >
            💐 Dariana del Rosario Bazan 💐
          </motion.p>

          {/* Botones - optimizado para móvil */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="relative flex w-full max-w-md flex-col gap-5 sm:flex-row sm:gap-8 sm:max-w-2xl items-center justify-center"
          >
            {/* Botón SÍ */}
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAnswered(true)}
              className="min-w-32 rounded-full bg-gradient-to-br from-pink-500 via-pink-400 to-rose-500 px-10 py-4 font-black text-white shadow-2xl transition-all text-lg sm:text-xl drop-shadow-lg hover:drop-shadow-2xl"
            >
              ¡SÍ! 💖
            </motion.button>

            {/* Botón NO (esquivo) */}
            <motion.button
              ref={noButtonRef}
              animate={noButtonPos}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                mass: 1,
              }}
              onMouseEnter={() => moveNoButton()}
              onTouchStart={(e) => handleNoInteraction(e as React.TouchEvent)}
              onTouchMove={(e) => handleNoInteraction(e as React.TouchEvent)}
              onClick={(e) => handleNoInteraction(e as React.MouseEvent)}
              className="min-w-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 px-10 py-4 font-bold text-gray-700 shadow-xl transition-all text-lg sm:text-xl hover:shadow-2xl drop-shadow-lg whitespace-nowrap cursor-pointer"
            >
              No...
            </motion.button>
          </motion.div>

          {/* Hint text - only visible after attempting NO */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: attemptCount > 0 ? 1 : 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-sm sm:text-base text-white drop-shadow-md font-semibold mt-4 max-w-xs h-6"
          >
            {attemptCount > 0 && (
              <>
                {attemptCount === 1
                  ? '¿ESTÁS SEGURA?'
                  : attemptCount === 2
                    ? 'Piénsalo bien, ¿segura?'
                    : attemptCount === 3
                      ? 'Dame una oportunidad...'
                      : attemptCount === 4
                        ? 'Te lo pido por favor...'
                        : attemptCount === 5
                          ? 'Vamos, di que sí...'
                          : attemptCount === 6
                            ? 'No me hagas rogar...'
                            : attemptCount % 3 === 1
                              ? 'Eres imposible 😄'
                              : attemptCount % 3 === 2
                                ? 'Te quiero igual... 💕'
                                : 'Dile que sí, vamos!'}
              </>
            )}
          </motion.p>
        </motion.div>
      ) : answered ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex h-screen w-full flex-col items-center justify-center gap-8 px-4"
        >
          {/* Flores grandes en los lados - centradas */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute left-0 top-1/4 sm:top-1/3"
          >
            <Lily delay={0} x={0} y={0} size={160} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute right-0 bottom-1/4 sm:bottom-1/3"
          >
            <Lily delay={0.1} x={0} y={0} size={170} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          >
            <Lily delay={0.2} x={0} y={0} size={155} />
          </motion.div>

          {/* Success message - CENTERED IN MIDDLE */}
          <motion.div
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 60 }}
            className="relative z-30 bg-white/95 backdrop-blur-sm px-6 py-12 rounded-3xl shadow-2xl max-w-sm w-full"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent text-center"
            >
              ¡Sí! 🎉
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl font-bold text-gray-700 text-center"
            >
              Sabía que dirías que sí
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg text-pink-600 font-semibold text-center"
            >
              Te quiero
            </motion.p>

            <motion.a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="mt-8 block rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all text-center text-base sm:text-lg"
            >
              Te dedico esta playlist :3
            </motion.a>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}
