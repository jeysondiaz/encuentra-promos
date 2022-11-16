import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Tiendas from './components/Tiendas';
import CreateUser from './components/CreateUser';
import CreateProduct from './components/CreateProduct';
import PromoList from './components/PromoList';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter> 
      <Navigation/>
        <Routes>      
          <Route exact path="/" element={<Home/>}/>
          <Route path="/tiendas" element={<Tiendas/>} />
          <Route path="/edit/:id" element={<CreateUser/>}/>
          <Route path="/user" element={<CreateUser/>}/>
          <Route path="/addproduct" element={<CreateProduct/>}/>
          <Route path="/listadopromos" element={<PromoList/>}/>      
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
