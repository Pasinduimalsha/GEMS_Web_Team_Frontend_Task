import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import  logo  from '../Image/Picture2.jpg';
import { SearchBar } from '.';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#3f2626', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{display:'flex',alignItems:"center"}}>
     <img src={logo} alt="logo" width={45}/>
    </Link>
     <SearchBar />
  </Stack>
);

export default Navbar