import React from 'react'
import {Search as SearchIcon} from '@mui/icons-material'
import { InputBase } from '@mui/material';
import "../../../style/Search.css"

const Search = () => {
  return (
    <div className='searchComponent'>
      <div className='wrapper'>
        <div className='searchIcon'>
            <SearchIcon fontSize='small' />
        </div>
        <InputBase className="inputBase" placeholder='Search or start a new chat' />
      </div>
    </div>
  )
}

export default Search
