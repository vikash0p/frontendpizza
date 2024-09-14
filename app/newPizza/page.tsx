import { getAllData } from "@/utils/getAllData";
import React from "react";
import { pizza } from "@/utils/interface";
import NewPizzaCard from "@/components/PizzaComponents/NewPizzaCard";
const NewPizza = async () => {
  const data = await getAllData();
  const pizzaData:pizza[] = data?.pizza || [] ;

  return (
    <div className="">
        <NewPizzaCard pizzaData={pizzaData} />
    </div>
  );
};

export default NewPizza;
