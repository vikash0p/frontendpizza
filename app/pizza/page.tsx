import FilterPizza from "@/components/FilterPizza";
import PizzaData from "@/components/PizzaData";
import { getAllData } from "@/utils/getAllData";
import React, { Suspense } from "react";

const Pizza = async () => {
  const pizza = await getAllData();
  const pizzaData = pizza?.pizza;
  return (
   <div>
    <FilterPizza pizzaData={pizzaData} />
   </div>
  );
};

export default Pizza;
