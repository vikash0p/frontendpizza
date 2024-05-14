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
        <div className="flex flex-col items-center justify-center w-full min-h-screen ">
          <h1 className="text-4xl font-semibold text-textColor">
            No Pizza found !
          </h1>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 px-5 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
          {pizzaData.map((value) => {
            return (
              <Suspense fallback={<div className="flex flex-col items-center justify-center w-full h-full text-2xl text-center text-textColor ">Loading...</div>} key={value._id}>
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
