"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUserCircle, FaUser, FaTachometerAlt, FaSignOutAlt, FaCog, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl text-black font-bold">
          <span className="text-blue-600">N</span>ova
          <span className="text-pink-500">S</span>hop
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-gray-800 transition ${
                  isActive(link.href) ? "text-blue-600 font-bold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {!session ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded bg-white hover:bg-gray-100 transition"
              >
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaUserCircle className="text-2xl" />
                )}
                <span className="font-medium">{session.user.name}</span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 shadow-lg rounded-md py-2  z-50"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 hover:bg-blue-400 transition"
                    >
                      <FaUser className="mr-2" /> Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="flex items-center px-4 py-2 hover:bg-blue-400 transition"
                    >
                      <FaTachometerAlt className="mr-2" /> Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center px-4 py-2 hover:bg-blue-400 transition"
                    >
                      <FaCog className="mr-2" /> Settings
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        router.push("/");
                      }}
                      className="flex items-center w-full px-4 py-2 hover:bg-blue-100 transition text-left"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-2 py-2 rounded hover:bg-gray-100 transition ${
                      isActive(link.href) ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {!session ? (
              <div className="flex flex-col px-4 py-2 space-y-2">
                <Link
                  href="/login"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex flex-col px-4 py-2 space-y-2 border-t mt-2">
                <span className="font-medium px-2">{session.user.name}</span>
                <Link
                  href="/profile"
                  className="flex items-center px-2 py-2 rounded hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaUser className="mr-2" /> Profile
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center px-2 py-2 rounded hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaTachometerAlt className="mr-2" /> Dashboard
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center px-2 py-2 rounded hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaCog className="mr-2" /> Settings
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    router.push("/");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-2 py-2 hover:bg-gray-100 transition text-left"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
