import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../store/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_CREATE_REVIEW_RESET } from "../store/constants/productConstants";
import { storeSizes } from "../utils/storeSizes";
import Meta from "../components/Meta";
import { toastifySuccess } from "../utils/toastify";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { error: errorProductReview, success: successProductReview } =
    useSelector((state) => state.productReviewCreate);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (successProductReview) {
      toastifySuccess("Review Added", "top-center");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
  }, [dispatch, successProductReview, size]);

  const addToCartHandler = () => {
    toastifySuccess("Added to cart!", "top-center");
    navigate(`/cart/${id}?qty=${qty}&size=${size}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={`B-Ballers - ${product.name}`} />
          <Row>
            <Col md={6} lg={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={12} lg={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>Price: ${product.price}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>Description: {product.description}</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} lg={3} className="mt-sm-3">
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col md={7}>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (num) => (
                                <option key={num + 1} value={num + 1}>
                                  {num + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Row>
                      <Col>Size</Col>
                      <Col md={7}>
                        <Form.Control
                          as="select"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        >
                          <option value=""></option>
                          {storeSizes.map((storeSize) => (
                            <option
                              key={storeSize}
                              value={storeSize}
                              disabled={product.sizes?.indexOf(storeSize) < 0}
                            >
                              {storeSize}
                              {product.sizes?.indexOf(storeSize) < 0 &&
                                " -  Not In Stock"}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={!product.countInStock || !size}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="my-1" controlId="rating">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="my-1" controlId="comment">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button className="my-3" type="submit" variant="primary">
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/signin">sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
