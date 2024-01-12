import React, { useRef } from 'react';
import MapComponent from './mapComponent'; 
import './Home.css'

function Home(){

    const ref = useRef(null)

    const scrollDown = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
  }
    return(
    <div>
        <div className='hero-container'>
            <h1>Real Time Traffic Data</h1>    
            <p>Keep an eye on your safety first</p>
            <div className='hero-btns'><button onClick={scrollDown}>Explore</button></div>
        </div>
        <div ref={ref}><MapComponent /></div>
    </div>
    )
}

export default Home;
