import { choose } from "@/utils/data/data";
import Image from "next/image";
import React from "react";
const Choose = () => {
  return (
    <div className="w-[85%] m-auto min-h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-10 md:gap-8 lg:gap-0 py-12  lg:my-10  my-8  rounded-md bg-bgColor2">
      {choose.map((value) => {
        return (
          <div
            key={value.id}
            className="flex flex-col gap-1 md:gap-3 items-center justify-center text-center group"
          >
            <div className="relative  w-32  h-36">
              <Image
                src={value.img}
                alt={value.desc}
                sizes="128px"
                priority={true}
                fill
                className=" object-cover object-center group-hover:translate-x-5 transition-all duration-500"
              />
            </div>
            <h2 className="text-2xl text-black group-hover:text-textColor">
              {value.name}{" "}
            </h2>
            <p className="px-10 group-hover:text-textColor ">{value.desc} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Choose;
