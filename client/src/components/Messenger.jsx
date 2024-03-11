import React from 'react'
import LoginDialog from './account/LoginDialog'
import "../style/Messenger.css";

const Messenger = () => {
  return (
    <div className='homepage'>
      <div className='appBar'></div>
      <LoginDialog />
    </div>
  )
}

export default Messenger
