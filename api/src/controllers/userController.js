import { Router } from "express";

const userController = Router();

userController.post("/register", (req, res) => {    
    res.status(201).json({ email: "test", accessToken: "123", _id: 1 });
});

export default userController;