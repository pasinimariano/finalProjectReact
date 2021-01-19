import React, { useState, useEffect } from 'react';
import firebase from '../../../Config/Firebase';
import { Container } from 'react-bootstrap';
import CardsDetails from '../../../Components/ReusableComponents/CardDetails';
import LinkButton from '../../../Components/ReusableComponents/LinkButton';


function GameDetails (props) {

    const [game, setGame] = useState ({})
    const buttonStyle = {marginLeft: '25px'}

    useEffect ( () => {
        firebase.db.doc('/Games/'+props.match.params.id)
        .get()
        .then (doc => {
            setGame (doc.data())
        })
    })

        return (
            <Container className= 'd-flex justify-content-center'>
                <CardsDetails h2Text= {game.name} cardimg= {game.img}
                              cardSku= {game.sku} cardDescription= {game.description}
                              cardPrice= {game.price} cardFooter= {
                                    <LinkButton to= {'/shop'} text= 'RETURN SHOP' />}
                              cardFooter1= {
                                    <LinkButton to= {'/shop/comics'} style= {buttonStyle} text= 'RETURN COMICS SHOP' />}
                />
            </Container>
        );
}

export default GameDetails;