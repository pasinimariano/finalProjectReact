import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CardsProducts from '../ReusableComponents/CardsProducts';
import LinkButton from '../ReusableComponents/LinkButton';
import batmanComic from '../Img/ComicsStore/batmanComic.png';
import venomComic from '../Img/ComicsStore/venomComic.png';
import inosuke from '../Img/FiguresStore/InosukeHashibira.png';
import halflife from '../Img/GamesStore/halflifeAlyx.png';


function LatestArrivals () {

    return (
        <CardDeck className= 'ContainerCardsHome'>
            <CardsProducts src= {batmanComic} textTitle= 'Batman 80th Anniversary Collection' cardtext= 'CREATED BY: Mike W. Barr' footer= {
                        <LinkButton to= '/shop/comics/DopQgefBqaJKq5MZZydF' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
            <CardsProducts src= {venomComic} textTitle= 'VENOM #150' cardtext= 'CREATED BY: Sandoval M. Costa' footer= {
                        <LinkButton to= '/shop/comics/Raekhjq1N2VuoKx1V4KX' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
            <CardsProducts src= {inosuke} textTitle= 'Banpresto Inosuke Demon Slayer Kimetsu No Yaiba Vol.8' cardtext= 'CREATED BY: Banpresto' footer= {
                        <LinkButton to= '/shop/figures/BIdCn4nYMJopvNH0G8JP' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
            <CardsProducts src= {halflife} textTitle= 'CHECK OUR COMICS' cardtext= 'CREATED BY: ValvE' footer= {
                        <LinkButton to= '/shop/games/bBplnERiPyGElTN4kZYK' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
      </CardDeck>
    );
}

export default LatestArrivals;