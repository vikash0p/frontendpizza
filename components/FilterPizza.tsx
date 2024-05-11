"use client";
import PizzaData from "@/components/PizzaData";
import React, { Suspense } from "react";
import { pizza } from "@/utils/interface";

interface FilterPizzaProps {
  pizzaData: Array<pizza> | undefined;
}

interface Pizza {
  [key: string]: string | number;
}
const FilterPizza: React.FC<FilterPizzaProps> = ({ pizzaData }) => {
  const [filteredData, setFilteredData] = React.useState<
    Array<pizza> | undefined
  >(pizzaData);

  const[ind,setInd]=React.useState<number>(0)

  const category = [
    "All Pizza",
    ...new Set(pizzaData?.map((value) => value.category)),
  ];
  console.log("🚀 ~ file: FilterPizza.tsx:14 ~ category:", category);

  const FilterCategory = (data: pizza[] | undefined,  cat: keyof pizza): string[] => {
  let newData: string[] = [];
  if (data) {
    newData = data.map((value, index) => {
      const categoryValue = value[cat];
      if (typeof categoryValue === 'string') {
        return categoryValue;
      } else {
        throw new Error(`Category '${cat}' does not exist in the pizza data.`);
      }
    });
  }
  return ["All", ...new Set(newData)];
};

  const AllFilterData = FilterCategory(pizzaData, "category");
//   console.log("🚀 ~ AllFilterData:", AllFilterData);

const FilterHandler=(value:string,index:number)=>{
    const filterPizza = pizzaData?.filter((pizza) =>{
        if(value === "All"){
            return pizzaData;
        }
        return pizza.category === value
    });
    setFilteredData(filterPizza);
    setInd(index)

};
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="basis-[15%] flex flex-col gap-2 ps-2 pt-3  ">
        {AllFilterData.map((value, index) => {
          return (
            <button
              type="button"
              key={value}
              className={` px-2 py-3 text-start  text-xl rounded-md ${ind===index ? "backgroundGradient text-white" : "bg-textColor text-white"}`}
              onClick={() => FilterHandler(value, index)}
            >
              {" "}
              {value}
            </button>
          );
        })}
      </div>
      <div className="basis-[85%]">
        <Suspense
          fallback={
            <div className="w-full min-h-screen flex flex-col justify-center items-center text-textColor text-2xl" >
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
