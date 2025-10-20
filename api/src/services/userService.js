import bcrypt from "bcrypt";
import User from "../models/User.js";
import { GenerateToken } from "../utils/token.js";

export async function register(userData){
    const user = await User.create(userData);

    const token = GenerateToken(user);

    return {
        email: user.email
        , accessToken: token
        , _id: user.id
    };
}

export async function login(userData) {
    const {email, password} = userData;
    const fetchData = {email: 1, password: 1};
    const user = await User.findOne({email}, fetchData);
    
    if (!user){
        throw new Error("Invalid email or password");
    }

    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid){
        throw new Error("Invalid email or password");
    }

    const token = GenerateToken(user);

    return {
        email: user.email
        , accessToken: token
        , _id: user.id
    };
}
