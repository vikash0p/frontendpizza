"use client";
import Image from "next/image";
import Link from "next/link";
import AboutTeam from "./AboutTeam";
import PizzaSection from "./PizzaSection";
import FineCuisineComponent from "./FineCuisineComponent";
import Testimonials from "./Testimonials";
import FeaturesComponent from "../HomeComponents/FeaturesComponent";
import ImageTopComponent from "./ImageTopComponent";
const AboutComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <ImageTopComponent
        img="/about/Breadcrump-Image.jpg"
        title="About"
        des="Home / About"
      />{" "}
      {/* Features */}
      <div className="py-16">
        <h5 className="text-center text-2xl md:text-5xl lg:text-8xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-700 text-transparent bg-clip-text">
          Great Taste Of Pizza @Every Single Bite Time To Explore Taste.
        </h5>
        <FeaturesComponent />
      </div>
      {/* Chef Section */}
      <AboutTeam />
      {/* Statistics Section */}
      <PizzaSection />
      {/* cuisine component */}
      <FineCuisineComponent />
      {/* testimonials */}
      <Testimonials />
    </div>
  );
};

export default AboutComponent;
