import React, { Component } from "react";
//import { Alert } from 'bootstrap';
import { Form, Label, Input, FormGroup, Row, Col, Button } from "reactstrap";

export default class CreateProduct extends Component {
  render() {
    return (
      <div className="col-md-6 offset-md-2 mt-5">
        <div className="card card-body">
          <h4>Registro</h4>
          <p>Ingresa o crea tu usuario para agregar promociones</p>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="nombreUsuario">Nombre</Label>
                  <Input type="text" name="name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="nickname">Nickname</Label>
                  <Input type="text" nickname="nickname" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">email</Label>
                  <Input
                    required
                    //value={email}
                    name="email"
                    placeholder="Correo"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Contraseña</Label>
                  <Input
                    required
                    //value={user.password}
                    name="password"
                    placeholder="Contraseña..."
                    //type={showPass ? "text" : "password"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              ¿Deseas loguearte? <a href="/login">Click aquí</a>
            </FormGroup>
            <Button>Registrarse</Button>
          </Form>
        </div>
      </div>
    );
  }
}
