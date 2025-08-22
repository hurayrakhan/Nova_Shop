"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Hero() {
  const { data: session } = useSession();

  // If logged in, redirect button should go to dashboard (or profile page)
  const getStartedHref = session ? "/dashboard" : "/login";
  const getStartedLabel = session ? "Go to Dashboard" : "Get Started";

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Welcome to <span className="text-yellow-300">NovaShop</span> 🚀
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
        >
          Discover amazing products, explore details, and manage your own items
          with ease. Your shopping journey starts here.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Products
          </Link>
          <Link
            href={getStartedHref}
            className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            {getStartedLabel} <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
