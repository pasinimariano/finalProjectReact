import React, { useState, useEffect } from 'react';
import firebase from '../../../Config/Firebase';
import { Container } from 'react-bootstrap';
import CardsDetails from '../../../Components/ReusableComponents/CardDetails';
import LinkButton from '../../../Components/ReusableComponents/LinkButton';


function FigureDetails (props) {

    const [figure, setFigure] = useState ({});
    const buttonStyle = {marginLeft: '25px'}

    useEffect ( () => {
        firebase.db.doc('/Figures/'+props.match.params.id)
        .get()
        .then (doc => {
            setFigure (doc.data())
        })
    });

        return (
            <Container className= 'd-flex justify-content-center'>
                <CardsDetails h2Text= {figure.name} cardimg= {figure.img}
                              cardSku= {figure.sku} cardDescription= {figure.description}
                              cardPrice= {figure.price} cardFooter= {
                                    <LinkButton to= {'/shop'} text= 'RETURN SHOP' />}
                                cardFooter1= {
                                    <LinkButton to= {'/shop/comics'} style= {buttonStyle}  text= 'RETURN COMICS SHOP' />}
                />
            </Container>
        );
}

export default FigureDetails;