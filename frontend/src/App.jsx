import React from 'react';

import { Provider } from 'react-redux';

import { store } from './store';

import NavBar from './components/NavBar';
import NotesGrid from './components/NotesGrid';

function NotesApp() {
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
