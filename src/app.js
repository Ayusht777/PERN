import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import pool from "./config/db.js";
const app = express();

//middlewares
app.use(express.json({ limit: "24kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser());


//routes
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);


export default app;