import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';


function LinkButton (props) {

    const {to, 
           variant, 
           classNameLink,
           classNamebutton, 
           style,
           text} = props;

    return (
        <Link to= {to} className= {classNameLink}>
            <div className= 'text-center'>
                <Button variant= {variant || 'warning'}
                        className= {classNamebutton || 'btn btn-default font-weight-bold'}
                        style= {style}>                       
                            {text}
                </Button> 
            </div>
        </Link>
    );
}

export default LinkButton;