import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import destinationRouter from "./routes/destinations.route.js";
app.use("/api/v1/destinations", destinationRouter);

export { app };
