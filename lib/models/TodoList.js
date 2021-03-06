const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('TodoList', schema);
