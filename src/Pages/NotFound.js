import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import oops from '../Components/Img/oops.png'
import { Container, Row, Col } from 'react-bootstrap';


function NotFound () {

    return(
        <div className= 'ContainerNotFound'>
            <Container className= 'ContainerNotFound-Row'>
                <Row>
                    <Col>
                        <h2 className= 'font-weight-bold text-center mt-3 mb-5 text-danger'> 
                            Error 404 - Not Found 
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img style= {{display: 'flex', 
                                      margin: 'auto'}} 
                             src= {oops} 
                             className= 'col-xs-1 col-xl-5 mb-4'/>
                    </Col>
                </Row>
                <Row>
                    <Col xs= {1} md= {4}></Col>
                    <Col md={7}>
                        <Link to= {'/'} className= "text-dark font-weight-bold"> 
                            <Button className= "col-md-10 col-xl-6 bg-warning text-dark"> 
                                Go Home 
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NotFound;