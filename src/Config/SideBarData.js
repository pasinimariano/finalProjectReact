import React from 'react';
import { ImBooks } from 'react-icons/im';
import { GiHoodedFigure } from 'react-icons/gi';
import { GrGamepad } from 'react-icons/gr';
import { AiFillHome } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';


export const SidebarData = [
    {
        title : 'HOME',
        path : '/',
        icon : <AiFillHome />,
        cName : 'nav-text'
    },
    {
        title : 'COMICS',
        path : '/shop/comics',
        icon : <ImBooks />,
        cName : 'nav-text'
    },
    {
        title : 'FIGURES',
        path : '/shop/figures',
        icon : <GiHoodedFigure />,
        cName : 'nav-text'
    },
    {
        title : 'GAMES',
        path : '/shop/games',
        icon : <GrGamepad />,
        cName : 'nav-text'
    },
    {
        title : 'MY CART',
        path : '/cart',
        icon : <RiShoppingCartLine />,
        cName : 'nav-text'
    }
]