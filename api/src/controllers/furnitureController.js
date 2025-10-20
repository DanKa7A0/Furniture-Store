import { Router } from "express";
import { furnitureService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furnitures = await furnitureService.GetAllFurnitures();
    res.status(200).json(furnitures);
});

furnitureController.post("/", isAuth, async (req, res) => {
    await furnitureService.CreateFurniture(req.body);
    res.status(201).json({ok: true});
});

export default furnitureController;