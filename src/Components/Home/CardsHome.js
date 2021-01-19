import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CardsProducts from '../ReusableComponents/CardsProducts';
import LinkButton from '../ReusableComponents/LinkButton';
import comicStore from '../Img/comicStore.png';
import actionFigures from '../Img/actionFigures.png';
import gamesConsole from '../Img/gamesConsole.png';


function CardsHome () {

    const cardsText = "Lorem ipsum dolor sit amet, coctetuer adipiscing,sed di nonummy nibh euismod te."

    return (
        <CardDeck className= 'ContainerCardsHome'>
            <CardsProducts src= {comicStore} textTitle= 'CHECK OUR COMICS' cardtext= {cardsText} footer= {
                        <LinkButton to= '/shop/comics' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'CHECK OUR COMICS!'/> } />
            <CardsProducts src= {actionFigures} textTitle= 'COLLECTION OF ACTION FIGURES' cardtext= {cardsText} footer= {
                        <LinkButton to= '/shop/figures' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'CHECK OUR FIGURES!'/> } />
            <CardsProducts src= {gamesConsole} textTitle= 'LATEST GAMES' cardtext= {cardsText} footer= {
                        <LinkButton to= '/shop/games' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'CHECK OUR GAMES!'/> } />
        </CardDeck>
    );
}

export default CardsHome;