import express from "express";
import users from "../data/users.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { test } from "../controllers/userController.js";

const router = express.Router();

router.post("/", test);

export default router;
