"use client";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHandlerValue,
  filterProduct,
} from "@/Redux-toolkit/slice/filterSlice";
import { RootState } from "@/Redux-toolkit/store";

type SliderProps = React.ComponentProps<typeof Slider>;

export function PriceSlider({ className, ...props }: SliderProps) {
  // Get the current price value from Redux store
  const priceValue = useSelector(
    (state: RootState) => state.filter.filters.price
  );
  // console.log("🚀 ~ file: PriceSlider.tsx:12 ~ priceValue:", priceValue);

  const dispatch = useDispatch();

  // Handle value change and dispatch both the changeHandlerValue and filterProduct actions
  const handleValueChange = (value: number[]) => {
    // Update the price filter value in the store
    dispatch(changeHandlerValue({ name: "price", value: value[0] }));

    // Trigger the filterProduct action to apply the filter immediately
    dispatch(filterProduct());
  };

  return (
    <div>
      <Slider
        defaultValue={[priceValue]} // Set the initial value from the Redux store
        max={300}
        step={10}
        min={149}
        name="price"
        className={cn("w-[90%]", className)}
        onValueChange={handleValueChange} // Call handleValueChange on slider change
        {...props}
      />
      <p>&#8377;{priceValue} </p>
    </div>
  );
}
