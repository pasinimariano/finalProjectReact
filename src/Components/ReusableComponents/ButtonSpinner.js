import React from 'react';
import { Button, Spinner } from 'react-bootstrap';


function ButtonSpinner (props) {

    const {variant, 
           type, 
           className, 
           spinner, 
           text,
           ref} = props;

    return (
        <Button variant= {variant || 'warning'} 
                type= {type || 'submit'} 
                ref = {ref}
                className= {className || 'btn btn-default font-weight-bold'}
                disabled= {spinner}
        >
            {
                spinner &&
                <Spinner animation= 'border' variant= 'secondary' size= 'sm' />
            }
            {text || "LOG IN"}
        </Button>
    );
}

export default ButtonSpinner;