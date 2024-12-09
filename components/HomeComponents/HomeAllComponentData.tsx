

import { Hero } from "./Hero";
import Choose from "./Choose";
import Heading from "./Heading";
import SwiperHome from "./SwiperHome";
import FeaturesComponent from "./FeaturesComponent";
import ChooseUs from "./ChooseUs";
import Category from "./Category";
import Continental from "./Continental";
import MenuItem from "./MenuItem";
import HappyCustomer from "./HappyCustomer";

import { getAllData } from "@/utils/fetch-data/getAllData";
import { headingData } from "@/utils/data/Heading-data";

const HomeAllComponentData = async () => {
  const pizza = await getAllData();
  const pizzaData = pizza?.pizza;

  const filterPizza = pizzaData?.filter(
    (value) => value.category === "new lunched"
  );

  return (
    <section>
      <Hero />
      <Choose />
      <div className="max-w-7xl m-auto text-center pb-10 space-y-10">
        <Heading data={headingData} />
        <SwiperHome pizzaData={filterPizza} />
        <div>
          <h5 className="text-center text-2xl py-5 font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-700 text-transparent bg-clip-text">
            Taste Of Pizza @Every Single Bite
          </h5>
          <FeaturesComponent />
        </div>
        <ChooseUs />
        <Category pizzaData={pizzaData} />
        <Continental />
        <MenuItem pizzaData={pizzaData} />
        <HappyCustomer />
      </div>
    </section>
  );
};

export default HomeAllComponentData;
