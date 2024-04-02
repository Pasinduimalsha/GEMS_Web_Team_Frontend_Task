import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Paper component="form" 
    onSubmit={onhandleSubmit}
       sx={{ 
        p: '2px 4px',
        border:"1px solid #e3e3e3",
        borderRadius: 20,
        boxShadow: 'none',
        mr: {sm: 5}
       }}
    >
      <input className='search-bar' placeholder='search...'  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      <IconButton type="submit" sx={{ p: '10px',color:"red" }} aria-label="search">
        <SearchIcon  />
      </IconButton>
     
    </Paper>
  )
}

export default SearchBar