import React, { useState, useEffect } from 'react';
import {
    Col,
    ListGroup,
    Row,
    Image,
    Card,
    Button,
    Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
    listProductDetails,
    createProductReveiw,
} from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    const productReviewCreate = useSelector(state => state.productReviewCreate);
    const {
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);

    /**
     * after clicking on button  "add to cart" -> redirection to  /cart/productId?qty=qty
     */
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    return (
        <div>
            <Link className="btn btn-dark my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div>
                    <Row>
                        <Col md={6}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fluid
                            ></Image>
                        </Col>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating
                                        value={product.rating}
                                        text={`${product.numReviews} reviews`}
                                    ></Rating>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: {product.price} €
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
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
                                                <strong>{product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                <strong>
                                                    {product.countInStock > 0
                                                        ? 'In Stock'
                                                        : 'Out of Stock'}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control
                                                        as="select"
                                                        values={qty}
                                                        onChange={e =>
                                                            setQty(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {[
                                                            ...Array(
                                                                product.countInStock
                                                            ).keys(),
                                                        ].map(x => (
                                                            <option
                                                                key={x + 1}
                                                                value={x + 1}
                                                            >
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}
                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            className="btn-block"
                                            type="button"
                                            disabled={
                                                product.countInStock === 0
                                            }
                                        >
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h2>Reviews</h2>
                            {product.reviews.length === 0 && (
                                <Message>No Reviews</Message>
                            )}
                            <ListGroup variant="flush">
                                {product.reviews.map(review => (
                                    <ListGroup.Item key={review._id}>
                                        <strong>{review.name}</strong>
                                        <Rating value={review.rating} />
                                        <p>
                                            {review.createdAt.substring(0, 10)}
                                        </p>
                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
            )}
        </div>
    );
};

export default ProductScreen;
