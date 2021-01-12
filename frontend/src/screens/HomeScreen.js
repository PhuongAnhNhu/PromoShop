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
          {products.map((item) => (
            <Col sm={12} md={6} key={item._id}>
              <Product product={item}/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default HomeScreen;
