import {useContext} from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import "../../../style/empty/ChatBox.css"

const ChatBox = () => {
  const {person} = useContext(AccountContext)
  return (
    <div className='ChatBox'>
        <ChatHeader person={person}/>
        <Messages person={person}/>
    </div>
  )
}

export default ChatBox
