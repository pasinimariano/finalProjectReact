import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import RoutesWeb from './Components/RoutesWeb';
import FooterPages from './Components/Footer';


function App() {
  
  return ( 
    <BrowserRouter>
      <NavBar />
      <RoutesWeb />
      <FooterPages />
    </BrowserRouter>  
  );
}

export default App;
