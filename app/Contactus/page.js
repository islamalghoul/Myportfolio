'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import '@/components/style/Contactus.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
export default function ContactUs() {
  const form = useRef();
  let handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_k6mjk9i', 'template_m1sqlaf', form.current, '1OzkMpZvG3IBapwSY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
    <Header/>
    <motion.div
      initial={{ opacity: 0 , y:15}}
      animate={{ opacity: 1,y:0 }}
      transition={{ duration: .5}} 
    >
      <div className='forwholecontact'>
        <div>
          <p className='contact'>Contact</p>
          <p className='textforcontact'>Looking forward to hearing from you</p>
          <p className='Phoneandemail'>Phone</p>
          <p>962781327360</p>
          <p className='Phoneandemail'>
            Email
          </p>
          <p>islamalghoul1997@gmail.com</p>
        </div>

        <form ref={form} onSubmit={handleSubmit} >
  <div className='forthefullname'>
    <div>
    <label htmlFor="first_name">First Name</label>
    <input type="text" id="first_name" name="first_name" required /> 
    </div>
    <div>
    <label htmlFor="last_name">Last Name</label>
    <input type="text" id="last_name" name="last_name" required />
    </div>
  </div>
  <div className='fortheemailandsubject'>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />
    </div>
    <div>
    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" required />
    </div>
  </div>
  <div className='forthemassages'>
    <div>
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    </div>
  
  <div>
    <button type="submit" className='submit'>Submit</button>
    </div>
  </div>
</form>
</div>

    </motion.div>
    <Footer/>
    </>
  )
}
