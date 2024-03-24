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
        console.log(response);
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