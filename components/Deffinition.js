import Image from "next/image";

import bitmap from "../assets/deffinition/bitmap.svg";
import oval from "../assets/deffinition/oval.svg";

const Deffinition = () => {
  return (
    <section className="relative bg-[#EEBECE] h-screen">
      <div className="absolute right-0">
        <Image src={bitmap} alt="Bitmap" />
      </div>
      <div className="max-w-2xl m-auto p-5 pt-24">
        <div className="flex flex-col justify-between gap-4 md:text-[21px]">
          <p className="font-medium text-right">
            <span className="text-[#0B24FB]">Deffinition;</span> a practice or
            exercise to test or improve one's fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by
            working to devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
          </p>
          <p className="flex justify-end font-medium italic text-white">
            -weekend team
          </p>
        </div>
      </div>
      <div className="max-w-3xl m-auto">
        <Image src={oval} alt="oval" />
      </div>
    </section>
  );
};

export default Deffinition;
