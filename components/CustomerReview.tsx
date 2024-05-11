"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { avatar } from "@/utils/data";
import Image from "next/image";

export default function CustomerReview() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper bg-bgColor2 mt-8"
      >
        {avatar.map((value) => {
          return (
            <SwiperSlide key={value.id} className="py-12 space-y-4">
              <Image
                src={value.img}
                alt={value.name}
                className="w-28 h-28 m-auto border-4 border-textColor rounded-full"
                width={300}
                height={300}
              />
              <h2 className="text-xl font-semibold text-textColor">
                {value.name}{" "}
              </h2>
              <p className="text-slate-500 px-1 md:px-5 lg:px-12">
                {value.desc}{" "}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
