import FormContainer from "../components/FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useFormik } from "formik";
import Joi from "joi";
import { useEffect } from "react";
import validateFormikWithJoi from "../utils/validateFormikWithJoi";
import {
  confirmPasswordError,
  passwordRegex,
  passwordRegexError,
} from "../utils/regex";
import Meta from "../components/Meta";
import { resetPassword } from "../store/actions/userActions";
import { toastifySuccess } from "../utils/toastify";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { userId, token } = useParams();
  const navigate = useNavigate();

  const { error, success, loading } = useSelector(
    (state) => state.userPasswordReset
  );

  useEffect(() => {
    if (success) {
      toastifySuccess("Password was successfully changed", "top-center");
      navigate("/signin");
    }
  }, [success]);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: validateFormikWithJoi({
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
      dispatch(resetPassword({ password: values.password }, userId, token));
    },
  });
  return (
    <>
      <Meta title="Password Reset" />
      <FormContainer>
        <h1>Choose your new password</h1>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form noValidate onSubmit={form.handleSubmit}>
          <Input
            type="password"
            label="New Password"
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
              Reset Password
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default ResetPassword;
