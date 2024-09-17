"use client";

import React from 'react';

const BrowserMenu = () => {
    return (
        <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Browse Our Menu</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[
            {
              name: "Breakfast",
              icon: "☕",
              description:
                "In the new era of technology we look in the future with certainty and pride for our life.",
            },
            {
              name: "Main Dishes",
              icon: "🍽️",
              description:
                "In the new era of technology we look in the future with certainty and pride for our life.",
            },
            {
              name: "Drinks",
              icon: "🍹",
              description:
                "In the new era of technology we look in the future with certainty and pride for our life.",
            },
            {
              name: "Desserts",
              icon: "🍰",
              description:
                "In the new era of technology we look in the future with certainty and pride for our life.",
            },
          ].map((item, index) => (
            <div
              key={index} 
              className="px-4 w-11/12 hover:scale-105 hover:cursor-pointer border duration-700 group py-8 bg-white shadow-md rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
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
}

export default BrowserMenu;
