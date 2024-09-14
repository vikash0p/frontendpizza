'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { FaFilter } from "react-icons/fa6";
import { PriceSlider } from "./PriceSlider";
import PizzaFilterCategory from "./PizzaFilterCategory";
import { useDispatch } from "react-redux";
import { clearAllFilters } from "@/Redux-toolkit/slice/filterSlice";

export function FilterSideBar() {
    const dispatch=useDispatch();
  return (
    <Sheet >
      <SheetTrigger asChild>
        <button type="button" className="bg-red-500 px-2 py-1 text-white">
          <FaFilter size={22} /> <span className="sr-only">filter</span>{" "}
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-bgColor">
        <SheetHeader>
          <SheetTitle className={cn("text-textColor font-bold")}>
            Filter Products
          </SheetTitle>
          <SheetDescription className="sr-only">
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold ">Filter By Price:</h1>
          <PriceSlider />
        </div>
        <div>
          <PizzaFilterCategory />
          <div>
            <button
              type="button"
              className="px-5 py-2 rounded-sm bg-red-500 text-white "
              onClick={() => dispatch(clearAllFilters())}
            >
              Clear All Filters
            </button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
