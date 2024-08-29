import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://pulaskipaul1:pulaski@cluster0.ly4hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
       console.log('DB connected') ;
    })
}