import React, { useState } from 'react'
import { styled,Box,Paper,Grid} from '@mui/material';
import CustomInput from '../Components/CustomInput';
import CustomRadio from '../Components/CustomRadio';
import '../App.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = (props) => {
const [selectedValue, setSelectedValue] = useState('Male');
const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');

const handleFirstName=(event)=>{
  
  console.log("First Name>>>",event.target.value)
  setFirstName(event.target.value)
}
const handleLastName=(event)=>{
  console.log("Last Name>>>",event.target.value)
  setLastName(event.target.value)
}

const handleChange = (event) => {
  setSelectedValue(event.target.value);
};

  return (
    <div style={{background:"#ddd"}}>
    <Box sx={{ flexGrow: 1,marginTop:10}}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
     <CustomInput
     label="First Name"
     variant="standard"
     value={firstName}
     onChange={(event)=>handleFirstName(event)}
     />
      </Grid>
      <Grid item xs={6}>
      <CustomInput
     label="Last Name"
     variant="standard"
     value={lastName}
     onChange={(event)=>handleLastName(event)}
     />
      </Grid>
      <Grid item xs={6}>
      <CustomRadio
      label="Male"
      checked={selectedValue==='Male'}
      onChange={handleChange}
      value="Male"
      />
      </Grid>
      <Grid item xs={6}>
      <CustomRadio
      label="Female"
      checked={selectedValue==='Female'}
      onChange={handleChange}
      value="Female"
      />
      </Grid>
    </Grid>
  </Box>
  </div>
  )
}

export default Home