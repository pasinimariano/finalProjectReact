import React  from 'react';
import SideBarShop from '../../Components/Shop/SideBarShop';
import CardsShop from '../../Components/Shop/CardsShop';
import WelcomeBox from '../../Components/ReusableComponents/WelcomeBoxShop';


function Shop () {

    return ( 
        <>
            <WelcomeBox />
            <div>
                <SideBarShop />
                <h6> SEE MORE PRODUCTS </h6>
            </div>
            <div>
                <CardsShop />
            </div>
        </>
    );
}
export default Shop;