import React from 'react'
import CRM from './components/CRM/crm.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'

const App = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <CRM/>
    </div>
  )
}

export default App
