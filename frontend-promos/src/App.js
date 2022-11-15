import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Tiendas from './components/Tiendas';
import CreateUser from './components/CreateUser';
import CreateProduct from './components/CreateProduct';
import PromoList from './components/PromoList';

function App() {
  return (
    <BrowserRouter> 
      <Navigation/>
        <Routes>      
          <Route path="/tiendas" component={Tiendas} />
          <Route path="/edit/:id" component={CreateUser}/>
          <Route path="/user" component={CreateUser}/>
          <Route path="/product" component={CreateProduct}/>
          <Route path="/listadopromos" component={PromoList}/>      
      </Routes>

      
      
    </BrowserRouter>
  );
}

export default App;
