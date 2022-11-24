import React, { Component } from "react";
//import { Alert } from 'bootstrap';
import { Form, Label, Input, FormGroup, Row, Col, Button } from "reactstrap";

export default class CreateProduct extends Component {
  render() {
    return (
      <div className="col-md-8 offset-md-2 mt-4">
        <div className="card card-body">
          <h4>Agrega Productos</h4>
          <p>Ingresa los datos del producto para añadirlo a encuentra promos</p>
      <Form>
        <FormGroup>
          <Label for="nombreProducto">Nombre del producto</Label>
          <Input />
        </FormGroup>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label for="precioActual">Precio Actual</Label>
              <Input />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="precioAnterior">Precio Anterior</Label>
              <Input />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="descuento">% Descuento</Label>
              <Input />
            </FormGroup>
          </Col>
        </Row>
        <Row>
        <Col sm={6}>
          <Label for="categoria">Categoría</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>Tecnología</option>
            <option>Mercado</option>
            <option>Vestuario</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
        <Col sm={6}>
        <Label for="tienda">Tienda</Label>
          <Input />
        </Col>
        </Row>
        <FormGroup>
          <Label for="exampleDate">Fecha de Final del Descuento</Label>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Foto</Label>
          <Input id="exampleFile" name="file" type="file" />
        </FormGroup>{" "}
        <Button>Publicar Producto</Button>
      </Form>
      </div>
      </div>
    );
  }
}
