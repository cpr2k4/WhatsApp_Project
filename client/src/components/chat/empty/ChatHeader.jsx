import React from 'react'
import {Search,MoreVert, PersonOff} from '@mui/icons-material'
import {defaultProfilePicture} from "../../../constants/constData.js"
import "../../../style/empty/ChatHeader.css"

const ChatHeader = ({person}) => {
  return (
    <div className='ChatHeader'>
      <img src={person.picture} alt="dp" className='ChatHeader_dp'/>
        <div>
            <p className='ChatHeader_name'>{person.name}</p>
            <p className='ChatHeader_status'>offline</p>
        </div>
        <div className='ChatHeader_icons_box'>
            <Search/>
            <MoreVert/>
        </div>
    </div>
  )
}

export default ChatHeader
