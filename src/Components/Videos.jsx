import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';


const Videos = ({ videos, direction}) => {

 
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
         
      {videos[0].map((video, index) => (
        
        <Box key={index} sx={{ mb: 2, color: '#fdeded'}}>
      
        {<VideoCard video={video} />}
        {/* {<ChannelCard  channelDetail={video}/>} */}
      
        </Box>
      ))}

    </Stack>
  );
};

export default Videos;
