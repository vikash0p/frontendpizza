import React from "react";
import Heading from "./Heading";
import { pizza } from "@/utils/interface";
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
      <div className="grid w-full h-full grid-cols-1 gap-5 pt-8 lg:grid-cols-2">
        {pizzaData?.slice(0, 12).map((value) => {
          return (
            <Link href={`/pizza/${value._id}`} key={value._id}>
              <div className="flex flex-col items-center p-4 rounded-lg bg-bgColor2 md:flex-row md:max-w-xl ">
                <Image
                  className="object-cover object-center w-32 h-32 rounded-lg"
                  width={400}
                  height={400}
                  src={value.image}
                  alt={value.name}
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-start">
                  <div className="flex justify-between gap-4 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
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
            </ Link>
          );
        })}
      </div>
      <div className="my-10">
        <Link href={'/pizza'} className="px-10 py-2 text-xl text-white rounded-md bg-textColor ">All Menu</Link>
      </div>
    </div>
  );
};

export default MenuItem;
