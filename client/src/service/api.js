import axios from "axios";

const URL = 'http://localhost:8080';

export const addUser = async(data)=>{
    try{
        await axios.post(`${URL}/add`,data);
    }
    catch(err){
        console.log("can't add user in db...",err);
    }
}

export const getUsers = async()=>{
    try{
        let response = await axios.get(`${URL}/users`);
        return response.data;
    }
    catch(err){
        console.log("Error while calling users api...",err.message);
    }
}

export const setConversation = async(data)=>{
    try{
        await axios.post(`${URL}/conversation/add`,data);
    }
    catch(err){
        console.log("Error while calling users api...",err.message);
    }
}

export const getConversation = async(data) =>{
    try{
        //we are getting conversation 
        //but as we are sending senderId and recieverId hence axois.post()
        let response =  await axios.post(`${URL}/conversation/get`,data);
        return response.data;
    }
    catch(err){
        console.log("Error while calling getConversation api...",err.message);
    }   
}

export const newMessage = async(data)=>{
    try{
        axios.post(`${URL}/message/add`,data);
    }
    catch(err){
        console.log("Error while calling newMessage api...",err.message);
    }
}

export const getMessages = async(id)=>{
    try{
        let response = await axios.get(`${URL}/messages/get/${id}`);
        return response.data;
    }
    catch(err){
        console.log("Error while calling getMessages api...",err.message);
    }
}