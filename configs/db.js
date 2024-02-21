import mongoose from "mongoose";

const connectToDB = async () =>{
    try{
        if(mongoose.connections[0].readyState){
            return true
        }else{
            await mongoose.connect("mongodb://root:NKDmArUw8mCiPQgE0PRa8Xud@mostafa-momeni:27017/my-app?authSource=admin")
        }
    }catch (err){
        console.log("db connection error =======>>>" , err)
    }
}

export default connectToDB;