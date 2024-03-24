import {Search as SearchIcon} from '@mui/icons-material'
import { InputBase } from '@mui/material';
import "../../../style/Search.css"

const Search = ({setText}) => {
  return (
    <div className='searchComponent'>
      <div className='wrapper'>

        <div className='searchIcon'>
            <SearchIcon fontSize='small' />
        </div>

        <InputBase className="inputBase" 
          placeholder='Search or start a new chat'
          onChange={(e)=>(setText(e.target.value))}
        />

      </div>
    </div>
  )
}


export default Search
