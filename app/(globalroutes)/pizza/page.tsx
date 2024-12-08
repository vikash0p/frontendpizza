import { getAllData } from "@/utils/getAllData";
import React from "react";
import { pizza } from "@/utils/types/pizzaInterface";
import NewPizzaCard from "@/components/PizzaComponents/NewPizzaCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza Menu | Home Pizza | Discover Our Delicious Pizzas",
  description:
    "Explore the Home Pizza Menu to discover our range of delicious pizzas. From classic favorites to gourmet creations, find detailed descriptions, ingredients, and pricing for each pizza.",

  openGraph: {
    title: "Pizza Menu | Home Pizza | Discover Our Delicious Pizzas",
    description:
      "Browse through the Home Pizza Menu to find your perfect pizza. Learn about our offerings, from classic pepperoni to unique gourmet pizzas, and enjoy detailed descriptions and pricing.",
    url: "https://homepizza.vercel.app/pizza", // Adjust URL if needed
    images: "/pizza-menu-icon-512x512.png", // Path to a specific image for the Pizza page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pizza Menu | Home Pizza | Discover Our Delicious Pizzas",
    description:
      "Check out the Home Pizza Menu for a variety of delicious pizzas. Find your favorite and learn more about each option.",
    images: "/pizza-menu-icon-512x512.png", // Path to a specific image for the Pizza page on Twitter
  },
};

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
