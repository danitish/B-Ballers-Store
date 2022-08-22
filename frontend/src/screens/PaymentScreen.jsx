import FormContainer from "../components/FormContainer";
import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { savePaymentMethod } from "../store/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Meta from "../components/Meta";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { shippingAddress } = useSelector((state) => state.cart);

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      paymentMethod: "PayPal",
    },
    onSubmit(values) {
      dispatch(savePaymentMethod(values.paymentMethod));
      navigate("/placeorder");
    },
  });

  return (
    <FormContainer>
      <Meta title="B-Ballers - Payment Method" />
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={form.handleSubmit}>
        <Form.Group>
          <Form.Label as="legend" className="my-2">
            Select Method:
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              {...form.getFieldProps("paymentMethod")}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" className="my-5" disabled={!form.isValid}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
