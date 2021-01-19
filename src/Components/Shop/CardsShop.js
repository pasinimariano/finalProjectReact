import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CardsProducts from '../ReusableComponents/CardsProducts';
import LinkButton from '../ReusableComponents/LinkButton';
import ajin from '../Img/ComicsStore/ajinComic.png';
import aot from '../Img/ComicsStore/aotComic.png';
import dimension from '../Img/ComicsStore/dimensionComic.png';
import armin from '../Img/FiguresStore/ArminArlert.png';
import hatake from '../Img/FiguresStore/HatakeKakashi.png';
import L from '../Img/FiguresStore/DeathNoteL.png';
import cyberpunk from '../Img/GamesStore/cyberPunk.png';
import ff7remake from '../Img/GamesStore/ff7remake.png';
import genshinimpact from '../Img/GamesStore/genshinimpact.png';


function CardsShop () {

    const ajinComic = "The chapter begins with a flashback of Eriko talking to Sato and Tanaka about her brother. She calls him scum due to his rational and overly cold hearted nature recalling to when he stopped hanging out with Kaito due to Kai's father being a criminal.  In the present, Sato manages to shoot the surgeon in the chest and Kei tries to run away. He stops when he realises the surgeon was still alive and tries to go back for him. Kei manages to summon his IBM to buy time for his escape and Sato counters with his own IBM. The two IBMs fight resulting in their heads colliding resulting with each other's memories flowing into each other's heads. Sato saw an image of Kaito when he and Kei were trying to escape, while Kei saw an image of Sato's father beating him.  Kei quickly drops the surgeon off the roof and jumps off the roof into the river below barely avoiding Sato's knife."
    const aotComic = "A century ago, the grotesque giants known as Titans appeared and consumed all but a few thousand humans. The survivors took refuge behind giant walls. Today, the threat of the Titans is a distant memory, and a boy named Eren yearns to explore the world beyond Wall Maria. But what began as a childish dream will become an all-too-real nightmare when the Titans return and humanity is once again on the brink of extinction …"
    const dimensionComic = "Years have passed since Ellie escaped the Syndicate's underground training facility. Now, her former comrades and closest friends view her a traitor whose life is forfeit. And as the nations of earth gather to discuss the calamitous end predicted by Dr. Shidou Yurizaki, what hope remains? The mysterious 'Ark Project' could be a chance for salvation, and all the necessary pieces—including Mira—are coming together…"
    const figures = "Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, accumsan libero platea aliquet molestie vulputate erat, cum tempor parturient mauris conubia cras habitant. Torquent pellentesque fusce est quis tincidunt rhoncus ligula felis sapien facilisi, et nam dis leo libero aliquet fames fermentum inceptos. Metus fames sociis duis nibh est condimentum blandit fringilla, lectus platea neque tortor non habitant penatibus taciti sollicitudin, pretium quis molestie cum elementum cursus cras."
    const cyber = "Cyberpunk 2077 is an open-world action-adventure from the creators of The Witcher 3: Wild Hunt, CD Projekt Red.  Set in Night City, a megalopolis obsessed with power, glamour and body modification, you play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.  Customise your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you."
    const ff7 = "FF7 Remake is an episodic action-roleplaying game developed and published by Square Enix. A remake of 1997 classic PlayStation title, FFVII:R tells the story of a mercenary Cloud Strife, as he and a group of eco-terrorists called AVALANCHE battle against Shinra, a corrupt megacorporation controlling the city of Midgar, and Sephiroth, a legendary soldier with ties to Cloud’s past.    The game features an overhauled gameplay system, similar to the one in the Dissidia series. The exploration and battle occur in real-time, and the player can switch between controlled characters or give them commands. Final Fantasy VII: Remake received highly positive initial reception, with critics strongly praising the gameplay and the visuals of the title  This content was copied from https://www.g2a.com/final-fantasy-vii-remake-psn-key-global-i10000193227001?adid=GA-AR_PB_DIGI_SN_BRAND_English-W-DSA_&id=37&gclid=CjwKCAiAi_D_BRApEiwASslbJ0_8Dfrtz0zysm9LZld0lyoISB4sVDWEDOTk7j7tfXTtEgPdbx6dJBoCOkwQAvD_BwE&gclsrc=aw.ds. It is protected by copyright, all rights reserved. If you want to use it, you are obligated to leave the link to the original source."
    const genshin = "Genshin Impact[a] is a free-to-play action role-playing game developed and published by miHoYo.[2][3] The game features a fantasy open-world environment and action-based battle system using elemental magic and character-switching, and uses gacha game monetization for players to obtain new characters, weapons, and other resources.[4][5] The game is online-only and features a limited multiplayer mode allowing up to four players to play together.[6] It was released for Microsoft Windows, PlayStation 4, Android and iOS on September 28, 2020.[7] Genshin Impact is also planned to release on Nintendo Switch and PlayStation 5; playability of the PlayStation 4 edition on PlayStation 5 was added on November 11, 2020.[8][9]  Genshin Impact takes place in the fantasy world of Teyvat, which is home to seven distinct nations, each of which is tied to an element and ruled by a god associated with it. The story follows a twin, referred to as the Traveler, who has traveled across many worlds with their twin but has become separated from them by an unknown god in Teyvat. The Traveler travels across Teyvat in search of the lost sibling with their companion Paimon and becomes involved in the affairs of the other nations, gods, and the world.  The game received a generally positive reception, with critics praising the combat and open-world freedom, while some criticism was raised at its endgame. The game grossed over $393 million on mobile devices within two months."

    return (
        <>
            <CardDeck className= 'ContainerCardsHome'>
                <CardsProducts src= {aot} textTitle= 'Attack On Titan' cardtext= {aotComic} footer= {
                        <LinkButton to= '/shop/comics/Nm5802NkGhW5YIJUeUX9' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
                <CardsProducts src= {ajin} textTitle= 'Ajin: Demi-Human' cardtext= {ajinComic} footer= {
                        <LinkButton to= '/shop/comics/arzwdbNqjiVNQ1Y1vXk4' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
                <CardsProducts src= {dimension} textTitle= 'Dimension W Vol.15' cardtext= {dimensionComic} footer= {
                        <LinkButton to= '/shop/comics/LyJUTpuBafK8zVSoqQ3G' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
            </CardDeck>
            <CardDeck className= 'ContainerCardsHome'>
                <CardsProducts src= {armin} textTitle= 'Nendoroid 435 Armin Arlert Attack On Titan Shingeki Kyojin' cardtext= {figures} footer= {
                        <LinkButton to= '/shop/figures/C39FQnq2wwWbIQrytUH3' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
                <CardsProducts src= {hatake} textTitle= 'Nendoroid Naruto Hatake Kakashi 724 Gsc Gastovic Good Smile' cardtext= {figures} footer= {
                        <LinkButton to= '/shop/figures/HTXOe0k2qHa6Tv5tzHrp' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
                <CardsProducts src= {L} textTitle= 'Nendoroid 1200 Death Note L 2.0 Gastovic Anime Japon Good Sm' cardtext= {figures} footer= {
                        <LinkButton to= '/shop/figures/1uf1APX9HdXt4plGe7zy' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
            </CardDeck>
            <CardDeck className= 'ContainerCardsHome'>
                <CardsProducts src= {cyberpunk} textTitle= 'Cyberpunk 2077' cardtext= {cyber} footer= {
                        <LinkButton to= '/shop/games/MW8ZLqOzA2goN4oXPf5Q' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
                <CardsProducts src= {ff7remake} textTitle= 'Final Fantasy VII Remake' cardtext= {ff7} footer= {
                        <LinkButton to= '/shop/games/HhwCIJNlMBBoyuIgYNi5' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
                <CardsProducts src= {genshinimpact} textTitle= 'NGenshin Impact' cardtext= {genshin} footer= {
                        <LinkButton to= '/shop/games/kOX4t1aktP3ysb6ndOni' 
                                    classNameLink= 'text-dark font-weight-bold' 
                                    text= 'MORE INFO HERE!'/> } />
            </CardDeck>
      </>
    );
}

export default CardsShop;