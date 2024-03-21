import React from 'react'
import {Search,MoreVert} from '@mui/icons-material'
import {defaultProfilePicture} from "../../../constants/constData.js"
import "../../../style/empty/ChatHeader.css"

const ChatHeader = () => {
  return (
    <div className='ChatHeader'>
      <img src={defaultProfilePicture} alt="dp" className='ChatHeader_dp'/>
        <div>
            <p className='ChatHeader_name'>Name</p>
            <p className='ChatHeader_status'>Online Status</p>
        </div>
        <div className='ChatHeader_icons_box'>
            <Search/>
            <MoreVert/>
        </div>
    </div>
  )
}

export default ChatHeader
