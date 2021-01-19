import React, { useState, useEffect } from 'react';
import firebase from '../../../Config/Firebase';
import { Container } from 'react-bootstrap';
import CardsDetails from '../../../Components/ReusableComponents/CardDetails';
import LinkButton from '../../../Components/ReusableComponents/LinkButton';


function ComicDetails (props) {

    const [comic, setComic] = useState ({})
    const buttonStyle = {marginLeft: '25px'}

    useEffect ( () => {
        firebase.db.doc('/Comics/'+props.match.params.id)
        .get()
        .then (doc => {
            setComic (doc.data())
        })
    })

        return (
            <Container className= 'd-flex justify-content-center'>
                <CardsDetails h2Text= {comic.name} cardimg= {comic.img}
                              cardSku= {comic.sku} cardDescription= {comic.description}
                              cardPrice= {comic.price} cardFooter= {
                                    <LinkButton to= {'/shop'} text= 'RETURN SHOP' />}
                              cardFooter1= {
                                    <LinkButton to= {'/shop/comics'} style= {buttonStyle} text= 'RETURN COMICS SHOP' />}
                />
            </Container>
        );
}

export default ComicDetails;