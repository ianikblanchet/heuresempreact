import React, { useState, useEffect } from 'react';
import { MultiSelect } from "react-multi-select-component";
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component';
import TimePicker from 'react-time-picker';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form' ;





export function DropDown({emp,hour,job,adEmp}) {

const [selected, setSelected] = useState([]);
const [test,setTest] = useState({})
const [time,setTime] = useState('00:00')


  
 let options=
    emp.map((item)=>{
        
        return (        
        {'label':item.name +' '+ item.surname, 'value':item.id, 'name':job , 'hour':time}
                
        )
    })
    
    
    const adTime = (target) => {
      
      const {name,value} = target
      setTime(value)
      adEmp(target)
      
        
      };
    
   
    // const adEmp = ( target) => {
    //   const {label,value,name,hour} = target
  
    //   setTest((prevtest) => ({
        
    //     ...prevtest,
    //     label,value,name,hour
    //   }));
    // };
  
    const timedes = 'time' + job

  const handleSelect=(e)=>{
    const timedes2 = 'time' + job
    const toto = timedes2
    adEmp(e,toto);
  }

  

  return (
    <div>
     <InputGroup className="mb-3"        >
     
        {/* <DropdownButton
          variant="outline-secondary"
          title="Select"
          id="input-group-dropdown-1"
          name='doc'          
          onSelect={handleChange3}
          
        >
          <Dropdown.Item   eventKey='option-1'  >Action</Dropdown.Item>
          <Dropdown.Item   eventKey="option-2"   >Another action</Dropdown.Item>
          <Dropdown.Item   eventKey="option-3"    >Something else here</Dropdown.Item>
        
        </DropdownButton > */}

        <Dropdown
        name="jop"        
        title={"Select " + job}
        // select={{value:4}}
        list={options}
        onChange={adEmp}
        searchable={["Search for employe", "No matching employe"]}
        styles= {{
        wrapper:{
            position: 'relative',
            width: '400px',
            fontsize:'1.6rem',            
            userselect: 'none'            
        }
            }}  
        />
        
        {/* <Form.Control aria-label="Text input with dropdown button"
        placeholder = 'sdvdsvddssdv'
        name='doc'
        value= {doc + ' ' + doc}  
        onChange = {handleChange2}/> */}

        

        <TimePicker onChange={handleSelect} value={time} disableClock = "true" hourPlaceholder="hh" minutePlaceholder="mm" name={timedes}/>

        </InputGroup>
        
      
    </div>
  );
};

