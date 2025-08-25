"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div>
        <Navbar />
        <main className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Welcome, {session?.user?.name || "User"}!
          </h1>
          <p className="text-gray-600 mb-8">
            From here you can manage your products and explore your dashboard features.
          </p>

          <Link
            href="/dashboard/add-product"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add a New Product
          </Link>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
