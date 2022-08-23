import React from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

function SelectCategory({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <>
      <InputLabel>Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((item) => (
          <MenuItem key={item._id} value={item}>{item.tag}</MenuItem>
        ))}
      </Select>
    </>
  );
}

export default SelectCategory;
