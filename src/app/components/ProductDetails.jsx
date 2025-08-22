"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductDetailsClient({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-contain"
        />
      )}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {product.name}
        </h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-6 text-gray-900">
          ${product.price.toFixed(2)}
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Back to Products
        </Link>
      </div>
    </motion.div>
  );
}
