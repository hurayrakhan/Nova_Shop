import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-2xl font-bold">NovaShop</Link>
      <div className="space-x-6">
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}
