import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'


const SearchBar = () => {
  return (
    <Paper component = "form" sx={{borderRadius: "20", border:"1px solid", pl: 2,}}>
    <input type="text" name='search' id='search' placeholder='Search' value="" onClick={()=>{}}/>
    <IconButton type='submit' sx={{color:"red", p:"10px"}}><Search/></IconButton>
    </Paper>
  )
}

export default SearchBar
