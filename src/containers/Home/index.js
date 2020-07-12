import React from 'react'
import './style.css'
import ParallaxDiv from '../../components/ParallaxDiv'
import MarketPlaces from '../../components/MarketPlaces'
import Cards from '../../components/Cards'
import Counters from '../Counters'
import { FaFacebookF,FaInstagram,FaAmazon,FaLandmark,FaBuilding,FaMosque } from 'react-icons/fa';

const Home=()=>{
    return(
        <div>
      
            <ParallaxDiv />
            <MarketPlaces h1='MARKET PLACES' h2='Sell'>
                 <Cards  title='Amazon' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaAmazon size='40px'/>
                </Cards>
                <Cards  title='Facebook' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaFacebookF size='40px'/>
                </Cards>
                <Cards  title='Instagram' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaInstagram size='40px'/>
                </Cards>
            </MarketPlaces>
            <Counters />
            <MarketPlaces  h2='Exist'>
                <Cards  title='USA' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaLandmark size='40px'/>
                </Cards>
                <Cards  title='UAE' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaBuilding size='40px'/>
                </Cards>
                <Cards  title='KSA' detail='Business law deals with the creation of new businesses and the issues that arise as existing.'>
                     <FaMosque size='40px'/>
                </Cards>
            </MarketPlaces>
      
            
        </div>
        
    )
}

export default Home