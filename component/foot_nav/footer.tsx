"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants :Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = ["Instagram", "Facebook", "LinkedIn", "Bluesky"];

  return (
    <footer ref={ref} className="bg-[#f7f4eb] min-[500px]:py-20 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-full mx-auto px-4 min-[500px]:space-y-20 space-y-10"
      >
        {/* Logo and Title */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 justify-between"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/Logo_black.png"
              alt="footer logo black image"
              width={70}
              height={70}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-black text-4xl"
          >
            Jones & Brown Legal
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          whileHover={{ x: 10 }}
          className="text-black text-xl"
        >
          Deep expertise, decisive courtroom presence
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl w-full grid min-[500px]:grid-cols-3 grid-cols-1 min-[500px]:gap-2 gap-8"
        >
          {/* Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-md text-black space-y-2"
          >
            <motion.p whileHover={{ x: 5, color: "#1a1a1a" }}>
              hello@gmail.com
            </motion.p>
            <motion.p whileHover={{ x: 5, color: "#1a1a1a" }}>
              (090) 090-09-09
            </motion.p>
          </motion.div>

          {/* Address */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-md text-black space-y-2"
          >
            <p>123 Candyland Lane</p>
            <p>Suite 123</p>
            <p>Virginia California, Ca 11223</p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="text-md text-black space-y-2">
            {socialLinks.map((social, index) => (
              <motion.p
                key={social}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{
                  x: 10,
                  color: "#4a4a4a",
                  transition: { duration: 0.2 },
                }}
                className="cursor-pointer"
              >
                {social}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-md text-black space-y-2 border-t border-black/10 pt-8"
        >
          <p>Jones & Brown Legal</p>
          <p>© 2026 All Rights Reserved</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}