import React from 'react'
import { Stack}  from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';


const NavBar = () => 
(  //No need to put return with curly braces..This is called direct RETURN:
  <Stack direction = "row" alignItems="center" p={2} sx={{positon:"sticky", justifyContent:"space-between" }}>
      <header id="header" class="fixed-top header-transparent">
        <div class="container d-flex align-items-center justify-content-between position-relative">

          <div class="logo">
            <h1 class="text-light"><a href="index.html"><span><img src={logo} alt="logo"/>SWEET HARVEST HUB</span></a></h1>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li class="dropdown"><a href="#"><span>Sugar Farming Guide</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="Cultivating.html">Cultivation Techniques</a></li>
                  <li><a href="Soil.html">Soil Management</a></li>
                  <li><a href="pest.html">Pest Control</a></li>
                  <li><a href="#">Harvesting Methods</a></li>
                  <li><a href="#">Sustainable Practices</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Market Insights</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="sugarprice.html">Sugar Prices</a></li>
                  <li><a href="markettrends.html">Market Trends</a></li>
                  <li><a href="#">Industry News</a></li>
                </ul>
              </li>

              <li><a class="nav-link scrollto" href="#testimonials">Success Stories</a></li>
              <li><a class="nav-link scrollto" href="#about">About Us</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
    </header>
  </Stack>
)

export default NavBar
