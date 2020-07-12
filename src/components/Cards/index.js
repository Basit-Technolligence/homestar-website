import React,{useEffect} from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cards=(props)=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return(
        <div className='col-md-4 mt-4'>
        <div data-aos='fade-down' className='cardMain  mx-auto'>
            <div className='cardInner'>
           {props.children}
           <p className='cardTitle'>{props.title}</p>
           <hr/>
           <p className='cardDetail'>{props.detail}</p>
           </div>
        </div>
        </div>
    )
}

export default Cards