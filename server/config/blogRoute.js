const express = require("express");
const helmet = require("helmet");

const Blog = require("./blogSchema");
const catchAsync = require("./catchAsync");
const AppError = require("./appError");

const app = express();
app.use(helmet());

const protectWithPassword = (req, res, next) => {
  const password = req.headers["x-api-key"];
  const requiredPassword = process.env.API_PASSWORD;

  if (!password || password !== requiredPassword) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized: Invalid API key",
    });
  }

  next();
};

const getAllBlogs = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find();

  res.status(200).json({
    staus: "success",
    results: blogs.length,
    data: blogs,
  });
});

const getBlog = catchAsync(async (req, res, next) => {
  // const numId = req.params.id * 1;
  // const blog = Blog.find((el) => +el.numId === numId);

  const blog = await Blog.findById(req.params.id);
  // const blog = await Blog.findOne({ numId: req.params.id });

  if (!blog) {
    return next(
      new AppError(`No blog found with the ID: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    staus: "success",
    data: { blog },
  });
});

const createBlog = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find();
  const newNumId = blogs.length > 0 ? +blogs[blogs.length - 1].numId + 1 : 0;

  // const newBlogData = Object.assign({ numId: newNumId }, req.body);
  const newBlogData = { ...req.body, numId: newNumId };
  const newBlog = await Blog.create(newBlogData);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

const updateBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!blog) {
    return next(
      new AppError(`No blog found with the ID: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    staus: "success",
    data: { blog },
  });
});

const router = express.Router();
// router.use(protectWithPassword);

router.route("/").get(getAllBlogs).post(protectWithPassword, createBlog);
router.route("/:id").get(getBlog).patch(protectWithPassword, updateBlog);

module.exports = router;

///////////////////////////////////////////////////////////////

// const fs = require("fs");
// const express = require("express");

// const checkID = (req, res, next, val) => {
//   const id = req.params.id * 1;

//   if (id > blogs.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   next();
// };

// const blogs = JSON.parse(
//   fs.readFileSync(`${__dirname}/../data/blogData.json`, "utf-8")
// );

// const getAllBlogs = (req, res) => {
//   res.status(200).json({
//     staus: "success",
//     results: blogs.length,
//     data: blogs,
//   });
// };

// const getBlog = (req, res) => {
//   // const blog = blogs.find((el) => el.uniqueId === req.params.id);
//   const numId = req.params.id * 1;
//   const blog = blogs.find((el) => +el.numId === numId);

//   res.status(200).json({
//     staus: "success",
//     data: { blog },
//   });
// };

// const createBlog = (req, res) => {
//   const newNumId = +blogs[blogs.length - 1].numId + 1;
//   const newBlog = Object.assign({ numId: newNumId }, req.body);

//   blogs.push(newBlog);

//   fs.writeFile(
//     `${__dirname}/app/data/blogData.json`,
//     JSON.stringify(blogs),
//     (err) => {
//       res.status(201).json({
//         staus: "success",
//         data: { blog: newBlog },
//       });
//     }
//   );
// };

// const updateBlog = (req, res) => {
//   res.status(200).json({
//     staus: "success",
//     data: "<Updated blog here>",
//   });
// };

// const router = express.Router();

// router.param("id", checkID);
// router.route("/").get(getAllBlogs).post(createBlog);
// router.route("/:id").get(getBlog).patch(updateBlog);

// module.exports = router;
