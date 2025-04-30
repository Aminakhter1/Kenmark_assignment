
// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aminakhter1166:iKC3ZCtHscD3ahXu@cluster0.nhwmuoj.mongodb.net/psquare,");
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
