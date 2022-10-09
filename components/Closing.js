import Image from "next/image";

import images from "../assets/closing/images.svg";

const Closing = () => {
  return (
    <section className="bg-black text-white relative md:pb-48">
      <div className="max-w-2xl m-auto p-5">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-black text-[32px]">You’re all set.</h2>
          <p className="text-center text-lg">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>
      </div>
      <div className="md:absolute relative bottom-0 md:top-[27px] top-[8px]">
        <Image src={images} alt="images" />
      </div>
    </section>
  );
};

export default Closing;
