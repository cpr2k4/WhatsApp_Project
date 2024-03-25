import {useState,useContext,useEffect} from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider.jsx'
import { getConversation } from '../../../service/api.js'
import "../../../style/empty/ChatBox.css"

const ChatBox = () => {
  //get all messages between 2 people
  const {account,person} = useContext(AccountContext);
  const [conversation,setConversation] = useState({});

  useEffect(()=>{
    const getConversationDetails= async()=>{
      let data = await getConversation({senderId : account.sub,recieverId : person.sub})
      setConversation(data);
    }
    getConversationDetails();
  },[person.sub]) 

  return (
    <div className='ChatBox'>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </div>
  )
}

export default ChatBox
