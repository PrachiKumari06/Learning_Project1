

import dotenv from "dotenv";  // ✅ import from package, not ./env
//import mongoose from "mongoose";
//import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";

// ✅ Load .env file from project root
dotenv.config({
    path:'./env'
});

connectDB()
 .then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running on ${process.env.PORT}`);
    })
 })
 .catch((err)=>{
    console.log("MONGO DB connection failed",err);
 })