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
const Mussoorie = () => {
    return (
        <div>



            <NavbarDestination />
            <CarouselContainer title="Auli" />
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

export default Mussoorie