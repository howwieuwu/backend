import mongoose from "mongoose";

export const connectDB = async () => {
    try { 
        await mongoose.connect('mongodb://localhost/dbpawpaseo');
        console.log("estamos conectada a la bd")
    } catch (error) {
        console.log(error);
    }
}