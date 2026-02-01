"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Welcome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
      <div className="bg-[#f7f4eb] md:py-30 py-20 max-[450px]:py-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10 max-w-300 w-full mx-auto lg:px-2 px-5"
        >
          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-3xl"
          >
            Welcome to Jones & Brown Legal
          </motion.p>

          {/* Text Content */}
          <div className="flex md:flex-row flex-col items-start gap-4">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-black text-lg md:max-w-125 w-full"
            >
              Jones & Brown Legal has been a pillar of the Los Angeles legal
              community, providing expert legal counsel across a wide spectrum
              of practice areas. We are more than just attorneys, we are trusted
              advisors, dedicated advocates, and strategic partners committed to
              achieving the best possible outcomes for our clients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-black text-lg md:max-w-126 w-full"
            >
              We combine decades of experience with a deep understanding of the
              complexities of California law. Our team of seasoned trial
              attorneys boasts a proven track record of success in courtrooms
              throughout Los Angeles and beyond. We pride ourselves on our
              comprehensive expertise, covering nearly every field of law,
              ensuring that whatever your legal challenge, we have the knowledge
              and experience to guide you.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/schedule"
              className="text-white bg-[#31110f] px-6 py-3 rounded-full text-xl inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
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
            src="/home/image2.png"
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