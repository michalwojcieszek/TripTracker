import express from "express";
import users from "../data/users.js";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  authUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/", registerUser);

export default router;
