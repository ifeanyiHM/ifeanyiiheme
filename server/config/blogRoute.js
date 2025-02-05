const express = require("express");
const helmet = require("helmet");

const Blog = require("./blogSchema");
const catchAsync = require("./catchAsync");
const AppError = require("./appError");

const app = express();
app.use(helmet());
// app.use(express.json());
// app.use(express.json({ limit: "5mb" }));

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

  res.setHeader("Cache-Control", "no-store, max-age=0");

  res.status(200).json({
    status: "success",
    results: blogs.length,
    data: blogs,
  });
});

const getBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findOne({ slug: req.params.id });
  console.log("reqqq", req);
  console.log("req.params", req.params);

  if (!blog) {
    return next(
      new AppError(`No blog found with the ID: ${req.params.id}`, 404)
    );
  }

  res.setHeader("Cache-Control", "no-store, max-age=0");

  res.status(200).json({
    status: "success",
    data: { blog },
  });
});

const createBlog = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find();
  // const newNumId = blogs.length > 0 ? +blogs[blogs.length - 1].numId + 1 : 0;
  const newNumId =
    blogs.length > 0 ? Number(blogs[blogs.length - 1].numId) + 1 : 0;

  const newBlogData = { ...req.body, numId: newNumId };
  const newBlog = await Blog.create(newBlogData);

  res.setHeader("Cache-Control", "no-store, max-age=0");

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

  res.setHeader("Cache-Control", "no-store, max-age=0");

  res.status(200).json({
    staus: "success",
    data: { blog },
  });
});

const addCommentToBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params; // Blog ID
  const { name, thought, date, background } = req.body; // Comment data

  console.log("Request Body:", req.body);
  console.log("Blog ID:", id);

  if (!name || !thought) {
    return res.status(400).json({
      status: "fail",
      message: "Name and thought are required to add a comment",
    });
  }

  // Create the comment object
  const newComment = {
    name,
    thought,
    date: date || new Date().toISOString(),
    background,
  };

  // Add the comment to the blog
  const updatedComment = await Blog.findByIdAndUpdate(
    id,
    { $push: { comments: newComment } },
    { new: true, runValidators: true }
  );

  if (!updatedComment) {
    return res.status(404).json({
      status: "fail",
      message: "No blog found with the given ID",
    });
  }

  res.setHeader("Cache-Control", "no-store, max-age=0");

  res.status(200).json({
    status: "success",
    data: {
      blog: updatedComment,
    },
  });
});

const router = express.Router();

router.route("/").get(getAllBlogs).post(protectWithPassword, createBlog);
router.route("/:id").get(getBlog).patch(protectWithPassword, updateBlog);
router.route("/:id/comments").patch(protectWithPassword, addCommentToBlog);

module.exports = router;
