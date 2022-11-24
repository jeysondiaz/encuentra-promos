import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Button } from "reactstrap";


export default class Login extends Component {
  render() {
    return (
        <div className="col-md-4 offset-md-4 mt-5">
        <div className="card card-body">
          <h4>Login</h4>
          <p>Ingresa o crea tu usuario para agregar promociones</p>
          <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" />
                </FormGroup>
                 <FormGroup>
                  <Label for="password">Contraseña</Label>
                  <Input type="text"  name="password" />
                </FormGroup>
   <FormGroup>
              ¿Deseas Registrarte? <a href="/login">Click aquí</a>
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </div>
      </div>
    );
  }
}