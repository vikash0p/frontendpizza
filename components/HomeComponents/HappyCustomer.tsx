"use client";
import React from "react";
import Heading from "./Heading";
import CustomerReview from "./CustomerReview";

const HappyCustomer = () => {
  const headingData = {
    title: "Happy Customers",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Prinbeen The Industry's Standard Dummy Text Took Scrambled It To Make A Type Specimen Book.",
    textCss: "md:w-2/3 lg:w-1/2 m-auto text-black px-3 md:px-1 lg:px-0",
  };
  return (
    <div>
      <Heading data={headingData} />
      <CustomerReview />
    </div>
  );
};

export default HappyCustomer;
