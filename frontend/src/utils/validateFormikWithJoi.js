import Joi from "joi";

const validateFormikWithJoi = (schema) => {
  return (values) => {
    const { error } = Joi.object(schema).validate(values, {
      abortEarly: false,
    });
    if (!error) {
      return;
    }
    const errors = {};

    for (let detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }

    return errors;
  };
};

export default validateFormikWithJoi;
