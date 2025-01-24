const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const AppError = require("./config/appError");
const globalErrorHandler = require("./config/errorController");
const blogsRouter = require("./config/blogRoute");

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! Shutting down.");
  console.error(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Database connection with error handling
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

const app = express();

// Morgan logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// JSON request body size limit
app.use(express.json({ limit: "10kb" }));

// CORS configuration
app.use(
  cors({
    origin: [
      "https://blogiify.vercel.app",
      "https://ifeanyiiheme.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());

// Disable caching globally (or refine to specific routes if needed)
app.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

// Enforce HTTPS in production
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

// API routes
app.use("/api/v1/blogs", blogsRouter);

// Handle all unknown routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

// Graceful shutdown for unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! Shutting down.");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Graceful shutdown for SIGTERM
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully.");
  server.close(() => {
    console.log("Process terminated!");
    mongoose.connection.close(() => {
      console.log("Database connection closed.");
    });
  });
});

// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });

// // require("dotenv").config();
// const AppError = require("./config/appError");
// const globalErrorHandler = require("./config/errorController");
// const blogsRouter = require("./config/blogRoute");

// process.on("uncaughtException", (err) => {
//   console.log("UNCAUGHT EXCEPTION! Shutting down.");
//   console.log(err.name, err.message);
//   process.exit(1);
// });

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose.connect(DB).then((con) => {
//   console.log("Database connection successful");
// });

// const app = express();
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
// app.use(express.json());

// app.use(
//   cors({
//     origin: [
//       "https://blogiify.vercel.app/",
//       "https://ifeanyiiheme.vercel.app/",
//       "http://localhost:3000/",
//     ],
//     methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.options("*", cors());

// app.use((req, res, next) => {
//   res.set(
//     "Cache-Control",
//     "no-store, no-cache, must-revalidate, proxy-revalidate"
//   );
//   res.set("Pragma", "no-cache");
//   res.set("Expires", "0");
//   next();
// });

// app.use("/api/v1/blogs", blogsRouter);

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// app.use(globalErrorHandler);

// const port = process.env.PORT || 8000;
// const server = app.listen(port, () => {
//   console.log("Listening to requests on port 8000");
// });

// process.on("unhandledRejection", (err) => {
//   console.log("UNHANDLED REJECTION! Shutting down.");
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
