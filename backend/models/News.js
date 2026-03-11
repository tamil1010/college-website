const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String
  },
  isNew: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
