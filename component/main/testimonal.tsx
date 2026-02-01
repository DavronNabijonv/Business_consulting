"use client";

import Image from "next/image";
import Link from "next/link";
import { TestimonialSlider } from "./testimonalSlider/slider";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Testimonal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <div className="flex flex-col items-center justify-center sm:gap-10 gap-5 md:py-30 py-20 max-[450px]:py-10 bg-white text-center text-black">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center gap-10"
        >
          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:text-4xl text-3xl max-[350px]:text-2xl font-medium"
          >
            Hear From Our Clients
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-120 w-full mx-auto text-lg max-sm:px-3"
          >
            We believe that our clients' experiences speak volumes about the
            quality of our legal services. Here's what some of them have to say:
          </motion.p>

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-[#f6f6f6]"
          >
            <TestimonialSlider />
          </motion.div>

          {/* Bottom */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-100 w-full mx-auto text-lg"
          >
            Let us help you navigate your legal journey with confidence and peace
            of mind. Contact Jones & Brown Legal today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link href="/schedule">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block text-white bg-[#31110f] px-6 py-3 rounded-full text-xl"
              >
                Schedule a Cunsult
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="/home/image3.png"
            alt="divider Image"
            fill
            priority
            className="w-full h-screen object-cover"
          />
        </motion.div>
      </div>
    </>
  );
}