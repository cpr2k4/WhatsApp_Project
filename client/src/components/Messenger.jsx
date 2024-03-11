import { useContext } from 'react';
import LoginDialog from './account/LoginDialog'
import ChatDialog from './chat/ChatDialog';
import {AccountContext} from './context/AccountProvider';
import "../style/Messenger.css";

const Messenger = () => {
  const {account} = useContext(AccountContext);

  return (
    <div className='homepage'>
      {
        account?
          <ChatDialog />
        :
        <>
          <div className='appBar'></div>
          <LoginDialog />
        </>
      }
      
    </div>
  )
}

export default Messenger
