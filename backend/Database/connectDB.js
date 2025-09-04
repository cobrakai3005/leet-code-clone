const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Mongodb Connected to host ${connection.connection.host}`.rainbow
    );
  } catch (error) {
    console.log(error);
    console.log(`Mongodb DiConnected Error`);
    process.exit(1);
  }
};

module.exports = connectDB;
