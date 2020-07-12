import React from 'react'
import './style.css'
import SocialIcons from '../SocialIcons'
import Navbar from '../Navbar'


const Header=()=>{
    return(
        <div>
            <header className='header container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto py-1'>
                <div className='d-flex justify-content-between'>
                    <div style={{marginTop:'20px'}}>
                        <strong >Logo will here</strong>
                        {/* <img src={require('../../images/logo.png')} style={{height:'80px',width:'100px'}} /> */}
                    </div>
                    <div className='mt-3'>
                  <SocialIcons />
                  </div>
                  </div>
                </div>
                </div>
                
               <Navbar />
            </header>
        </div>
    )
}

export default Header