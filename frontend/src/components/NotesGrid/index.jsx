import React from 'react';
import { Box, Grid } from '@mui/material';
import GridItems from './components/GridItem';

function NotesGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: '20px',
      }}
    >
      <Grid container spacing={4}>
        <GridItems />
      </Grid>
    </Box>
  );
}

export default NotesGrid;
