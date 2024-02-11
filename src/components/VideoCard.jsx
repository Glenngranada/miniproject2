import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import {CheckCircleIcon} from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({video}) => {
  console.log(video, 'videovideo');
  return ( //Direct return method (no return)
  <Card sx={{width:{sx:"100%", sm:"358px", md:"320px"}}}> 
    <Link to={`/video/${video.id.videoId}`}>
      <CardMedia image={video.snippet?.thumbnails?.high?.url||demoThumbnailUrl} sx={{width:{sx:"100%", sm:"358px"}, height:'180px'}}>
      </CardMedia>
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e", height:"106"}}>
      <Link to={`/video/${video.id.videoId}`}>
          <Typography variant='subtitle1' fontWeight="bold" color="#fff">
              {video.snippet.demoThumbnailUrl}
          </Typography>
      </Link>
    </CardContent>
  </Card>
 )

}

   

export default VideoCard
