import Furniture from "../models/Furniture.js"

export async function CreateFurniture(furnitureData, user){
    return Furniture.create({
        ...furnitureData
        , CU: user.email
        , LU: user.email
    });
}

export async function GetAllFurnitures(){
    const fetchData = {img: 1, description: 1, price: 1};
    return Furniture.find({}, fetchData);
}