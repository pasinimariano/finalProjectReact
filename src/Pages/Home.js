import React from 'react';
import ControlledCarousel from '../Components/Home/Carousel';
import CardsHome from '../Components/Home/CardsHome';
import LatestArrivals from '../Components/Home/LatestArrivals';


function Home () {

    return (
        <div className= 'ContainerHome'>
           <ControlledCarousel />
           <CardsHome />
           <h2 className= 'text-center text-danger'> OUR LATEST ARRIVALS </h2>
           <LatestArrivals />
        </div>
    );
}

export default Home;