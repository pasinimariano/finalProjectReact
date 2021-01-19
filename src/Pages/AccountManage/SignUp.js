import React, { useState } from 'react';
import { Container, Col, Card, Form} from 'react-bootstrap';
import firebase from '../../Config/Firebase';
import ButtonSpinner from '../../Components/ReusableComponents/ButtonSpinner';
import LinkButton from '../../Components/ReusableComponents/LinkButton';
import FormsGroup from '../../Components/ReusableComponents/FormsGroup';
import AlertCustom from '../../Components/ReusableComponents/AlertCustom';


function SignUp () {

    const [form, setForm] = useState ( { email : '',
                                         password : ''});

    const [spinner, setSpinner] = useState (false);

    const [alert, setAlert] = useState ({variant: '',
                                         text: ''})

    const handleSubmit = (e) => {
        setSpinner (true);
        let email = form.email;
        let password = form.password;
        firebase.auth.signInWithEmailAndPassword (email, password)

        .then ((data) => {
            console.log ('Usuario logueado: ', data.user.uid)
            setSpinner (false)
            setAlert ({variant: 'success', text:' WELCOME BACK! '+ form.email})
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

    const cardStyle= { width : '70%', 
                       margin : 'auto', 
                       border: '4px solid black',
                       background : 'rgba(0, 0, 0, 0.548)' }

    return (
        <div className= 'ContainerSignIn'>
            <Container className= 'd-block justify-content-center'>
                <Col md= '12'>
                    <Card style= {cardStyle} >
                        <Card.Body>
                            <Card.Title className= 'text-danger text-center p-4 font-weight-bold'> 
                                LOGING IN 
                            </Card.Title>
                            <Form onSubmit= {handleSubmit}>
                                <FormsGroup label= 'EMAIL' type= 'email' placeholder= 'INSERT EMAIL' 
                                            name= 'email' value= {form.email} change= {handleChange} 
                                            text= "We'll never share your email with anyone else." />
                                <FormsGroup label= 'PASSWORD' type= 'password' placeholder= 'INSERT YOUR PASSWORD' 
                                            name= 'password' value= {form.password} change= {handleChange} />
                                <div class= 'd-flex justify-content-center p-4'>
                                    <ButtonSpinner spinner= {spinner}/>
                                </div>
                            </Form>
                            <AlertCustom variant= {alert.variant} text= {alert.text} />
                        </Card.Body>
                    </Card>
                </Col>
                <div className= 'd-flex justify-content-center p-4'> 
                    <LinkButton to= '/create' text= 'OR REGISTER NOW HERE!' />
                </div>
            </Container>
        </div>
    );
}

export default SignUp;