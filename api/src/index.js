import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import router from "./router.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT ?? 5000;
const DB = process.env.DB ?? "mongodb://localhost:27017/";

// connect to db
mongoose.connect(DB, { dbName: "Furniture_Store" })
    .then(() => console.log("Successfully connected to db"))
    .catch((err) => console.error("Can not connect to db", err));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log("Server is listening on http://localhost:3030"));