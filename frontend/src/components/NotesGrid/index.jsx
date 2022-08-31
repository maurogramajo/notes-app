import React from 'react';
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import GridItems from './components/GridItem';

import {
  selectNotes,
} from '../../slices';

function NotesGrid() {
  const notes = useSelector(selectNotes);

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: '20px',
      }}
    >
      {notes.length ? (
        <Grid container spacing={4}>
          <GridItems notes={notes} />
        </Grid>
      ) : null }
    </Box>
  );
}

export default NotesGrid;
