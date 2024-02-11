import React, { useState } from 'react'
import { Stack, Container, Typography } from '@mui/material'


const Home = () => {
  const [ttest, setTtest] = useState('Home');


  return (
    <Stack className="main-container" sx={{flexDirection:{sx:'column', md:'row' }}}>  
      <Container  sx={{overFlowY:'auto', height:'90vh', flex: 2, px:{sx:'0', md:'2'}}}>
        <Typography className="feedViewBoxHead" variant='h4' fontWeight='bold' mb='2' sx={{color:'white'}}>
          {ttest}
        </Typography>
      </Container>

    </Stack>
  )
}

export default Home