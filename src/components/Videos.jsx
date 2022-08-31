import React from 'react';
import { Stack, Box } from '@mui/system';
import { VideoCard, ChannelCard } from './export';

const Videos = ({ videos, direction }) => {
  // Loading spinner
  if (!videos?.length) return 'Loading...';

  // Fetching videos from the videos prop
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {
        videos.map((video, index) => (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} bgcolor="#f5f5f5" />}
          </Box>
        ))
      }
    </Stack>
  );
};

export default Videos;