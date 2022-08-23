import React from 'react';
import { useDispatch } from 'react-redux';
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
        <Button color="inherit" onClick={dispatch({type: 'CREATE_NOTE'})}>Create Note</Button>
        <Button color="inherit">Archived Notes</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
