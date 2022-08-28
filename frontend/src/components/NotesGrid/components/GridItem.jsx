import React from 'react';
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
  updateNote,
  archiveNote,
} from '../../../slices';

function GridItem({ notes }) {
  const dispatch = useDispatch();
  return (
    <>
      {notes.map((note) => (
        <Grid item key={note._id}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h5">{note.title}</Typography>
              <Typography sx={{ mt: 1.5, mb: 1.5, fontSize: 16 }} variant="body2">{note.content}</Typography>
              <Typography variant="body3" color="text.secondary">
                {note.edited ? `Last edited: ${note.edited.substring(0, 10)}` : `Created: ${note.added.substring(0, 10)}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => dispatch(archiveNote())}>
                <ArchiveOutlined />
              </Button>
              <Button onClick={() => dispatch(updateNote())}><EditOutlined /></Button>
              <Button onClick={() => dispatch(deleteNote())}><DeleteForeverOutlined /></Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>

  );
}

export default GridItem;
