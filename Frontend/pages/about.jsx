import React from 'react'
import stand from "../src/assets/stand.png"
import Trainer from '../src/components/trainer'
import maleTrainer from "../src/assets/TRAINER.jpg"
import womanTrainer from "../src/assets/woman trainer.jpg"
const About = () => {
    const maleCoachDesc = ["We provide many services of weight lifting and more others.We provide many services of "]
  return (
    <div className=' bg-landing-bg pt-16 text-white '>
      <div className='ml-10'>
        <p className='uppercase text-[40px] text-transparent dream-body font-fugaz ml-20'>BOOST YOUR ENERGY</p>
        <p className='relative left-[500px] top-[-10px]'>with</p>
        <p className='ml-[600px] uppercase text-[40px] font-bold font-fugaz mt-[-30px] inset-3'>PLATINUM GYM</p>
      </div>
      <div>
        <img src={stand} alt="Standing demo" className='mx-[400px]'/>
      </div>
      <div>
        <p className='uppercase text-[40px] text-transparent empower-txt font-fugaz text-center pb-[20px]' >Our Skilled team</p>
        <div className='flex gap-10 ml-[150px] relative left-[-50px]'>
            <Trainer image={maleTrainer} name="Coach Gael" desc={maleCoachDesc} gender="Him"/>
            <Trainer image={womanTrainer} name="Coach Mary" desc={maleCoachDesc} gender="Her"/>
            <Trainer image={womanTrainer} name="Coach Mary" desc={maleCoachDesc} gender= "Her"/>
        </div>
      </div>
    </div>
  )
}

export default About
