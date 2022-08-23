export const refreshNotes = () => ({
  type: 'REFRESH_NOTES',
});

export const createNote = () => ({
  type: 'CREATE_NOTE',
});

export const updateNote = () => ({
  type: 'UPDATE_NOTE',
});

export const deleteNote = () => ({
  type: 'DELETE_NOTE',
});

/*

  payload: {
    displayName,
    email,
  },
*/