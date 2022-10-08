import { Navigation, Grid } from "swiper";
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
      <div className="max-w-2xl m-auto">
        <div className="relative bottom-36 flex flex-col items-center gap-5">
          <h2 className="md:text-[38px] font-black">Testimonial</h2>
          <div className="w-full flex gap-5">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              grabCursor={true}
              // pagination={true}
              loop={true}
              //   className="test"
              slidesPerView="auto"
              breakpoints={{
                // when window width is >= 640px
                300: {
                  slidesPerView: "1",
                  spaceBetween: 30,
                  pagination: {
                    clickable: "true",
                    dynamicBullets: "true",
                  },
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: "3",
                  spaceBetween: 30,
                  pagination: {
                    clickable: "true",
                    dynamicBullets: "true",
                  },
                },
                1024: {
                  spaceBetween: 10,
                  slidesPerView: "2.4",
                },
              }}
            >
              {datas.map((data, index) => {
                const { title, desc } = data;
                return (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <div className="flex justify-center flex-col bg-white text-black px-5 py-3 w-[260px] h-[140px] mx-2">
                        <h3 className="md:text-[32px] font-black">{title}</h3>
                        <p className="text-xs">{desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
