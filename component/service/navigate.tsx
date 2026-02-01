"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    id: 1,
    title: "Business and Corporate Law",
    desc: `Business formation (LLCs, corporations, partnerships)
           Contract drafting and review
           Mergers and acquisitions
           Intellectual property protection
           Employment law and workplace policies
           Corporate governance
           Shareholder and partnership disputes`,
  },
  {
    id: 2,
    title: "Litigation and Dispute Resolution",
    desc: `Civil litigation
           Commercial litigation
           Arbitration and mediation
           Class action lawsuits
           Personal injury claims
           Product liability cases`,
  },
  {
    id: 3,
    title: "Family Law",
    desc: `Divorce and separation
           Child custody and support
           Prenuptial and postnuptial agreements
           Adoption and surrogacy
           Domestic violence protection`,
  },
  {
    id: 4,
    title: "Criminal Defense",
    desc: `DUI and traffic offenses
          White-collar crime defense
          Drug charges
          Assault and battery cases
          Expungements and record sealing`,
  },
  {
    id: 5,
    title: "Real Estate Law",
    desc: `Property transactions (buying, selling, leasing)
          Landlord-tenant disputes
          Zoning and land use
          Construction law
          Real estate development`,
  },
  {
    id: 6,
    title: "Immigration Law",
    desc: `Visa applications
          Green cards and citizenship
          Deportation defense
          Employment-based immigration`,
  },
];

export function Navigate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <div className="bg-[#0D1F08] sm:py-20 py-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-300 w-full mx-auto sm:space-y-15 space-y-10 lg:px-2 px-5"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white min-[450px]:text-3xl text-2xl max-w-130 w-full"
          >
            Navigating Complex Legal Landscapes? We Can Help.
          </motion.div>

          {/* Services List */}
          <div className="border-b border-white space-y-10 pb-15">
            {SERVICES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 },
                }}
                className="flex sm:flex-row flex-col items-start justify-between sm:gap-3 gap-8 max-sm:px-2 border-t border-white pt-5 sm:pr-20"
              >
                <motion.p
                  whileHover={{
                    color: "#f7f4eb",
                    transition: { duration: 0.2 },
                  }}
                  className="text-xl"
                >
                  {item.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="max-w-80 w-full"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="/service/image.png"
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