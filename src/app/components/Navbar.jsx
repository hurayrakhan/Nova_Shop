"use client"; 

import { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaUser, FaTachometerAlt, FaSignOutAlt, FaCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-card-bg shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-primary">NovaShop</h1>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {!session ? (
            <>
              <Link href="/login" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover transition-colors">Login</Link>
              <Link href="/register" className="bg-primary/70 text-white px-4 py-2 rounded hover:bg-primary transition-colors">Register</Link>
            </>
          ) : (
            <div className="relative">
              <button onClick={toggleMenu} className="flex items-center space-x-2">
                <FaUserCircle className="text-2xl text-primary" />
                <span>{session.user.name}</span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-card-bg shadow-lg rounded-md py-2 z-50"
                  >
                    <Link href="/profile" className="flex items-center px-4 py-2 hover:bg-primary/10 transition-colors">
                      <FaUser className="mr-2" /> Profile
                    </Link>
                    <Link href="/dashboard" className="flex items-center px-4 py-2 hover:bg-primary/10 transition-colors">
                      <FaTachometerAlt className="mr-2" /> Dashboard
                    </Link>
                    <Link href="/settings" className="flex items-center px-4 py-2 hover:bg-primary/10 transition-colors">
                      <FaCog className="mr-2" /> Settings
                    </Link>
                    <button onClick={() => {
                      signOut()
                      router.push('/')
                    }} className="flex items-center w-full px-4 py-2 hover:bg-primary/10 transition-colors text-left">
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
