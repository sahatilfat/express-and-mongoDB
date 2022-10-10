const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app'); // ini untuk require express application

dotenv.config({ path: './config.env' }); // ini untuk require environment
// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

// ini merupakan contoh schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

// ini merupakan contoh model
const Tour = mongoose.model('Tour', tourSchema);

// membuat document
const testTour = new Tour({
  name: 'The Park Camper',
  price: 997,
});

// save document
testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('ERROR :', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
