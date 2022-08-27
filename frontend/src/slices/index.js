import { createSlice } from '@reduxjs/toolkit';

const URLNOTES = 'http://localhost:3001/core/notes';

const initialState = {
  notes: [],
  selectedNote: '',
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    refreshNotes: (state) => {
      fetch(URLNOTES, { method: 'GET' }).then((res) => res.json()).then((data) => state.notes.push(data));
      console.info('Refreshing notes...', state.notes);
    },
    createNote: (state, action) => {
      let added;
      fetch(URLNOTES, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: action.payload.title, content: action.payload.content }),
      }).then((res) => res.json()).then((data) => added=data);
    },
    updateNote: (state) => {
      console.info('Updating note...', state);
    },
    deleteNote: (state) => {
      console.info('Deleting note...', state);
    },
    archiveNote: (state) => {
      console.info('Archiving note...', state);
    },
  },
});

export const {
  refreshNotes,
  createNote,
  updateNote,
  deleteNote,
  archiveNote,
} = noteSlice.actions;
export const selectNotes = (state) => state.notes.notes;
export default noteSlice.reducer;
