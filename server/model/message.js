import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    conversationId:{
        type:String,
    },
    senderId:{
        type:String
    },
    reciverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},
{
    timestamps:true
})

const Message = new mongoose.model("Message",messageSchema);

export default Message;

