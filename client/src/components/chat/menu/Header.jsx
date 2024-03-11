import {useContext}  from 'react'
import {AccountContext} from "../../context/AccountProvider";
import {MoreVert,AddComment} from '@mui/icons-material';
import {GroupsOutlined} from '@mui/icons-material';
import "../../../style/Menu.css"

const Header = () => {
    const {account} = useContext(AccountContext);

  return (
    <div className='header'>
      <img className="profilePic" src={account.picture} alt="profile_pic"/>
      <div className='buttonsBar'> 
        <GroupsOutlined sx={{fontSize:"28px",color:"grey"}}/>
        <img className="status" src="/story.png" alt="story_icon_img" />
        <img src="/channel.png" alt="channel_log_img" width={32} height={32}/>
        <AddComment sx={{fontSize:"1.40rem"}}/>
        <MoreVert/>
      </div>
    </div>
  )
}

export default Header
