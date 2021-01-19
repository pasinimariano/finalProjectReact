import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../Img/carousel1.jpg';
import carousel2 from '../Img/carousel2.png';


function ControlledCarousel () {

    const [index, setIndex] = useState (0);

    const handleSelect = (selectedIndex) => {
        setIndex (selectedIndex);
    };

    return (
        <Carousel activeIndex= {index} onSelect= {handleSelect}>
            <Carousel.Item>
                <div style= {{minHeight : '250px'}, 
                             {maxHeight : '500px'}}>
                    <img 
                        className= 'd-block w-100'
                        src= {carousel1}
                        alt= 'Welcome'
                    /> 
                    <Carousel.Caption className= 'containerCarousel'>
                        <div className= 'contentWrapper'>  
                            <div className= 'textWrapper'>
                                <h3 className='text-warning'> 20% OFF EVERYTHING </h3>
                                <h4> IN-STORE </h4> 
                                <h4 className='text-warning'> IN DECEMBER! </h4>
                                <h5> UNTIL JANUARY 25TH </h5>
                            </div>
                        </div>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style= {{minHeight : '250px'}, 
                             {maxHeight : '500px'}}>
                    <img 
                        className= 'd-block w-100'
                        src= {carousel2}
                        alt= 'Welcome'
                    />
                    <Carousel.Caption className= 'containerCarousel'>
                        <div className= 'contentWrapper'> 
                            <div className= 'textWrapper'>
                                <h3> SECOND CARROUSELL </h3>
                                <p> 
                                    Lorem ipsum dolor sit amet, coctetuer adipiscing
                                </p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;