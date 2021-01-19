import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop/Shop';
import Contact from '../Pages/Contact';
import SignUp from '../Pages/AccountManage/SignUp';
import Create from '../Pages/AccountManage/CreateAcc';
import NotFound from '../Pages/NotFound';
import ShopComics from '../Pages/Shop/ShopComics';
import ComicDetails from '../Pages/Shop/ProductsDetails/ComicDetails';
import ShopFigures from '../Pages/Shop/ShopFigures';
import FigureDetails from '../Pages/Shop/ProductsDetails/FigureDetails';
import ShopGames from '../Pages/Shop/ShopGames';
import GamesDetails from '../Pages/Shop/ProductsDetails/GamesDetails';


function RoutesWeb () {

    return (
        <>  
            <Switch>
                <Route path= '/' exact component= {Home} />
                <Route path= '/shop' exact component= {Shop} />
                <Route path= '/shop/comics' exact component= {ShopComics} />
                <Route path= '/shop/comics/:id' exact component= {ComicDetails} />
                <Route path= '/shop/figures' exact component= {ShopFigures} />
                <Route path= '/shop/figures/:id' exact component= {FigureDetails} />
                <Route path= '/shop/games' exact component= {ShopGames} />
                <Route path= '/shop/games/:id' exact component= {GamesDetails} />
                <Route path= '/contact' exact component= {Contact} />
                <Route path= '/signup' exact component= {SignUp} />
                <Route path= '/create' exact component= {Create} />
                <Route component= {NotFound} />
            </Switch>
        </>
    );
}

export default RoutesWeb;