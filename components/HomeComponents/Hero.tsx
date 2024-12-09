"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { slider } from "@/utils/data/data";
import Link from "next/link";

export function Hero() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper w-full h-[500px] md:h-[700px]" // Adjust height for different screen sizes
    >
      {slider.map((value, index) => {
        return (
          <SwiperSlide key={index} className="w-full h-full ">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:items-center">
              {/* Image Section for small screens (top) */}
              <div className="relative w-full h-[300px]   lg:h-full lg:order-2">
                <Image
                  src={value.img}
                  alt={value.name}
                  fill
                  priority
                  className="object-contain md:object-cover md:max-w-xl lg:max-w-full h-full mx-auto"
                  sizes="(min-width: 1040px) 50vw, (min-width: 380px) 100vw, 100vw"
                />
              </div>

              {/* Text Section */}
              <div className="text-center space-y-2 md:space-y-4 lg:space-y-8 lg:order-1 ">
                <h1 className="text-lg md:text-2xl lg:text-3xl text-black">
                  {value.tag}
                </h1>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-textColor uppercase">
                  {value.name}
                </h1>
                <h2 className="text-orange text-lg md:text-xl lg:text-2xl uppercase hidden md:block">
                  {value.description}
                </h2>
                <div>
                  <Link
                    href="/newPizza"
                    className="px-6 py-2 md:px-8 md:py-3 bg-textColor text-white text-lg md:text-xl rounded-sm"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
