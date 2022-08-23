const initialState = {
  notes: [],
  selectedNote: '',
};

function notesReducers(state = initialState, action) {
  switch (action.type) {
  case 'REFRESH_NOTES':
    console.info('Refreshing notes...');
    return state;

  case 'CREATE_NOTE':
    console.info('Adding note...');
    return state;

  case 'UPDATE_NOTE':
    console.info('Updating note...');
    return state;
  
  case 'DELETE_NOTE':
    console.info('deleting note...');
    return state;

  default:
    return state;
  }
}

export default notesReducers;