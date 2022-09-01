import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from '../utils/constants';

const typoStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center"
};

// Advance destructuring
const VideoCard = ({ video: {
  id: { videoId },
  snippet
} }) => {
  return (
    <Card sx={
      {
        width: { xs: "358px", sm: "358px", md: "320px" },
        borderRadius: 0,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)"
      }
    }>
      <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 201 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#979ff7", height: "106px" }} >

        {/*Loading content from video prop and demo content from constants.js*/}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#000">
            {snippet?.title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="rgba(0, 0, 0, 0.5)" sx={typoStyles} >
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 12, ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>

    </Card>
  );
};

export default VideoCard;