import { configureStore } from '@reduxjs/toolkit';
import basketChenge from './redusers/cart';
export const store = configureStore({
  reducer: basketChenge ,
  devTools: process.env.NODE_ENV !== 'production',
});