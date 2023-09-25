import React from 'react'
import './style/Main.css'

import Footer from './Footer'
export default function Main() {
  return (<>
    <div className='main'>

    <div className='forimg'></div>
    <div className='aboutme'>
        <h1>Hello</h1>
        <h4>A Bit About Me</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
        <div className='contenerForThebuttons'>
      <button className='buttonwithbackgoundYellow'>Resume</button>
      <button className='buttonwithbackgoundRed'>Projects</button>
      <button className='buttonwithbackgoundBlue'>Contact</button>

    </div>
    </div>
 
   
    </div>
    <Footer/>
    
     
     </>
  )
}
