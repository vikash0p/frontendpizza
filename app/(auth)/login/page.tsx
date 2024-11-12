import LoginForm from '@/components/LoginForm';
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Home Pizza | Access Your Account",
  description:
    "Log in to your Home Pizza account to manage your orders, view your history, and access exclusive offers. If you don't have an account yet, sign up to start enjoying our delicious pizzas!",

  openGraph: {
    title: "Login | Home Pizza | Access Your Account",
    description:
      "Access your Home Pizza account by logging in. Manage your orders, view your history, and enjoy a personalized pizza experience. New to Home Pizza? Sign up to create an account and start ordering!",
    url: "https://homepizza.vercel.app/login",
    images: "/pizza-login-icon-512x512.png", // Path to a specific image for the Login page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Login | Home Pizza | Access Your Account",
    description:
      "Log in to manage your Home Pizza orders and view your history. New users can sign up to start ordering delicious pizzas.",
    images: "/pizza-login-icon-512x512.png", // Path to a specific image for the Login page on Twitter
  },
};

const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login
