import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'


const SideBar = ({selectedCategory, setSelectedCategory}) => (

    <Stack direction='row' sx={{display:"inline-block", overflowY:'auto', height:{sx:'auto', md:'95%', flexDirection:{md:'column'}}}}>
       {categories.map(item =>
       
                <button className='categoryBtn' onClick={()=>{setSelectedCategory(item.name)}}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </button>)}
    </Stack>
    
)

function sampelFunction(item){
  console.log('clicked', item);
}


export default SideBar
