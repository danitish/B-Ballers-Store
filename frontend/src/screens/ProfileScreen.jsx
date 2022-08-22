import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useFormik } from "formik";
import Joi from "joi";
import { useEffect, useState } from "react";
import validateFormikWithJoi from "../utils/validateFormikWithJoi";
import {
  getUserDetails,
  updateUserProfile,
} from "../store/actions/userActions";
import { listMyOrders } from "../store/actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../store/constants/userConstants";
import {
  passwordRegex,
  passwordRegexError,
  emailRegex,
  emailRegexError,
  confirmPasswordError,
} from "../utils/regex";
import Meta from "../components/Meta";

const ProfileScreen = () => {
  const [message, setMessage] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdateProfile);
  const {
    orders,
    loading: loadingOrders,
    error: errorOrders,
  } = useSelector((state) => state.orderMyList);

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
      return;
    }
    if (!user.name || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(getUserDetails("profile"));
      dispatch(listMyOrders());
    } else {
      form.setValues({
        email: user.email,
        password: "",
        confirmPassword: "",
        name: user.name,
      });
    }
  }, [user, success]);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
    validate: validateFormikWithJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .regex(emailRegex)
        .messages(emailRegexError)
        .allow("")
        .label("Email"),
      name: Joi.string().required().min(2).max(255).allow("").label("Name"),
      password: Joi.string()
        .required()
        .regex(passwordRegex)
        .messages(passwordRegexError)
        .allow("" || "123456")
        .label("Password"),
      confirmPassword: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .messages(confirmPasswordError)
        .allow("" || "123456")
        .label("Password"),
    }),
    onSubmit(values) {
      if (form.values.confirmPassword !== form.values.password) {
        setMessage("Passwords do not match");
        return;
      }
      dispatch(
        updateUserProfile({
          id: user._id,
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      setUpdateSuccess(true);

      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    },
  });
  return (
    <Row>
      <Meta title="B-Ballers - My Profile" />
      <Col md={3}>
        <h2>User Profile:</h2>
        {message && (
          <Message variant="danger" className="my-2">
            {message}
          </Message>
        )}
        {error && <Message variant="danger">{error}</Message>}
        {updateSuccess && <Message variant="success">Profile Updated!</Message>}
        {loading && <Loader />}
        <Form className="my-4" noValidate onSubmit={form.handleSubmit}>
          <Input
            type="email"
            label="Email"
            error={form.touched.email && form.errors.email}
            {...form.getFieldProps("email")}
          />
          <Input
            type="text"
            label="Name"
            error={form.touched.name && form.errors.name}
            {...form.getFieldProps("name")}
          />
          <Input
            type="password"
            label="Password"
            error={form.touched.password && form.errors.password}
            {...form.getFieldProps("password")}
          />
          <Input
            type="password"
            label="Confirm Password"
            error={form.touched.confirmPassword && form.errors.confirmPassword}
            {...form.getFieldProps("confirmPassword")}
          />
          <div className="my-4">
            <Button type="submit" variant="primary" disabled={!form.isValid}>
              Update
            </Button>
          </div>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td style={{ textAlign: "center" }}>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i
                        className="fas fa-times fa-lg"
                        style={{ color: "red" }}
                      ></i>
                    )}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <span>
                        <i
                          className="fas fa-times fa-lg text-center"
                          style={{ color: "red" }}
                        ></i>
                      </span>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
