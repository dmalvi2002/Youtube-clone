import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const cardContentStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

const cardMediaStyles = {
  borderRadius: "50%",
  height: "180px",
  width: "180px",
  mb: 2,
};

const typoStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const ChannelCard = ({ channelDetail, marginTop, bgcolor }) => {
  const boxStyles = {
    backgroundColor: bgcolor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: {
      xs: "356px",
      md: "320px"
    },
    height: "100%",
    margin: "auto",
    marginTop,
  };

  return (
    <Box sx={boxStyles}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={cardContentStyles}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={cardMediaStyles}
          />
          <Typography variant="h6" sx={typoStyles}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 16, ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subs ✌
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;