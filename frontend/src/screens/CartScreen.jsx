import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import Meta from "../components/Meta";

const CartScreen = () => {
  const { id: productId } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const qty = search ? Number(search.split("=")[1].split("&")[0]) : 1;
  const size = search ? search.split("=")[2] : "";

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, size));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=shipping");
  };

  return (
    <>
      <Meta title="B-Ballers Store - My Cart" />
      <Row className="my-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty{" "}
              <Link to="/" className="mx-2" style={{ fontStyle: "italic" }}>
                Go back
              </Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product} className="my-2">
                  <Row>
                    <Col sm={3} md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col sm={2} md={3}>
                      <Link to={`/teams/${item.team}/${item.product}`}>
                        {item.name}
                      </Link>
                    </Col>

                    <Col sm={2} md={2}>
                      ${item.price}
                    </Col>
                    <Col sm={3} md={3}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col sm={2} md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                    <Col md={2}>{}</Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col className="mt-sm-5" md={6} lg={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={!cartItems.length}
                  onClick={checkoutHandler}
                >
                  Proceed to checkout
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/">
                  <Button type="button" className="btn-block" variant="info">
                    Continue shopping
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
