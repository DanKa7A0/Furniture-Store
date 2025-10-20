import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {
        type: String
        , required: [true, "Email is required"]
        , unique: [true, "Email already exist"]
        , minLength: [10, "Email need to be at least 10 characters long"]
    }

    , password: {
        type: String
        , required: [true, "Password is required"]
        , minLength: [4, "Password need to be at least 4 characters long"]
    }

    , CD: {
        type: Date
        , default: Date.now
        , get: (v) => v ? new Date(v).toLocaleString('bg-BG', { timeZone: 'Europe/Sofia' }) : v
    }

    , CU: {
        type: String
        , default: "system"
    }

    , LD: {
        type: Date
        , default: Date.now
        , get: (v) => v ? new Date(v).toLocaleString('bg-BG', { timeZone: 'Europe/Sofia' }) : v
    }

    , LU: {
        type: String
        , default: "system"
    }
} 
, {
    toJSON: { getters: true },
    toObject: { getters: true },
    timestamps: { createdAt: 'CD', updatedAt: 'LD' } // auto update
 });

userSchema.pre("save", async function (){
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;