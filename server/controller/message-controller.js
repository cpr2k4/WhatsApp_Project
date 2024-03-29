import Message from "../model/message.js"
import Conversation from "../model/conversation.js";

export const newMessage = async(req,res)=>{
    try{
        const newMessage = new Message(req.body);

        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
        
        return res.status(200).json('Message saved in db successfully...');
    }
    catch(err){
        return res.status(500).json("Error in saving msg in db...",err.message);
    }
}

export const getMessages = async(req,res)=>{
    try{
        const messages = await Message.find({conversationId:req.params.id});
        return res.status(200).json(messages);
    }
    catch(err){
        return res.status(500).json("Error while getting msgs from db...",err.message);
    }
}
