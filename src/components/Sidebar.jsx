import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const stackStyles = {
  overflowY: "auto",
  height: { sx: "auto", md: "95%" },
  flexDirection: { md: "column" }
};

const Sidebar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <Stack
      direction="row"
      sx={stackStyles}
    >
      {
        categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category.name)}
            className='category-btn'

            style={{
              backgroundColor: category.name === currentCategory && "#3d56fc",
              color: category.name === currentCategory ? "#fff" : "#000"
            }}>

            <span

              style={{
                color: category.name === currentCategory ? "#fff" : "#3d56fc",
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