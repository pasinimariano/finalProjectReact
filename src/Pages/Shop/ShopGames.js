import React, { useState, useEffect } from 'react';
import ProductsGames from '../../Components/Shop/ProductsGames';
import firebase from '../../Config/Firebase';
import { Container, Spinner } from 'react-bootstrap';
import WelcomeBox from '../../Components/ReusableComponents/WelcomeBoxShop';
import SideBarShop from '../../Components/Shop/SideBarShop';


function ShopComics () {
    
    const [products, setProducts] = useState ({
        games : [],
        loading : true
    });

    const divStyle= { position: 'fixed', left : '50%'};
    const contStyle= {height: '600px'};

    useEffect ( () => {
        firebase.db.collection('Games')
        .get()
        .then (querySnapShot => {
            console.log (querySnapShot.docs)
            setProducts (
                {games : querySnapShot.docs,
                 loading : false}
                )
            })
        .catch ((error) => {
            console.log(error)
        })
        }, []
    );

    if (products.loading) {
        return (
            <Container style= {contStyle}>
                <div style= {divStyle}>
                    <Spinner animation= 'grow text-danger' />
                    <Spinner animation= 'grow text-warning' />
                    <Spinner animation= 'grow text-info' />
                </div>
            </Container>
        )
    }
    else {
        return (
            <>
                <WelcomeBox h3Text= 'BEST GAMES HERE'/>
                <SideBarShop />
                {products.games.map (
                    products =>
                        <div>
                            <ProductsGames items= {products} />
                        </div>
                )}
            </>
        )
    };
}

export default ShopComics;