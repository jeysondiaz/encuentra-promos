import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Encuentra Promos</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/listadopromos">Promociones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tiendas">Tiendas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/addproduct">Agregar Producto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/edit/:id">Registro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/edit/:id" >Login</a>
            </li>

          </ul>
             
        </div>
      </div>
    </nav>
  )
}
}
