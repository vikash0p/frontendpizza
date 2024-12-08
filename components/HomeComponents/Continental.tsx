"use client";
import { continental } from "@/utils/data/data";
import Image from "next/image";
import React from "react";

const Continental = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="">
        <div className="relative max-w-sm md:max-w-md h-96  lg:h-[500px]">
          <Image
            src={"/store.png"}
            alt="continentalImage"
            fill
            sizes="(min-width: 1380px) 640px, (min-width: 1040px) calc(37.5vw + 130px), 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 text-start items-center justify-center w-full h-full">
        {continental.map((value, index) => {
          return (
            <div
              key={value.id}
              className="w-full h-full px-10 py-7 rounded-md bg-bgColor2"
            >
              <h2 className="text-2xl font-semibold ">{value.name} </h2>
              <p>{value.desc} </p>
              <h4 className="text-xl font-semibold text-textColor">
                {value.time}{" "}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Continental;
