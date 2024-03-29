import {useState,useContext,useEffect} from 'react'
import Footer from './Footer'
import {AccountContext} from "../../../context/AccountProvider.jsx"
import { newMessage,getMessages } from '../../../service/api'
import Message from './Message.jsx'
import "../../../style/empty/Messages.css"

const Messages = ({person,conversation}) => {
  const [value,setValue] = useState("");
  const [messages,setMessages] = useState([]);
  const [sendMessageFlag,setSendMessageFlag] = useState(false);
  const {account} = useContext(AccountContext);

  useEffect(()=>{
    const getAllMessages= async()=>{
      let id = conversation._id;
      let allmessages = await getMessages(id);
      setMessages(allmessages);
    }
    conversation && conversation._id && getAllMessages();
  },[person._id,conversation._id,sendMessageFlag]);

  const sendText = async(e)=>{
    const code = e.keyCode || e.which;
    if(code === 13){
        let message = {
          senderId : account.sub,
          recieverId : person.sub,
          conversationId : conversation._id,
          type: 'text',
          text: value
        }
        await newMessage(message);

        setSendMessageFlag(prevValue=>!prevValue);
        setValue('');
    }
  }
  return (
    <div className='Wrapper'>
        <div className='messagesComponent'>
          {
            messages && messages.map((message,idx)=>(
              <Message message={message} key={idx}/>
            ))
          }
        </div>
        <Footer 
          value={value}
          setValue={setValue}
          sendText={sendText}
        />
    </div>
  )
}

export default Messages
