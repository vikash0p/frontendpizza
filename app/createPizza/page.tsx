import PizzaForm from "@/components/PizzaForm";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza Menu | Home Pizza | Explore Our Delicious Pizzas",
  description:
    "Discover the Home Pizza Menu! Explore our wide range of delicious pizzas, from classic favorites to unique creations. Find your perfect pizza and order online for delivery or pickup.",

  openGraph: {
    title: "Pizza Menu | Home Pizza | Explore Our Delicious Pizzas",
    description:
      "Browse the Home Pizza Menu to find your next favorite pizza. We offer a variety of options, including classic, gourmet, and specialty pizzas, all crafted with the freshest ingredients.",
    url: "https://homepizza.vercel.app/pizza",
    images: "/pizza-menu-icon-512x512.png", // Path to a specific image for the Pizza page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pizza Menu | Home Pizza | Explore Our Delicious Pizzas",
    description:
      "Check out the Home Pizza Menu for a variety of tasty pizzas. Find your favorite and order online for a delicious meal.",
    images: "/pizza-menu-icon-512x512.png", // Path to a specific image for the Pizza page on Twitter
  },
};

const CreatePizza: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <PizzaForm />
    </div>
  );
};

export default CreatePizza;
