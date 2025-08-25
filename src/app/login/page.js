"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Email & Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (res?.ok) {
      Swal.fire("Success!", "Login successful!", "success").then(() => {
        router.push("/products");
      });
    } else {
      Swal.fire("Error", res?.error || "Invalid credentials", "error");
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    const res = await signIn("google", { callbackUrl: "/products" });

    if (res?.ok) {
      Swal.fire("Success!", "Login successful!", "success").then(() => {
        router.push("/products");
      });
    }
    
    if (res?.error) {
      Swal.fire("Error", res.error, "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl text-gray-700 font-bold mb-4 text-center">Login</h2>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          required
        />

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-3 flex items-center justify-center gap-2 bg-white border py-2 rounded shadow hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Switch to Register */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
