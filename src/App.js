import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';

import { NavBar, Home } from './components';





const App = () => 
        (
            
            <BrowserRouter>
                <Box>
                    <NavBar/>
                        <Routes>
                            <Route path="/" exact element = {<Home/>}/>
                        </Routes>
                </Box>
            </BrowserRouter>               
        )
   

export default App