import React, { useState } from 'react';
import { Card, Form, Container, Col } from 'react-bootstrap';
import firebase from '../../Config/Firebase';
import ButtonSpinner from '../../Components/ReusableComponents/ButtonSpinner';
import LinkButton from '../../Components/ReusableComponents/LinkButton';
import FormsGroup from '../../Components/ReusableComponents/FormsGroup';
import AlertCustom from '../../Components/ReusableComponents/AlertCustom';


function Create () {

    const [form, setForm] = useState ( { name : '', 
                                         lastname : '',
                                         email : '',
                                         password : ''});

    const [spinner, setSpinner] = useState (false);

    const [alert, setAlert] = useState ({variant: '',
                                         text: ''})

    const handleSubmit = (e) => {
        setSpinner (true);
        let email = form.email;
        let password = form.password;
        firebase.auth.createUserWithEmailAndPassword (email, password)

        .then ((data) => {
            console.log ('Usuario creado: ', data.user.uid)
            firebase.db.collection ('users').add ({
                name : form.name,
                lastname : form.lastname,
                email : form.email,
                userId : data.user.uid
                })
        })
        .then ((data) => {
                setSpinner (false)
                console.log (data)
                setAlert ({variant: 'success', text: 'WELCOME TO WHAM! '+ form.email})
        })
        .catch ((error) => {
                setSpinner (false)
                console.log ("Error: ", {error})
                setAlert ({variant: 'danger', text: 'OOPS! ' + error})
        })
        e.preventDefault();
    };

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm ({
            ...form,
            [name] : value
        })
    };

    const cardStyle= {  width : '70%', 
                        margin : 'auto', 
                        border: '4px solid black',
                        background : 'rgba(0, 0, 0, 0.548)'}

    return (
        <div className= 'ContainerRegister'>
            <Container className= 'd-block justify-content-center'>
                <Col md= '12'>
                    <Card style= {cardStyle}>
                        <Card.Body>
                            <Card.Title className= 'text-danger text-center p-4 font-weight-bold'> CREATE YOUR ACCOUNT </Card.Title>
                            <Form onSubmit= {handleSubmit}>
                                <FormsGroup label= 'NAME' type= 'text' placeholder= 'ENTER NAME' 
                                            name= 'name' value= {form.name} change= {handleChange} />
                                <FormsGroup label= 'LAST NAME' type= 'text' placeholder= 'ENTER LASTNAME' 
                                            name= 'lastname' value= {form.lastname} change= {handleChange} />
                                <FormsGroup label= 'EMAIL' type= 'email' placeholder= 'ENTER A VALID EMAIL' 
                                            name= 'email' value= {form.email} change= {handleChange}
                                            text= "We'll never share your email with anyone else." />
                                <FormsGroup label= 'PASSWORD' type= 'password' placeholder= 'SELECT PASSWORD' 
                                            name= 'password' value= {form.password} change= {handleChange} />
                                <div class= 'd-flex justify-content-center p-4'>
                                    <ButtonSpinner spinner= {spinner} text= 'CREATE ACCOUNT'/>
                                </div>
                            </Form>
                            <AlertCustom variant= {alert.variant} text= {alert.text} />
                        </Card.Body>
                    </Card>
                </Col>
                <div className= 'd-flex justify-content-center p-4'> 
                    <LinkButton to= '/signup' text= 'OR SIGN IN HERE!' />
                </div>
            </Container>
        </div>
    );
}

export default Create;