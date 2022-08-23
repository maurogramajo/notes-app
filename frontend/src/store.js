import Redux from '@reduxjs/toolkit';
import notesReducers from './reducers';

const store = Redux.configureStore({reducer: notesReducers});

export default store;