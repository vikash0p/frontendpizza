import React from 'react'
import { Metadata } from "next";
import UserDetailsData from "@/components/userComponents/UserDetailsData";

export const metadata: Metadata = {
  title: "User Profile | Home Pizza | Manage Your Account",
  description:
    "Access your Home Pizza user profile to manage your account details, view your order history, and update your preferences. Enjoy a personalized experience tailored to your pizza orders.",

  openGraph: {
    title: "User Profile | Home Pizza | Manage Your Account",
    description:
      "View and manage your Home Pizza account from your user profile. Check your order history, update your details, and customize your preferences for a better pizza experience.",
    url: "https://homepizza.vercel.app/user", // Adjust URL if needed
    images: "/pizza-user-icon-512x512.png", // Path to a specific image for the User page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "User Profile | Home Pizza | Manage Your Account",
    description:
      "Manage your Home Pizza account from your profile page. View your order history and update your account details.",
    images: "/pizza-user-icon-512x512.png", // Path to a specific image for the User page on Twitter
  },
};

const User = () => {

  return (
    <div className="w-full min-h-screen ">
      <UserDetailsData />
    </div>
  )
}

export default User
