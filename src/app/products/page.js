import { products } from "@/lib/products";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600">{p.description}</p>
              <p className="mt-2 font-bold">${p.price}</p>
              <Link
                href={`/products/${p.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
