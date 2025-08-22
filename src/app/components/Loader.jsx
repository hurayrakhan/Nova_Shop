"use client";

import { motion } from "framer-motion";

export default function Loader({ size = 12 }) {
  return (
    <motion.div
      className={`flex items-center justify-center`}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <div
        className={`w-${size} h-${size} border-4 border-t-blue-600 border-gray-300 rounded-full`}
      ></div>
    </motion.div>
  );
}
