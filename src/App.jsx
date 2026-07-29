import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import { Hero } from './components/Hero/Hero'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Services } from './components/Services/Services'
import { OurWork } from './components/OurWork'
import { Teams } from './components/Teams'
import { ContactUs } from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import { Footer } from './components/Footer'


const App =() => {
  const [theme,setTheme]= useState(localStorage.getItem("theme") || "light")
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App