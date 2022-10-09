import { useEffect, useState } from "react";
import Image from "next/image";

import nextBtn from "../assets/nextBtn.svg";
import path from "../assets/helpandtips/path.svg";

import axios from "axios";

const HelpAndTips = () => {
  const [dataHelpAndTips, setDataHelpAndTips] = useState([]);

  const BASE_URL =
    "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";

  const fetchHelpAndTips = async () => {
    const res = await axios.get(BASE_URL);
    setDataHelpAndTips(res.data);
  };

  useEffect(() => {
    fetchHelpAndTips().catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-black text-white">
      <div className="relative max-w-5xl m-auto p-5">
        <div className="md:absolute hidden right-0">
          <Image src={path} alt="path" />
        </div>
        <div className="flex flex-col md:items-center gap-5">
          <h2 className="font-black text-[32px]">HelpAndTips</h2>
          <div className="flex md:flex-row flex-col items-center md:gap-4 gap-2 md:mx-14">
            {dataHelpAndTips.map((data, index) => {
              const { title, slug, image } = data;
              return (
                <div key={index} className="flex relative">
                  <div className="">
                    <img src={image} alt="images" width={311} height={176} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-black bg-opacity-50">
                    <div className="flex items-center gap-10">
                      <h3 className="font-bold leading-5">{title}</h3>
                      <div className="flex md:w-[40px] md:h-[40px] cursor-pointer">
                        <Image src={nextBtn} alt="next" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpAndTips;
