import { createSlice } from '@reduxjs/toolkit';

const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    selectedSeat: null,
    basicfare: null,
    tax: null,
    seatfare: null,
    meals: 0,
    baggage: 0,
  },
  reducers: {
    setSeat: (state, action) => {
      const { seat_number } = action.payload.seat;
      state.selectedSeat = seat_number;
      state.basicfare = action.payload.seat.basicfare;
      state.tax = action.payload.seat.tax;
      state.seatfare = action.payload.seat.seatfare;
    },
    setMeals: (state, action) => {
      state.meals = parseInt(action.payload.meal);
    },
    setBaggage: (state, action) => {
      state.baggage = action.payload.baggage;
    },
  },
});

export const { setSeat, setMeals, setBaggage } = flightSlice.actions;
export default flightSlice.reducer;

export const selectedseat = (state) => state.flight.selectedSeat;
export const basicfare = (state) => state.flight.basicfare;
export const tax = (state) => state.flight.tax;
export const seatfare = (state) => state.flight.seatfare;
export const meals = (state) => state.flight.meals;
export const baggage = (state) => state.flight.baggage;
