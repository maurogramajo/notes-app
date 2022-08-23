import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  selectedNote: '',
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    refreshNotes: (state) => {
      console.info('Refreshing notes...');
    },
    createNote: (state) => {
      console.info('Creating note...');
    },
    updateNote: (state) => {
      console.info('Updating note...');
    },
    deleteNote: (state) => {
      console.info('Deleting note...');
    },
  },
});

export const { refreshNotes, createNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer