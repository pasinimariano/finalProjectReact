import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import loveSpider from '../Img/loveSpider.png';
import venomLaugth from '../Img/venomLaugth.png';
import backgroundShop from '../Img/backgroundShop.jpg';


function WelcomeBox (props) {

    const {h2Text,
           h3Text} = props;

    const divStyle = {backgroundImage: `url(${backgroundShop})`,
                      border: '5px solid black'};

    const containerStyle = {display: 'flex', 
                            margin: 'auto',
                            padding: '35px',}

const imgStyle = {display: 'flex', 
                  margin: 'auto'}


    return(
        <div style= {divStyle}>
                <Container style= {containerStyle} >
                    <Row>
                        <Col xs= {3} md= {3}>
                                <img style= {imgStyle} 
                                     src= {loveSpider}
                                     className= 'col-sm-12 col-xl-8' />
                        </Col>
                        <Col xs= {6} md= {6} className= 'justify-content-center'>
                            <div className= 'ContainerTitleShop'>
                                <h2 className= 'text-center text-danger'> {h2Text || 'WELCOME TO WHAM! SHOP'} </h2>
                                <h3 className= 'text-center text-info'> {h3Text || 'BEST COMICS STORE'} </h3>
                            </div>
                        </Col>
                        <Col xs= {3} md= {3}>
                            <div className= 'ContainerShop'>  
                                <img style= {imgStyle} 
                                    src= {venomLaugth}
                                    className= 'col-xs-12 col-sm-9 col-xl-6' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default WelcomeBox;