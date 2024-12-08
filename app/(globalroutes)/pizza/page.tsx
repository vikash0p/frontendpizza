import { getAllData } from "@/utils/fetch-data/getAllData";
import React from "react";
import { pizza } from "@/utils/types/pizzaInterface";
import NewPizzaCard from "@/components/PizzaComponents/NewPizzaCard";

import { Metadata } from "next";
import { pizzaMetadata } from "@/utils/meta/pizzaMetadata";

export const metadata: Metadata =pizzaMetadata;

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
