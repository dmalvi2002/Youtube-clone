import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from "./export";
import { fetchFromApi } from '../utils/fetch';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then(data => {
        return setChannelDetail(data?.items[0]);
      });

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => {
        return setVideos(data?.items);
      });
  }, [id]);


  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" bgcolor="transparent" />
      </Box>
      <Box display="flex" sx={{ p: { sm: '0px', lg: 2 } }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;