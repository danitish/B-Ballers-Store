import Joi from "joi";
import {
  passwordRegex,
  passwordRegexError,
  emailRegex,
  emailRegexError,
} from "../utils/regex.js";

const validateRegister = (user) => {
  return Joi.object({
    email: Joi.string()
      .email()
      .required()
      .regex(emailRegex)
      .messages(emailRegexError)
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
      .regex(passwordRegex)
      .allow("123456")
      .messages(passwordRegexError),
    name: Joi.string().required().min(2).max(255).label("Name"),
  }).validate(user);
};

const validateLogin = (user) => {
  return Joi.object({
    email: Joi.string()
      .email()
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
  }).validate(user);
};

const validateEmail = (userEmail) => {
  return Joi.object({
    email: Joi.string()
      .email()
      .required()
      .regex(emailRegex)
      .messages(emailRegexError)
      .label("Email"),
  }).validate(userEmail);
};
const validatePassword = (userPassword) => {
  return Joi.object({
    password: Joi.string()
      .required()
      .regex(passwordRegex)
      .messages(passwordRegexError)
      .allow("123456")
      .label("Password"),
  }).validate(userPassword);
};

export { validateLogin, validateRegister, validateEmail, validatePassword };
