import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import { support } from "@/utils/data";

const ChooseUs = () => {
  const headingData = {
    title: "Why Choose Us",
    desc: "Ipsum Is Simply Dummy Text Of The Prinbeen The Industry's Statook Scrambled It To Make A Type Specimen Book.",
    textCss: "w-full",
  };
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen gap-4  py-10 ">
      <div className="relative w-full h-full ">
        <Image
          src={"/choose.png"}
          alt="images"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1380px) 632px, (min-width: 1040px) calc(37.5vw + 122px), 100vw"
          priority={true}

        />
      </div>
      <div className="">
        <Heading data={headingData} />
        <div>
          {support.map((value) => {
            return (
              <div
                key={value.id}
                className="flex flex-col md:flex-row gap-10 text-start items-center  px-1 md:px-0 shadow-2xl lg:shadow-none py-3 h-full mt-8 "
              >
                <div className="">
                  <Image
                    src={value.img}
                    alt={value.name}
                    width={200}
                    height={200}
                    className="object-fill bg-white size-50 p-5 rounded-full"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="">
                  <h2 className="text-2xl font-semibold">{value.name} </h2>
                  <p className="text-slate-500">{value.desc} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
