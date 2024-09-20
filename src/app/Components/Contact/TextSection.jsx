import React from 'react';

const TextSection = () => {
    return (
        <div className="w-11/12  m-auto lg:w-1/2 px-2 mt-5 lg:p-12 ">
          {/* Main Heading */}
          <h1 className="text-3xl lg:text-6xl font-bold text-gray-800 mb-4">
            We provide healthy food for your family.
          </h1>
          {/* Paragraph */}
          <p className="text-gray-600 text-lg lg:text-xl mb-8">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          {/* Sub-text */}
          <p className="text-gray-600">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>

          {/* Button */}
          <button className="mt-6 lg:mt-10 px-8 py-4 duration-700  bg-transparent border-2 border-gray-800 text-gray-800 font-semibold rounded-full  hover:bg-gray-800 hover:text-white transition">
            More About Us
          </button>

          
        </div>
    );
}

export default TextSection;
