import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomInput = (props) => {

    const {label,variant,onChange}=props
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label={label} variant={variant} onChange={onChange}/>
   
  </Box>
  )
}

export default CustomInput