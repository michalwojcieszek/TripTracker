import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import tripsRoutes from "./routes/tripsRoutes.js";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";

dotenv.config();
//Connect to MongoDB
await connectDB();

const port = process.env.PORT || 5000;
const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser middleware
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/trips", tripsRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // Any route that is not API will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
