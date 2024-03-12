import {useContext, useState}  from 'react'
import {AccountContext} from "../../context/AccountProvider";
import {AddComment} from '@mui/icons-material';
import {GroupsOutlined} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../drawer/InfoDrawer';
import "../../../style/Menu.css"

const Header = () => {

  const {account} = useContext(AccountContext);
  const [open,setOpen] = useState(false);
  return (
    <>
    <div className='header'>
      <img className="profilePic" onClick={()=>setOpen(true)} src={account.picture} alt="profile_pic"/>
      <div className='buttonsBar'> 
        <GroupsOutlined sx={{fontSize:"28px",color:"grey"}}/>
        <img className="status" src="/story.png" alt="story_icon_img" />
        <img src="/channel.png" alt="channel_log_img" width={32} height={32}/>
        <AddComment sx={{fontSize:"1.40rem"}}/>
        <HeaderMenu />
      </div>
    </div>
    <InfoDrawer open={open} setOpen={setOpen}/>
    </>
  )
}

export default Header
