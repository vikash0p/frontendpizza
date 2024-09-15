
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hot Pizza",
    short_name: "PizzaApp",
    description:
      "Order delicious pizzas from Home Pizza directly from our app.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff4500", // Theme color representing your app's brand
    orientation: "portrait", // Set orientation to portrait
    icons: [
      {
        src: "/favicon/icon.png", // Path to 192x192 icon
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png", // Path to 512x512 icon
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Order Pizza",
        short_name: "Order",
        description: "Quickly order your favorite pizza",
        url: "/order",
        icons: [
          { src: "/icons/order-icon.png", sizes: "96x96", type: "image/png" },
        ],
      },
      {
        name: "View Cart",
        short_name: "Cart",
        description: "Check your cart items",
        url: "/cart",
        icons: [
          { src: "/icons/cart-icon.png", sizes: "96x96", type: "image/png" },
        ],
      },
    ],
    screenshots: [
      {
        src: "/screenshots/home.png", // Path to home page screenshot
        type: "image/png",
        sizes: "1080x1920",
      },
      {
        src: "/screenshots/order.png", // Path to order page screenshot
        type: "image/png",
        sizes: "1080x1920",
      },
    ],
  };
}
