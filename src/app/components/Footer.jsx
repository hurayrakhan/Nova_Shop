"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-50 text-gray-700 py-12 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <motion.h2
            className="text-2xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            NovaShop
          </motion.h2>
          <p className="text-gray-600">Simple shop demo built with Next.js</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-gray-900 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.2, color: "#1D4ED8" }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        &copy; {new Date().getFullYear()} NovaShop. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
