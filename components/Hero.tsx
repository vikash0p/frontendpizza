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
            <div className="grid items-center w-full h-full grid-cols-1 lg:grid-cols-2">
              <div className="space-y-5 text-center">
                <h1 className="text-3xl text-gray-600 ">{value.tag} </h1>
                <h1 className="text-5xl font-semibold uppercase text-textColor">
                  {value.name}
                </h1>
                <h2 className="text-2xl uppercase text-orange">
                  {value.description}{" "}
                </h2>
                <div>
                  <Link
                    href={"/pizza"}
                    className="px-8 py-2 text-xl text-white rounded-sm bg-textColor"
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
                  className="object-cover w-full h-full mx-auto"
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
