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
import background from "./featured/Pithoragarh.jpg";
const Pithoragarh = () => {
    return (
        <div>



            <NavbarDestination />
            <CarouselContainer background={background} title="Pithoragarh" />
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

export default Pithoragarh
