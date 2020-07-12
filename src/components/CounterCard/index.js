import React from 'react'
import './style.css'
import CountUp from 'react-countup';

const CounterCard=(props)=>{
    return(
      
                 <div className='col-md-4'>
        
                  <div className='countNumber'><CountUp end={props.number} duration={5}/></div>
      
                  <div className='countTitle'>{props.title}</div>
                 </div>
               
             
    )
}

export default CounterCard