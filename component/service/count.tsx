"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Count() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { number: "30+", label: "years of experience" },
    { number: "98%", label: "success rate in court" },
    { number: "120+", label: "attorneys at hand" },
  ];

  return (
    <div className="bg-white lg:py-25 py-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-300 w-full mx-auto flex flex-wrap items-center md:justify-between justify-center lg:gap-0 sm:gap-5 gap-10 lg:px-2 px-5"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="sm:space-y-10 space-y-5 text-center"
          >
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2 + 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="lg:text-9xl text-7xl text-black"
            >
              {stat.number}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.5,
              }}
              className="sm:text-2xl text-xl text-black"
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}