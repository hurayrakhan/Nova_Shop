"use client";

import { motion } from "framer-motion";

const sampleProducts = [
  { id: 1, name: "Wireless Mouse", price: 19.99, description: "A smooth and fast mouse." },
  { id: 2, name: "Mechanical Keyboard", price: 59.99, description: "Clicky keys for productivity." },
  { id: 3, name: "USB-C Hub", price: 29.99, description: "Expand your laptop ports." },
];

export default function ProductHighlights() {
  return (
    <section className="py-16 border-t bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Product Highlights</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {sampleProducts.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{p.name}</h3>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <p className="font-bold text-gray-900 mb-4">${p.price.toFixed(2)}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
