import React from 'react'

const Trainer = (props) => {
  return (
    <div className='bg-semi-black w-[30%] p-5 rounded-[10px] mb-4'>
      <img src={props.image} alt="Trainer Image" className='w-[50vw] h-[50vh] rounded'/>
      <p className='font-fugaz text-center text-[25px] py-2'>{props.name}</p>
      <p className='font-convergence'>{props.desc}</p>
      <button className='bg-page-orange py-[3px] px-[25px] rounded-[5px] text-[20px] mx-12 mt-5 font-bold'>Choose {props.gender}</button>
    </div>
  )
}

export default Trainer
