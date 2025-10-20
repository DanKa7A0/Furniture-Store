import Furniture from "../models/Furniture.js"

export async function CreateFurniture(userData){
    return Furniture.create(userData);
}

export async function GetAllFurnitures(){
    const fetchData = {img: 1, description: 1, price: 1};
    return Furniture.find({}, fetchData);
}