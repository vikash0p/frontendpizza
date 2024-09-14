"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHandlerValue,
  filterProduct,
} from "@/Redux-toolkit/slice/filterSlice";
import { RootState } from "@/Redux-toolkit/store";

const categories = [
  { id: "all", label: "All" },
  { id: "new lunched", label: "New Launched" },
  { id: "Classic", label: "Classic" },
  { id: "Favourite", label: "Favourite" },
  { id: "Signature", label: "Signature" },
  { id: "Delight", label: "Delight" },
];

const PizzaFilterCategory = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: RootState) => state.filter.filters.cat);

  const handleCategoryChange = (id: string) => {
    let updatedCategories = [...selectedCategories];

    if (id === "all") {
      updatedCategories = ["all"]; // If 'All' is selected, deselect other categories
    } else {
      // Toggle the category selection
      if (updatedCategories.includes(id)) {
        updatedCategories = updatedCategories.filter((cat) => cat !== id);
      } else {
        updatedCategories = updatedCategories.filter((cat) => cat !== "all");
        updatedCategories.push(id);
      }
    }

    // Dispatch the updated categories to the Redux store
    dispatch(changeHandlerValue({ name: "cat", value: updatedCategories }));
    dispatch(filterProduct()); // Trigger the filtering after category change
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
      <form
        aria-label="Filter pizzas by category"
        className="flex flex-col gap-3"
      >
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              id={category.id}
              type="checkbox"
              name="cat"
              value={category.id}
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
              className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 accent-red-600"
            />
            <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">
              {category.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PizzaFilterCategory;
