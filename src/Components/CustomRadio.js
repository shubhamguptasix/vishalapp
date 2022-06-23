import React,{useState} from 'react';
import Radio from '@mui/material/Radio';

const CustomRadio=(props)=> {
//   const [selectedValue, setSelectedValue] = useState('a');

 
const {label,checked,value,onChange}=props
  return (
    <div>
      <Radio
        checked={checked}
        onChange={onChange}
        value={value}
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
       <span>{label}</span>
      
    </div>
  );
}
export default CustomRadio
