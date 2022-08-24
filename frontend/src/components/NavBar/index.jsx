import React, { useState } from 'react';

import {
  AppBar,
  Typography,
  Toolbar,
  Button,
} from '@mui/material';

import CreateUpdateDialog from '../CreateUpdateDialog';

function Navbar() {
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleCreate = () => {
    setOpenDialog(true);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          My Notes
        </Typography>
        <Button color="inherit" onClick={handleCreate}>Create Note</Button>
        <Button color="inherit">Archived Notes</Button>
      </Toolbar>
      <CreateUpdateDialog
        title="Create Note"
        aceptLabel="Create"
        openDialog={openDialog}
        closeDialog={closeDialog}
      />
    </AppBar>
  );
}

export default Navbar;
