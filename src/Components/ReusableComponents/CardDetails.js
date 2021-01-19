import React from 'react';
import { Card, Col } from 'react-bootstrap';


function CardsDetails (props) {

    const {h2Text,
           cardimg,
           cardSku,
           cardDescription,
           cardPrice,
           cardFooter,
           cardFooter1} = props

    const cardStyle = { width: '85rem' }
    const h2Style = {margin: '40px'}
    const h4Style = {marginBottom: '25px'}

    return (
        <Card style= {cardStyle}>
            <h2 className= 'text-center text-danger' stlye= {h2Style}> {h2Text} </h2>
            <div className="row justify-content-start"> 
                <Col xl= {5} >
                    <Card.Img src= {cardimg} />
                </Col>
                <Col xl= {7}>
                    <Card.Body>
                        <Card.Text className= 'text-justify'>
                            <h4 className= 'text-center text-info' style= {h4Style}> PRODUCT DESCRIPTION </h4>
                            <h6 className= 'text-center'> ITEM SKU: - {cardSku} -</h6>
                            {cardDescription}
                        </Card.Text>
                        <Card.Text className= 'text-center text-info'>
                            PRICE: {cardPrice}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <div className= 'd-flex justify-content-center'> 
                            {cardFooter} {cardFooter1} 
                        </div>
                    </Card.Body>
                </Col>
            </div>
        </Card>

    );
}

export default CardsDetails;
