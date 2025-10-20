import Furniture from "../models/Furniture.js"

export async function CreateFurniture(userData){
    return await Furniture.create(userData);
}