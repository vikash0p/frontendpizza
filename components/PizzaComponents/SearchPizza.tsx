"use client";
import {
  changeHandlerValue,
  filterProduct,
} from "@/Redux-toolkit/slice/filterSlice";
import { RootState } from "@/Redux-toolkit/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";

const SearchPizza = () => {
  const value = useSelector((state: RootState) => state.filter.filters.search);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(filterProduct());
    router.push("/newPizza");
    window.scrollBy({
      top: 330,
      behavior: "smooth",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeHandlerValue({ name: e.target.name, value: e.target.value })
    );
  };

  return (
    <div className="my-6 mx-auto max-w-screen-lg px-4">
      {/* Accessible Label */}
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search the site"
        className="flex items-center border border-red-700 rounded-lg overflow-hidden shadow-lg"
      >
        <input
          id="search"
          name="search"
          type="text"
          value={value}
          placeholder="Search Pizzas..."
          aria-label="Enter search term"
          onChange={handleInputChange}
          className="w-full sm:w-auto flex-1 px-2 md:px-4 py-1 md:py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200 ease-in-out"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="bg-red-500 text-white px-5 py-2  items-center justify-center hover:bg-red-600 transition duration-200 ease-in-out hidden md:flex"
        >
          <BiSearch size={26} />
        </button>
      </form>
    </div>
  );
};

export default SearchPizza;
