const mongoose = require('mongoose');

// ini merupakan contoh schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a durations'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour mush have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour mush have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true, // ini berguna utk menghapus whitespace
    required: [true, 'A tour must have a description'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

// ini merupakan contoh model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
