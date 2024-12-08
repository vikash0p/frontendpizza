import HomeAllComponentData from "@/components/HomeComponents/HomeAllComponentData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Pizza | Delicious Pizza Delivered Fresh to Your Doorstep",
  description:
    "Welcome to Home Pizza! Indulge in our freshly made pizzas, crafted with high-quality ingredients, and delivered hot to your doorstep. From classic pepperoni to spicy jalapenos, we have something for every pizza lover.",

  openGraph: {
    title: "Home Pizza | Delicious Pizza Delivered Fresh to Your Doorstep",
    description:
      "Enjoy a wide selection of freshly baked pizzas from Home Pizza. With a variety of toppings and flavors, our pizzas are crafted to perfection and delivered hot and fresh.",
    url: "https://homepizza.vercel.app/",
    images: "/pizza-icon-512x512.png", // Path to the pizza image
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Pizza | Delicious Pizza Delivered Fresh to Your Doorstep",
    description:
      "Order your favorite pizza online and get it delivered fresh from Home Pizza.",
    images: "/pizza-icon-512x512.png", // Path to the pizza image for Twitter
  },
};

const Home = () => {
  return (
    <section>
      <HomeAllComponentData />
    </section>
  );
};

export default Home;