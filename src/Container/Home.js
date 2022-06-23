import React from 'react'
import { styled,Box,Paper,Grid} from '@mui/material';
import CustomInput from '../Components/CustomInput';
import '../App.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = (props) => {



const handleFirstName=(event)=>{
  
  console.log("First Name>>>",event.target.value)
}
const handleLastName=(event)=>{
  console.log("Last Name>>>",event.target.value)
}
  return (
    <div style={{background:"#ddd"}}>
    <Box sx={{ flexGrow: 1,marginTop:10}}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
     <CustomInput
     label="First Name"
     variant="standard"
     onChange={(event)=>handleFirstName(event)}
     />
      </Grid>
      <Grid item xs={6}>
      <CustomInput
     label="Last Name"
     variant="standard"
     onChange={(event)=>handleLastName(event)}
     />
      </Grid>
      <Grid item xs={6}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  </Box>
  </div>
  )
}

export default Home