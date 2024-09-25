import { createSlice } from '@reduxjs/toolkit';

const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    selectedSeat: null,
    basicfare: null,
    tax: null,
    seatfare: null,
    meals: null,
    baggage: 0,
    baggageName: null,
    selectedTab: 'seat',
    confirmation: false,
  },
  reducers: {
    reset: (state) => {
      state.selectedSeat = null;
      state.basicfare = null;
      state.tax = null;
      state.seatfare = null;
      state.meals = null;
      state.baggage = 0;
      state.baggageName = null;
      state.selectedTab = 'seat';
    },
    setSeat: (state, action) => {
      const { Column, SeatCode, SeatPrice } = action.payload.seat;
      console.log('seat_number', action.payload.seat);

      state.selectedSeat = `${Column}${SeatCode}`;
      state.basicfare = SeatPrice.BaseAmount;
      state.tax = SeatPrice.TaxAmount;
      state.seatfare = SeatPrice.TotalAmount;
    },
    setMeals: (state, action) => {
      state.meals = action.payload.meal?.Name;
    },
    setBaggage: (state, action) => {
      state.baggage = action.payload.baggage;
      state.baggageName = action.payload.baggageName;
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setConfirmation: (state, action) => {
      state.confirmation = action.payload;
    },
  },
});

export const {
  setSeat,
  setMeals,
  setBaggage,
  setSelectedTab,
  reset,
  setConfirmation,
} = flightSlice.actions;
export default flightSlice.reducer;

export const selectedseat = (state) => state.flight.selectedSeat;
export const basicfare = (state) => state.flight.basicfare;
export const tax = (state) => state.flight.tax;
export const seatfare = (state) => state.flight.seatfare;
export const meals = (state) => state.flight.meals;
export const baggage = (state) => state.flight.baggage;
export const baggagename = (state) => state.flight.baggageName;
export const selectedtab = (state) => state.flight.selectedTab;
export const confirmationStore = (state) => state.flight.confirmation;
