'use client'
import React from 'react'
import './style/Skills.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once:false,
    });
  }, []);
  return (
    <div data-aos="fade-up">
    <div className='line'></div>
    <div className='perntforskills'>
        <p className='Skills'>
        Skills & Expertise
        </p>
        <div className='fortheskills'>
        <ul>
          <li>
          Git
          </li>
          <li>
          Github
          </li>
          <li>
            HTML/CSS/Javascript
          </li>
          <li>
            Reactjs/Familair with Redux
          </li>
          <li>Nextjs</li>
          <li>
            Nodejs
          </li>
          <li>
            expressjs
          </li>
          <li>Python</li>
          <li>Django</li>
          <li>SQl/Mongo</li>
          
        </ul>
        </div>
    </div>
    </div>
  )
}
