import React from "react";
import { Metadata } from "next";
import { homeMetadata } from "@/utils/meta/homeMetadata";
import HomeAllComponentData from "@/components/HomeComponents/HomeAllComponentData";


export const metadata: Metadata = homeMetadata;



const Home = () => {
  return (
    <section>
      <HomeAllComponentData />
    </section>
  );
};

export default Home;
