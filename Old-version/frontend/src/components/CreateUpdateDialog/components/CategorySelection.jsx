import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
} from '@mui/material';

import SelectCategory from '../../SelectCategory';

const URLCATEGORIES = 'http://localhost:3001/categories';

function CategorySelection({
  categories,
  refreshCategories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [newCategory, setNewCategory] = useState('');

  const handleCreateCategory = () => {
    fetch(URLCATEGORIES, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tag: newCategory }),
    }).then((res) => res.json()).then(() => refreshCategories());
    setSelectedCategory('');
    setNewCategory('');
  };

  return (
    <>
      <SelectCategory categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Box
        sx={{
          display: 'inline-flex',
        }}
      >
        <TextField
          margin="dense"
          id="newCategory"
          label="New Category"
          type="text"
          variant="outlined"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Button onClick={handleCreateCategory}>Agregar</Button>
      </Box>
    </>
  );
}

export default CategorySelection;
