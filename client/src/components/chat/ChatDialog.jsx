import {useContext} from 'react'
import Menu from './menu/Menu'
import EmptyChat from './empty/EmptyChat'
import ChatBox from './empty/ChatBox'
import { AccountContext } from '../../context/AccountProvider'
import "../../style/ChatDialog.css"

const ChatDialog = () => {
    const {person} = useContext(AccountContext);

    return (
      <div className='chatDialog'>
        <div className='leftComponent'>
            <Menu />
        </div>
        <div className='rightComponent'>
            {/* {
            //  <EmptyChat/>
             <ChatBox />
            } */}
            {Object.keys(person).length? <ChatBox/>: <EmptyChat/>}
        </div>
      </div>
    )
}

export default ChatDialog
