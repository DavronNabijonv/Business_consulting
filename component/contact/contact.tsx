"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ContactDialog } from "./dialog";

// Usage Example Component
export function ContactTrigger() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDialogOpen(true)}
        className="text-black bg-white max-w-40 w-full px-6 py-2 rounded-full text-xl"
      >
        Contact Us
      </motion.button>

      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}