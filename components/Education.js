'use client'
import { motion } from 'framer-motion';
import './style/Education.css'
export default function Education() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 , y:15}}
      animate={{ opacity: 1,y:0 }}
      transition={{ duration: .5}} 
    >
      <div className='line'></div>
      <div className='parentforeducation'>
      <p className='education'>
        Education
      </p>
    <div className='foralleducations'>
      <div className='infoforASACeducation'>
        <p className='ASACdate'>07/2022-01/2023</p>
        <div className='contantASAC'>
        <p className='ASAC1'>Abdulaziz Al Ghurair School Of Advanced Computing(ASAC)</p>
      <p>Intensive Sofware Development Bootcamp</p>
      </div>
      </div>
    <div>
    <div className='infoforASACeducation'>
        <p className='ASACdate'>07/2022-01/2023</p>
        <div className='contantASAC'>
        <p className='ASAC'>AL Yarmouk University</p>
      <p className='bachelor'>Bachelor's Degree</p>
      <p>Bachelor's Degree in Power Electrical Engineering </p>
     
      </div>
      </div>
      </div>
    </div>
    </div>
    </motion.div>

    </>
  )
}
