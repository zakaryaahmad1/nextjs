import React from "react";
import mail from "../../../../public/images/mail.png";
import phone from "../../../../public/images/phone.png";

import location from "../../../../public/images/location-marker.png";
import Image from "next/image";
const Card = () => {
  return (
    <div className="  bg-[#474747] mt-5 p-4 lg:p-10 lg:absolute lg:-bottom-4 w-11/12 m-auto  lg:w-[411px] lg:h-[321px]  lg:right-10 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-8 lg:mb-10">Come and visit us</h2>
      <div className="flex items-center  mt-4 gap-4 mb-3 lg:mb-5">
        <Image src={phone} className="w-4 h-4" />
        <span>(414) 857 - 0107</span>
      </div>
      <div className="flex items-center gap-4 mb-3 lg:mb-5">
        <Image src={mail} className="w-4 h-4" />
        <span>happytummy@restaurant.com</span>
      </div>
      <div className="flex gap-4 items-center mb-3 lg:mb-5">
        <Image src={location} className="w-4 h-4" />
        <span>
          837 W. Marshall Lane, Marshalltown,
          <br /> IA 50158, Los Angeles
        </span>
      </div>
    </div>
  );
};

export default Card;
