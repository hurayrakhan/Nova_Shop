import clientPromise from "@/lib/mongodb";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ObjectId } from "mongodb";
import ProductDetailsClient from "@/app/components/ProductDetails";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const client = await clientPromise;
  const db = client.db("novashop");

  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div>
        <Navbar />
        <main className="max-w-3xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  // Serialize _id
  const serializedProduct = { ...product, _id: product._id.toString() };

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <ProductDetailsClient product={serializedProduct} />
      </main>
      <Footer />
    </div>
  );
}
