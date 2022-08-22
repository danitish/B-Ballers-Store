import { Form } from "react-bootstrap";

export const Input = ({
  label,
  error,
  name,
  formFile,
  loader,
  options,
  ...rest
}) => {
  return (
    <Form.Group className="py-2">
      <Form.Label>{label}:</Form.Label>
      <Form.Control placeholder={label} {...rest} name={name} isInvalid={error}>
        {options}
      </Form.Control>
      <Form.Control.Feedback className="py-1" type="invalid">
        {error}
      </Form.Control.Feedback>
      {formFile}
      {loader}
    </Form.Group>
  );
};

export default Input;
