import React from 'react'
import './style.css'
import {FaArrowAltCircleRight,FaAngleRight,FaPhoneAlt,FaMailBulk,FaMapMarkerAlt} from 'react-icons/fa'
import SocialIcons from '../SocialIcons'
import { NavLink } from 'react-router-dom'

const Footer=()=>{
    return(
        <div className='mainFooter container-fluid'>
      
            <div className='topMainFooter row '>
                <div className='col-md-10 mx-auto'>
                    <div className='row'>
            <div className='firstDiv col-md-4 col-sm-12 '>
                <div className='topHeading'>LawExpert</div>
                <p>If you or your business is facing a legal challenge that calls for sound advice and skilled representation, contact us today to arrange a free consultation with an attorney.</p>
                <div className='hoverEffect'><NavLink className='hoverEffect navlink' to="/contact">Free Consultation <FaArrowAltCircleRight size='20px'/></NavLink></div>
            </div>
            <div className='secondDiv col-md-4 col-sm-12'>
                <div className='topHeading'>Quick Links</div>
                <ul>
                    <li className='hoverEffect'><NavLink className='hoverEffect navlink' to="/"><FaAngleRight/>Home</NavLink></li>
                    <li className='hoverEffect'><NavLink className='hoverEffect navlink' to="/products"><FaAngleRight/>Products</NavLink></li>
                    <li className='hoverEffect'><NavLink className='hoverEffect navlink' to="/about"><FaAngleRight/>About</NavLink></li>
                    <li className='hoverEffect'><NavLink className='hoverEffect navlink' to="/contact"><FaAngleRight/>Contact</NavLink></li>
                </ul>

            </div>
            <div className='thirdDiv col-md-4 col-sm-12'>
                <div className='topHeading'>Contact Us</div>
                <ul>
                    <li><FaPhoneAlt/> <span className='spanText hoverEffect'>+923035226823</span></li>
                    <li><FaMailBulk/> <span className='spanText hoverEffect'>pakkobra007@gmail.com</span></li>
                    <li><FaMapMarkerAlt/> <span className='spanText hoverEffect'>House # Cb-916 Rawalpindi</span> </li>
                </ul>
            </div>
            </div>
            </div>
                </div>
            <hr className='footerHr'/>
            
            <div className='bottomMainFooter row'>
                <div className='col-md-8 col-sm-12 mx-auto'>
                <div className='bottomInnerDiv'>
                <p>Copyright ©2020 All rights reserved</p>
                <SocialIcons />
                </div>
                </div>
            </div>
        
        </div>
    )
}


export default Footer