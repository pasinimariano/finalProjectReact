import React from 'react';
import { Card } from 'react-bootstrap';


function CardsProducts (props) {

    const {classNameCard,
           variant,
           src,
           classNameTitle,
           textTitle,
           classNameText,
           cardtext,
           footer} = props ;

    const CardStyle= { border : '4px solid black' }
    
    return (
            <Card className= {classNameCard || 'CardsHome'} style= {CardStyle}>
                <Card.Img variant= {variant || 'top'} src= {src} />
                <Card.Body>
                    <Card.Title className= {classNameTitle ||'text-center text-info'}> 
                        {textTitle} 
                    </Card.Title>
                    <Card.Text className={classNameText || 'text-justify'}>
                        {cardtext}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {footer}
                </Card.Footer>
            </Card>
    );
}

export default CardsProducts;