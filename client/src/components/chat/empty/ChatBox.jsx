import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import "../../../style/empty/ChatBox.css"
const ChatBox = () => {
  return (
    <div className='ChatBox'>
        <ChatHeader />
        <Messages />
    </div>
  )
}

export default ChatBox
