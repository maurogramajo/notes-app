import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import GridItems from './components/GridItem';

import {
  selectNotes,
  getNotes,
} from '../../slices';

function NotesGrid() {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const loading = useSelector((state) => state.notes.loading);

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  console.info(notes, loading);
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: '20px',
      }}
    >
      { !loading && notes.length ? (
        <Grid container spacing={4}>
          <GridItems notes={notes} />
        </Grid>
      ) : null }
    </Box>
  );
}

export default NotesGrid;
