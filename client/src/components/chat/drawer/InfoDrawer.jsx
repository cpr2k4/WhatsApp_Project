import React from 'react'
import { Drawer } from '@mui/material'
import {ArrowBack} from '@mui/icons-material';
import "../../../style/InfoDrawer.css"

const InfoDrawer = ({open,setOpen}) => {
  return (
    <>
      <Drawer
       open={open} 
       onClose={()=>setOpen(false)}
       PaperProps={{sx:{width:"39.6%"}}}
        sx={{zIndex:"1500"}}>
         
         <div className='drawerHeader'>
            <ArrowBack onClick={()=>setOpen(false)} className='arrow' style={{cursor: "pointer"}} />
            <div style={{fontSize:"1.2rem"}}>Profile</div>
         </div>
         <div>

         </div>
      </Drawer>
    </>
  )
}

export default InfoDrawer
