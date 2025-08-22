"use client"; // Required because we use useState & form events

import { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [success, setSuccess] = useState(false);

  // Mock submission handler (replace with API later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", { name, description, price });
    setName("");
    setDescription("");
    setPrice("");
    setSuccess(true);
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>

        {success && (
          <p className="text-green-600 mb-4">Product added successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border px-3 py-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Add Product
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
