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
    <section className="relative bg-[#EEBECE] pb-[730px] z-0 h-screen">
      <div className="absolute -z-10 left-0 right-0 bg-center">
        <Image src={bgHeader} alt="bg" />
      </div>
      <div className="max-w-3xl m-auto p-5">
        <div className="z-20 flex flex-col items-center gap-10">
          <div className="my-10 flex flex-col items-center text-white">
            <h2 className="font-bold md:text-[62px]">WEEKEND FROM HOME</h2>
            <p className="md:text-[21px] italic font-semibold">Stay active with a little workout.</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="absolute">
              <Image src={bitmap} alt="bitmap" />
            </div>
            <button className="relative md:top-[200px] z-10 bg-white px-20 py-3 rounded-[29px]">
              Let’s Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
