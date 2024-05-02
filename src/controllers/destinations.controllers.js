import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { Destinations } from "../models/destinations.model.js";

const postDestination = asyncHandler(async (req, res) => {
  const { destinationName, content, ticketPrice, distance } = req.body;
  if (
    [destinationName, content, ticketPrice, distance].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields required");
  }

  const path = req.files?.img[0]?.path;
  let url1 = await uploadOnCloudinary(path);

  const data = await Destinations.create({
    imgurl: url1?.url,
    destinationName,
    content,
    ticketPrice,
    distance,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getDestinations = asyncHandler(async (req, res) => {
  const data = await Destinations.find({});

  return res.status(200).json(new ApiResponse(200, data, "data fetched"));
});

export { postDestination, getDestinations };
