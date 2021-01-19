import { Link } from 'react-router-dom';
import React from 'react';
import { Card, Button} from 'react-bootstrap';


function ProductsFigures (props) {

    const imgWidth = {width : '85%'}

    const cardStyle =  { width : '80%', 
                         margin : 'auto', 
                         border: '4px solid black',
                         background : 'rgba(0, 0, 0, 0.548)'}

    const  image  = props.items.data().img;
    const productId = props.items.id;
    
    return(
        <div className= 'ContainerProducts'>
            <Card style= {cardStyle}>
                <div className= 'd-flex justify-content-center'>
                    <Card.Img style= {imgWidth} src= {image} />
                </div>
                <Card.Body>
                    <Card.Title className= 'text-center text-danger'> 
                        {props.items.data().name} 
                    </Card.Title>
                    <Card.Text className= 'text-center'>
                        CREATED BY: {props.items.data().createby}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className= 'd-flex justify-content-center'>
                        <Link to= {'/shop/figures/' + productId}> 
                            <Button variant="warning"> MORE INFO </Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ProductsFigures;