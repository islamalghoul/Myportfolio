'use client'
import React from 'react'
import '@/components/style/Projects.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
export default function Projects() {
    return (<>
        <Header />
        <motion.div
      initial={{ opacity: 0 , y:15}}
      animate={{ opacity: 1,y:0 }}
      transition={{ duration: .5}}
    >
        <div className='maindevforthewholeproject'>
            <p className='Projects'>Projects</p>
            <a href='https://github.com/orgs/301-Houses/repositories'>
                <div className='maincontanerforprojects'>
                    <div className='forporojectscontent'>
                        <p className='prjectsname'>Sweet Home</p>
                        <p className='descriptionforprojects'>Our real estate website is a versatile platform for buying and renting properties. It features an interactive map where users can pinpoint their property's location, making listings more precise and attractive. Whether users are looking to sell, buy, or rent a house, our platform provides an intuitive and user-friendly experience. With an emphasis on accurate location mapping, we simplify the process of finding and showcasing properties, enhancing the real estate journey for both buyers and sellers.</p>
                    </div>
                    <img className='projectsimages'
                        src="/projectnew.jpg"
                        alt="Picture of the author"
                    />
                </div>
            </a>
            <a href='https://github.com/Snake-Game-with-AI-Project/Snack-Game-with-AI.git'>
                <div className='maincontanerforprojects'>
                    <div className='forporojectscontent'>
                        <p className='prjectsname'>Snake Game With AI</p>
                        <p className='descriptionforprojects'>create Snake game with two options, either playing by keyboard or
                            playing with camera using Artificial Intelligence and Machine Learning</p>
                    </div>
                    <img className='projectsimages'
                        src="/projectsnack.png"
                        alt="Picture of the author"
                    />
                </div>
            </a>
            <a href='https://github.com/orgs/401-Jobs/repositories'>

                <div className='maincontanerforprojects'>
                    <div className='forporojectscontent'>
                        <p className='prjectsname'>Job Portal</p>
                        <p className='descriptionforprojects'>our project  developed with React, Django, and PostgreSQL, empowers job seekers to create comprehensive CVs, compare them with peers, and easily schedule interviews with interested companies. Employers benefit from efficient candidate searches, interview scheduling, and job listing management. With robust security and scalability measures in place, our platform fosters seamless job matching and enhances the overall recruitment process</p>
                    </div>

                    <img className='projectsimage3'
                        src="/project2.png"
                        alt="Picture of the author"
                    />
                </div>
            </a>
        </div>
        </motion.div>
        <Footer />
    </>
    )
}
