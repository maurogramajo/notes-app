import React from 'react';

import { Provider, useDispatch } from 'react-redux';

import { store } from './store';

import NavBar from './components/NavBar';
import NotesGrid from './components/NotesGrid';

import { getNotes } from './slices';

function NotesApp() {
  const dispatch = useDispatch();

  dispatch(getNotes());

  return (
    <div>
      <NavBar />
      <NotesGrid />
    </div>

  );
}

export default function MainApp() {
  return (
    <Provider store={store}>
      <NotesApp />
    </Provider>
  );
}
