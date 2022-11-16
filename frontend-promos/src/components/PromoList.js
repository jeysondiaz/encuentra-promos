import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardLink,
} from "reactstrap";

export default class PromoList extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Card" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Titulo Producto</CardTitle>
            <CardText>Tienda Donde se Encuentra</CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Oferta: $900.000</ListGroupItem>
            <ListGroupItem>Descuento 10%</ListGroupItem>
            <ListGroupItem>Precio anterior $1'000.000</ListGroupItem>
          </ListGroup>
          <CardBody>
            <CardLink href="#">Link producto</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}
