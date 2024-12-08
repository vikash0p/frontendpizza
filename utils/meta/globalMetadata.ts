export const globalMetadata = {
  metadataBase: new URL( process.env.NEXT_PUBLIC_FRONTEND_URL || "https://frontendpizza.vercel.app" || "http://localhost:3000"),

  title: {
    default: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
    template: "%s | Hot Pizza",
  },

  description:
    "Welcome to Hot Pizza! Enjoy a variety of delicious pizza options with sizzling toppings and fresh ingredients. Whether you're craving a classic pepperoni or a spicy jalapeno burst, our pizza delivers flavor straight to your door.",

  openGraph: {
    title: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
    description:
      "At Hot Pizza, we offer a mouth-watering selection of pizzas, from pepperoni to jalapenos. Freshly baked, cheesy goodness with a variety of toppings delivered hot to your door. Taste the difference with every bite!",
    images: [
      {
        url: `/opengraph-image.jpg`,

        width: 512,
        height: 512,
        alt: "Hot Pizza Logo",
      },
    ],
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
    siteName: "Hot Pizza",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image", // Card type for better visuals
    title: "Hot Pizza | Sizzling Slices Delivered to Your Doorstep",
    description:
      "Craving delicious pizza? Hot Pizza offers freshly baked, cheesy pizzas with sizzling toppings delivered right to your door. Order now and taste the difference!",
    images: [
      {
        url: `/opengraph-image.jpg`,
        alt: "Hot Pizza Logo",
      },
    ],
    site: "@HotPizzaOfficial", // Twitter handle for your brand
    creator: "@HotPizzaTeam", // Twitter handle for the creator
  },

  applicationName: "Hot Pizza",
  keywords: [
    "Pizza Delivery",
    "Order Pizza Online",
    "Best Pizza In Town",
    "Pepperoni Pizza",
    "Spicy Pizza",
    "Pizza Deals",
    "Cheesy Pizza",
    "Jalapeno Pizza",
    "Fresh Pizza",
    "Pizza Near Me",
  ],

  authors: [
    { name: "Hot Pizza Team" },
    {
      name: "Hot Pizza",
      url: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000",
    },
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
