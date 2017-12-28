'use strict';

const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

blogPostSchema.virtual('authorName').get(function() {
  return `${this.author}`.trim();
});

blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.author,
    date: this.date
  };
};

const BlogPost = mongoose.model('Blog Post', blogPostSchema);

module.exports = { BlogPost };
