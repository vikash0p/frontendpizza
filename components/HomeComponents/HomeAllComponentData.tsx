"use client";
import React, { use } from "react";
import dynamic from "next/dynamic";

import { Hero } from "./Hero";
import { getAllData } from "@/utils/fetch-data/getAllData";
import { headingData } from "@/utils/data/Heading-data";

// Dynamically import components
const Choose = dynamic(() => import("./Choose"));
const Heading = dynamic(() => import("./Heading"));
const SwiperHome = dynamic(() => import("./SwiperHome"));
const FeaturesComponent = dynamic(() => import("./FeaturesComponent"));
const ChooseUs = dynamic(() => import("./ChooseUs"));
const Category = dynamic(() => import("./Category"));
const Continental = dynamic(() => import("./Continental"));
const MenuItem = dynamic(() => import("./MenuItem"));
const HappyCustomer = dynamic(() => import("./HappyCustomer"));

const HomeAllComponentData = () => {
  const pizza = use(getAllData());
  const pizzaData = pizza?.pizza;

  const filterPizza = pizzaData?.filter(
    (value) => value.category === "new lunched"
  );

  return (
    <section>
      <Hero />
      <Choose />
      <div className="max-w-7xl m-auto text-center pb-10 space-y-10">
        <Heading data={headingData} />
        <SwiperHome pizzaData={filterPizza} />
        <div>
          <h5 className="text-center text-2xl  py-5 font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-700 text-transparent bg-clip-text">
            Taste Of Pizza @Every Single Bite
          </h5>
          <FeaturesComponent />
        </div>
        <ChooseUs />
        <Category pizzaData={pizzaData} />
        <Continental />
        <MenuItem pizzaData={pizzaData} />
        <HappyCustomer />
      </div>
    </section>
  );
};

export default HomeAllComponentData;
