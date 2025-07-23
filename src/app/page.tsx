import Navbar from '@/components/Navbar'
import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
const Portfolio = () => {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Portfolio