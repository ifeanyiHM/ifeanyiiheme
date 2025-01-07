const handleNonOperationalErrors = (err) => {
  if (err.name === "CastError") return `Invalid ${err.path}: ${err.value}`;
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  if (err.code === 11000)
    return `Duplicate feild value ${value}: Please use another value`;
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    return `Validation Error: ${errors.join(", ")}`;
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.isOperational ? err.statusCode : 500;
  err.status = err.isOperational ? err.status : "error";
  err.message = err.isOperational
    ? err.message
    : handleNonOperationalErrors(err);

  res.status(err.statusCode).json({
    status: err.status,
    error: err.isOperational && err,
    message: err.message,
    stack: err.isOperational && err.stack,
  });
};

// const AppError = require("./appError");

// const handleCastErrorDB = (err) => {
//   const message = `Invalid ${err.path}: ${err.value}`;
//   return new AppError(message, 400);
// };

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.isOperational ? err.statusCode : 500;
//   err.status = err.isOperational ? err.status : "error";
//   err.message = err.message;

//   let error = { ...err };
//   error.message = err.message;
//   if (error.name === "CastError") error = handleCastErrorDB(error);

//   res.status(error.statusCode).json({
//     status: error.status,
//     error: error.isOperational && error,
//     message: error.message,
//     stack: error.isOperational && error.stack,
//   });
// };
