import React from "react";
import { Metadata } from "next";
import { pizza } from "@/utils/types/pizzaInterface";
import { getAllData } from "@/utils/fetch-data/getAllData";
import { pizzaMetadata } from "@/utils/meta/pizzaMetadata";
import NewPizzaCard from "@/components/PizzaComponents/NewPizzaCard";

export const metadata: Metadata = pizzaMetadata;

const NewPizza = async () => {
  const data = await getAllData();
  const pizzaData: pizza[] = data?.pizza || [];

  return (
    <div className="">
      <NewPizzaCard pizzaData={pizzaData} />
    </div>
  );
};

export default NewPizza;
