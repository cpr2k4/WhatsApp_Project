import {useState,useContext} from 'react'
import Footer from './Footer'
import {AccountContext} from "../../../context/AccountProvider.jsx"
import { newMessage } from '../../../service/api'
import "../../../style/empty/Messages.css"

const Messages = ({person,conversation}) => {
  const [value,setValue] = useState("");
  const {account} = useContext(AccountContext);

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
    }
  }
  return (
    <div className='Wrapper'>
        <div className='messagesComponent'>
          Messages
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
