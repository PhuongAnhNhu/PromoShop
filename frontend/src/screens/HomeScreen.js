import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Product from '../components/Product.js'
import products from "../products";

export class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1>Lastest products</h1>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6}>
              <Product product={product}/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default HomeScreen;
