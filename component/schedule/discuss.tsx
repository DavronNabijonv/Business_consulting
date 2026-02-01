"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ContactDialog } from "../dialog";

const DISCUSS = [
  {
    id: 1,
    title: "Free consultation",
    desc: `Schedule a complimentary consultation to 
    discuss your legal needs. During this session, our 
    experienced attorneys will assess your situation, 
    provide initial guidance, and outline potential strategies.`,
  },
  {
    id: 2,
    title: "Personalized Case Evaluation",
    desc: `If you choose to move forward, we conduct a detailed 
    review of your case. This includes gathering key documents, 
    outlining your legal options, and developing a tailored 
    plan designed to achieve the best possible outcome.`,
  },
  {
    id: 3,
    title: "Formal Engagement & Representation",
    desc: `Once you decide to proceed, we finalize the paperwork 
    and begin representing you. Our team will keep you informed 
    at every stage, ensuring you feel confident and supported 
    throughout the process.`,
  },
];

export function Discuss() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <div className="bg-[#1f0808] sm:py-30 py-10 text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-300 w-full mx-auto lg:px-2 px-5"
        >
          {/* Header */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:text-3xl text-2xl"
          >
            Ready to Take the Next Step?{" "}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:text-3xl text-2xl"
          >
            Let's Discuss
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full bg-white h-0.5 lg:my-10 my-5 origin-left"
          />

          {/* Steps */}
          <div>
            {DISCUSS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.6 + index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 },
                }}
                className="border-b border-white lg:py-15 py-10 flex md:flex-row flex-col sm:items-start md:items-center justify-between gap-3"
              >
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#f7f4eb",
                    transition: { duration: 0.3 },
                  }}
                  className="lg:text-[200px] sm:text-[100px] text-4xl lg:-mt-20"
                >
                  {item.id}
                </motion.p>
                <div className="max-w-100 w-full lg:space-y-18 space-y-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.2,
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item.title}
                  </motion.p>{" "}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.9 + index * 0.2,
                    }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="flex sm:flex-row flex-col sm:items-center mt-20 w-full sm:gap-20 gap-5"
          >
            <motion.p
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
              className="lg:text-4xl sm:text-3xl text-2xl"
            >
              Discover how we can help
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(true)}
              className="text-black bg-white max-w-40 w-full px-6 py-2 rounded-full text-xl"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
