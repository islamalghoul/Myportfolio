import React from 'react'
import Image from 'next/image'
import '@/components/style/Projects.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function Projects() {
    return (<>
        <Header />
        <div className='maindevforthewholeproject'>
            <p className='Projects'>Projects</p>
            <a href='https://github.com/orgs/301-Houses/repositories'>
            <div className='maincontanerforprojects'>
                <div className='forporojectscontent'>
                    <p className='prjectsname'>Sweet Home</p>
                    <p className='descriptionforprojects'>description</p>
                </div>
                <img className='projectsimages'
                    src="/projectnew.jpg"
                    alt="Picture of the author"
                />
            </div>
            </a>
            <a href='https://github.com/orgs/401-Jobs/repositories'>
            <div className='maincontanerforprojects'>
                <div className='forporojectscontent'>
                    <p className='prjectsname'>Sweet Home</p>
                    <p className='descriptionforprojects'>description</p>
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
        <Footer />
    </>
    )
}
