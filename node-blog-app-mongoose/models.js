'use strict';

const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    firstName: String,
    lastName: String
  },
  date: { type: Date, default: Date.now }
});

blogPostSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: {
      firstName: this.author.firstName,
      lastName: this.author.lastName
    },
    date: this.date
  };
};

const BlogPost = mongoose.model('Blog Post', blogPostSchema);

module.exports = { BlogPost };
