import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
    res.send("test");
});

app.listen(PORT, () => console.log("Server is listening on http://localhost:3030"));