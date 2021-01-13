import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.js";
import axios from "axios";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    //componentDidMount Methode wird ausgeführt nachdem die Komponenten in das DOM gerendert wurde.
    const fetchProducts = async () => {
      const { data } = await axios.get("api/products");
      this.setState({products: data});
    };
    fetchProducts();
  }
  render() {
    return (
      <div>
        <h1>Lastest products</h1>
        <Row>
          {this.state.products.map((item) => (
            <Col sm={12} md={6} key={item._id}>
              <Product product={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default HomeScreen;
