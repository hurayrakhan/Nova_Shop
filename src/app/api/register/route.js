import clientPromise from "@/lib/mongodb";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password, image } = await req.json();
    const client = await clientPromise;
    const db = client.db("novashop");

    const existing = await db.collection("users").findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      image: image || null,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
