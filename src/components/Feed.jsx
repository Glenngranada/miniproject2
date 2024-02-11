import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {SideBar, Video} from './'
//Fetch rapid API
import { fetchFromAPI } from '../utils/FetchFromAPI'


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log('changed state');
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack className="main-container" sx={{flexDirection:{sx:'column', md:'row' }}}>
      <Box sx={{height:{sx:'auto', md:'92vh', borderRight: '1px solid #3d3d3d', px:{sx:'0', md:'2'}}}}>
        
        <SideBar selectedCategory={selectedCategory} setSelectedCategory ={setSelectedCategory}/> 

        <Typography className='copyright' variant='body2' sx={{md:1.5, color:'#fff'}}>
          Copyright 2024 Glenn
        </Typography>
      </Box>

      <Box  sx={{overFlowY:'auto', height:'90vh', flex: 2, px:{sx:'0', md:'2'}}}>
        <Typography className="feedViewBoxHead" variant='h4' fontWeight='bold' mb='2' sx={{color:'white'}}>
          <span style={{color:'#fc1503'}}>
            {selectedCategory} videos 
          </span>
        </Typography>
        <Video videos={videos}/>  
      </Box>

    </Stack>
  )
}

export default Feed

