import React from 'react'
import {useState, useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material';
import{ SideBar ,Videos}from '../Components';
import { fetchCaptions } from '../Utils/fetchFromApis';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videos, setVideos] = useState([]);



  useEffect(() => {
    fetchCaptions(``)
      .then((data) => {
        if (selectedCategory === 'All') {
          setVideos(data);
        } else {
          const filteredVideos = data.filter(video => video.category === selectedCategory);
          setVideos(filteredVideos);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedCategory]);



  return (
    <Stack sx={{flexDirection:{sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d',px: {sx: 0, md: 2} }}>
      <SideBar SelectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
     {/* <Typography className='copyright' variant="body2" sx={{color: '#fff',backgroundColor:"#000"}}>
      Copyright Pasindu"s Media
     </Typography> */}
      </Box>      
      <Box p={2} sx={{overflowY: 'auto',height: '90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}} >{selectedCategory}<span style={{color: "#F31503"}}> Videos</span></Typography>
        <Videos videos={[videos]}/>
       
      </Box>

     
    </Stack>
  )
}

export default Feed