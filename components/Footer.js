import React from 'react'
import './style/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='phone'>
            <h3>Phone</h3>
            <p>962781327360</p>

        </div>
        <div className='email'>
        <h3>Email</h3>
        
        <p>islamalghoul1997@gmail.com</p>
        </div>
        <div className='Follow Me'>
        <h3>Follow Me</h3>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/islam-alghoul'><FontAwesomeIcon icon={faLinkedin} className='linkedinicon'/></a>
          <a href='https://github.com/islamalghoul'><FontAwesomeIcon icon={faGithub} className='githubicon' /></a>
        </div>


        </div>
        <div className='copy right'>
        <p className='copywrite'>&copy;2023 Islam alghoul</p>
        </div>
        
       
        
        
    </footer>
  )
}
