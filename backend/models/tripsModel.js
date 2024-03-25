import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  trips: [
    {
      coords: { lat: { type: Number }, lng: { type: Number } },
      city: { type: String },
      region: { type: String },
      country: { type: String },
      countryCode: { type: String },
      date: { type: String },
      description: { type: String },
      continent: { type: String },
      tripId: { type: String },
    },
  ],
});

const Trips = mongoose.model("trips", tripsSchema);

export default Trips;
