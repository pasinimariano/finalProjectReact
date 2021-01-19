import React from 'react';
import { Col, Container, Row, ModalFooter  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgMap from './Img/imgMap.png';


function FooterPages () {

    const footerStyle= {
        position: 'relative',
        width: '100%',}

    return(
        <ModalFooter className= 'bg-dark text-info' style= {footerStyle} >
            <Container className= 'font-small pt-1 mt-1'>
                <Row>
                    <Col md= '4' className= 'Col-1Footer'>
                        <h5 className= 'title text-danger p-4'> FOOTER CONTENT </h5>
                        <p className= 'text-danger text-justify'>
                            Lorem ipsum dolor sit amet, coctetuer adipiscing,
                            sed di nonummy nibh euismod te.
                            Lorem ipsum dolor sit amet, coctetuer adipiscing,
                            sed di nonummy nibh euismod te.
                            Lorem ipsum dolor sit amet, coctetuer adipiscing,
                            sed di nonummy nibh euismod te.
                            Lorem ipsum dolor sit amet, coctetuer adipiscing,
                            sed di nonummy nibh euismod te.
                        </p>
                    </Col>
                    <Col md= '4'>
                        <h5 className= 'title text-danger p-4'> LINKS </h5>
                        <ul className= 'p-4'>
                            <li className= 'list-unstyled'>
                                <Link to= '#!' className= ' text-info'> Link 1</Link>  
                            </li>
                            <li className= 'list-unstyled'>
                                <Link to= '#!' className= ' text-info'> Link 2</Link>  
                            </li>
                            <li className= 'list-unstyled'>
                                <Link to= '#!' className= ' text-info'> Link 3</Link>  
                            </li>
                            <li className= 'list-unstyled'>
                                <Link to= '#!' className= ' text-info'> Link 4</Link>  
                            </li>
                        </ul>
                    </Col>
                    <Col md= '4' >
                        <ul className= 'p-4'>
                            <h6>contactemail@email.com</h6>
                            <h6>YOUR ADRESS HERE: Lorem ipsum dolor sit amet consectetur adipiscing elit</h6>
                            <img src= {imgMap} style= {{width: '95%'}}/>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className= 'footer-copyright text-center py-3 text-danger'>
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <Link to= '/' 
                                                                    className= 'text-info'> 
                                                                    WHAM! COMICS
                                                                 </Link>
                </Container>
            </div>
        </ModalFooter >
    );
}

export default FooterPages;