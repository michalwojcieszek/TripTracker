import asyncHandler from "../middleware/asyncHandler.js";
import Trips from "../models/tripsModel.js";

//@desc Get user's trip
//@route GET /api/trips/mine
//@access Private
const getTripsMine = asyncHandler(async (req, res) => {
  const currentUser = req.user._id;
  const existingTrips = await Trips.findOne({ user: currentUser });
  if (existingTrips?.trips) {
    res.status(201).json(existingTrips.trips);
  } else {
    res.status(201).json([]);
  }
});

//@desc Add a trip
//@route POST /api/trips/add
//@access Private
const addTrip = asyncHandler(async (req, res) => {
  const {
    coords,
    city,
    region,
    country,
    countryCode,
    date,
    description,
    continent,
  } = req.body;
  const currentUser = req.user._id;
  const existingTrips = await Trips.findOne({ user: currentUser });
  if (existingTrips) {
    existingTrips.trips.push({
      coords,
      city,
      region,
      country,
      countryCode,
      date,
      description,
      continent,
    });
    const updatedTrips = await existingTrips.save();
    res.status(201).json(updatedTrips);
  } else {
    const newTrips = new Trips({
      user: currentUser,
      trips: [
        {
          coords,
          city,
          region,
          country,
          countryCode,
          date,
          description,
          continent,
        },
      ],
    });
    const createdTrips = await newTrips.save();
    res.status(201).json(createdTrips);
  }
});

//@desc Delete a trip
//@route DELETE /api/trips/delete
//@access Private
const deleteTrip = asyncHandler(async (req, res) => {
  try {
    const { tripId } = req.body;
    console.log(tripId);
    const currentUser = req.user._id;

    const existingTrips = await Trips.findOne({ user: currentUser });

    if (!existingTrips) {
      return res.status(404).json({ message: "Trip not found" });
    }
    console.log("1");
    existingTrips.trips = existingTrips.trips.filter(
      (trip) => trip._id.toString() !== tripId
    );
    console.log("2");
    await existingTrips.save();
    res.status(201).json(existingTrips.trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { getTripsMine, addTrip, deleteTrip };
