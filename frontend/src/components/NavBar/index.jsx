import React from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../slices';
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
} from '@mui/material';

function Navbar() {

  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          My Notes
        </Typography>
        <Button color="inherit" onClick={() => dispatch(createNote())}>Create Note</Button>
        <Button color="inherit">Archived Notes</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
