const handleNonOperationalErrors = (err) => {
  console.error("🔥 Full Error Object:", err); // Log the full error for debugging

  if (err.name === "CastError") return `Invalid ${err.path}: ${err.value}`;

  if (err.code === 11000 && err.errmsg) {
    // Ensure errmsg exists before using match
    const match = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/);
    const value = match ? match[0] : "unknown"; // Avoid accessing undefined index
    return `Duplicate field value ${value}: Please use another value`;
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors || {}).map((el) => el.message);
    return `Validation Error: ${errors.join(", ")}`;
  }

  return "An unknown error occurred"; // Fallback message
};

module.exports = (err, req, res, next) => {
  console.error("🔥 API Error:", err); // Log the full error again for debugging

  err.statusCode = err.isOperational ? err.statusCode : 500;
  err.status = err.isOperational ? err.status : "error";
  err.message = err.isOperational
    ? err.message
    : handleNonOperationalErrors(err);

  res.status(err.statusCode).json({
    status: err.status,
    error: err.isOperational ? err : undefined, // Send only if operational
    message: err.message,
    stack: err.isOperational ? err.stack : undefined,
  });
};

// const handleNonOperationalErrors = (err) => {
//   if (err.name === "CastError") return `Invalid ${err.path}: ${err.value}`;
//   const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
//   if (err.code === 11000)
//     return `Duplicate feild value ${value}: Please use another value`;
//   if (err.name === "ValidationError") {
//     const errors = Object.values(err.errors).map((el) => el.message);
//     return `Validation Error: ${errors.join(", ")}`;
//   }
// };

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.isOperational ? err.statusCode : 500;
//   err.status = err.isOperational ? err.status : "error";
//   err.message = err.isOperational
//     ? err.message
//     : handleNonOperationalErrors(err);

//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err.isOperational && err,
//     message: err.message,
//     stack: err.isOperational && err.stack,
//   });
// };
