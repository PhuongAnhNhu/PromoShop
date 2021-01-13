import React, { Component } from "react";
import { Col, ListGroup, Row, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
export class ProductScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    //componentDidMount Methode wird ausgeführt nachdem die Komponenten in das DOM gerendert wurde.
    const id = this.props.match.params.id
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      this.setState({product: data});
    };
    fetchProduct();
  }


  render() {
    // const id = this.props.match.params.id;
    // const product = products.find((p) => p._id === id);
    return (
      <div>
        <Link className="btn btn-dark my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={this.state.product.image} alt={this.state.product.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{this.state.product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={this.state.product.rating}
                  text={`${this.state.product.numReviews} reviews`}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Price: {this.state.product.price} €</ListGroup.Item>
              <ListGroup.Item>
                Description: {this.state.product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>{this.state.product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>{this.state.product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Button className="btn-block" type="button" disabled={this.state.product.countInStock === 0}>
                        Add To Cart
                    </Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductScreen;
