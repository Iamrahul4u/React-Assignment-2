import { createSlice } from "@reduxjs/toolkit";
import { getCarsData } from "../services/apiData";

const initialValue = {
  pageSize: 6,
  hotelData: [],
  filter: "",
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState: initialValue,
  reducers: {
    setHotel(state, action) {
      state.hotelData = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setPageSize(state) {
      state.pageSize += 3;
    },
    resetPageSize(state) {
      state.pageSize = 6;
    },
  },
});

export const { setHotel, setPageSize, setFilter, resetPageSize, getHotel } =
  hotelSlice.actions;

export default hotelSlice.reducer;

const initializeCities = () => {
  return async (dipatch) => {
    const cars = await getCarsData();
    dipatch(setHotel(cars));
  };
};

export { initializeCities };
