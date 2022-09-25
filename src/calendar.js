import React, { useState,useEffect } from 'react';
import {Calendar} from "react-multi-date-picker";



export function CalendarInfo({data,setSelectInfo,setCreerJop}) {

    const [value, setValue] = useState('');
    //const [value, setValue] = useState( (new Date()).getFullYear() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getDate() );
    //const [value, setValue] = useState( new Date().toLocaleDateString('en-CA'));
    const [selectedEvent, setSelectedEvent] = useState([])
    
  
    useEffect(() => {
    if(data.find(d => d.date_op === value)){
    setSelectInfo(data.find(d => d.date_op === value))
    setCreerJop('off')}
    else{setSelectInfo(value)
      setCreerJop('off')}

      return () => {
        
      }
      
      
    },[value] );


    return (        
        
        <Calendar 
        mapDays={({ date, today, selectedDate, currentMonth, isSameDate }) => {
            let props = {}
            let jop = data           
            
            let dateb = jop.find(d => d.date_op === date.toString())
            let datec=''
            if (dateb){datec= dateb.date_op}           
               
            
            props.style = {
              borderRadius: "3px",
              backgroundColor: date.month.index === currentMonth.index ? "#ccc" : ""
            }
        
            if (date.toString() === datec) props.style ={
              ...props.style,
              color: "green",
              fontWeight: "bold",
              border: "1px solid green"
            }
            if (isSameDate(date, selectedDate)) props.style = {
              ...props.style,
              color: "#0074d9",
              backgroundColor: "#a5a5a5",
              fontWeight: "bold",
              border: "1px solid #777"
              
            }
            
            
            //console.log(selectedDate)
            //if(selectedDate){
              //console.log(jop)
             // if (selectedDate.toString() === (jop.find(d => d.date_op === selectedDate.toString())).date_op){console.log((jop.find(d => d.date_op === selectedDate.toString())).date_op)}
              
              //console.log(test3)
            //}
            
            //if (selectedDate) {setValue(selectedDate.unix)}
            if (selectedDate) {setValue(selectedDate.toString())}
            if (!selectedDate) {setValue(today.toString())}
            return props
    

          }} >
              
    
        </Calendar > 
        
        
    
        )
    
    }