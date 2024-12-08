import AboutComponent from '@/components/AboutComponents/AboutComponent'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Home Pizza | Delicious Pizza Delivered Fresh",
  description:
    "Learn more about Home Pizza! Discover our story, commitment to quality, and the team behind the delicious pizzas delivered straight to your door.",

  openGraph: {
    title: "About Us | Home Pizza | Delicious Pizza Delivered Fresh",
    description:
      "Get to know Home Pizza, our journey, and our dedication to delivering high-quality pizzas. Meet the team and learn what makes our pizzas special.",
    url: "https://homepizza.vercel.app/about",
    images: "/pizza-about-icon-512x512.png", // Path to a specific image for the About page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Home Pizza | Delicious Pizza Delivered Fresh",
    description:
      "Discover the story behind Home Pizza and our commitment to delivering quality pizzas.",
    images: "/pizza-about-icon-512x512.png", // Path to a specific image for the About page on Twitter
  },
};

const About = () => {
  return (
    <div>
      <AboutComponent />
    </div>
  )
}

export default About
