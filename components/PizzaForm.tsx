"use client";
import React, { useState } from "react";
import axios from "axios"; // You may need to install axios if not already installed
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "@/utils/react-toastify";

interface Pizza {
  name: string;
  description: string;
  category: string;
  variants: string[];
  prices: number[];
  image: string;
}

const PizzaForm: React.FC = () => {
  const [pizza, setPizza] = useState<Pizza>({
    name: "",
    description: "",
    category: "",
    variants: [""],
    prices: [0],
    image: "",
  });

  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPizza((prevPizza) => ({
      ...prevPizza,
      [name]: value,
    }));
  };

  const handleVariantChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVariants = [...pizza.variants];
    newVariants[index] = e.target.value;
    setPizza((prevPizza) => ({
      ...prevPizza,
      variants: newVariants,
    }));
  };

  const handlePriceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPrices = [...pizza.prices];
    newPrices[index] = parseFloat(e.target.value);
    setPizza((prevPizza) => ({
      ...prevPizza,
      prices: newPrices,
    }));
  };

  const handleAddVariant = () => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      variants: [...prevPizza.variants, ""],
      prices: [...prevPizza.prices, 0],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(pizza);
    try {
      const res = await axios.post("https://backendpizza.vercel.app/pizza/create", {
        name: pizza.name,
        description: pizza.description,
        category: pizza.category,
        variants: pizza.variants,
        price: pizza.prices,
        image: pizza.image,
      });
      const data = await res.data;

      if (res.status === 201 && data.success === true) {
        ToastSuccess(data.message);
        router.refresh();
        // pizza.category='';
        pizza.description='';
        pizza.name='';
        pizza.image='';
        // pizza.prices=[];
        // pizza.variants=[];

        // setPizza({
        //   name: "",
        //   description: "",
        //   category: "",
        //   variants: [""],
        //   prices: [0],
        //   image: "",
        // });
      }
      // console.log("🚀 ~ file: PizzaForm.tsx:76 ~ res:", res);

      // console.log("Pizza added successfully", data);
    } catch (error: any) {
      console.error("Error adding pizza:", error);
      ToastError(error.message);
    }
  };

  return (
    <div className="max-w-lg px-2 py-5 mx-auto mt-2 mb-3 text-black border-2 rounded-sm border-textColor ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={pizza.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={pizza.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={pizza.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={pizza.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-">Variants & Prices</label>
          {pizza.variants.map((variant, index) => (
            <div key={index} className="flex py-2 space-x-4">
              <input
                type="text"
                value={variant}
                onChange={(e) => handleVariantChange(index, e)}
                placeholder="Variant"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                value={pizza.prices[index]}
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
            className="px-4 py-2 mt-2 text-white rounded-md bg-textColor hover:bg-textColor"
          >
            Add Variant
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md bg-textColor hover:bg-textColor"
          >
            Add Pizza
          </button>
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
