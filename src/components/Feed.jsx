import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './export';
import { fetchFromApi } from '../utils/fetch';

const stackStyles = { flexDirection: { sx: "column", md: "row" } };
const box1styles = { height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d56fc", px: { sx: 0, md: 2 } };
const box2styles = { overflowY: "auto", height: "90vh", flex: 2 };

const Feed = () => {
  const [currentCategory, setCurrentCategory] = useState('New');
  console.log(currentCategory);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${currentCategory}`)
      .then(data => {
        return setVideos(data.items);
      });
  }, [currentCategory]);

  return (
    <Stack sx={stackStyles}>
      <Box sx={box1styles}>
        <Sidebar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        <Typography
          className='copyright'
          varient="subtitle2"
          sx={{ mt: 1.5, fontSize: "13px" }}>
          Copyright 2022 dmalvi2002
        </Typography>
      </Box>

      <Box p={2} sx={box2styles}>
        <Typography
          variant='h4'
          fontWeight="bold"
          mb={2}
          sx={{
            color: "rgb(30, 30, 30)"
          }}>
          {currentCategory} <span style={{ color: "#3d56fc" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;