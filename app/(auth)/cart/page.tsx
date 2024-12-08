import CartData from '@/components/cart-components/CartData'
import React from 'react'
import { Metadata } from "next";
import { cartMetadata } from "@/utils/meta/cartMetadata";

export const metadata: Metadata =cartMetadata;

const Cart = () => {
  return (
    <div>
      <CartData />
    </div>
  )
}

export default Cart
