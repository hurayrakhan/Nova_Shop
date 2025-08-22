import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("novashop"); // default DB from URI
    const data = await req.json();

    // Validate
    if (!data.name || !data.description || !data.price) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const result = await db.collection("products").insertOne(data);

    return new Response(
      JSON.stringify({ message: "Product added", id: result.insertedId }),
      { status: 201 }
    );
  } catch (err) {
    console.error("API error:", err);
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
