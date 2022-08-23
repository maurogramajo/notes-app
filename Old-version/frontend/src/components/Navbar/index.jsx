import React, { useState } from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
} from '@mui/material';
import SelectCategory from '../SelectCategory';

function Navbar({
  setCreateNote,
  showArchivedNotes,
  categories,
  categoryFilter,
  setCategoryFilter,
}) {
  const [{ titulo, toogleButtonText }, setTextos] = useState({ titulo: 'My Notes', toogleButtonText: 'Archived Notes' });
  const [showCreateButton, setShowCreateButton] = useState(true);

  const changeToArchived = () => {
    (showCreateButton) ?
      setTextos({ titulo: 'Archived Notes', toogleButtonText: 'Go back to unarchived notes' }) :
      setTextos({ titulo: 'My Notes', toogleButtonText: 'Archived Notes' });
    setShowCreateButton(!showCreateButton);
    showArchivedNotes();
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          {`${titulo}`}
        </Typography>
        <SelectCategory categories={categories} selectedCategory={categoryFilter} setSelectedCategory={setCategoryFilter} />
        {showCreateButton && <Button color="inherit" onClick={setCreateNote}>Create Note</Button>}
        <Button color="inherit" onClick={changeToArchived}>{`${toogleButtonText}`}</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
