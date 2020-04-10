const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  console.log('db js called');
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error whhile connecting to DB:', err.message);
    process.exit(1);
  }
};

/*const connectDB = async () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
      console.error(err.message);
      process.exit(1);
    });
};*/

module.exports = connectDB;
