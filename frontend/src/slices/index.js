import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendGetNote, sendPutNote, sendPatchNote } from '../apiConections';

const initialState = {
  loading: false,
  error: '',
  notes: [],
  selectedNote: '',
};

export const getNotes = createAsyncThunk('notes/getNotes', sendGetNote);

export const putNote = createAsyncThunk('notes/putNote', (payload) => sendPutNote(payload));

export const patchNote = createAsyncThunk('notes/patchNote', (payload) => sendPatchNote(payload));

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteNote: (state) => {
      console.info('Deleting note...', state);
    },
    archiveNote: (state) => {
      console.info('Archiving note...', state);
    },
  },
  extraReducers: (builder) => {
    // GET states
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
        error: action.error.message,
      }
    ));
    // PUT states
    builder.addCase(putNote.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(putNote.fulfilled, (state) => {
      getNotes();
      return ({
        ...state,
        loading: false,
        // notes: [...state.notes, action.payload],
        error: '',
      });
    });
    builder.addCase(putNote.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        error: action.error.message,
      }
    ));
    // PATCH states
    builder.addCase(patchNote.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(patchNote.fulfilled, (state) => {
      getNotes();
      return ({
        ...state,
        loading: false,
        // notes: [...state.notes, action.payload],
        error: '',
      });
    });
    builder.addCase(patchNote.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        error: action.error.message,
      }
    ));
  },
});

export const {
  deleteNote,
  archiveNote,
} = noteSlice.actions;
export const selectNotes = (state) => state.notes.notes;
export default noteSlice.reducer;
