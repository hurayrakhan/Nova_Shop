"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductHighlights from "./components/ProductHighlights";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProductHighlights />
        </motion.section>
      </main>
      <Footer></Footer>
    </>
  );
}
