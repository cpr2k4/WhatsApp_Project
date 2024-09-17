import React from 'react'
import { useContext } from 'react'
import {Search,MoreVert, PersonOff} from '@mui/icons-material'
import {defaultProfilePicture} from "../../../constants/constData.js"
import { AccountContext } from '../../../context/AccountProvider.jsx'
import "../../../style/empty/ChatHeader.css"

const ChatHeader = ({person}) => {
  const {activeUsers} = useContext(AccountContext);

  return (
    <div className='ChatHeader'>
      <img src={person.picture} alt="dp" className='ChatHeader_dp'/>
        <div>
            <p className='ChatHeader_name'>{person.name}</p>
            <p className='ChatHeader_status'>{activeUsers?.find(user=> user.sub === person.sub)?'Online':'Offline'}</p>
        </div>
        <div className='ChatHeader_icons_box'>
            <Search/>
            <MoreVert/>
        </div>
    </div>
  )
}

export default ChatHeader
