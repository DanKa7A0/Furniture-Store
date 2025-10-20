import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String
        , required: [true, "Make is required"]
        , minLength: [4, "Make should be at least 4 characters long"]
    }

    , price: {
        type: String
        , required: [true, "Price is required"]
        , min: [0, "Price should be a positive number"]
    }

    , model: {
        type: String
        , required: [true, "Model is required"]
        , minLength: [4, "Make should be at least 4 characters long"]
    }

    , img: {
        type: String
        , required: [true, "Image is required"]
    }

    , year: {
        type: String
        , required: [true, "Year is required"]
    }

    , description: {
        type: String
        , required: [true, "Description is required"]
        , minLength: [10, "Description should be at least 10 characters long"]
    }

    , material: {
        type: String
    }
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;