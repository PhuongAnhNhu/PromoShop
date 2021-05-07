import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product.js';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import Paginate from '../components/Paginate.js';

const HomeScreen = ({ match }) => {
  //const params = useParams();
  const dispatch = useDispatch();

  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector(state => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <h1>Lastest products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map(item => (
            <Col sm={12} md={6} key={item._id}>
              <Product product={item} />
            </Col>
          ))}
        </Row>
      )}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
    </div>
  );
};

export default HomeScreen;
