'use client'
import React, { Suspense, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { pizza } from "@/utils/interface";
import PizzaCardOne from "./PizzaCardOne";
interface PizzaDataProps {
  pizzaData: pizza[] | undefined;
}

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperHome({ pizzaData }: PizzaDataProps) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="m-auto mySwiper max-w-7xl "
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
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
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="">
          {pizzaData === undefined && !pizzaData ? (
            <div className="flex flex-col items-center justify-center w-full min-h-screen ">
              <h1 className="text-4xl font-semibold text-textColor">
                No Pizza found !
              </h1>
            </div>
          ) : (
            <div className="">
              {pizzaData.map((value) => {
                return (
                  <SwiperSlide
                    key={value._id}
                    className="flex flex-col items-center justify-center h-full max-w-sm border-2 "
                  >
                    <Suspense
                      fallback={
                        <div className="flex flex-col items-center justify-center w-full h-full text-2xl text-center text-textColor ">
                          Loading...
                        </div>
                      }
                    >
                      <PizzaCardOne value={value} />
                    </Suspense>
                  </SwiperSlide>
                );
              })}
            </div>
          )}
        </div>
      </Swiper>
    </>
  );
}
