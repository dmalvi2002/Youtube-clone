import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from "./export";
import { fetchFromApi } from '../utils/fetch';
import LoadingSpinner from './UI/LoadingSpinner';

const typoStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [relatedVideos, setrelatedVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setvideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}`)
      .then(data => setrelatedVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <LoadingSpinner />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }

  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography p={2} variant="h5" fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle!', md: 'h6' }} sx={typoStyles}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='subtitle2' sx={{ opacity: 0.5 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.5 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" sx={{ px: { sm: '0', md: "10px" } }}>
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>

    </Box>
  );
};

export default VideoDetail;