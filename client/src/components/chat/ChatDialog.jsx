import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './empty/EmptyChat'
import "../../style/ChatDialog.css"

const ChatDialog = () => {

    return (
      <div className='chatDialog'>
        
        <div className='leftComponent'>
            <Menu />
        </div>
        <div className='rightComponent'>
            <EmptyChat />
        </div>

      </div>
    )
}

export default ChatDialog
