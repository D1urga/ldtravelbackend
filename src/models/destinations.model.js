import mongoose from "mongoose";
import { type } from "os";

const destinationSchema = new mongoose.Schema(
  {
    imgurl: {
      type: String,
      required: true,
    },
    destinationName: {
      type: String,
    },

    content: {
      type: String,
    },
    ticketPrice: {
      type: String,
    },
    distance: {
      type: String,
    },
  },
  {}
);

export const Destinations = mongoose.model("Destinations", destinationSchema);
