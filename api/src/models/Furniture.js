import { Schema, Types, model } from "mongoose";

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

    , CD: {
        type: Date
        , default: Date.now
        , get: (v) => v ? new Date(v).toLocaleString('bg-BG', { timeZone: 'Europe/Sofia' }) : v
    }

    , CU: {
        type: Types.ObjectId
        , ref: "User"
        , required: true
    }

    , LD: {
        type: Date
        , default: Date.now
        , get: (v) => v ? new Date(v).toLocaleString('bg-BG', { timeZone: 'Europe/Sofia' }) : v
    }
    
    , LU: {
            type: Types.ObjectId
            , ref: "User"
            , required: true
        }
    } 
, {
    toJSON: { getters: true },
    toObject: { getters: true },
    timestamps: { createdAt: 'CD', updatedAt: 'LD' } // auto update
 });

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;