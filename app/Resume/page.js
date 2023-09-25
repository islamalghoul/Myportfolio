'use client'
import React from 'react'
import Header from '@/components/Header'
import { motion } from 'framer-motion';
import '@/components/style/Resume.css'
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once:false,
    });
  }, [])
  return (<div >
  <Header/>
  <div data-aos="fade-up">
  <p className='Resume'>Resume</p>
    <div className='forresumeandworking'>
      
        <h3 className='workexperience'>Work <span className='experience'>Experience</span></h3>
        <div className='contentforexp'>
          
          <p className='pargraphforwork' >02/2023<span className='dash'>-</span>Present</p>
          <div className='dateforwork'>
        <h4 className='Teacher'>Teacher Assistant </h4>
        
        <p className='pargraph'>Review student's code submissions and provide feedback on areas for improvementincluding coding best practices syntax ,and style.</p>
        </div >
        </div>

      </div>
      
    <Education/>
    </div> 
    <Skills/>
    
    <Footer/>
  </div>
    
  )
}
