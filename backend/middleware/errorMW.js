export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(400);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(error);
  res.send({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default { notFound, errorHandler };
