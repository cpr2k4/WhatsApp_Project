import React from 'react'
import "../../../style/Conversation.css";
const Conversation = ({user}) => {
  return (
    <div className='conversationComponent'>
        <div>
            <img src={user.picture} alt="profile_pic" className='userImg'/>
        </div>
        <div>
            <div>
                <p>{user.name}</p>
            </div>
        </div>
    </div>
  )
}

export default Conversation
