import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    selectedSeat: null,
    basicfare: null,
    tax: null,
    seatfare: null,
  },
  reducers: {
    setSeat: (state, action) => {
     

      const { seat_number } = action.payload.seat;
      state.selectedSeat = seat_number;
      state.basicfare = action.payload.seat.basicfare;
      state.tax = action.payload.seat.tax;
      state.seatfare = action.payload.seat.seatfare;
    },
  },
});

export const { setSeat } = flightSlice.actions;
export default flightSlice.reducer;

export const selectedseat = (state: RootState) => state.flight.selectedSeat;
export const basicfare = (state: RootState) => state.flight.basicfare;
export const tax = (state: RootState) => state.flight.tax;
export const seatfare = (state: RootState) => state.flight.seatfare;
