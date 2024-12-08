import React from "react";
import Heading from "./Heading";
import { pizza } from "@/types/pizzaInterface";
import Image from "next/image";
import Link from "next/link";

interface menuItemProps {
  pizzaData: pizza[] | undefined;
}
const MenuItem: React.FC<menuItemProps> = ({ pizzaData }) => {
  const headingData = {
    title: "Hot Menu Items",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Prinbeen The Industry's Standard Dummy Text Took Scrambled It To Make A Type Specimen Book.",
    textCss: "md:w-2/3 lg:w-1/2 m-auto text-slate-500 px-3 md:px-1 lg:px-0",
  };
  return (
    <div>
      <Heading data={headingData} />
      <div className="grid grid-cols-1 w-full h-full lg:grid-cols-2 gap-5 pt-8">
        {pizzaData?.slice(0, 12).map((value) => {
          return (
            <Link href={`/pizza/${value._id}`} key={value._id}>
              <div className="flex flex-col items-center bg-bgColor2  rounded-lg  md:flex-row  justify-around md:mx-4  px-2 md:px-4">
                <Image
                  className="object-cover object-center w-32 h-32  rounded-full"
                  width={400}
                  height={400}
                  src={value.image}
                  alt={value.name}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-start">
                  <div className="flex justify-between gap-4 ">
                    <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-black">
                      {value.name}{" "}
                    </h5>
                    <h4 className="text-2xl text-textColor">
                      &#8377; {value.price[1]}
                    </h4>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {value.description.substring(0, 40)}...{" "}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="my-10">
        <Link
          href={"/newPizza"}
          className="bg-textColor  px-10 py-2 rounded-md text-xl text-white "
        >
          All Menu
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
