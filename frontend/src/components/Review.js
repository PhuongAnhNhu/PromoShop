import React, { useState, useEffect } from 'react';
import { Col, ListGroup, Row, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createProductReview, listProductDetails } from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/ProductConstants';
import Message from './Message';
import Rating from './Rating';

const Review = ({ reviews, productId }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const productReviewCreate = useSelector(state => state.productReviewCreate);
  const { error: errorProductReview, success: successProductReview } = productReviewCreate;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      dispatch(listProductDetails(productId));
    }
  }, [successProductReview]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      }),
    );
  };
  return (
    <Row>
      <Col md={6}>
        <h2>Reviews</h2>
        {reviews.length === 0 && <Message>No Reviews</Message>}
        <ListGroup variant="flush">
          {reviews.map(review => (
            <ListGroup.Item key={review._id}>
              <strong>{review.name}</strong>
              <Rating value={review.rating} />
              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <h2>Write a Custimer Review</h2>
            {errorProductReview && <Message variant="danger">{errorProductReview}</Message>}
            {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control as="select" value={rating} onChange={e => setRating(e.target.value)}>
                    <option value="">Sellect...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    row="3"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button disabled={rating ? false : true} type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please
                <Link to="/login">sign in</Link> to write a review
              </Message>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Review;
