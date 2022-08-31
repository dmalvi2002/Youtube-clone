import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Videos } from './export';
import { fetchFromApi } from '../utils/fetch';
import { useParams } from 'react-router-dom';

const stackStyles = { flexDirection: { sx: "column", md: "row" } };
const box1styles = { height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #5e5e5e", px: { sx: 0, md: 2 } };
const box2styles = { overflowY: "auto", height: "90vh", flex: 2 };

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then(data => {
        return setVideos(data.items);
      });
  }, [searchTerm]);

  return (
    <Box p={2} sx={box2styles}>
      <Typography
        variant='h4'
        fontWeight="bold"
        mb={2}
        sx={{
          color: "rgb(30, 30, 30)"
        }}>
        You searched "<span style={{ color: "#3d56fc" }}>{searchTerm}</span>"
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;