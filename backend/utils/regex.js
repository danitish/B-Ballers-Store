export const passwordRegex = new RegExp(
  "(?=.*([a-z]{1,}))(?=.*([A-Z]{1,}))(?=.*[0-9]{4,})(?=.*([!@#$%^&*_*]{1,}))[A-Za-zd!@#$%^&*-_*]{8,}"
);

export const passwordRegexError = {
  "string.pattern.base":
    "Password must contain at least: 1 uppercase, 1 lowercase english letters, 1 symbol, 4 numbers in a row - and be at least 8 characters long",
};

export const emailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

export const emailRegexError = {
  "string.pattern.base": "Invalid email address",
};
