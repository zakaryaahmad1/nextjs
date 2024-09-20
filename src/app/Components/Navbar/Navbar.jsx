"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // New way to get path in Next.js 13
import Image from "next/image";
import Logo from '../../../../public/images/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Hook to get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-4 py-4 sticky top-0  flex justify-between lg:justify-evenly items-center w-full z-50">
      <Link href="/">
        <div className="text-lg md:text-3xl font-bold italic text-[#474747] flex items-center gap-2">
          {/* Logo Section */}
          <Image src={Logo} className="w-10 h-10" />
          <p>Bistro Bliss</p>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex space-x-6 items-center">
        <li className={pathname === "/" ? "bg-[#DBDFD0] rounded-full px-4 py-1" : "px-4 py-1"}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "bg-[#DBDFD0] rounded-full px-4 py-1" : "px-4 py-1"}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/menu" ? "bg-[#DBDFD0] rounded-full px-4 py-1" : "px-4 py-1"}>
          <Link href="/menu">Menu</Link>
        </li>
        <li className={pathname === "/pages" ? "bg-[#DBDFD0] rounded-full px-4 py-1" : "px-4 py-1"}>
          <Link href="/pages">Pages</Link>
        </li>
        <li className={pathname === "/contact" ? "bg-[#DBDFD0] rounded-full px-4 py-1" : "px-4 py-1"}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Book a Table Button */}
      <button className="hidden lg:block border px-6 py-2 font-bold hover:bg-red-500 hover:text-gray-50 duration-500 hover:border-red-500 border-black p-2 rounded-full shadow-md">
        Book A Table
      </button>

      {/* Mobile Hamburger Icon */}
      <button onClick={toggleMenu} className="z-50 p-2 lg:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? `absolute top-16 duration-1000 left-0 w-full bg-white shadow-md z-50 transition-transform ease-in-out`
            : "absolute -top-96 left-0 w-full bg-white shadow-md z-50 transition-transform ease-in-out"
        }
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button className="border font-bold hover:bg-red-500 hover:text-gray-50 duration-500 hover:border-red-500 border-black p-2 rounded-md shadow-md">
              Book A Table
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
