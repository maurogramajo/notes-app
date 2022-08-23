import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

import CategorySelection from './components/CategorySelection';
import EmptyCreateDialog from './components/EmptyCreateDialog';

const url = 'http://localhost:3001/notes';

function CreateUpdateDialog({
  openDialog,
  closeDialog,
  refreshNotes,
  selectedNote,
  clearSelected,
  categories,
  refreshCategories,
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [toogleUpdate, setToogleUpdate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [openAlert, setOpenAlert] = useState(false);

  const closeAlert = () => {
    setOpenAlert(false);
  };

  const handleClose = () => {
    setTitle('');
    setContent('');
    setSelectedCategory('');
    clearSelected();
    setToogleUpdate(false);
    closeDialog();
  };

  const handleCreate = () => {
    if (title === '' || content === '') {
      setOpenAlert(true);
    } else {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, categoryId: selectedCategory._id }),
      }).then((res) => res.json()).then(() => refreshNotes());
      setTitle('');
      setContent('');
      setSelectedCategory('');
      closeDialog();
    }
  };

  const handleUpdate = () => {
    if (Object.keys(selectedNote).length && (
      (selectedNote.title !== title) ||
      (selectedNote.content !== content) ||
      (selectedNote.categoryId !== selectedCategory._id)
    )) {
      fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...selectedNote,
          title,
          content,
          categoryId: selectedCategory._id,
        }),
      }).then((res) => res.json()).then(() => refreshNotes());
      clearSelected();
    }
    setTitle('');
    setContent('');
    setSelectedCategory('');
    setToogleUpdate(false);
    closeDialog();
  };

  useEffect(() => {
    if (Object.keys(selectedNote).length) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      (selectedNote.categoryId) ?
        setSelectedCategory((categories.filter((data) => data._id === selectedNote.categoryId))[0]) :
        setSelectedCategory('');
      setToogleUpdate(true);
    }
  }, [openDialog]);

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{(toogleUpdate) ? 'Update Note' : 'Create Note'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={5}
          />
          <CategorySelection
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            refreshCategories={refreshCategories}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(toogleUpdate) ? handleUpdate : handleCreate}>
            {(toogleUpdate) ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
        <EmptyCreateDialog open={openAlert} handleClose={closeAlert} />
      </Dialog>
    </div>
  );
}

export default CreateUpdateDialog;
