import {useContext} from 'react'
import { AccountContext } from '../../context/AccountProvider';
import {Edit}from '@mui/icons-material';
import "../../../style/Profile.css";

const Profile = () => {
    const {account} = useContext(AccountContext);
  return (
    <>
      <div className='DPContainer'>
        <img className="profilePicDrawer" src={account.picture} alt="acc_pic" />
      </div>
      <div className='profileBox'>
        <p className='greenTitle'>Your name</p>
        <p className='profileStuff'>{account.name} <Edit fontSize='small' className='pen'/></p>
      </div>
      <div>
        <p className='staticText'>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
      </div>
      <div className='profileBox'>
        <p className='greenTitle'>About</p>
        <p className='profileStuff'>Focused <Edit fontSize='small' className='pen'/></p>
      </div>
    </>
  )
}

export default Profile
