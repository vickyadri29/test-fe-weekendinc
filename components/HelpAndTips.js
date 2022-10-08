import Image from "next/image";

import nextBtn from "../assets/nextBtn.svg";
import path from "../assets/helpandtips/path.svg";

import { dataHelpAndTips } from "../data";

const HelpAndTips = () => {
  const { datas } = dataHelpAndTips;

  return (
    <section className="bg-black text-white">
      <div className="relative max-w-5xl m-auto p-5">
        <div className="absolute right-0">
          <Image src={path} alt="path" />
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-black text-[32px]">HelpAndTips</h2>
          <div className="flex gap-4 mx-14">
            {datas.map((data, index) => {
              const { image_url, title } = data;
              return (
                <div className="flex  relative">
                  <div className="">
                    <Image src={image_url} alt="images" />
                  </div>
                  <div className="absolute bottom-0 px-5 py-3 bg-black bg-opacity-50">
                    <div className="flex items-center gap-10">
                      <h3 className="font-bold leading-5">{title}</h3>
                      <div className="flex w-[40px] h-[40px] cursor-pointer">
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
