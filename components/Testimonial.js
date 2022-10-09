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
        <div className="relative md:bottom-36 bottom-[85px] flex flex-col md:items-center gap-5 md:pl-0 pl-12">
          <h2 className="md:text-[38px] text-[32px] font-black">Testimonial</h2>
          <div className="w-full flex md:gap-5">
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
                  slidesPerView: "1.35",
                  hashNavigation: false,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: "3",
                  spaceBetween: 30,
                  slidesPerView: "2.4",
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
                      <div className="flex justify-center flex-col bg-white text-black px-5 py-3 md:w-[260px] w-[247px] h-[140px] md:mx-2">
                        <h3 className="text-[32px] font-black">{title}</h3>
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
