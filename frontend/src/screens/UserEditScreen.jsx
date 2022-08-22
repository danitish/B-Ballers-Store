import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useFormik } from "formik";
import Joi from "joi";
import { useEffect } from "react";
import validateFormikWithJoi from "../utils/validateFormikWithJoi";
import { getUserDetails, updateUser } from "../store/actions/userActions";
import { USER_UPDATE_RESET } from "../store/constants/userConstants";
import { emailRegex, emailRegexError } from "../utils/regex";
import Meta from "../components/Meta";

const UserEditScreen = () => {
  const navigate = useNavigate();
  const { id: userId } = useParams();

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.userUpdate);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
        return;
      }
      form.setValues({
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      });
    }
  }, [user, userId, successUpdate]);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      name: "",
      isAdmin: false,
    },
    validate: validateFormikWithJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .allow("")
        .regex(emailRegex)
        .messages(emailRegexError)
        .label("Email"),
      name: Joi.string().required().allow("").min(2).max(255).label("Name"),
      isAdmin: Joi.bool().required(),
    }),
    onSubmit(values) {
      dispatch(
        updateUser({
          _id: userId,
          ...values,
        })
      );
    },
  });
  return (
    <>
      <Meta title="B-Ballers - User Edit" />
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
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
            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={form.values.isAdmin}
                {...form.getFieldProps("isAdmin")}
                className="my-3"
              ></Form.Check>
            </Form.Group>
            <div className="my-4">
              <Button type="submit" variant="primary" disabled={!form.isValid}>
                Update
              </Button>
            </div>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
