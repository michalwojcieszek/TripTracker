import express from "express";
import users from "../data/users.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authUser);

export default router;
