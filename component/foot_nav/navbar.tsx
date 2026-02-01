"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Contact } from "..";
import { ContactDialog } from "../contact/dialog";

export function Navbar() {
  const page = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const bgColor =
    page === "/service"
      ? "bg-[#0D1F08]"
      : page === "/schedule"
        ? "bg-[#1f0808]"
        : "bg-[#080a1f]";

  const navItems = [
    { href: "/service", label: "Services" },
    { href: "/schedule", label: "Schedule a Consult" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`font-poppins py-5 fixed top-0 left-0 w-full z-50 ${bgColor} backdrop-blur-sm`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Image src="/Logo.png" alt="logo" width={30} height={20} />
            </motion.div>
          </Link>

          <div className="flex items-center gap-5 w-[95vw] justify-end">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 text-lg">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative text-white/90 hover:text-white "
                  >
                    {item.label}
                    {page === item.href && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <motion.path
                  animate={
                    isMobileMenuOpen ? { d: "M6 18L18 6" } : { d: "M3 12h18" }
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <motion.path
                  animate={
                    isMobileMenuOpen ? { d: "M6 6L18 18" } : { d: "M3 18h18" }
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>

            {/* contact */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(true)}
              className="text-black bg-white max-w-40 w-full px-6 py-2 rounded-full text-xl"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-17.5 left-0 w-full ${bgColor} z-40 md:hidden`}
          >
            <motion.div className="px-4 py-7 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white text-xl py-2"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
