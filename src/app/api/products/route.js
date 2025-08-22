import clientPromise from "@/lib/mongodb"; // your MongoDB connection

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("novashop");
    const products = await db.collection("products").find({}).toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("novashop");
    const body = await req.json();

    const result = await db.collection("products").insertOne(body);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
