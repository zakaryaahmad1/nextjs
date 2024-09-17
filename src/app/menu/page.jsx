"use client";

import { useState } from "react";
import eagg from "../../../public/images/eagg.jpg";
import des1 from "../../../public/images/des1.jpg";
import des from "../../../public/images/des.png";
import drink from "../../../public/images/drink.jpg";
import drink1 from "../../../public/images/drink2.jpg";
import main from "../../../public/images/main.jpg";
import main1 from "../../../public/images/main1.jpg";
import break1 from "../../../public/images/break.jpg";

import Image from "next/image";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const cardCategories = {
    1: [],
    2: [
      {
        id: 7,
        image: eagg,
        title: "Breakfast Card 1",
        price: "$15",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        id: 8,
        image: break1,
        title: "Breakfast Card 2",
        price: "$25",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
    ],
    3: [
      {
        id: 9,
        image: main,
        title: "Main Dish Card 1",
        price: "$30",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        id: 10,
        image: main1,
        title: "Main Dish Card 2",
        price: "$35",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
    ],
    4: [
      {
        id: 11,
        image: drink1,
        title: "Drink Card 1",
        price: "$5",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        id: 12,
        image: drink,
        title: "Drink Card 2",
        price: "$7",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
    ],
    5: [
      {
        id: 13,
        image: des,
        title: "Dessert Card 1",
        price: "$8",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        id: 14,
        image: des1,
        title: "Dessert Card 2",
        price: "$9",
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
    ],
  };

  const currentCards =
    selectedTab === 1
      ? Object.values(cardCategories).flat()
      : cardCategories[selectedTab] || [];

  return (
    <section className="mt-32 mb-10">
      <div className="flex flex-col m-auto justify-center items-center">
        <p className="text-center text-[#2C2F24] text-4xl md:text-5xl lg:text-7xl font-bold italic">
          Our Menu
        </p>
        <p className="text-sm md:text-lg lg:text-xl text-[#2C2F24] text-center md:w-7/12 lg:w-4/12 mt-8">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className="flex flex-wrap gap-4  justify-center mt-10 text-base md:text-lg lg:text-xl">
        {Object.keys(cardCategories).map((tabId) => (
          <div
            key={tabId}
            onClick={() => setSelectedTab(parseInt(tabId, 10))}
            className={`cursor-pointer px-4 lg:px-6 py-2 text-base md:text-lg lg:text-xl ${
              selectedTab === parseInt(tabId, 10)
                ? "bg-[#AD343E] text-white px-4 lg:px-6 rounded-full"
                : "bg-transparent border border-gray-400 px-4 lg:px-6 rounded-full text-[#2C2F24]"
            }`}
          >
            {tabId === "1"
              ? "All"
              : tabId === "2"
              ? "Breakfast"
              : tabId === "3"
              ? "Main Dishes"
              : tabId === "4"
              ? "Drinks"
              : "Desserts"}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 lg:w-10/12 m-auto justify-items-center mt-10">
        {currentCards.map((card, index) => (
          <div
            key={card.id}
            className={`w-full pb-3 group duration-500 relative lg:w-11/12 border cursor-pointer bg-white shadow-md rounded-lg flex flex-col items-center overflow-hidden ${
              index === 0 ? "ml-auto" : ""
            }`}
          >
            <div className="w-full h-60 overflow-hidden relative">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 group-hover:blur-sm group-hover:brightness-[0.8] transition-all duration-700"
              />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl mt-2  text-[#AD343E]   font-semibold mb-4">
              {card.price}
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl group-hover:underline duration-700 text-[#2C2F24] font-bold mb-2">
              {card.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-center text-[#414536] mb-4 mt-4">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
