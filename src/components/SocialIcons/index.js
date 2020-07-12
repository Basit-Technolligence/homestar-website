import React from 'react'
import './style.css'
import { FaFacebookF,FaInstagram,FaTwitter,FaGoogle } from 'react-icons/fa';



const SocialIcons=()=>{
    return(
        <div className='socialIcons'>
        <ul>
            <li><FaFacebookF size='15px'/></li>
            <li><FaInstagram  size='15px'/></li>
            <li><FaTwitter size='15px'/></li>
            <li><FaGoogle size='15px'/></li>
        </ul>
    </div>
    )
}

export default SocialIcons