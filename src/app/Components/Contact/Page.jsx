import Image from "next/image";
import React from "react";
import burger from "../../../../public/images/img.png";

import Card from "./Card";
import TextSection from "./TextSection";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#F9F9F7] justify-center items-center  lg:h-screen ">
      <div className="flex flex-col lg:flex-row w-11/12   ">
        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <Image
            className="object-cover hidden lg:block lg:h-[95%] rounded-md "
            src={burger}
            alt="Healthy Food"
          />
          {/* Contact Card */}
          <Card />
        </div>

        {/* Text Section */}
        <TextSection />
      </div>
    </div>
  );
};

export default Contact;
