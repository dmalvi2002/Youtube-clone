import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './export';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #5e5e5e", px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className='copyright' varient="body2" sx={{ mt: 1.5, fontSize: "13px" }}>
          Copyright 2022 dmalvi2002
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: "rgb(30, 30, 30)"
        }}>
          New <span style={{ color: "#3d56fc" }}>videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;