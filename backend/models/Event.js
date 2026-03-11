const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  eventDate: {
    type: Date,
    required: true
  },
  location: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
