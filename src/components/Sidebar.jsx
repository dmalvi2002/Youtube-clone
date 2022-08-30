import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategory = "New";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}
    >
      {
        categories.map((category) => (
          <button key={category.id} className='category-btn' style={{
            backgroundColor: category.name === selectedCategory && "#3d56fc",
            color: category.name === selectedCategory ? "#fff" : "#000"
          }}>
            <span style={{
              color: category.name === selectedCategory ? "#fff" : "#3d56fc",
              marginRight: "15px"
            }}>
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))
      }
    </Stack>
  );
};

export default Sidebar;