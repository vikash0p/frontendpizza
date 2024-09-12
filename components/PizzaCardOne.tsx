import React from "react";
import { pizza } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
type PizzaProps = {
  value: pizza;
};

const PizzaCardOne: React.FC<PizzaProps> = ({ value }) => {
//   console.log("🚀 ~ file: PizzaCardOne.tsx:10 ~ value:", value);
  return (
    <>
      <Link href={`/pizza/${value._id}`}>
        <div className=" rounded-lg text-black   bg-bgColor2 ">
          <div className="relative overflow-x-hidden max-w-sm h-48">
            <Image
              className="rounded-t-lg object-cover object-center "
              src={value.image}
              alt={value._id}
              fill
              sizes="(min-width: 1220px) 284px, (min-width: 1040px) calc(27.5vw + 51px), (min-width: 380px) 375px, calc(46.67vw + 169px)"
              priority
            />
          </div>
          <div className="p-6 text-surface">
            <h5 className="mb-2 text-xl font-medium leading-tight min-h-16">
              {value.name}{" "}
            </h5>
            <p className="mb-4 text-base">
              {value.description.substring(0, 50)}...
            </p>
            <h6 className="text-xl font-bold "> &#8377;{value.price[0]} /- </h6>
            <h1 className="text-xl text-textColor font-semibold uppercase">
              {value.category}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PizzaCardOne;
