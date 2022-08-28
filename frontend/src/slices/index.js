import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URLNOTES = 'http://localhost:3001/core/notes';

const initialState = {
  loading: false,
  error: '',
  notes: [],
  selectedNote: '',
};

export const getNotes = createAsyncThunk('notes/getNotes', async () => {
  const data = await fetch(URLNOTES, { method: 'GET' }).then((res) => res.json());
  return data;
});

/*
const putNote = createAsyncThunk('notes/putNote', () => {
  fetch(URLNOTES, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: action.payload.title, content: action.payload.content }),
  }).then((res) => res.json());
});
*/

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    refreshNotes: (state) => {
      console.info('Refreshing notes...', state);
    },
    createNote: (state) => {
      console.info('Creating notes...', state);
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
  extraReducers: (builder) => {
    builder.addCase(getNotes.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(getNotes.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        notes: action.payload,
        error: '',
      }
    ));
    builder.addCase(getNotes.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        notes: [],
        error: action.error.message,
      }
    ));
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
