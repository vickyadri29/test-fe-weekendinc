import Image from "next/image";

// Import Images/Icons
import path1 from "../assets/header/path1.svg";
import path2 from "../assets/header/path2.svg";
import path3 from "../assets/header/path3.svg";
import oval from "../assets/header/oval.svg";
import bitmap from "../assets/header/bitmap.svg";
import bgHeader from "../assets/header/bg.svg";

const Headers = () => {
  return (
    <section className="relative ">
      <div className="absolute -z-10">
        <Image src={bgHeader} alt="bg" />
      </div>
      <div className="max-w-4xl m-auto p-5">
        <div className="pt-20 z-20 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center text-white">
            <h2 className="font-bold text-[62px]">WEEKEND FROM HOME</h2>
            <p className="text-[21px]">Stay active with a little workout.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="absolute">
              <Image src={bitmap} alt="bitmap" />
            </div>
            <button className="z-10 top-[200px] relative bg-white px-24 py-4 rounded-[29px]">
              Let’s Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
