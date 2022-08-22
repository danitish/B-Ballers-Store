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
import { emailRegex, emailRegexError } from "../utils/regex";
import Meta from "../components/Meta";
import { resetPasswordEmail } from "../store/actions/userActions";
import { toastifySuccess } from "../utils/toastify";

const RequestResetPassword = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.userPasswordResetEmail
  );

  useEffect(() => {
    if (success) {
      toastifySuccess(
        "Email was successfully sent - Check your inbox",
        "top-center"
      );
    }
  }, [success]);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
    },
    validate: validateFormikWithJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .regex(emailRegex)
        .messages(emailRegexError)
        .label("Email"),
    }),
    onSubmit(values) {
      dispatch(resetPasswordEmail(values));
    },
  });
  return (
    <>
      <Meta title="Request Password Reset" />
      <FormContainer>
        <h1>Enter your email</h1>
        <p>You will receive a link to reset your password</p>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form noValidate onSubmit={form.handleSubmit}>
          <Input
            type="email"
            label="Email"
            error={form.touched.email && form.errors.email}
            {...form.getFieldProps("email")}
          />
          <div className="my-4">
            <Button type="submit" variant="primary" disabled={!form.isValid}>
              Send Email
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default RequestResetPassword;
