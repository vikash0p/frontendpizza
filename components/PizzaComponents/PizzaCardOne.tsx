import React from "react";
import { pizza } from "@/utils/types/pizzaInterface";
import Image from "next/image";
import Link from "next/link";

type PizzaProps = {
  value: pizza;
};

const PizzaCardOne: React.FC<PizzaProps> = ({ value }) => {
  return (
    <>
      <Link href={`/pizza/${value._id}`}>
        <div className="rounded-lg text-black bg-bgColor2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative overflow-hidden w-full h-48">
            <Image
              className="rounded-t-lg object-contain"
              src={value.image}
              alt={value._id}
              fill
              sizes="(min-width: 1220px) 284px, (min-width: 1040px) calc(27.5vw + 51px), (min-width: 380px) 375px, calc(46.67vw + 169px)"
              priority
            />
          </div>
          <div className="p-2 text-surface min-h-56  pt-3">
            <h5 className="mb-2 text-base  font-medium leading-tight ">
              {value.name}
            </h5>
            <h1 className="text-lg uppercase  text-textColor font-semibold">
              {value.category}
            </h1>
            <p className="mb-2  md:text-base ">
              {value.description.split(" ").slice(0, 10).join(" ")}...
            </p>

            <h6 className="text-lg  font-bold">&#8377;{value.price[2]} /-</h6>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PizzaCardOne;
