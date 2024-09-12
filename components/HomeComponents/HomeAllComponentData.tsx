import Choose from "@/components/Choose";
import { Hero } from "@/components/Hero";
import { getAllData } from "@/utils/getAllData";
import React from "react";
import SwiperHome from "@/components/SwiperHome";
import Heading from "@/components/Heading";
import ChooseUs from "@/components/ChooseUs";
import Category from "@/components/Category";
import Continental from "@/components/Continental";
import MenuItem from "@/components/MenuItem";
import HappyCustomer from "@/components/HappyCustomer";
const HomeAllComponentData = async () => {
  const pizza = await getAllData();
  const pizzaData = pizza?.pizza;

  const filterPizza = pizzaData?.filter(
    (value) => value.category === "new lunched"
  );


  const headingData = {
    title: "Best Products",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Prinbeen The Industry's Standard Dummy Text Took Scrambled It To Make A Type Specimen Book.",
    textCss: "md:w-2/3 lg:w-1/2 m-auto text-slate-500 px-3 md:px-1 lg:px-0",
  };

  return (
    <section>
      <Hero />
      <Choose />
      <div className="max-w-7xl m-auto text-center pb-10 space-y-10">
        <Heading data={headingData} />
        <SwiperHome pizzaData={filterPizza} />
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
