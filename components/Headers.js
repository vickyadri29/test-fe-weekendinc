import { useEffect, useState } from "react";
import Image from "next/image";

// Import Images/Icons
import path1 from "../assets/header/path1.svg";
import path2 from "../assets/header/path2.svg";
import path3 from "../assets/header/path3.svg";
import oval from "../assets/header/oval.svg";
import bitmap from "../assets/header/bitmap.svg";
import bgHeader from "../assets/header/bg.svg";
import path1Mobile from "../assets/header/path1Mobile.svg";
import path2Mobile from "../assets/header/path2Mobile.svg";
import ovalMobile from "../assets/header/ovalMobile.svg";

const Headers = () => {
  return (
    <section className="relative bg-[#EEBECE] lg:h-[100vh] md:h-[60vh] h-[75vh]">
      <div className="bg-[url('../assets/header/path2.svg')] bg-no-repeat lg:bg-center md:bg-center bg-center absolute z-10 md:left-0 right-0 lg:h-[116vh] h-[75vh]">
        <div className="absolute flex max-w-4xl m-auto z-10 md:left-0 -left-[90%] md:right-0 md:top-0 top-4">
          <Image src={path1} alt="bg" />
        </div>
        <div className="absolute lg:flex z-10 max-w-lg m-auto md:left-0 -left-[15%] right-0 md:top-60 top-72">
          <Image src={oval} alt="bg" />
        </div>
        <div className="md:absolute hidden lg:flex justify-center z-10 max-w-lg m-auto left-[700px] right-0 top-72">
          <Image src={path3} alt="bg" />
        </div>
        <div className="max-w-3xl m-auto px-5 py-20">
          <div className="z-30 flex flex-col items-center gap-10">
            <div className="md:mt-10 mt-16 z-20 flex flex-col items-center md:gap-0 gap-5 text-white">
              <h2 className="font-black md:leading-normal leading-[51px] md:text-[62px] text-[52px] md:text-left text-center">
                WEEKEND FROM HOME
              </h2>
              <p className="md:text-[21px] italic font-semibold">
                Stay active with a little workout.
              </p>
            </div>
            <div className="relative z-30 flex flex-col items-center">
              <div className="absolute">
                <Image src={bitmap} alt="bitmap" />
              </div>
              <button className="relative top-[200px] z-10 bg-white px-20 py-3 rounded-[29px]">
                Let’s Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
