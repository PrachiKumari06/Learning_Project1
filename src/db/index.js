import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"; // ✅ add .js extension
const connectDB=async()=>{
    try{
const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n db connected ${connectionInstance.connection.host}`);
}
    
    catch(error){
        console.log("Error",error)
      process.exit(1)
    }
}
export default connectDB;