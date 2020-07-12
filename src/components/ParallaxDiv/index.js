import React,{useEffect} from 'react'
import './style.css'
import { Parallax, Background } from 'react-parallax';
import Aos from 'aos'
import 'aos/dist/aos.css'


const ParallaxDiv=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return(
        <Parallax bgImage={require('../../images/cover2.jpg')} strength={600} bgImageStyle={{maxWidth:'100%'}}>
            <div style={{height:'500px'}}>
                <div className='textContainer'>
                    <p data-aos='fade-up' className='bigText'>Good books don't give up all their secrets at once</p>
                    <p data-aos='fade-down' className='smallText'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
        </Parallax >
    )
}

export default ParallaxDiv