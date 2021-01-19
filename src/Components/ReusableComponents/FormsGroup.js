import React from 'react';
import { Form } from 'react-bootstrap';


function FormsGroup (props) {

    const {classNameLabel,
           classNameText} = props;

    return (
        <Form.Group controlId= {"formBasic"+props.name}>
            <Form.Label className= {classNameLabel || 'text-warning'}> 
                {props.label} 
            </Form.Label>
            <Form.Control   type= {props.type}
                            placeholder= {props.placeholder}
                            name= {props.name}
                            value = {props.value} 
                            onChange= {props.change}
                            ref= {props.ref} 
            />
            <Form.Text className= {classNameText || 'text-info' }>
                {props.text}
            </Form.Text>
        </Form.Group>  
    );
}

export default FormsGroup;