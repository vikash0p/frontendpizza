"use client";
import React, { Suspense, useState } from "react";
import { pizza } from "@/utils/types/pizzaInterface";
import PizzaData from "./PizzaData";

interface FilterPizzaProps {
  pizzaData: Array<pizza> | undefined;
}

interface Pizza {
  [key: string]: string | number;
}

const FilterPizza: React.FC<FilterPizzaProps> = ({ pizzaData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = React.useState<
    Array<pizza> | undefined
  >(pizzaData);

  const [ind, setInd] = React.useState<number>(0);

  const category = [
    "All Pizza",
    ...new Set(pizzaData?.map((value) => value.category)),
  ];
  // console.log("🚀 ~ file: FilterPizza.tsx:14 ~ category:", category);

  const FilterCategory = (
    data: pizza[] | undefined,
    cat: keyof pizza
  ): string[] => {
    let newData: string[] = [];
    if (data) {
      newData = data.map((value, index) => {
        const categoryValue = value[cat];
        if (typeof categoryValue === "string") {
          return categoryValue;
        } else {
          throw new Error(
            `Category '${cat}' does not exist in the pizza data.`
          );
        }
      });
    }
    return ["All", ...new Set(newData)];
  };

  const AllFilterData = FilterCategory(pizzaData, "category");

  const FilterHandler = (value: string, index: number) => {
    const filterPizza = pizzaData?.filter((pizza) => {
      if (value === "All") {
        return pizzaData;
      }
      return pizza.category === value;
    });
    setFilteredData(filterPizza);
    setInd(index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {/* Filter button for mobile */}
      <button
        type="button"
        className="bg-textColor w-24 py-2 lg:hidden rounded-sm text-white shadow-lg hover:bg-primary transition-all duration-300 ms-3"
        onClick={() => setOpen((prev) => !prev)}
      >
        Filter
      </button>

      {/* Sidebar filter menu */}
      <div
        className={`lg:basis-[15%] flex flex-col gap-4 lg:gap-2 px-2 pt-3 transition-all duration-500 ease-linear overflow-hidden lg:opacity-100
        ${open ? "h-[450px] opacity-100" : "h-0 opacity-0 lg:h-auto"}`}
      >
        {AllFilterData.map((value, index) => (
          <button
            type="button"
            key={value}
            className={`px-4 py-2 text-start text-lg font-semibold rounded-lg transition-all duration-300 w-56
            ${
              ind === index
                ? "backgroundGradient text-white shadow-md"
                : "bg-textColor text-white hover:bg-primary hover:text-black"
            }`}
            onClick={() => FilterHandler(value, index)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Pizza data display */}
      <div className="lg:basis-[85%] w-full">
        <Suspense
          fallback={
            <div className="w-full min-h-screen flex flex-col justify-center items-center text-textColor text-2xl">
              Loading...
            </div>
          }
        >
          <PizzaData pizzaData={filteredData} />
        </Suspense>
      </div>
    </div>
  );
};

export default FilterPizza;
