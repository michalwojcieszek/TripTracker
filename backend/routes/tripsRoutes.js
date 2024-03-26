import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  addTrip,
  deleteTrip,
  getTripsMine,
} from "../controllers/tripsController.js";

const router = express.Router();

router.route("/mine").get(protect, getTripsMine);
router.route("/add").post(protect, addTrip);
router.route("/delete").delete(protect, deleteTrip);

export default router;
