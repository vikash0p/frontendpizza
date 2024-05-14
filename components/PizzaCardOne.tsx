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
        <div className="text-black rounded-lg bg-bgColor2">
          <div className="relative h-48 max-w-sm overflow-x-hidden">
            <Image
              className="object-cover object-center rounded-t-lg "
              src={value.image}
              alt={value._id}
              fill
              sizes="400px"
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
            <h1 className="text-xl font-semibold uppercase text-textColor">
              {value.category}{" "}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PizzaCardOne;
