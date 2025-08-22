"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((p, index) => (
        <motion.div
          key={p._id.toString()}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1 hover:scale-105"
        >
          {p.image && (
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {p.name}
            </h2>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <p className="font-bold text-gray-900 mb-4">
              ${p.price.toFixed(2)}
            </p>
            <Link
              href={`/products/${p._id.toString()}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
