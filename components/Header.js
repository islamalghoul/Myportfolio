import React from 'react'
import Link from 'next/link'
import './style/Header.css'
export default function Header() {
  return (
    <div className='parentOfHeader'>
      <div className='child1'>
        <Link href='/'><div className='circal'></div></Link>
      <Link href="/" className='islam'>Islam alghoul </Link>
      <p className='developer'>developer</p>
      
      </div>
      <div className='child2'>
      <Link className='link' href="/Resume/">Resume</Link>
      <Link className='link'  href="/Projects/">Projects </Link>
      <Link className='link'  href="/about">Contact</Link>
      </div>
  </div>
  )
}
