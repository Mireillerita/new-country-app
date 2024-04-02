import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='w-full bg-[url(src/images/head_background.jpeg)] bg-no-repeat bg-cover md:h-[400px]'> 
  <NavBar />
  <div className='text-white text-center px-4 py-10 md:py-20'> 
    <h1 className='font-bold text-4xl md:text-5xl'>Country API App</h1> 
    <p className='text-lg md:text-xl mt-4 md:mt-6 px-2 md:px-0'>This is a simple app that allows you to search for countries and continents using the API.</p> 
    <div className="flex justify-center mt-6">
      <input className='bg-white h-12 w-3/4 md:w-[42%] sm:w-[50%]'placeholder='Search country by name' /> 
    </div>
  </div>
</div>
  )
}

export default Header