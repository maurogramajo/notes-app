import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slices';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  }
});
