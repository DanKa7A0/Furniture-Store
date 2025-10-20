import { Router } from "express";
import userController from "./controllers/userController.js";
import furnitureController from "./controllers/furnitureController.js";

const router = Router();

router.use("/users", userController);
router.use("/data/catalog", furnitureController);

export default router;

