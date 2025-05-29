"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data";


export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 text-center px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="md:w-64 md:h-64 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={2000}
                  height={2000}
                  className="object-cover w-full h-full"
                />
              </div>
              <svg
                className="w-10 h-10 text-blue-400 mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.994 5.994 0 0 0 2 12v5h6v-5H5.83A3.992 3.992 0 0 1 9 6H7.17zm10 0A5.994 5.994 0 0 0 12 12v5h6v-5h-2.17A3.992 3.992 0 0 1 19 6h-1.83z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-md italic text-textp">{item.title}</p>
              <p className="mt-2 text-gray-700 max-w-xl pb-10">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}