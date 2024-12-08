import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/utils/global/Layout";
const openSens=Open_Sans({subsets:["latin"]})

export const metadata: Metadata = {
  metadataBase: new URL("https://hotpizza.vercel.app/"),

  title: {
    default: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
    template: "%s | Hot Pizza",
  },

  description:
    "Welcome to Hot Pizza! Enjoy a variety of delicious pizza options with sizzling toppings and fresh ingredients. Whether you're craving a classic pepperoni or a spicy jalapeno burst, our pizza delivers flavor straight to your door.",

  openGraph: {
    title: {
      default: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
      template: "%s | Hot Pizza",
    },
    description:
      "At Hot Pizza, we offer a mouth-watering selection of pizzas, from pepperoni to jalapenos. Freshly baked, cheesy goodness with a variety of toppings delivered hot to your door. Taste the difference with every bite!",
    images: [
      {
        url: "https://hotpizza.vercel.app/public/images/pizza-logo.png",
        width: 512,
        height: 512,
        alt: "Hot Pizza Logo",
      },
    ],
    url: "https://hotpizza.vercel.app/",
    siteName: "Hot Pizza",
    locale: "en_US", // Open Graph locale standard format
    type: "website", // Correct Open Graph type, you could also use "restaurant" if relevant
  },

  applicationName: "Hot Pizza",
  keywords: [
    "PizzaDelivery",
    "OrderPizzaOnline",
    "BestPizzaInTown",
    "PepperoniPizza",
    "SpicyPizza",
    "PizzaDeals",
    "CheesyPizza",
    "JalapenoPizza",
    "FreshPizza",
    "PizzaNearMe",
  ],

  authors: [
    { name: "Hot Pizza Team" },
    { name: "Hot Pizza", url: "https://hotpizza.vercel.app/" },
  ],

  creator: "Hot Pizza Inc.",
  publisher: "https://hotpizza.vercel.app",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSens.className} bg-bgColor`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
