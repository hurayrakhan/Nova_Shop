export const dynamic = "force-dynamic";

import clientPromise from "@/lib/mongodb";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductsList from "@/app/components/ProductsList";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("novashop");
  const products = await db
    .collection("products")
    .find({})
    .sort({ _id: -1 })
    .toArray();

  console.log(products)
  // convert _id to string so it's serializable
  const serializedProducts = products.map(p => ({
    ...p,
    _id: p._id.toString(),
  }));

  return (
    <div>
      <Navbar />
      <main className="w-10/12 mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-400">
          Our Products
        </h1>

        <ProductsList products={serializedProducts} />
      </main>
      <Footer />
    </div>
  );
}
