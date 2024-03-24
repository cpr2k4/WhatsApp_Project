import Conversation from "../model/conversation.js";

export const newConversation = async(req,res)=>{
    try{
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;

        const exist = await Conversation.findOne({members:{$all:[recieverId,senderId]}});

        if(exist){
            return res.status(200).json('Conversation already exists');
        }
        
        const newConversation = new Conversation({
            members:[senderId,recieverId]
        })

        await newConversation.save();
        return res.status(200).json('Conversation saved successfully...');
    }
    catch(err){
        return res.status(500).json(err.message);
    }   
}