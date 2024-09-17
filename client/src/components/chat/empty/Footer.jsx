import {useState,useEffect} from 'react'
import { InputBase } from '@mui/material';
import {EmojiEmotionsOutlined,AttachFile,Mic} from '@mui/icons-material';
import "../../../style/empty/Footer.css"
import {uploadFile} from "../../../service/api.js"

const Footer = ({value,setValue,sendText,file,setFile}) => {

  useEffect(()=>{
    const getImage = async()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        //chatgpt
        try {
          await uploadFile(data);
          console.log("File uploaded successfully");
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    }
    getImage();
  },[file])

  const onFileChange = (e)=>{
    console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }

  return (
    <div className='footerContainer'>
      <EmojiEmotionsOutlined />

      <label htmlFor="chooseFile">
        <AttachFile className='clipSticker' />
      </label>
      <input 
        id='chooseFile'
        type="file" 
        style={{display:"none"}}
        onChange={onFileChange}
      />

      <div className='searchFooter'>
          <InputBase placeholder='Type a message' 
            value={value}
            className='inputfieldFooter'
            onChange={(e)=>setValue(e.target.value)}
            onKeyPress={(e)=>(sendText(e))}
          />
      </div>
      <Mic />
    </div>
  )
}

export default Footer
  