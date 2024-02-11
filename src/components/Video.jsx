import React from 'react'
import { Stack, Box, Grid } from '@mui/material'
import VideoCard from './VideoCard'
// import v
const Video = ({videos}) =>{
  return (
    <Grid container spacing={2} minHeight={160}>
      {videos.map((item, index) =>{
          return <Grid xs display="flex" justifyContent="center" alignItems="center">
            {item.id.videoId && <VideoCard video={item}/>}
          </Grid>
          // return <Box key={index}>
          //   {item.id.videoId && <VideoCard video={item}/>}
          // </Box>  
      })}
    </Grid>
    // <Stack direction='row' flex='wrap' justifyContent='start' alignItems='start'>
    //   {videos.map((item, index) =>{
    //       return <Box key={index}>
    //         {item.id.videoId && <VideoCard video={item}/>}
    //       </Box>  
    //   })}
      
    // </Stack>
  )
}


export default Video
