import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NotesGrid from './components/NotesGrid';
import './App.css';
import CreateUpdateDialog from './components/CreateUpdateDialog';

const URLNOTES = 'http://localhost:3001/notes';
const URLARCHIVEDNOTES = 'http://localhost:3001/notes/archived';
const URLCATEGORIES = 'http://localhost:3001/categories';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      archivednotes: [],
      categories: [],
      showNotes: true,
      openCreateNote: false,
      selectedNote: {},
      categoryFilter: '',
    };

    this.refreshNotes = this.refreshNotes.bind(this);
    this.refreshNotes();
    this.refreshCategories = this.refreshCategories.bind(this);
    this.refreshCategories();
  }

  refreshNotes() {
    fetch(URLNOTES, { method: 'GET' }).then((res) => res.json()).then((data) => this.setState({ notes: data }));
    fetch(URLARCHIVEDNOTES, { method: 'GET' }).then((res) => res.json()).then((data) => this.setState({ archivednotes: data }));
  }

  refreshCategories() {
    fetch(URLCATEGORIES, { method: 'GET' }).then((res) => res.json()).then((data) => this.setState({ categories: data }));
  }

  render() {
    const {
      notes,
      archivednotes,
      showNotes,
      openCreateNote,
      selectedNote,
      categories,
      categoryFilter,
    } = this.state;

    const closeDialog = () => {
      this.setState({ openCreateNote: false });
    };

    const openDialog = () => {
      this.setState({ openCreateNote: true });
    };

    const openUpdateDialog = (note) => {
      this.setState({ openCreateNote: true, selectedNote: note });
    };

    const toogleArchivedNote = (note) => {
      fetch(URLARCHIVEDNOTES, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: note._id, archived: note.archived }),
      }).then((res) => res.json()).then(() => this.refreshNotes());
    };

    const toogleArchived = () => {
      this.setState({ showNotes: !showNotes });
    };

    const deleteNote = (note) => {
      fetch(URLNOTES, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: note._id }),
      }).then((res) => res.json()).then(() => this.refreshNotes());
    };

    const clearSelected = () => {
      this.setState({ selectedNote: {} });
    };

    const setCategoryFilter = (category) => {
      this.setState({ categoryFilter: category });
    };

    return (
      <div className="App">
        <Navbar
          setCreateNote={openDialog}
          showArchivedNotes={toogleArchived}
          categories={categories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <CreateUpdateDialog
          openDialog={openCreateNote}
          closeDialog={closeDialog}
          refreshNotes={this.refreshNotes}
          selectedNote={selectedNote}
          clearSelected={clearSelected}
          categories={categories}
          refreshCategories={this.refreshCategories}
        />
        <NotesGrid
          notes={
            (showNotes) ? notes : archivednotes
          }
          setUpdateNote={openUpdateDialog}
          setArchivedNote={toogleArchivedNote}
          deleteNote={deleteNote}
          showNotes={showNotes}
        />
      </div>
    );
  }
}

export default App;
