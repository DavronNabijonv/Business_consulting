"use client";

import { motion } from "framer-motion";

export function Banner() {
  return (
    <div className="relative min-h-screen flex items-end pb-9 mt-16 overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/Header_section_home.png')",
        }}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="max-w-9xl w-full mx-auto lg:px-8 px-5 relative z-10 h-full flex items-end justify-start">
        <div className="sm:space-y-8 space-y-6">
          {/* Main Title */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white lg:text-9xl md:text-7xl text-5xl font-medium"
          >
            Jones & Brown Legal
          </motion.p>

          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-5">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="lg:text-3xl text-2xl max-w-xl w-full text-white/90"
            >
              Deep expertise, decisive courtroom presence
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="text-xl max-w-md w-full text-white/80"
            >
              We've been serving the Los Angeles area with expert legal counsel
              since 1976.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}