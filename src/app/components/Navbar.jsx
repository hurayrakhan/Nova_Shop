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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">NovaShop</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-900 transition">Products</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {!session ? (
            <>
              <Link 
                href="/login"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Login
              </Link>
              <Link 
                href="/register"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button 
                onClick={toggleMenu} 
                className="flex items-center space-x-2 px-3 py-2 rounded bg-white  hover:bg-gray-100 transition"
              >
                <FaUserCircle className=" text-2xl" />
                <span className=" font-medium">{session.user.name}</span>
              </button>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 shadow-lg rounded-md py-2 z-50"
                  >
                    <Link href="/profile" className="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                      <FaUser className="mr-2" /> Profile
                    </Link>
                    <Link href="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                      <FaTachometerAlt className="mr-2" /> Dashboard
                    </Link>
                    <Link href="/settings" className="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                      <FaCog className="mr-2" /> Settings
                    </Link>
                    <button 
                      onClick={() => { signOut(); router.push('/') }}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 transition text-left text-gray-800"
                    >
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
