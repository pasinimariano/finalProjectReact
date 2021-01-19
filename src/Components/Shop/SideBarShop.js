import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { FaBars }  from 'react-icons/fa';
import { SidebarData } from '../../Config/SideBarData';


function SideNavPage () {

    const [sidebar, setSidebar] = useState (false);

    const showSideBar = () => setSidebar (!sidebar);

    return (
        <>
            <div className= 'sideNavBar'>
                <Link to= '#' className= 'sideNavBar-menu'>
                    <FaBars onClick= {showSideBar} />
                </Link>
            </div>
            <Nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className= 'nav-menu-items'>
                    {SidebarData.map ((items, index) => {
                        return (
                            <li key= {index} className= {items.cName}>
                                <Link to= {items.path}>
                                    {items.icon}
                                    <span> {items.title} </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Nav>
        </>
    );
  }

export default SideNavPage;