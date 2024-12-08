import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pizza } from "@/types/pizzaInterface";

interface State {
  all_product: pizza[];
  filter_product: pizza[];
  sort: string;
  filters: {
    search: string;
    price: number;
    cat: string[]; // Store selected category IDs
  };
}

const initialState: State = {
  all_product: [],
  filter_product: [],
  sort: "",
  filters: {
    search: "",
    price: 0,
    cat: [], // Initial empty array for selected categories
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Fetch all products and set to both all_product and filter_product
    fetchAllProductData: (state, action: PayloadAction<pizza[]>) => {
      state.all_product = action.payload;
      state.filter_product = action.payload;
    },

    // Sort products
    sortHandler: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;

      const getPrice = (item: pizza): number => Math.max(...item.price);

      const sortFunctions: { [key: string]: (a: pizza, b: pizza) => number } = {
        highToLow: (a, b) => getPrice(b) - getPrice(a),
        lowToHigh: (a, b) => getPrice(a) - getPrice(b),
        ascending: (a, b) => a.name.localeCompare(b.name),
        descending: (a, b) => b.name.localeCompare(a.name),
      };

      const sortFunction = sortFunctions[action.payload];

      if (sortFunction) {
        state.filter_product.sort(sortFunction);
      }
    },

    // Filter products based on search, price, and category
    filterProduct: (state) => {
      const { search, price, cat } = state.filters;

      state.filter_product = state.all_product.filter((item) => {
        const matchesSearch = search
          ? item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())
          : true;

        const matchesPrice =
          price > 0 ? Math.max(...item.price) <= price : true;

        const matchesCategory =
          cat.length > 0
            ? cat.includes(item.category) || cat.includes("all")
            : true;

        return matchesSearch && matchesPrice && matchesCategory;
      });

      // Apply sorting after filtering
      if (state.sort) {
        filterSlice.caseReducers.sortHandler(state, {
          payload: state.sort,
          type: "sortHandler",
        });
      }
    },

    // Handle value changes for filters (search, price, category)
    changeHandlerValue: (
      state,
      action: PayloadAction<{ name: string; value: string | number | string[] }>
    ) => {
      const { name, value } = action.payload;
      if (name in state.filters) {
        state.filters = {
          ...state.filters,
          [name]: value,
        };
      }
    },

    // Clear all filters (search, price, category)
    clearAllFilters: (state) => {
      state.filters = {
        search: "",
        price: 0,
        cat: [], // Reset category selection
      };
      state.filter_product = state.all_product; // Reset filter_product to show all products
    },
  },
});

export const {
  fetchAllProductData,
  filterProduct,
  changeHandlerValue,
  sortHandler,
  clearAllFilters, // Export the new reducer
} = filterSlice.actions;

export default filterSlice.reducer;
