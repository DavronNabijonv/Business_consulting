"use client";

import { motion } from "framer-motion";

export function Banner() {
  return (
    <div className="relative min-h-[91vh] flex items-end pb-10 mt-17 overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/service/service_hero.png')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto lg:px-8 px-5 relative z-10 h-full flex items-end justify-start">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.p
            whileHover={{ scale: 1.02, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="sm:text-3xl text-2xl max-w-2xl w-full text-white leading-relaxed"
          >
            At Jones & Brown Legal, we are committed to exceptional service and
            successful outcomes with:
          </motion.p>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="h-1 bg-white mt-6"
          />
        </motion.div>
      </div>
    </div>
  );
}