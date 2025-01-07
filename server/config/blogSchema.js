const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  numId: { type: String },
  uniqueId: { type: String, unique: true },
  title: { type: String, required: [true, "A blog must have a title"] },
  author: { type: String },
  authorImage: { type: String, default: "" },
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
  comments: [{ type: String, trim: true }],
});

blogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

// blogSchema.post('save', function(doc, next){
//   console.log(doc)
//   next()
// })

const Blog = mongoose.model("Blog", blogSchema);

// const sampleBlog = new Blog({
//   numId: "0",
//   uniqueId: "ukjnilqwue-1",
//   title: "Sample Blog",
//   author: "John Doe",
//   date: "2024-12-30",
//   coverImage: [
//     {
//       image: "sample-image.jpg",
//       zoomedImage: "sample-zoomed.jpg",
//     },
//   ],
//   headParagraph: "This is a sample blog head paragraph.",
//   sections: [
//     {
//       imgSubtitle: "Sample Subtitle",
//       subtitle: "Introduction",
//       text: "This is the first section of the sample blog.",
//     },
//   ],
//   tags: ["sample", "blog"],
//   reaction: {
//     views: 0,
//     hearts: 0,
//   },
// });

// sampleBlog
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = Blog;
