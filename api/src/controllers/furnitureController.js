import { Router } from "express";

const furnitureController = Router();

furnitureController.get("/", (req, res) => {    
    res.status(200).json([]);
});

export default furnitureController;