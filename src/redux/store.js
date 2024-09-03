import { combineReducers, configureStore } from '@reduxjs/toolkit';
import flightReducer from './flightSlice';

const reducer = combineReducers({
  flight: flightReducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
