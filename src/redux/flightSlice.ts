import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { log } from 'console';


const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    selectedSeat: null,
    basicfare: null,
    tax: null,
    seatfare: null,
    meals: 0,
    baggage:0
  },
  reducers: {
    setSeat: (state, action) => {
      const { seat_number } = action.payload.seat;
      state.selectedSeat = seat_number;
      state.basicfare = action.payload.seat.basicfare;
      state.tax = action.payload.seat.tax;
      state.seatfare = action.payload.seat.seatfare;
    },
    setMeals: (state, action) =>{
      state.meals = parseInt(action.payload.meal)
    },
    setBaggage: (state, action) =>{
      console.log(' action.payload ',  action.payload);
      
      state.baggage = action.payload.baggage
    }
  },
});

export const { setSeat, setMeals, setBaggage} = flightSlice.actions;
export default flightSlice.reducer;

export const selectedseat = (state: RootState) => state.flight.selectedSeat;
export const basicfare = (state: RootState) => state.flight.basicfare;
export const tax = (state: RootState) => state.flight.tax;
export const seatfare = (state: RootState) => state.flight.seatfare;
export const meals = (state: RootState) => state.flight.meals;
export const baggage=(state:RootState)=>state.flight.baggage;