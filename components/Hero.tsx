"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { slider } from "@/utils/data";
import Link from "next/link";
export function Hero() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full h-[600px]"
    >
      {slider.map((value, index, ) => {
        return (
          <SwiperSlide key={index} className="w-full h-full ">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="text-center space-y-5">
                <h1 className="text-3xl text-gray-600  ">{value.tag} </h1>
                <h1 className=" text-textColor font-semibold text-5xl uppercase ">
                  {value.name}
                </h1>
                <h2 className="text-orange text-2xl uppercase">
                  {value.description}{" "}
                </h2>
                <div>
                  <Link
                    href={"/pizza"}
                    className="px-8 py-2  bg-textColor text-white text-xl rounded-sm"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src={value.img}
                  alt={value.name}
                  width={500}
                  height={500}
                  priority
                  className="object-cover h-full w-full  mx-auto"
                  sizes="(min-width: 1040px) 50vw, (min-width: 440px) 96.55vw, (min-width: 380px) calc(50vw + 190px), (min-width: 340px) 340px, 300px"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
