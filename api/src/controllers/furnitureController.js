import { Router } from "express";
import { furnitureService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furnitures = await furnitureService.GetAllFurnitures();
    res.status(200).json(furnitures);
});

furnitureController.post("/", isAuth, async (req, res) => {
    const user = req.user;
    const furnitureData = req.body;
    await furnitureService.CreateFurniture(furnitureData, user);
    res.status(201).json({ok: true});
});

furnitureController.get("/:id", async (req, res) => {
    const user = req.user;
    const furniture_ID = req.params.id;
    const furnitureData = await furnitureService.GetOneFurniture(furniture_ID, user);
    res.status(200).json({...furnitureData, _ownerId: user.id});
});

export default furnitureController;