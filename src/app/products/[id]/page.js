import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProductsList from "@/app/components/ProductsList";
import clientPromise from "@/lib/mongodb";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("novashop");
  const products = await db
    .collection("products")
    .find({})
    .sort({ _id: -1 })
    .toArray();

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Our Products
        </h1>

        {/* Client-side motion component */}
        <ProductsList products={products} />
      </main>
      <Footer />
    </div>
  );
}
