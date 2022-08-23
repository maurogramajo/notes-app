import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import NavBar from './components/NavBar';

function NotesApp() {
  return (
    <div>
      <NavBar />
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