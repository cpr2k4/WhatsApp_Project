import axios from "axios";

const URL = '';

export const addUser = async(data)=>{
    try{
        await axios.post(`${URL}`,data);
    }
    catch(err){
        console.log("can't add user in db...",err);
    }
}
