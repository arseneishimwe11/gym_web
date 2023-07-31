import React from 'react'
import LandingPage from './landingPage'
import DemoPage from './demo'
import Program from './program'
import About from './about'
import Price from './price'
import Footer from './footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <LandingPage/>
      <DemoPage/>
      <Program/>
      <About/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default Home
