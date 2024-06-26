"use client";
import React, { useState } from "react";
import { pizza } from "@/utils/interface";
import Image from "next/image";
import { addToCart } from "@/Redux-toolkit/slice/cartSlice";
import { useAppDispatch } from "@/Redux-toolkit/hooks";
import { ToastSuccess } from "@/utils/react-toastify";

interface singleDataProps {
  data: pizza;
}

const SingleData: React.FC<singleDataProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const [index, setIndex] = useState<number>(0);
  const [price, setPrice] = useState<number>(data.price[0]); // Initialize with the first price

  const PriceHandler = (indx: number) => {
    setPrice(data.price[indx]);
    setIndex(indx);
  };

  return (
    <div className="grid items-center max-w-6xl min-h-screen grid-cols-1 m-auto lg:grid-cols-2">
      <div className="">
        <div className="relative  max-w-sm md:max-w-md  h-96 lg:h-[500px]">
          <Image
            src={data.image}
            alt={data.name}
            fill
            priority
            sizes=""
            className="object-cover object-center rounded-lg w-96 h-96"
          />
        </div>
      </div>
      <div className="flex flex-col self-start gap-4 mt-12">
        <h2 className="text-2xl font-bold text-textColor">{data.name} </h2>
        <p className="text-xl ">{data.description} </p>
        <h5 className="text-2xl font-semibold">
          Category :{" "}
          <span className="uppercase text-textColor">{data.category}</span>
        </h5>
        <h5 className="text-2xl">
          Price : <span className="text-textColor"> &#8377;{price}</span>{" "}
        </h5>
        <div className="flex flex-row gap-5 ">
          {data.variants.map((value, indx) => (
            <div key={indx} className={`flex flex-row `}>
              <button
                type="button"
                className={`px-6 py-2 text-white rounded-sm hover:bg-red-900 bg-textColor text-xl font-semibold ${
                  indx === index ? "backgroundGradient" : "bg-red-500"
                } `}
                onClick={() => PriceHandler(indx)}
              >
                {value}
              </button>
            </div>
          ))}
        </div>
        <div className="py-5">
          <button
            type="button"
            className="py-2 text-white rounded-sm px-7 bg-textColor hover:bg-red-900"
            onClick={() => {
              ToastSuccess(`${data.name} added to cart`);
              dispatch(
                addToCart({
                  id:data._id,
                  name: data.name,
                  description: data.description,
                  price: price,
                  image: data.image,
                  category: data.category,
                  qty:1,
                })
              );
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
