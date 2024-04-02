import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-4 md:px-6 md:py-4 bg-gray-100 h-16 md:h-24 items-center'> 
    <div className='flex flex-row items-center mx-24'>
      <img src='./src/images/logoipsum-296 (4).svg' alt='Logo' className='w-8 h-auto md:w-auto' />
      <h1 className='text-blue-500 text-lg md:text-xl font-extrabold ml-2 md:ml-4 sm:text-xl'>Logoipsum</h1> 
    </div>
    <p className='text-sm mx-24 md:text-base ml-0 md:ml-24'>Copyright © 2024. All rights reserved.</p> 
  </div>
  )
}

export default Footer;