import jwt from "jsonwebtoken"

export function GenerateToken(userData){
    const payload = {
        id: userData.id
        , email: userData.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "2h"});

    return token;
}