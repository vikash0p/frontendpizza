import CartData from '@/components/CartData'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Home Pizza | Review Your Pizza Order",
  description:
    "Review and manage your pizza order on the Home Pizza Cart page. Check your selected items, make adjustments, and proceed to checkout to enjoy our delicious pizzas delivered fresh to your door.",

  openGraph: {
    title: "Cart | Home Pizza | Review Your Pizza Order",
    description:
      "View and manage your order on the Home Pizza Cart page. Check your selected pizzas, update quantities, and proceed to checkout for a seamless delivery experience.",
    url: "https://homepizza.vercel.app/cart",
    images: "/pizza-cart-icon-512x512.png", // Path to a specific image for the Cart page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cart | Home Pizza | Review Your Pizza Order",
    description:
      "Manage your pizza order on the Home Pizza Cart page. Check your selections and proceed to checkout.",
    images: "/pizza-cart-icon-512x512.png", // Path to a specific image for the Cart page on Twitter
  },
};

const Cart = () => {
  return (
    <div>
      <CartData />
    </div>
  )
}

export default Cart
