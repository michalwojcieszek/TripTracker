import express from "express";
import users from "./data/users.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
//Connect to MongoDB
await connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
