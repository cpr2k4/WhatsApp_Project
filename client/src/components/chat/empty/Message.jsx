import {useContext} from 'react'
import { formatDate } from '../../../utils/common-utils.js';
import { AccountContext } from '../../../context/AccountProvider.jsx';
import "../../../style/empty/Message.css"

const Message = ({message}) => {
    let {account} = useContext(AccountContext);
  return (
    <>
        {
            account.sub === message.senderId?
            <div className='OwnMessagesWrapper'>
                <p className='messageP'>{message.text}</p>
                <p className='messageP time'>{formatDate(message.createdAt)}</p>
            </div>
            :
            <div className='RecieverMessagesWrapper'>
                <p className='messageP'>{message.text}</p>
                <p className='messageP time'>{formatDate(message.createdAt)}</p>
            </div>
        }
    </>
  )
}

export default Message
