import React, { useState, useEffect } from 'react';
import ProductsComics from '../../Components/Shop/ProductsComics';
import firebase from '../../Config/Firebase';
import { Container, Spinner } from 'react-bootstrap';
import WelcomeBox from '../../Components/ReusableComponents/WelcomeBoxShop';
import SideBarShop from '../../Components/Shop/SideBarShop';


function ShopComics () {
    
    const [products, setProducts] = useState ({
        comics : [],
        loading : true
    });

    const divStyle= { position: 'fixed', left : '50%'};
    const contStyle= {height: '600px'};

    useEffect ( () => {
        firebase.db.collection('Comics')
        .get()
        .then (querySnapShot => {
            console.log (querySnapShot.docs)
            setProducts (
                {comics : querySnapShot.docs,
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
                <WelcomeBox  h3Text= 'BEST COMICS HERE'/>
                <SideBarShop />
                {products.comics.map (
                    products =>
                        <div>
                            <ProductsComics items= {products} />
                        </div>
                )}
            </>
        )
    };
}

export default ShopComics;