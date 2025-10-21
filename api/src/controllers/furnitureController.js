import { Router } from "express";
import querystring from "querystring"
import { furnitureService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const query = req.query.where?.replaceAll('"', '');

    let filter = {};
    if (query) {
        filter = querystring.parse(query)
    }

    const furnitures = await furnitureService.GetAllFurnitures(filter);
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

furnitureController.put("/:id", async (req, res) => {
    const user_ID = req.user.id;
    const furniture_ID = req.params.id;
    const furnitureData = req.body;
    await furnitureService.UpdateFurniture(furniture_ID, furnitureData, user_ID);
    res.status(200).json({ok: true});
});

furnitureController.delete("/:id", async (req, res) => {
    const furniture_ID = req.params.id;
    await furnitureService.DeleteFurniture(furniture_ID);
    res.status(200).json({ok: true});
});

export default furnitureController;