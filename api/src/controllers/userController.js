import { Router } from "express";
import { userService } from "../services/index.js";

const userController = Router();

userController.post("/register", async (req, res) => { 
    const response = await userService.register(req.body);
    res.status(201).json(response);
});

userController.post("/login", async (req, res) => { 
    const response = await userService.login(req.body);
    res.status(200).json(response);
});

userController.get("/logout", async (req, res) => { 
    res.status(204).json({ok: true});
});

export default userController;