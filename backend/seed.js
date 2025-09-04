const problems = require("./data");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./Database/connectDB");
const Problem = require("./models/problem.model");

const main = async () => {
  try {
    await connectDB();
    const res = await Problem.insertMany(problems);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

main();
