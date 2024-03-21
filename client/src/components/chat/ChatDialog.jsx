import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './empty/EmptyChat'
import ChatBox from './empty/ChatBox'
import "../../style/ChatDialog.css"

const ChatDialog = () => {

    return (
      <div className='chatDialog'>
        <div className='leftComponent'>
            <Menu />
        </div>
        <div className='rightComponent'>
            {
            //  <EmptyChat/>
             <ChatBox />
            }

        </div>
      </div>
    )
}

export default ChatDialog
