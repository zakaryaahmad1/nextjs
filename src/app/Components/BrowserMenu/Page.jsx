"use client";

import React from "react";
import s from "../../../../public/images/Group.png";
import vector from "../../../../public/images/Vector.png";
import maindish from "../../../../public/images/maindish.png";
import tea from "../../../../public/images/tea 1.png";
import Image from "next/image";
const BrowserMenu = () => {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Browse Our Menu</h2>
      </div>
      <div className=" mx-auto grid grid-cols-1 w-10/12 justify-items-center  sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
        {[
          {
            name: "Breakfast",
            icon: tea,
            description:
              "In the new era of technology we look in the future with certainty and pride for our life.",
          },
          {
            name: "Main Dishes",
            icon: maindish,
            description:
              "In the new era of technology we look in the future with certainty and pride for our life.",
          },
          {
            name: "Drinks",
            icon: vector,
            description:
              "In the new era of technology we look in the future with certainty and pride for our life.",
          },
          {
            name: "Desserts",
            icon: s,
            description:
              "In the new era of technology we look in the future with certainty and pride for our life.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="px-4 ring-2 w-[306px] h-[375px] ring-[#DBDFD0]   hover:scale-[1.02] hover:cursor-pointer  duration-700 group pt-10   rounded-lg text-center"
          >
            <div className="text-4xl mb-4 m-auto flex justify-center">
              <div className="bg-gray-300 bg-opacity-50 rounded-full py-4 px-4 ">
              <Image
                src={item.icon}
                className="w-8 h-8"
              />
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600 mt-7">{item.description}</p>
            <button className="mt-4 text-[#AD343E]  group-hover:underline duration-700 font-bold   px-6 py-2 rounded">
              Explore Menu
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowserMenu;
