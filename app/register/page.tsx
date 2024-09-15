import RegisterForm from '@/components/RegisterForm'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Home Pizza | Create Your Account",
  description:
    "Sign up for a Home Pizza account to start enjoying our delicious pizzas. Register now to manage your orders, track delivery, and access exclusive offers and promotions.",

  openGraph: {
    title: "Register | Home Pizza | Create Your Account",
    description:
      "Create a Home Pizza account to enjoy a personalized experience. Register to manage your orders, view your order history, and get access to special offers and promotions.",
    url: "https://homepizza.vercel.app/register",
    images: "/pizza-register-icon-512x512.png", // Path to a specific image for the Register page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Register | Home Pizza | Create Your Account",
    description:
      "Sign up for a Home Pizza account to manage orders, track deliveries, and access exclusive offers.",
    images: "/pizza-register-icon-512x512.png", // Path to a specific image for the Register page on Twitter
  },
};

const Register = () => {
  return (
    <div className='min-h-screen w-full px-4'>
      <RegisterForm />
    </div>
  )
}

export default Register
