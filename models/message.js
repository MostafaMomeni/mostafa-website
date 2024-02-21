import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    },
})

const messageModel = mongoose.models.Message || mongoose.model("Message" , schema)

export default messageModel