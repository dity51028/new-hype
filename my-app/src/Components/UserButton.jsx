import React from 'react'
import { TextField } from '@mui/material'
const UserButton = ({data}) => {
  return (
    <>
        <TextField required id="outlined-basic" label={data} variant="outlined" fullWidth sx={{mt:"2em",border: '1px solid rgba(0, 0, 0, 0.4)',outline:'none', // Black border with 0.4 opacity
      borderRadius: '4em', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)',outline:'none',fontWeight:'bold'}}  />
    </>
  )
}

export default UserButton