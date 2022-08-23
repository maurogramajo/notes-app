import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import GridItems from './components/GridItem';
import DeleteDialog from './components/DeleteDialog';

function NotesGrid({
  notes,
  setUpdateNote,
  setArchivedNote,
  deleteNote,
  showNotes,
}) {
  const [open, setOpen] = useState(false);
  const [todelete, setTodelete] = useState('');

  const handleClickOpen = (note) => {
    setOpen(true);
    setTodelete(note);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const agreeHandle = () => {
    deleteNote(todelete);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: '20px',
      }}
    >
      <Grid container spacing={4}>
        <GridItems
          items={notes}
          setUpdateNote={setUpdateNote}
          setArchivedNote={setArchivedNote}
          handleDialogOpen={handleClickOpen}
          showNotes={showNotes}
        />
      </Grid>
      <DeleteDialog open={open} handleClose={handleClose} agreeHandle={agreeHandle} />
    </Box>
  );
}

export default NotesGrid;
