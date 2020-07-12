import React from 'react'
import './style.css'
import CounterCard from '../../components/CounterCard'

const Counters=()=>{
    return(
        <div className='countersMain container-fluid py-5'>
             <div className='row'>
            <CounterCard title='Happy Clients' number='100' />
            <CounterCard title='Years of Experience' number='10' />
            <CounterCard title='Successful Deliveries' number='600'  />
            </div>
        </div>
    )
}

export default Counters