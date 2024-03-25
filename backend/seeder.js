import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import User from "./models/userModel.js";
import Trips from "./models/tripsModel.js";

dotenv.config();
await connectDB();

const importData = async () => {
  try {
    await Trips.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    //colors package
    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Trips.deleteMany();
    await User.deleteMany();

    console.log("data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
