import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcrypt";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // ✅ Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ✅ Email/Password Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("novashop");

        const user = await db.collection("users").findOne({ email: credentials.email });
        if (!user) throw new Error("No user found with this email");

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // custom login page
  },
});

export { handler as GET, handler as POST };
