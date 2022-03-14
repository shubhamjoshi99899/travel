import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Hotel from '../../components/Hotel'
import background from "./featured/Ranikhet.jpg";
const Ranikhet = () => {
    return (
        <div>



            <NavbarDestination />
            <CarouselContainer background={background} title="Ranikhet" />
            <About />
            <Hotel />
            <Slick />
            <Recreation />
            <Details />
            <Nearby />
            <Footer />

        </div>
    )
}

export default Ranikhet