import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; ProShop</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
