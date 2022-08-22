import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import CheckOutSteps from "../components/CheckoutSteps";
import { createOrder } from "../store/actions/orderActions";
import { useEffect } from "react";
import { CART_RESET_ITEM } from "../store/constants/cartConstants";
import { ORDER_CREATE_RESET } from "../store/constants/orderConstants";
import { toastifySuccess } from "../utils/toastify";
import Meta from "../components/Meta";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const shippingPrice = itemsPrice > 100 ? (0).toFixed(2) : (100).toFixed(2);

  const taxPrice = Number(0.05 * itemsPrice).toFixed(2);

  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  const { order, success, error } = useSelector((state) => state.orderCreate);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toastifySuccess("Your order was created", "top-center");
      navigate(`/order/${order._id}`);
      dispatch({ type: CART_RESET_ITEM });
      localStorage.removeItem("cartItems");
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  return (
    <>
      <Meta title="B-Ballers - Place Order" />
      <CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                <span>
                  {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                  {cart.shippingAddress.postalCode},{" "}
                  {cart.shippingAddress.country}
                </span>
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>
                Method:
                <span className="mx-1">{cart.paymentMethod}</span>
              </strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {!cart.cartItems.length ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2} lg={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={3}>
                          <span>Size: {item.size}</span>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price.toFixed(2)} = $
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={!cart.cartItems.length}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
