"use client";
import React from "react";

const Head = () => {
  return (
    <section className=" h-screen lg:h-screen bg-cover   bg-top  hero-section">
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl italic font-bold mb-4 text-[#2C2F24] leading-tight">
          Best food for <br /> your taste
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#2C2F24] leading-relaxed">
          Discover delectable cuisine and unforgettable moments in our{" "}
          <br className="hidden md:inline" />
          welcoming, culinary haven.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#AD343E] hover:bg-[#882931] duration-500 rounded-full px-6 py-3">
            Book A Table
          </button>
          <button className="border rounded-full border-[#182226] text-[#182226] hover:text-white hover:bg-slate-900 duration-700 hover:border-slate-900 px-6 py-3">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Head;
