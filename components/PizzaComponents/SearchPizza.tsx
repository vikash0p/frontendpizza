"use client";
import { changeHandlerValue,filterProduct } from "@/Redux-toolkit/slice/filterSlice";
import { RootState } from "@/Redux-toolkit/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";

const SearchPizza = () => {
  const value = useSelector((state: RootState) => state.filter.filters.search);
  console.log("🚀 ~ file: SearchPizza.tsx:9 ~ value:", value);
  const dispatch = useDispatch();
  const router=useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(filterProduct())
    router.push('/newPizza')
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch( changeHandlerValue({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className="my-6 mx-auto max-w-lg">
      {/* Accessible Label */}
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search the site"
        className="flex items-center border-2 border-red-700"
      >
        <input
          id="search"
          name="search"
          type="text"
          value={value}
          placeholder={"Search Pizzas..."}
          aria-label="Enter search term"
          onChange={handleInputChange}
          className="md:w-96 px-5 py-2 rounded-l-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200 ease-in-out"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="bg-red-500 h-full text-white px-3 md:px-5 py-2  "
        >
            <BiSearch size={26} />
        </button>
      </form>
    </div>
  );
};

export default SearchPizza;
