import Furniture from "../models/Furniture.js"

export async function CreateFurniture(furnitureData, user){
    return Furniture.create({
        ...furnitureData
        , CU: user.id
        , LU: user.id
    });
}

export async function GetAllFurnitures(filter){
    const fetchData = {img: 1, description: 1, price: 1};
    return Furniture.find(filter, fetchData);
}

export async function GetOneFurniture(furniture_ID, user){
    const fetchData = {
        make: 1
        , model: 1
        , year: 1
        , description: 1
        , price: 1
        , material: 1
        , img: 1
        , CU: 1
    };
    const furnitureData = await Furniture.findById(furniture_ID, fetchData).lean();
    return furnitureData; 
}

export async function UpdateFurniture(furniture_ID, furnitureData, user_ID){
    return await Furniture.findByIdAndUpdate(furniture_ID, {...furnitureData, LU: user_ID});
}

export async function DeleteFurniture(furniture_ID){
    return await Furniture.findByIdAndDelete(furniture_ID);
}
