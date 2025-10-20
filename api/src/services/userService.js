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