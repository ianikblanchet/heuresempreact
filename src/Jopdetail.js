import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import {CalendarInfo} from './calendar.js'
import {DropDown} from './dropdown.js'
import {Createjop} from './createjop.js'
import le1620 from './le1620.jpg';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export function Jopdetail(){

  
    const [data, setData] = useState();
    const [employe, setEmploye] = useState();
    const [selectInfo,setSelectInfo] = useState('test');
    const [jopinfo,setJopinfo] = useState({});
    const [creerJop,setCreerJop]  = useState('off')
    const [surgeon, setSurgeon] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});
    const [anes, setAnes] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});
    const [scrub, setScrub] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});
    const [circu, setCircu] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});
    const [recov, setRecov] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});
    const [overn, setOvern] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});
    const [respi, setRespi] = useState({id:'',username:'',name:'',surname:'',occupation:'',occupation2:'',admin:'',ENT_id:''});

console.log(selectInfo)


let surge = []
if(selectInfo.Chirur) {

surge=selectInfo.Chirur }


let horairEmpFull =[]

if (selectInfo.Horaiemp){
 horairEmpFull=selectInfo.Horaiemp }

let hor = {}
if (selectInfo.date_op){
  hor = selectInfo.Horaiemp
  console.log(hor)}


// if (selectInfo.date_op){
// Object.entries(selectInfo.Horaiemp).forEach(([key,val]) => {
// horairEmpFull.push(employe.find(emp => emp.id === parseInt(key)))

// })

// }

useEffect(() => {
  
    console.log(hor)
    console.log(employe)
    if (hor.Surgeon){setSurgeon(employe.find(emp => emp.id === hor.Surgeon))}
    if (hor.Anesthetist){setAnes(employe.find(emp => emp.id === hor.Anesthetist))}
    if (hor.Scrub_Nurse){setScrub(employe.find(emp => emp.id === hor.Scrub_Nurse))}  
    if (hor.Circulating_Nurse){setCircu(employe.find(emp => emp.id === hor.Circulating_Nurse))}
    if (hor.Recovery_Nurse){setRecov(employe.find(emp => emp.id === hor.Recovery_Nurse))}
    if (hor.Overnight_Nurse){setOvern(employe.find(emp => emp.id === hor.Overnight_Nurse))}
    if (hor.Respiratory_Therapist){setRespi(employe.find(emp => emp.id === hor.Respiratory_Therapist))}

  return () => {
    
  }
  
  
},[selectInfo,surgeon] );




    // const createJopInfo = ({ target }) => {
    //     const { name, value } = target;
    
    //     setJopinfo((prevjopinfo) => ({
    //       ...prevjopinfo,
    //       [name]: value
    //     }));
    //   };
    
    // console.log(jopinfo)
    

    const addJop = (item,test) => {
      //event.preventDefault();
      let jourj = ''
      console.log(item)
      console.log(test)
      if (selectInfo.date_op) {jourj = selectInfo.date_op}
      else {jourj = selectInfo}
      
      if (item.length != 0 && test.length != 0 ){
      const base = "http://127.0.0.1:5000/"
      const data = JSON.stringify({'date_op' : jourj,'chirur' : item, 'horaiemp' : test})
      

      fetch(base +  'addjop', {method: 'POST', headers:{'Content-type':'application/json'}, body:data}).then(response =>{
          if(response.ok) {
          return response.json()
          }
          throw new Error('Request failed!');
          }, networkError => {
          console.log(networkError.message);
          }).then(jsonResponse => { 
          
          
          alert('Surgical day created')
          window.location.reload(false)   
})}
  else{alert('Must have 1 intervention and staff')};

    };
    
    useEffect(() => {
      console.log('ok')
      const base = "http://127.0.0.1:5000/"
      fetch(base +  "jop").then(response =>{
        if(response.ok) {
          return response.json()
          
        }
        else {      
          
          alert('marche pas')
          window.location.reload(false)        
          
          }
        throw new Error('Request Failed');
      }, networkError => {
      console.log(networkError.message);  
      }).then(jsonResponse => {    
        setData(jsonResponse);                 
        console.log('ok')
      });    
    
      return () => {
        
      }
      
      
    },[] );

    useEffect(() => {
      
        const base = "http://127.0.0.1:5000/"
        fetch(base +  "emp").then(response =>{
          if(response.ok) {
            return response.json()
          }
          else {      
            
            alert('marche pas')
            window.location.reload(false)        
            
            }
          throw new Error('Request Failed');
        }, networkError => {
        console.log(networkError.message);  
        }).then(jsonResponse => {    
          setEmploye(jsonResponse);                 
          console.log('ok')
        });    
      
        return () => {
          
        }
        
        
      },[] );

      const affCreerJop = ()=> {
        const newstatut = creerJop === 'on' ? 'off' : 'on';
        setCreerJop(newstatut)
        //setAvisOn('off')
        //setOrdreOn('off')
      }



if (!employe ) {
  return <p>Loading...</p>;
}



return (

  <Tabs
  defaultActiveKey="home"
  id="uncontrolled-tab-example"
  className="mb-3"
>
<Tab eventKey="home" title="Create SD">
<Container fluid>
<Row className="justify-content-md-center">
<Col xs="auto">

        
{/* <Row><caption style={{ textAlign:"bottom"}}>Développé par/developed by IB</caption></Row> */}
<CalendarInfo data={data} setSelectInfo={setSelectInfo} setCreerJop={setCreerJop}/>
{/* <Row><DropDown emp={employe}/></Row> */}

</Col>

<Col md>
{ (horairEmpFull.length !== 0)&&(surge.length !== 0) &&  
 

<Row style={{ fontSize:"16px", textAlign:"center" }}>
  <Row style={{ borderBottom:"solid"}}> 
    <Col xs="auto"><img src={le1620}  alt="le1620" /></Col>
    <Col style={{ fontSize:"16px", textAlign:"center"}}><h1>Surgical day {selectInfo.date_op} </h1></Col>
  </Row>

    <Table striped bordered hover caption-top>
    <caption style={{captionSide: "top", fontSize:"12px", textAlign:"center"}}>Revision date: {selectInfo.date_rev} </caption>
          
          <thead >
          <tr>          
          <th colspan={7} >Staff </th>         
          </tr>
          </thead> 
          <td>{surgeon.username}</td>
          <td>{anes.username}</td>
          <td>{scrub.username}</td>
          <td>{circu.username}</td>
          <td>{recov.username}</td>
          <td>{overn.username}</td>
          <td>{respi.username}</td>
          {/* <td>{(employe.find(emp => emp.id === horairEmpFull.Surgeon)).surname}</td>          */}
          {/* {horairEmpFull.map((item)=>{            
              return ( 
                        <tr>
                        <td >{item.Surgeon}</td>
                        <td >{item.email}</td>
                        <td >{item.name}</td>
                        <td >{item.surname}</td>
                        <td >{item.occupation}</td>                         
                        </tr>                      
              )
          })}           */}
      </Table> 
  <Table striped bordered hover>
          <thead ><tr>          
          <th >Surgeries</th>         
          </tr>
          </thead>          
          {surge.map((item)=>{            
              return ( 
                        <tr>
                        <td >{item.time}</td>
                        <td >{item.Patient}</td>
                        <td >{item.Interventions}</td>                                              
                        </tr>                      
              )
          })}          
    </Table>              
         
</Row>}
<Row style={{ fontSize:"40px", textAlign:"center"}}>
{!selectInfo.date_op &&
<Col> <Button variant= 'outline-secondary' onClick={affCreerJop}>Create Surgical Day on {selectInfo}</Button> </Col>}


{ creerJop === 'on' && <Createjop emp={employe} addJop={addJop} jopinfo={jopinfo}/>}

</Row>


</Col>
</Row>
</Container>

</Tab>
<Tab eventKey="profile" title="Employe list">
<Table striped bordered hover>
          <thead ><tr>          
          <th >Staff </th>                
          </tr>
          </thead>          
          {employe.map((item)=>{            
              return ( 
                        <tr>
                        <td >{item.username}</td>
                        <td >{item.email}</td>
                        <td >{item.name}</td>
                        <td >{item.surname}</td>
                        <td >{item.occupation}</td>                        
                        </tr>                      
              )
          })}          
      </Table> 
      
</Tab>
</Tabs>

);}