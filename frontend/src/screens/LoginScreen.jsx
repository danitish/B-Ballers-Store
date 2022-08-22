import FormContainer from "../components/FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useFormik } from "formik";
import Joi from "joi";
import { useEffect } from "react";
import validateFormikWithJoi from "../utils/validateFormikWithJoi";
import { login } from "../store/actions/userActions";
import {
  passwordRegex,
  passwordRegexError,
  emailRegex,
  emailRegexError,
} from "../utils/regex";
import Meta from "../components/Meta";
import { toastifySuccess } from "../utils/toastify";

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? "/" + location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      if (redirect === "/") {
        toastifySuccess(`Welcome, ${userInfo.name}`);
      }
      navigate(redirect);
    }
  }, [userInfo]);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateFormikWithJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .regex(emailRegex)
        .messages(emailRegexError)
        .label("Email"),
      password: Joi.string()
        .required()
        .regex(passwordRegex)
        .messages(passwordRegexError)
        .allow("123456")
        .label("Password"),
    }),
    onSubmit(values) {
      dispatch(login(values));
    },
  });
  return (
    <>
      <Meta title="B-Ballers - Log in" />
      <FormContainer>
        <h1>Sign in using credentials</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form noValidate onSubmit={form.handleSubmit}>
          <Input
            type="email"
            label="Email"
            error={form.touched.email && form.errors.email}
            {...form.getFieldProps("email")}
          />
          <Input
            type="password"
            label="Password"
            error={form.touched.password && form.errors.password}
            {...form.getFieldProps("password")}
          />
          <div className="my-4">
            <Button type="submit" variant="primary" disabled={!form.isValid}>
              Sign in
            </Button>
          </div>
        </Form>
        <Row className="py-3">
          <Col>
            <span>
              Forgot your password?{" "}
              <Link className="mx-1" to={"/reset-password"}>
                Reset Password
              </Link>
            </span>
          </Col>
        </Row>
        <Row className="py-1">
          <Col>
            <span>
              New Customer?{" "}
              <Link
                className="mx-1"
                to={redirect ? `/signup?redirect=${redirect}` : "/signup"}
              >
                Register
              </Link>
            </span>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
