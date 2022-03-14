import React from 'react'
import Navbar from '../navbar'
const NavbarDestination = () => {
  return (
    <div>
       <carousel-navbar>
	   <input id="carousel-navbar-toggle" type="checkbox"/>
	<div class="logo">Travel Hills</div>
	<ul class="links">
		<li><a href="#home">About</a></li>
		<li><a href="#about">Attraction</a></li>
		<li><a href="#about">Recreation</a></li>
		<li><a href="#about">Featured</a></li>
		<li><a href="#work">Locate</a></li>
		<li><a href="#projects">Nearby</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
	<label for="carousel-navbar	-toggle" class="icon-burger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</label>
</carousel-navbar>
    </div>
  )
}

export default NavbarDestination

