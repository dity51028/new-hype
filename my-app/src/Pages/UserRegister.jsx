import Grid from '@mui/material/Grid'
import {Box,Avatar,Button,Typography,Stack,ThemeProvider,createTheme} from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import bgimg from '../assets/bg1.jpg'
import React, { useState } from 'react'
import UserButton from '../components/UserButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';




const boxStyle ={
    position:'absolute',
    height:'75%',
    width:'50%',
   
    left:'30%',
    top:'10%',
  
};
const center={
    position:'absolute',
    top:'5%',
    left:"40%"
}

const darkTheme=createTheme({
  palette:{
    mode:'dark',
  },
})

const UserRegister = () => {

  const [details,setDetails] = useState({
        name:"",
        PhoneNo:"",
        DOB:"",
        BIO:"",
        AddLink:""
  })

const handleChange = (e)=>{
        const [name,value] = e.target
        setDetails((prev)=>{
          return{...prev,[name]:value}
        }
        )
};

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(details)
}


  return (
    <>
    <div style={{
        backgroundImage:`url(${bgimg})`,
        backgroundSize:'cover',
        height:'100vh',
        minHeight:'500px',
        
    }}>

        <Box sx={boxStyle}>
         <Grid >
            <Box sx={center}>
            <Avatar sx={{ bgcolor: deepOrange[900],height:'4rem',width:'9rem',fontFamily:'bolder', fontSize:'30px'}} variant='rounded'>H!! Pitch </Avatar>
            <Typography component="h1" variant='h3' mt={2}  color={'Black'}>User's Info</Typography>
            
            </Box>
         </Grid>
        <ThemeProvider theme={darkTheme}>
          <Grid container >
            <Grid item sx={{ml:'3em',mr:'3em', mt:'14em'}} >
              <UserButton data={"Name"} name='name' onChange={handleChange}/>
              <UserButton data={"DOB"}  name='DOB' onChange={handleChange}/>
              <UserButton data={"BIO"}  name='BIO' onChange={handleChange}/>
              <UserButton data={"Phone No"}  name='PhoneNo' onChange={handleChange}/>
              <UserButton  data={"Additional links"}  name='AddLink' onChange={handleChange}/>
              <Stack direction="row" spacing={4} mt="2em" alignItems='center'>
              <Typography sx={{mt:"2em",border: '1px solid rgba(0, 0, 0, 0.4)',
                              outline:'none', 
                              borderRadius: '.1em', 
                              backgroundColor: 'rgba(0, 0, 0, 0.6)',
                              outline:'none',fontSize:'20px',color:'white'}} >  
                              Profile video :</Typography>
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                  Upload file
              </Button>
              </Stack>
              <Button  variant="contained" sx={{borderRadius:'15px',ml:'45%',mt:'10%'}}>Submit </Button>
              
           </Grid>
         </Grid>
         </ThemeProvider>
         
         
        </Box>
    </div>
    
    </>
  )
}

export default UserRegister