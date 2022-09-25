import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form' ;
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import TimePicker from 'react-time-picker';
import {DropDown} from './dropdown.js'
import {Intervention} from './intervention.js'


export function Createjop({emp,addJop,jopinfo}) {

const [item, setItem] = useState([]);
const [test,setTest] = useState()
const [time,setTime] = useState()
const [jop,setJop] = useState();
const [doc,setDoc] = useState();
const [drop,setDrop] = useState({
    doc:"",
    hour:""
});

console.log(item)

// useEffect(() => {
  

// return () => {
    
//  }
  
  
//  },[] );   




      const handleChange2 = (e) => {
        const value = e.target.value;
    
        setDrop({
            ...drop,
            [e.target.name]:value
        });
          
      }; 

      const handleChange3 = (e) => {
        
    
        setDoc(e)
          
      }; 



      const handleSubmit2 = (event) => {
        event.preventDefault();
        // setJopinfo((prevjopinfo) => ({
        //     ...prevjopinfo,
        //     docname: drop
        //   }));
    };

    const adEmp = (target,e) => {
      
    if (target.name) {
    const {name,value} = target
  
    setTest((prevtest) => ({        
       ...prevtest,
      [name]:value
     }));}

     else {
      
      setTest((prevtest) => ({        
        ...prevtest,
       [e]:target
      }))}
          
      
    };

   
    const adNurse1 = (target) => {
      
      if (target.name) {
      const {name,value} = target
    
      setTest((prevtest) => ({        
         ...prevtest,
        [name]:value
       }));}
  
       else {
        
        setTest((prevtest) => ({        
          ...prevtest,
         ['timenurse1']:target
        }))}
        
        
      };

      const addInter = (e) => {
        //e.preventDefault()
        console.log(e)
        setItem ((previtem)=>{
           return[...previtem,e];

        })
       }     
      


console.log(test)    
//console.log(jopinfo)


    return (
    <div> 
        
    <h1>{item.map((item)=>{            
              return ( 
                        
                      <p> {item.Patient} {item.Interventions}  {item.time}</p>
                                                                    
                                              
              )
          })} </h1>
    <Intervention addInter={addInter}/>
        <Form >
            {/* <Form.Group className="mb-3" controlId="formNomUsager">
            <Form.Label>Nom d'usager</Form.Label>
            <Form.Control onChange = {createJopInfo} value={jopinfo.username || ''} name= 'username' type="text" placeholder="Entre le nom d'usager" />
            <Form.Text className="text-muted">            
            </Form.Text>
            </Form.Group>

            <Form.Select onChange = {createJopInfo} value= 'defaultValue' name= 'test' placeholder="Entre le nom d'usager" >
            
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>            
            </Form.Select>
            

            <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control onChange = {createJopInfo} value={jopinfo.password || ''} name= 'password' type="password" placeholder="Mot de passe" />
            </Form.Group>  */}

        
        
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
        <h1>Choose your staff</h1>
        <DropDown emp={emp}  job='Surgeon' adEmp={adEmp} />
        <DropDown emp={emp}  job='Anesthetist' adEmp={adEmp} />
        <DropDown emp={emp}  job='Scrub_Nurse' adEmp={adEmp} />
        <DropDown emp={emp}  job='Circulating_Nurse' adEmp={adEmp} />
        <DropDown emp={emp}  job='Recovery_Nurse' adEmp={adEmp} />
        <DropDown emp={emp}  job='Overnight_Nurse' adEmp={adEmp} />
        <DropDown emp={emp}  job='Respiratory_Therapist' adEmp={adEmp} />
        {/* <Form.Control aria-label="Text input with dropdown button"
        placeholder = 'sdvdsvddssdv'
        name='doc'
        value= {doc + ' ' + doc}  
        onChange = {handleChange2}/> */}

        

        {/* <TimePicker onChange={setTime} value={time} disableClock = "true" hourPlaceholder="hh" minutePlaceholder="mm"  /> */}

        
        
        
        </Form>
        <Button variant="primary" type="simpleQuery" onClick={() =>addJop(item,test)} >
        addjop
        </Button>
        </div>
    ) ;
}