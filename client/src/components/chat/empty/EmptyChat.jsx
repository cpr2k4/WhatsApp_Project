import React from 'react'
import {LockPerson} from '@mui/icons-material';
import "../../../style/empty/Empty.css"
const EmptyChat = () => {
  return (
    <div className='emptyComponent'>
      <div className='emptyStuff'>
        <img src="/empty.png" alt="empty_image" style={{width:"50%"}} />
        <p>WhatsApp Web</p>
        <p>Send and recieve messages without keeping the phone online.</p>
        <p>Use whatsapp on up to 4 linked devices and 1 phone at the same time.</p>
      </div>
      <p className="encrptPara"><LockPerson style={{marginRight:"0.3rem",fontSize:"0.6rem"}}/>Your personal messages are end-to-end encrypted</p>
    </div>
  )
}

export default EmptyChat
