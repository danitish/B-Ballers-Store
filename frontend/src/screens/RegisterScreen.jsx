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
import { register } from "../store/actions/userActions";
import {
  passwordRegex,
  passwordRegexError,
  emailRegex,
  confirmPasswordError,
  emailRegexError,
} from "../utils/regex";
import Meta from "../components/Meta";
import { toastifySuccess } from "../utils/toastify";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );
  const userLogin = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      toastifySuccess("Registered Successfully", "top-center");
      navigate("/signin");
      return;
    }
    if (userLogin.userInfo) {
      navigate(redirect);
      return;
    }
  }, [userInfo]);

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
        .label("Email"),
      name: Joi.string().required().min(2).max(255).label("Name"),
      password: Joi.string()
        .required()
        .label("Password")
        .allow("123456")
        .regex(passwordRegex)
        .messages(passwordRegexError),
      confirmPassword: Joi.string()
        .required()
        .label("Password")
        .allow("123456")
        .valid(Joi.ref("password"))
        .messages(confirmPasswordError),
    }),
    onSubmit(values) {
      dispatch(
        register({
          email: values.email,
          password: values.password,
          name: values.name,
        })
      );
    },
  });
  return (
    <>
      <Meta title="B-Ballers - Register" />
      <FormContainer>
        <h1>Register to our shop</h1>
        <h4>Completely free of charge!</h4>
        {error && <Message variant="danger">{error}</Message>}
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
              Register
            </Button>
          </div>
        </Form>
        <Row className="py-3">
          <Col>
            <span>
              Have an account?{" "}
              <Link
                className="mx-1"
                to={redirect ? `/signin?redirect=${redirect}` : "/signin"}
              >
                Log in
              </Link>
            </span>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
