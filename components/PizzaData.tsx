import React, { Suspense } from "react";
import PizzaCardOne from "./PizzaCardOne";
import {pizza} from '@/utils/interface'

interface pizzaDataProps {
  pizzaData: pizza[] | undefined;
}

const PizzaData: React.FC<pizzaDataProps> = ({ pizzaData }) => {
  return (
    <div className="">
      {pizzaData === undefined && !pizzaData ? (
        <div className="w-full min-h-screen flex flex-col justify-center items-center ">
          <h1 className="text-4xl text-textColor font-semibold">
            No Pizza found !
          </h1>
        </div>
      ) : (
        <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 py-10  ">
          {pizzaData.map((value) => {
            return (
              <Suspense fallback={<div className="w-full h-full text-center flex flex-col justify-center items-center text-textColor text-2xl ">Loading...</div>} key={value._id}>
                <PizzaCardOne value={value} />
              </Suspense>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PizzaData;
