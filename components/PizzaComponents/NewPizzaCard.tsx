"use client";
import React, { useEffect } from "react";
import { pizza } from "@/utils/interface"; // ensure this is the correct path for the interface
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllFilters,
  fetchAllProductData,
} from "@/Redux-toolkit/slice/filterSlice";
import type { RootState } from "@/Redux-toolkit/store";
import PizzaData from "../PizzaData";
import { PriceSlider } from "./PriceSlider";
import { PizzaSelector } from "./PizzaSelector";
import SearchPizza from "./SearchPizza";
import PizzaFilterCategory from "./PizzaFilterCategory";
import { FilterSideBar } from "./FilterSideBar";
import Link from "next/link";
interface PizzaCardProps {
  pizzaData: pizza[]; // Correctly type pizzaData as an array of pizza
}

const NewPizzaCard: React.FC<PizzaCardProps> = ({ pizzaData }) => {
  const pizza = useSelector((state: RootState) => state.filter.filter_product);
  console.log("🚀 ~ file: NewPizzaCard.tsx:13 ~ pizza:", pizza);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchAllProductData(pizzaData)); // Ensure that pizzaData is passed correctly
    };
    fetchData();
  }, [pizzaData, dispatch]); // Add dispatch to dependency array to avoid warning

  return (
    <div>
      <div className="flex justify-between lg:justify-end w-full px-5  items-center">
        {/* <SearchPizza /> */}
        <div className=" lg:hidden">
          <FilterSideBar />
        </div>
        <PizzaSelector />
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:gap-5   py-2  ">
        <div className="w-[20%]  py-20 px-5 hidden lg:block">
          <div className="space-y-2">
            <h1 className="text-2xl">Filter By Price:</h1>
            <PriceSlider />
          </div>
          <div>
            <PizzaFilterCategory />
            <div>
              <button
                type="button"
                className="px-5 py-2 rounded-sm bg-red-500 text-white "
                onClick={() => dispatch(clearAllFilters())}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[80%] md:px-2  ">
          {pizza && pizza.length > 0 ? (
            <PizzaData pizzaData={pizza} />
          ) : (
            <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
              <h5 className="text-2xl font-bold text-textColor" >Not Data found !</h5>
              <Link href={"/newPizza"} className="bg-textColor text-white text-lg px-5 py-2">Pizza</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPizzaCard;
