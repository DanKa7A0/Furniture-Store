import { Router } from "express";
import { furnitureService } from "../services/index.js";

const furnitureController = Router();

furnitureController.get("/", (req, res) => {
    res.status(200).json([]);
});

furnitureController.post("/", (req, res) => {
    furnitureService.CreateFurniture(req.body);
    res.end();
});

export default furnitureController;