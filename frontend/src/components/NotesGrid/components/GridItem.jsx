import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

import {
  DeleteForeverOutlined,
  EditOutlined,
  ArchiveOutlined,
  // UnarchiveOutlined,
} from '@mui/icons-material';

import { useDispatch } from 'react-redux';

import {
  deleteNote,
  archiveNote,
} from '../../../slices';
import CreateUpdateDialog from '../../CreateUpdateDialog';

function GridItem({ notes }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedNote, setSelectedNote] = useState(false);
  const dispatch = useDispatch();

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdate = (note) => {
    setSelectedNote(note);
    setOpenDialog(true);
  };

  return (
    <>
      {notes.map((note) => (
        <Grid item key={note._id}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h5">{note.title}</Typography>
              <Typography sx={{ mt: 1.5, mb: 1.5, fontSize: 16 }} variant="body2">{note.content}</Typography>
              <Typography variant="body3" color="text.secondary">
                {note.updated ? `Last edited: ${note.updated.substring(0, 10)}` : `Created: ${note.added.substring(0, 10)}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => dispatch(archiveNote())}>
                <ArchiveOutlined />
              </Button>
              <Button onClick={() => handleUpdate(note)}><EditOutlined /></Button>
              <Button onClick={() => dispatch(deleteNote())}><DeleteForeverOutlined /></Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <CreateUpdateDialog
        title="Update Note"
        aceptLabel="Update"
        openDialog={openDialog}
        closeDialog={closeDialog}
        inputContent={selectedNote}
      />
    </>

  );
}

export default GridItem;
