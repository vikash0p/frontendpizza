'use client'

import React from 'react'
import { FaTruck, FaShieldAlt, FaUserTie, FaUtensils } from "react-icons/fa";

  const features = [
    {
      image: <FaTruck className="text-4xl text-gray-800" />,
      title: "Free Delivery",
      description: "We offer free delivery within the city on all orders.",
    },
    {
      image: <FaShieldAlt className="text-4xl text-gray-800" />,
      title: "100% Safe",
      description:
        "We ensure all safety measures are followed during cooking and delivery.",
    },
    {
      image: <FaUserTie className="text-4xl text-gray-800" />,
      title: "Professional Chefs",
      description:
        "Our chefs are highly trained and experienced in culinary arts.",
    },
    {
      image: <FaUtensils className="text-4xl text-gray-800" />,
      title: "Perfect Cooking",
      description:
        "Every dish is prepared with perfection and attention to detail.",
    },
  ];
const FeaturesComponent = () => {
  return (
    <div className="">


      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-bgColor2 rounded-lg shadow-lg"
          >
            {feature.image}
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesComponent
