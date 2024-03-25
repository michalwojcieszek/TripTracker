import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

const test = asyncHandler(async (req, res) => {
  res.json("ok");
});

export { test };
