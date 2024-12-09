"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { pizza } from "@/utils/types/pizzaInterface";
import SwiperHome from "./SwiperHome";

interface PizzaDataProps {
  pizzaData: pizza[] | undefined;
}

const Category: React.FC<PizzaDataProps> = ({ pizzaData }) => {
  const [data, setData] = useState<pizza[] | undefined>(pizzaData);
  const [ind, setInd] = useState<number | undefined>(0);

  useEffect(() => {
    if (pizzaData) {
      setData(pizzaData);
    }
  }, [pizzaData]);

  useEffect(() => {
    localStorage.setItem("categoryData", JSON.stringify(data));
  }, [data]);

  const category = pizzaData
    ? [...new Set(pizzaData.map((value) => value.category))]
    : [];

  const headingData = {
    title: "Top Category",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Prinbeen The Industry's Standard Dummy Text Took Scrambled It To Make A Type Specimen Book.",
    textCss: "md:w-2/3 lg:w-1/2 m-auto text-black px-3 md:px-1 lg:px-0",
  };

  const CategoryHandler = (value: string, index: number) => {
    const filterPizza = pizzaData?.filter((pizza) => pizza.category === value);
    setData(filterPizza);
    setInd(index);
  };

  return (
    <div>
      <Heading data={headingData} />
      <div className="py-5">
        {category.map((value, index) => (
          <button
            type="button"
            className={`px-8 py-2 bg-textColor hover:bg-red-900 text-white text-xl my-4 md:my-3 rounded-sm mx-3 ${
              index === ind ? "backgroundGradient" : ""
            }`}
            key={value}
            onClick={() => CategoryHandler(value, index)}
          >
            {value}{" "}
          </button>
        ))}
      </div>
      <SwiperHome pizzaData={data} />
    </div>
  );
};

export default Category;
