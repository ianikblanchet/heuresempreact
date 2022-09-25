import React, { useState, useEffect } from 'react';
import TimePicker from 'react-time-picker';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form' ;
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export function Intervention({addInter}) {

    const [time,setTime] = useState('00:00')    
    const [intervention, setIntervention] = useState({});


useEffect(() => {
  
return () => {
    
 }
  
  
 },[] );   
    

    const Addint = ({ target }) => {
        
        
        const { name, value } = target;
    
        setIntervention((prevint) => ({
          ...prevint,
          [name]: value
        }));

        
      };
    


    const addtime = ( target ) => {
        
                
            setIntervention((prevint) => ({
                ...prevint,
                ['time']:target
              }));    
                
      };
console.log(intervention)







    
      return (
        
        
        
        
         <InputGroup className="mb-3">
            
            <Row fluid='true'>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Patient</Form.Label>
            <Form.Control onChange = {Addint} value={intervention.name} name= 'Patient' type="text" placeholder="Enter Patient id" />
            <Form.Text className="text-muted">            
            </Form.Text>
            </Form.Group> 
                       
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Intervention</Form.Label>
            <Form.Control onChange = {Addint} value={intervention.name} name= 'Interventions' type="text" placeholder="Enter Intervention description" />
            <Form.Text className="text-muted">            
            </Form.Text>          
            </Form.Group> 

            <Form.Group as={Col} controlId="formGridPassword"> 
            <Form.Label>Time</Form.Label>          
            <TimePicker onChange={addtime} value='00:00' disableClock = "true" hourPlaceholder="hh" minutePlaceholder="mm" name='time'/>
            </Form.Group> 

            <Row>
            <Button variant="primary" type="simpleQuery" onClick={() =>addInter(intervention)} >
            ajouter
            </Button>
            </Row>
            </Row>
            
            
            </InputGroup>
            
            
        
        

      );
    };