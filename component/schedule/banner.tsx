"use client";

import { motion, Variants } from "framer-motion";

export function Banner() {
  const text = "Let us help you";
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const, // <-- Bu yerda "as const" qo'shildi
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-[91vh] flex items-end pb-10 mt-17 overflow-hidden">
      {/* Background with ken burns effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/schedule/schedule_banner.png')",
        }}
      />

      {/* Animated overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-linear-to-br from-black/50 to-black/30"
      />

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto lg:px-8 px-5 relative z-10 h-full flex items-end justify-start">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:text-8xl sm:text-6xl text-4xl max-w-4xl w-full"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block mr-4 text-white font-bold"
              whileHover={{
                scale: 1.1,
                color: "#f7f4eb",
                transition: { duration: 0.2 },
              }}
            >
              {word}
            </motion.span>
          ))}

          {/* Cursor effect */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block w-2 h-20 bg-white ml-2"
          />
        </motion.div>
      </div>
    </div>
  );
}