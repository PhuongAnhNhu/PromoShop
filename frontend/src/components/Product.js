import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

export class Product extends Component {
   
    render() { 
        let product = this.props.product; 
        return (
            <Card className="my-3 p-3 rouded">
                <a href={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant='top'></Card.Img>
                </a>
                <Card.Body>
                    <a href={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                        <Card.Text>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </Card.Text>
                        <Card.Text as='h3'>
                            {product.price} €
                        </Card.Text>
                    </a>
                </Card.Body>
            </Card>
        )
    }
}

export default Product
