import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Input from "../common/Input";
import Joi from "joi";
import validateFormikWithJoi from "../utils/validateFormikWithJoi";
import { saveShippingAddress } from "../store/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Meta from "../components/Meta";

const ShippingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      address: shippingAddress.address || "",
      city: shippingAddress.city || "",
      postalCode: shippingAddress.postalCode || "",
      country: shippingAddress.country || "",
    },
    validate: validateFormikWithJoi({
      address: Joi.string().required().label("Address"),
      city: Joi.string().required().label("City"),
      postalCode: Joi.string().required().label("Postal Code"),
      country: Joi.string().required().label("Country"),
    }),
    onSubmit(values) {
      dispatch(saveShippingAddress(values));
      navigate("/payment");
    },
  });

  return (
    <FormContainer>
      <Meta title="B-Ballers - Shipping" />
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={form.handleSubmit}>
        <Input
          label="Address"
          error={form.touched.address && form.errors.address}
          {...form.getFieldProps("address")}
        />
        <Input
          label="City"
          error={form.touched.city && form.errors.city}
          {...form.getFieldProps("city")}
        />
        <Input
          label="Postal Code"
          error={form.touched.postalCode && form.errors.postalCode}
          {...form.getFieldProps("postalCode")}
        />
        <Input
          label="Country"
          error={form.touched.country && form.errors.country}
          {...form.getFieldProps("country")}
        />
        <Button type="submit" className="my-3" disabled={!form.isValid}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
