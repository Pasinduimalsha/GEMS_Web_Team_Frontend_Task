import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../Utils/Constants';
// import { useNavigate } from 'react-router-dom';


const SideBar = ({selectedCategory,setSelectedCategory}) => {
  // const navigate = useNavigate();

  // navigate(`/${selectedCategory}`);
  return (
    <Stack
     direction="row"
     sx={{
      overflowY: "auto",
      flexDirection: {md: "column"},
      height: {sx: 'auto', md: '100%'},
      backgroundColor: "inherit",
      
     }}
    >{
      categories.map((category, index) => (
        <button onClick={()=> setSelectedCategory(category.name)} className='category-btn'
          key={index}
          style={{
            backgroundColor: category.name === selectedCategory && '#FC1503',
            color: 'white',
          }}
        >
          <span style={{color: category.name === selectedCategory ? 'white': 'red', marginRight: '10px'}}>{category.icon}</span>
          <span>{category.name}</span>
        </button>   
      ))
    }</Stack>
  )
}

export default SideBar
