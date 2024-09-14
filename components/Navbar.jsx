import React from 'react'
import RegisterBtn from './RegisterBtn'

function Navbar() {
  return (
    <div className='h-[4.5rem] w-max-full flex justify-between rounded-[10px] border-[#6A9C89] border-2 p-2 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 lg:mx-40 lg:my-5'>
      <div className='text-md text-white flex items-center font-[Tasa-SemiBold]'>
        <span className='lg:mr-5 lg:ml-5'>Home</span>
        <span className='lg:mr-5'>Events</span>
        <span className='lg:mr-5'>Gallery</span>
        <span className='lg:mr-5'>Partners</span>
        <span>Contact Us</span>
      </div>

      <div className='flex justify-center max-w-[10rem]'>
        <img src="/Logo/iemLogo.webp" alt="iemLogo" className='h-full lg:mr-7' />
        <img src="/Logo/innovacionLogo.webp" alt="InnovacionLogo" className='h-full' />
      </div>

      <RegisterBtn />
    </div>
  )
}

export default Navbar