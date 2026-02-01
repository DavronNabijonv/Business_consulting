"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const offers = [
    "Business formation",
    "Contract drafting",
    "Mergers and Acquisitions",
    "Property Protection",
    "Employment Law",
    "Corporate Governance",
    "Shareholder Disputes",
  ];

  return (
    <div className="bg-[#0D1F08] py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="min-[850px]:space-y-10 max-w-280 w-full min-[850px]:px-2 px-5 mx-auto flex min-[850px]:flex-row flex-col items-start gap-15"
      >
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white text-3xl font-semibold"
        >
          What We Offer
        </motion.p>

        {/* Offers List */}
        <div className="space-y-2">
          {offers.map((item, index) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                x: 10,
                color: "#f7f4eb",
                transition: { duration: 0.2 },
              }}
              className="text-white min-[1200px]:text-7xl lg:text-6xl sm:text-5xl text-3xl max-[390px]:text-2xl cursor-default"
            >
              {item}
            </motion.p>
          ))}

          {/* +More */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.3 + offers.length * 0.1,
            }}
            whileHover={{
              opacity: 0.7,
              x: 10,
              transition: { duration: 0.2 },
            }}
            className="text-white opacity-50 min-[1200px]:text-7xl lg:text-6xl sm:text-5xl text-3xl max-[390px]:text-2xl sm:mb-20 mb-10 cursor-default"
          >
            +More
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.5 + offers.length * 0.1,
            }}
          >
            <Link href="/service">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-black text-xl px-6 py-3 tracking-[2px] rounded-full"
              >
                Service
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}