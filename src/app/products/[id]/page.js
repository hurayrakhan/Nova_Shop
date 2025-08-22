import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { products } from "@/lib/products";


export default function ProductDetailsPage({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div>
        <Navbar />
        <main className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold">Product not found ❌</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">${product.price}</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </main>
      <Footer />
    </div>
  );
}
