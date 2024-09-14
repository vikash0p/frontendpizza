"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux-toolkit/store";
import {
  sortHandler,
} from "@/Redux-toolkit/slice/filterSlice";

// Create an array of items
const options = [
  { value: "highToLow", label: "Price: High to Low" },
  { value: "lowToHigh", label: "Price: Low to High" },
  { value: "ascending", label: "Ascending (A-Z)" },
  { value: "descending", label: "Descending (Z-A)" },
];

export function PizzaSelector() {
  const dispatch = useDispatch();
  const sortValue = useSelector((state: RootState) => state.filter.sort);

  // Handle selecting a sorting option
  const handleSortChange = (value: string) => {
    dispatch(sortHandler(value)); // Dispatch the selected sort option to Redux
  };

  return (
    <Select onValueChange={handleSortChange} value={sortValue}>
      <SelectTrigger className="w-[180px] border border-red-600">
        <SelectValue placeholder="Select a sorting option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting Options</SelectLabel>
          {/* Map over the array to create SelectItems dynamically */}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
