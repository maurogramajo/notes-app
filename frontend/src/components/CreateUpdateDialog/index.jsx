import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { createNote } from '../../slices';

function CreateUpdateDialog({
  openDialog,
  closeDialog,
  title,
  aceptLabel,
  inputContent,
}) {
  const dispatch = useDispatch();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleAcept = () => {
    dispatch(createNote({ title: noteTitle, content: noteContent }));
    closeDialog(false);
  };

  useEffect(() => {
    if (inputContent) {
      setNoteTitle(inputContent.title);
      setNoteContent(inputContent.content);
    }
  }, [openDialog]);

  return (
    <div>
      <Dialog open={openDialog} onClose={closeDialog}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
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
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            multiline
            rows={5}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleAcept}>
            {aceptLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateUpdateDialog;
