import {useContext} from 'react'
import "../../../style/Conversation.css";
import {AccountContext} from "../../../context/AccountProvider.jsx"
import { setConversation } from '../../../service/api';

const Conversation = ({user}) => {
  const {setPerson,account} = useContext(AccountContext);

  //Current user in chat window eg.Vivek
  const getUser = async()=>{
    setPerson(user);
    await setConversation({senderId:account.sub, recieverId:user.sub})
  }

  
  return (
    <div className='conversationComponent' onClick={()=>getUser()}>
        <div>
            <img src={user.picture} alt="profile_pic" className='userImg'/>
        </div>
        <div>
              <p>{user.name}</p>
        </div>
    </div>
  )
}

export default Conversation
