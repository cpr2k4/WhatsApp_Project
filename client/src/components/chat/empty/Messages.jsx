import React from 'react'
import Footer from './Footer'
import "../../../style/empty/Messages.css"

const Messages = ({person}) => {
  return (
    <div className='Wrapper'>
        <div className='messagesComponent'>
          Messages
        </div>
        <Footer />
    </div>
  )
}

export default Messages
