import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { dataTestimonials } from "../data";

const Testimonial = () => {
  const { datas } = dataTestimonials;

  return (
    <section className="bg-black text-white">
      <div className="max-w-3xl m-auto">
        <div>
          <h2>Testimonial</h2>
        </div>
        <div className="flex gap-4">
          {datas.map((data, index) => {
            const { title, desc } = data;
            return (
              <div key={index} className="bg-white text-black p-5">
                <h3 className="font-black text-[32px]">{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
