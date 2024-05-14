'use client'
import axios from "axios";
import React, { useState } from "react";

interface VariantPrice {
  variant: string;
  price: number;
}

const VariantPriceForm: React.FC = () => {
  const [variantPrices, setVariantPrices] = useState<VariantPrice[]>([
    { variant: "", price: 0 },
  ]);

  const handleVariantChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVariantPrices = [...variantPrices];
    newVariantPrices[index].variant = event.target.value;
    setVariantPrices(newVariantPrices);
  };

  const handlePriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVariantPrices = [...variantPrices];
    newVariantPrices[index].price = parseFloat(event.target.value);
    setVariantPrices(newVariantPrices);
  };

  const handleAddVariant = () => {
    setVariantPrices([...variantPrices, { variant: "", price: 0 }]);
  };

  const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(variantPrices);
    try {
      const res = await axios.post("http://localhost:5000/pizza/create",{

      });

    } catch (error) {

    }

  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          {variantPrices.map((variantPrice, index) => (
            <div key={index} className="flex space-x-4">
              <input
                type="text"
                value={variantPrice.variant}
                onChange={(e) => handleVariantChange(index, e)}
                placeholder="Variant"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                value={variantPrice.price}
                onChange={(e) => handlePriceChange(index, e)}
                placeholder="Price"
                min="0"
                step="0.01"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddVariant}
            className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add Variant
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VariantPriceForm;
