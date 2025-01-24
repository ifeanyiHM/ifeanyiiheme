const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  numId: { type: String },
  uniqueId: { type: String, unique: true },
  title: { type: String, required: [true, "A blog must have a title"] },
  author: { type: String },
  authorImage: { type: String, default: "" },
  authorBio: { type: String, default: "" },
  readTime: { type: String },
  date: { type: Date, default: () => new Date().toISOString() },
  slug: String,
  coverImage: [
    {
      image: { type: String },
      zoomedImage: { type: String },
    },
  ],
  alt: { type: String, default: "" },
  headParagraph: { type: String },
  sections: [
    {
      imgSubtitle: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      image: [
        {
          image: { type: String },
          zoomedImage: { type: String },
        },
      ],
      alt: { type: String, default: "" },
      text: { type: String },
    },
  ],
  tags: [{ type: String }],
  reaction: {
    views: { type: Number, default: 0 },
    hearts: { type: Number, default: 0 },
  },
  comments: [
    {
      name: { type: String },
      thought: { type: String },
      date: { type: String },
      background: { type: String },
    },
  ],
});

blogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
