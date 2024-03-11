import React from 'react'
import {Dialog,List,ListItem, Typography} from '@mui/material';
import {qrCodeImage} from "../../constants/constData.js"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import "../../style/LoginDialog.css";

const dialogStyle = {
  height:"96%",
  maxHeight:"98%",
  marginTop:"12%",
  width:"60%",
  maxWidth:"100%",
  boxShadow:"none",
  overflow:"hidden"
}
const LoginDialog = () => {

  //googleLogin
  const onLoginSuccess = (res)=>{
    const decodedInfo = jwtDecode(res.credential);
    console.log(decodedInfo);
  }
  const onLoginError = (res)=>{
    console.log(res);
  }

  return (
    <Dialog
      open={true}
      PaperProps={{sx:dialogStyle}}>
        
        <div className='Component'>
          <div className='left'>
            <p className="title">To use WhatsApp on your computer:</p>
            <List>
              <ListItem>1.Open Whatsapp on your computer:</ListItem>
              <ListItem>2.Tap Menu: Settings and select WhatsApp Web</ListItem>
              <ListItem>3.Point Your phone on this screen to capture the code</ListItem>
            </List>
          </div>

          <div className='right'>
            <img src={qrCodeImage} alt="qrCodeImage_img"/>
            <div className='googleSignInBox'>
              <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
              />
            </div>
          </div>

      </div>

      </Dialog>
  )
}

export default LoginDialog
