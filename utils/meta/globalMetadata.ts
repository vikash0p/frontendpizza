
export const globalMetadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`),

  title: {
    default: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
    template: "%s | Hot Pizza",
  },

  description:
    "Welcome to Hot Pizza! Enjoy a variety of delicious pizza options with sizzling toppings and fresh ingredients. Whether you're craving a classic pepperoni or a spicy jalapeno burst, our pizza delivers flavor straight to your door.",

  // openGraph: {
  //   title: {
  //     default: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
  //     template: "%s | Hot Pizza",
  //   },
  //   description:
  //     "At Hot Pizza, we offer a mouth-watering selection of pizzas, from pepperoni to jalapenos. Freshly baked, cheesy goodness with a variety of toppings delivered hot to your door. Taste the difference with every bite!",
  //   images: [
  //     {
  //       url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.tsx`,
  //       width: 512,
  //       height: 512,
  //       alt: "Hot Pizza Logo",
  //     },
  //   ],
  //   url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
  //   siteName: "Hot Pizza",
  //   locale: "en_US", // Open Graph locale standard format
  //   type: "website", // Correct Open Graph type, you could also use "restaurant" if relevant
  // },

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
    { name: "Hot Pizza", url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` },
  ],

  creator: "Hot Pizza Inc.",
  publisher: "Hot Pizza Inc.",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
};