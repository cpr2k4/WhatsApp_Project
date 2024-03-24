import React from 'react'
import { InputBase } from '@mui/material';
import {EmojiEmotionsOutlined,AttachFile,Mic} from '@mui/icons-material';
import "../../../style/empty/Footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
      <EmojiEmotionsOutlined />
      <AttachFile className='clipSticker' />
      <div className='searchFooter'>
          <InputBase placeholder='Type a message' className='inputfieldFooter'/>
      </div>
      <Mic />
    </div>
  )
}

export default Footer
  