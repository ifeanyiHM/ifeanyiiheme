const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// require("dotenv").config();
const AppError = require("./config/appError");
const globalErrorHandler = require("./config/errorController");
const blogsRouter = require("./config/blogRoute");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down.");
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("Database connection successful");
});

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/blogs", blogsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log("Listening to requests on port 8000");
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down.");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const data = fs.readFileSync(`${__dirname}/app/data/blogData.json`, "utf-8");
// const dataObj = JSON.parse(data);

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);

//   if (pathname === "/" || pathname === "/blogs") {
//     res.writeHead(200, {
//       "content-type": "application/json",
//     });
//     res.end(data);
//   } else if (pathname === "/blog") {
//     console.log(query);
//     res.writeHead(200, {
//       "content-type": "application/json",
//     });
//     const blog = dataObj[query.num];
//     res.end(JSON.stringify(blog));
//   } else {
//     res.writeHead(404, {
//       "content-type": "text/html",
//     });
//     res.end("Page not found");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000");
// });
