import React from 'react'
import { MoreVert } from '@mui/icons-material'
import {Menu,MenuItem} from '@mui/material'
import "../../../style/Menu.css"

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <MoreVert  onClick={handleClick}/>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{marginTop:"0.8rem"}}
        anchorOrigin={{
            vertical:"bottom",
            horizontal:"center"
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal:'right'
        }}
      >
        <MenuItem onClick={handleClose}>New group</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default HeaderMenu
