"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from '../../../../public/images/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-6 fixed top-0 shadow-md flex justify-between items-center w-full z-50">
      {/* Logo Section */}
      <Link  href={"/"}>
      <div  className="text-lg md:text-3xl font-bold italic text-[#474747] flex items-center gap-2">
         <Image src={Logo}  className="w-14 "  />
        <p>Bistro Bliss</p>
      
      </div>
      </Link>
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
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

      </ul>

      {/* Book a Table Button */}
      <button className="hidden md:block border font-bold hover:bg-red-500 hover:text-gray-50 duration-500 hover:border-red-500 border-black p-2 rounded-md shadow-md">
        Book A Table
      </button>

      {/* Mobile Hamburger Icon */}
      <button onClick={toggleMenu} className="z-50 p-2  md:hidden">
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
            ? `absolute top-20  duration-1000 left-0 w-full bg-white shadow-md z-50 transition-transform  ease-in-out 0`
            : "absolute -top-96 left-0 w-full bg-white shadow-md z-50 transition-transform  ease-in-out "
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
