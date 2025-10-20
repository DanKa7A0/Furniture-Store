import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT ?? 5000;
const DB = process.env.DB ?? "mongodb://localhost:27017/";

// connect to db
mongoose.connect(DB, { dbName: "Friendly_World" })
    .then(() => console.log("Successfully connected to db"))
    .catch((err) => console.error("Can not connect to db", err));

app.use(express.json());


app.listen(PORT, () => console.log("Server is listening on http://localhost:3030"));