import React from 'react'
import './style.css'
import Cards from '../../components/Cards'
import {FaBullhorn,FaUsers} from 'react-icons/fa';
const About = ()=>{
    return(
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-8 mx-auto text-center'>
                    <h3 className='h3'>Homestars is your one-stop technology solution for all the conventional and modern day challenges.</h3>
                    <p className='mt-3 lead'>We are enterprise web and mobile applications development company dedicated to stretch
business limit. Get next generation mobile & web apps with the latest cutting edge technology to enhance your business as you love. We create software for our clients to grow their businesses. No matter the objective,
industry, device or software platform.</p>
                </div>
            </div>
            <div className='row justify-content-center mb-5 '>
                <Cards  title='Who are we?' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaUsers size='40px'/>
                </Cards>
                <Cards  title='Mission' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaBullhorn size='40px'/>
                </Cards>
            </div>
            <div className='row mb-5'>
                <div className='col-md-8 mx-auto pt-4 pb-4 ceo-div'>
                    <div className='row'>
                         <div className='col-md-7 text-center  my-auto'>
                            <p className='m-5'>When you place your case in the hands of our lawyers and paralegals, you are placing your case in the hands of professionals who are committed to achieving the best possible outcome.</p>
                            <h4>Qadir Jilani</h4><p>CEO, Homestars</p>
                          
                        </div>
                        <div className='col-md-5'>
                            <img className='' src={require('../../images/ceo.jpg')} style={{width:'100%',height:'100%'}} />
                        </div>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About