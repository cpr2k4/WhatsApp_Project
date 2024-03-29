import {useState} from 'react'
import { InputBase } from '@mui/material';
import {EmojiEmotionsOutlined,AttachFile,Mic} from '@mui/icons-material';
import "../../../style/empty/Footer.css"

const Footer = ({value,setValue,sendText}) => {
  
  return (
    <div className='footerContainer'>
      <EmojiEmotionsOutlined />
      <AttachFile className='clipSticker' />
      <div className='searchFooter'>
          <InputBase placeholder='Type a message' 
            value={value}
            className='inputfieldFooter'
            onChange={(e)=>setValue(e.target.value)}
            onKeyPress={(e)=>(sendText(e))}
          />
      </div>
      <Mic />
    </div>
  )
}

export default Footer
  