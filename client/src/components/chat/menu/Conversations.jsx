import React, { useState,useEffect,useContext } from 'react'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';
import {Divider} from '@mui/material'
import "../../../style/AllConversations.css";

const Conversations = () => {
    const {account} = useContext(AccountContext); 

    //all users 
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers();
            setUsers(response);
        }   
        fetchData();
    },[])
  
  return (
    <div className='allconversationsComponent'>  
        {
          users.map((user,idx)=>(
            //don't show the logged-in user in the chat users
            user.sub!== account.sub && 
            <>
              <Conversation user={user} key={idx}/>
              <Divider className='userDivider'/>
            </>
          ))
        }
    </div>
  )
}

export default Conversations
