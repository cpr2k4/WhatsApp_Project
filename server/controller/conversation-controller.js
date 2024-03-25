import Conversation from "../model/conversation.js";

export const newConversation = async(req,res)=>{
    try{
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;

        const exist = await Conversation.findOne({members:{$all:[recieverId,senderId]}});

        if(exist){
            return res.status(200).json({ success: false, message: 'Conversation already exists' });
        }
        
        const newConversation = new Conversation({
            members:[senderId,recieverId]
        })

        await newConversation.save();
        return res.status(200).json({success: true, message: 'Conversation saved successfully'});
    }
    catch(err){
        return res.status(500).json({ success: false, message: err.message });
    }   
}

export const getConversation = async(req,res)=>{
    try{
        let senderId = req.body.senderId;
        let recieverId = req.body.recieverId;

        // Ensure senderId and receiverId are provided
        // if (!senderId || !recieverId) {
        //     return res.status(400).json({ error: "senderId and receiverId are required" });
        // }

        let conversation = await Conversation.findOne({members:{$all:[recieverId,senderId]}})
        return res.status(200).json(conversation);
        // else{
        //     return res.status(404).json({failure:"memebers don't exist"})
        // }
    }
    catch(err){
        return res.status(500).json({error:err.message});
    }
}